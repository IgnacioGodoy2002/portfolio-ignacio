import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hasFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const INTERACTIVE = 'a, button, [role="tab"], summary, label, select, .game-cover-button';
const TEXT_INPUT = 'input, textarea, [contenteditable="true"]';

/**
 * Cursor animado: un punto que sigue al mouse al instante y un anillo que lo
 * persigue con inercia. Sobre links y botones el anillo crece y se rellena;
 * sobre las portadas de los juegos muestra "Ver". Solo se activa con mouse
 * (no en pantallas táctiles) y nunca con "reducir movimiento" activado.
 */
export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    let mouseX = -100, mouseY = -100, ringX = -100, ringY = -100, frame = 0, visible = false;

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const onMove = event => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) { visible = true; ringX = mouseX; ringY = mouseY; root.classList.add('cursor-visible'); }
      const target = event.target instanceof Element ? event.target : null;
      const overText = target?.closest(TEXT_INPUT);
      const interactive = !overText && target?.closest(INTERACTIVE);
      const cover = target?.closest('.game-cover-button, .hero-project--cover');
      root.classList.toggle('cursor-hover', Boolean(interactive));
      root.classList.toggle('cursor-text', Boolean(overText));
      root.classList.toggle('cursor-view', Boolean(cover));
      label.textContent = cover ? 'Ver' : '';
    };
    const onLeave = () => { visible = false; root.classList.remove('cursor-visible'); };
    const onDown = () => root.classList.add('cursor-down');
    const onUp = () => root.classList.remove('cursor-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      root.classList.remove('has-custom-cursor', 'cursor-visible', 'cursor-hover', 'cursor-text', 'cursor-view', 'cursor-down');
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring"><span ref={labelRef} className="cursor-label" /></div>
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}

const REVEAL_SELECTORS = [
  '.section-label',
  '.section-heading',
  '.exp-role',
  '.exp-areas > li',
  '.eco-tabs',
  '.eco-rewards',
  '.games-toolbar',
  '.game-card',
  '.lab-banner',
  '.product-card',
  '.more-projects',
  '.about-heading',
  '.about-copy',
  '.contact-card',
].join(', ');

/**
 * Hace aparecer los bloques al entrar en pantalla (suben y se desvanecen).
 * Los hermanos de una misma grilla entran escalonados. Si el navegador no
 * tiene IntersectionObserver o se pidió reducir movimiento, todo queda visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    const prepare = element => {
      if (element.dataset.reveal) return;
      element.dataset.reveal = 'true';
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) { element.classList.add('is-revealed'); return; }
      const siblings = element.parentElement ? [...element.parentElement.children] : [];
      const index = Math.max(0, siblings.indexOf(element));
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 80}ms`);
      element.classList.add('reveal');
      observer.observe(element);
    };

    document.querySelectorAll(REVEAL_SELECTORS).forEach(prepare);
    // Elementos que aparecen después (filtros de juegos, "Otros proyectos").
    const mutations = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => {
        if (!(node instanceof Element)) return;
        if (node.matches(REVEAL_SELECTORS)) node.dataset.reveal = 'true';
        node.querySelectorAll?.(REVEAL_SELECTORS).forEach(child => { child.dataset.reveal = 'true'; });
      }));
    });
    mutations.observe(document.getElementById('main-content') || document.body, { childList: true, subtree: true });

    return () => { observer.disconnect(); mutations.disconnect(); };
  }, []);
}
