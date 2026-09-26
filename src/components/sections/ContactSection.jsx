import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contacto" className="border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-6">
          Contacto · Disponible para nuevas oportunidades
        </p>

        <Reveal as="a" href={`mailto:${profile.email}`} className="inline-block group">
          <h2 className="font-mono font-bold lowercase leading-none tracking-tight text-[clamp(1.5rem,6vw,4.5rem)] text-neutral-50 break-all group-hover:text-blue-400 transition-colors relative">
            {profile.email}
            <span className="absolute left-0 right-0 -bottom-2 h-[3px] bg-current origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
        </Reveal>

        <p className="mt-8 text-neutral-400 max-w-xl mx-auto">
          Busco mi primera oportunidad como Backend Developer Jr., Software Developer Trainee o pasantía IT.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-sm uppercase tracking-widest">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors"
          >
            LinkedIn <ExternalLink size={14} />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors"
          >
            GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
