import { ExternalLink, Mail } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { TextureButton } from "@/components/ui/texture-button";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contacto" className="border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
          Contacto
        </p>
        <GradientHeading as="h2" size="lg" className="mt-2 mx-auto w-fit">
          Hablemos
        </GradientHeading>
        <p className="mt-5 text-neutral-400">
          Busco mi primera oportunidad como Backend Developer Jr., Software Developer Trainee o pasantía IT.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <TextureButton asChild variant="accent" className="w-auto">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2">
              Enviar email <Mail size={16} />
            </a>
          </TextureButton>

          <TextureButton asChild variant="secondary" className="w-auto">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              LinkedIn <ExternalLink size={16} />
            </a>
          </TextureButton>

          <TextureButton asChild variant="secondary" className="w-auto">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              GitHub <ExternalLink size={16} />
            </a>
          </TextureButton>
        </div>
      </div>
    </section>
  );
}
