import { Briefcase, GraduationCap, Scissors } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import avatarFull from "@/assets/avatar-full.svg";

const timeline = [
  {
    icon: Scissors,
    title: "Barbero y colorista",
    description:
      "Atención personalizada a clientes, asesoramiento, organización de turnos y gestión del tiempo de trabajo. Esta experiencia me permitió entender problemas reales de negocio y transformarlos en soluciones digitales, como un sistema de turnos, clientes y gestión para barberías.",
  },
  {
    icon: GraduationCap,
    title: "Técnico Universitario en Informática",
    description:
      "Recibido. Base sólida en programación, bases de datos, redes y desarrollo de software.",
  },
  {
    icon: GraduationCap,
    title: "Licenciatura en Sistemas",
    description: "Actualmente cursando, profundizando en arquitectura de software e ingeniería.",
  },
  {
    icon: Briefcase,
    title: "Backend Developer Jr.",
    description:
      "Buscando mi primera oportunidad para aportar en proyectos reales y seguir creciendo como desarrollador.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
        Sobre mí
      </p>
      <GradientHeading as="h2" size="lg" className="mt-2 mb-10">
        Mi camino
      </GradientHeading>

      <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
        <img
          src={avatarFull}
          alt="Ilustración de Ignacio Godoy"
          className="w-40 md:w-48 mx-auto md:mx-0"
          width={192}
          height={272}
        />

        <ol className="space-y-6 border-l border-neutral-800 pl-6">
          {timeline.map(({ icon: Icon, title, description }) => (
            <li key={title} className="relative">
              <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-950 border border-blue-800 text-blue-400">
                <Icon size={14} aria-hidden="true" />
              </span>
              <p className="font-bold text-neutral-100">{title}</p>
              <p className="text-neutral-400 leading-7 mt-1">{description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
        <p className="text-sm text-neutral-400 mb-3">Actividad en GitHub</p>
        <div className="rounded-xl bg-neutral-100 p-4 overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/2563eb/IgnacioGodoy2002"
            alt="Gráfico de contribuciones de GitHub de IgnacioGodoy2002"
            className="w-full min-w-[640px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
