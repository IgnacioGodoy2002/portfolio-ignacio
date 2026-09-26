import { useEffect, useRef } from "react";

export function MouseGradient({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "40%");
      return;
    }

    let tx = 50, ty = 40, mx = 50, my = 40, raf = null;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const loop = () => {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      el.style.setProperty("--mx", `${mx}%`);
      el.style.setProperty("--my", `${my}%`);
      raf = Math.abs(tx - mx) > 0.1 || Math.abs(ty - my) > 0.1 ? requestAnimationFrame(loop) : null;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      style={{
        background:
          "radial-gradient(circle 620px at var(--mx, 50%) var(--my, 40%), rgba(59,130,246,0.30) 0%, transparent 55%)," +
          "radial-gradient(circle 760px at calc(var(--mx, 50%) + 12%) calc(var(--my, 40%) - 12%), rgba(56,189,248,0.20) 0%, transparent 55%)," +
          "radial-gradient(circle 680px at calc(var(--mx, 50%) - 15%) calc(var(--my, 40%) + 15%), rgba(96,165,250,0.16) 0%, transparent 55%)",
        filter: "blur(40px) saturate(140%)",
      }}
    />
  );
}
