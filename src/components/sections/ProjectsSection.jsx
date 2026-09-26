import { Gamepad2 } from "lucide-react";
import { DirectionAwareTabs } from "@/components/ui/direction-aware-tabs";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectList } from "@/components/ProjectRow";
import { projects, games } from "@/data/projects";

function GamesEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3 border border-dashed border-neutral-700 py-16 px-6">
      <Gamepad2 className="text-blue-400" size={32} />
      <p className="font-mono font-semibold uppercase text-neutral-200">Sección en construcción</p>
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
      content: <ProjectList items={projects} />,
    },
    {
      id: 1,
      label: "Juegos",
      content: games.length > 0 ? <ProjectList items={games} /> : <GamesEmptyState />,
    },
  ];

  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeading eyebrow="Portfolio" className="mb-10">
        Proyectos y juegos
      </SectionHeading>

      <DirectionAwareTabs tabs={tabs} className="bg-slate-950 mb-4" />
    </section>
  );
}
