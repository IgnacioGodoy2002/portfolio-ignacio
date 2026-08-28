import { GradientHeading } from "@/components/ui/gradient-heading";
import {
  TextureCard,
  TextureCardHeader,
  TextureCardTitle,
  TextureCardContent,
} from "@/components/ui/texture-card";

export function ExperienceSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
        Experiencia real
      </p>

      <GradientHeading size="lg" className="mt-2 mb-6">
        Barbería y atención al cliente
      </GradientHeading>

      <TextureCard>
        <TextureCardHeader className="px-6 pt-6">
          <TextureCardTitle className="text-2xl">Barbero y colorista</TextureCardTitle>
        </TextureCardHeader>
        <TextureCardContent>
          <p className="text-neutral-600 dark:text-neutral-400 leading-8">
            Experiencia en atención personalizada a clientes, asesoramiento, organización de turnos
            y gestión del tiempo de trabajo. Esta experiencia me permite entender problemas reales
            de negocio y transformarlos en soluciones digitales, como un sistema de turnos, clientes
            y gestión para barberías.
          </p>
        </TextureCardContent>
      </TextureCard>
    </section>
  );
}
