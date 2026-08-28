import { ExternalLink, Mail } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
          Contacto
        </p>
        <GradientHeading size="lg" className="mt-2 mx-auto w-fit">
          Hablemos
        </GradientHeading>
        <p className="mt-5 text-neutral-600 dark:text-neutral-400">
          Busco mi primera oportunidad como Backend Developer Jr., Software Developer Trainee o pasantía IT.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-xl px-5 py-3 h-auto font-semibold">
            <a href={`mailto:${profile.email}`}>
              Enviar email <Mail size={18} />
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-xl px-5 py-3 h-auto font-semibold">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink size={18} />
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-xl px-5 py-3 h-auto font-semibold">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
