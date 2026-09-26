export function SectionHeading({ eyebrow, children, as: Comp = "h2", className = "" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-3">{eyebrow}</p>
      )}
      <Comp className="font-mono font-bold uppercase tracking-tight leading-[0.95] text-[clamp(1.85rem,5vw,3.5rem)] text-neutral-50">
        {children}
      </Comp>
    </div>
  );
}
