import { Gamepad2 } from "lucide-react";
import { DirectionAwareTabs } from "@/components/ui/direction-aware-tabs";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects, games } from "@/data/projects";

function CardGrid({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 80} className="h-full">
          <ProjectCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}

function GamesEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3 rounded-3xl border border-dashed border-neutral-700 py-16 px-6">
      <Gamepad2 className="text-blue-400" size={32} />
      <p className="font-semibold text-neutral-200">Sección en construcción</p>
      <p className="text-sm text-neutral-500 max-w-md">
        Estoy documentando los juegos que desarrollé en SURA (mecánicas, stack técnico y mi rol en cada uno). Vuelve pronto.
      </p>
    </div>
  );
}

export function ProjectsSection() {
  const tabs = [
    {
      id: 0,
      label: "Proyectos",
      content: <CardGrid items={projects} />,
    },
    {
      id: 1,
      label: "Juegos",
      content: games.length > 0 ? <CardGrid items={games} /> : <GamesEmptyState />,
    },
  ];

  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
        Portfolio
      </p>
      <GradientHeading as="h2" size="lg" className="mt-2 mb-10">
        Proyectos y juegos
      </GradientHeading>

      <DirectionAwareTabs tabs={tabs} className="bg-slate-950 mb-10" />
    </section>
  );
}
