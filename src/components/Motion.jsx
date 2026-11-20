import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hasFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const INTERACTIVE = 'a, button, [role="tab"], summary, label, select';
const TEXT_INPUT = 'input, textarea, [contenteditable="true"]';
const MAGNETIC = '.button, .game-action, .desktop-nav a, .header-contact, .contact-main-button, .text-button, .eco-tabs [role="tab"]';

/** Etiqueta que muestra el cursor según dónde está. */
function labelFor(target) {
  if (target.closest('.game-action--play')) return 'Jugar';
  if (target.closest('.game-cover-button, .hero-project--cover, .product-card [data-cursor="ver"]')) return 'Ver';
  const own = target.closest('[data-cursor-label]');
  return own ? own.getAttribute('data-cursor-label') : '';
}

/**
 * Cursor profesional: un círculo que invierte los colores de lo que tiene
 * debajo (mix-blend-mode: difference), sigue al mouse con un resorte suave y
 * se estira en la dirección del movimiento según la velocidad. Sobre links y
 * botones crece; sobre portadas y "Jugar" se vuelve un disco con etiqueta.
 * Los botones principales se acercan levemente al cursor (efecto magnético).
 * Solo con mouse; nunca en táctil ni con "reducir movimiento".
 */
export function CustomCursor() {
  const shellRef = useRef(null);
  const blobRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;
    const shell = shellRef.current;
    const blob = blobRef.current;
    const label = labelRef.current;
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    let mx = -200, my = -200, x = -200, y = -200, vx = 0, vy = 0;
    let frame = 0, visible = false, magnet = null;

    const render = () => {
      // Resorte amortiguado: rápido pero sin sobrepasarse demasiado.
      const ax = (mx - x) * 0.22, ay = (my - y) * 0.22;
      vx = (vx + ax) * 0.62; vy = (vy + ay) * 0.62;
      x += vx; y += vy;
      const speed = Math.min(Math.hypot(vx, vy), 40);
      const stretch = 1 + speed / 70;
      const angle = Math.atan2(vy, vx) * 180 / Math.PI;
      shell.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle}deg) scale(${stretch}, ${1 / stretch})`;
      label.style.transform = `rotate(${-angle}deg)`;
      frame = requestAnimationFrame(render);
    };

    const release = () => {
      if (!magnet) return;
      magnet.style.transform = '';
      magnet.classList.remove('is-magnetized');
      magnet = null;
    };

    const onMove = event => {
      mx = event.clientX; my = event.clientY;
      if (!visible) { visible = true; x = mx; y = my; root.classList.add('cursor-visible'); }
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const overText = target.closest(TEXT_INPUT);
      const text = overText ? '' : labelFor(target);
      const interactive = !overText && target.closest(INTERACTIVE);
      root.classList.toggle('cursor-text', Boolean(overText));
      root.classList.toggle('cursor-hover', Boolean(interactive) && !text);
      root.classList.toggle('cursor-label', Boolean(text));
      if (label.textContent !== text) label.textContent = text;

      const m = overText ? null : target.closest(MAGNETIC);
      if (m !== magnet) release();
      if (m) {
        magnet = m; m.classList.add('is-magnetized');
        const r = m.getBoundingClientRect();
        const dx = (mx - (r.left + r.width / 2)) * 0.18;
        const dy = (my - (r.top + r.height / 2)) * 0.28;
        m.style.transform = `translate(${Math.max(-8, Math.min(8, dx))}px, ${Math.max(-6, Math.min(6, dy))}px)`;
      }
    };
    const onLeave = () => { visible = false; root.classList.remove('cursor-visible'); release(); };
    const onDown = () => root.classList.add('cursor-down');
    const onUp = () => root.classList.remove('cursor-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('blur', onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      release();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('blur', onLeave);
      root.classList.remove('has-custom-cursor', 'cursor-visible', 'cursor-hover', 'cursor-text', 'cursor-label', 'cursor-down');
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={shellRef} className="cursor-shell">
        <div ref={blobRef} className="cursor-blob" />
        <span ref={labelRef} className="cursor-text-label" />
      </div>
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
