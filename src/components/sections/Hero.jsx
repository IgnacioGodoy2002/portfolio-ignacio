import { Code2, Database, Download, ExternalLink, GraduationCap, MapPin, Server } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { GridBeam } from "@/components/ui/grid-beam";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const stats = [
  { label: "Proyectos", value: projects.length },
  { label: "Tecnologías", value: 20 },
  { label: "Años de experiencia real", value: 2 },
];

export function Hero() {
  return (
    <section className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16">
          <h2 className="font-bold text-lg">Portfolio</h2>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#proyectos" className="hover:text-blue-600">Proyectos</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <Server size={16} />
              Buscando primera experiencia IT
            </div>

            <GradientHeading size="xl" variant="pink" className="!pb-0">
              Hola, soy {profile.name}
            </GradientHeading>

            <p className="mt-5 text-xl text-blue-600 font-semibold">
              {profile.role}
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Estudiante avanzado de Tecnicatura Universitaria en Informática y estudiante de Licenciatura en Sistemas.
              Me interesa crecer como Backend Developer Jr., participando en proyectos reales y fortaleciendo
              mis conocimientos en APIs, bases de datos y desarrollo de software.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl px-5 py-3 h-auto font-semibold">
                <a href="#proyectos">Ver proyectos</a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-xl px-5 py-3 h-auto font-semibold">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ExternalLink size={18} />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-xl px-5 py-3 h-auto font-semibold">
                <a href={profile.cv}>
                  Descargar CV <Download size={18} />
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-blue-600">
                    <AnimatedNumber value={stat.value} />+
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <GridBeam
            rows={4}
            cols={6}
            colorVariant="colorful"
            theme="dark"
            borderRadius={24}
            className="bg-slate-950 text-white p-8 shadow-xl"
          >
            <Code2 size={42} className="mb-6 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4">Perfil técnico</h2>

            <div className="space-y-4 text-slate-300">
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                {profile.location}
              </p>
              <p className="flex items-center gap-3">
                <GraduationCap size={18} className="text-blue-400" />
                Tecnicatura Univ. en Informática: 1 final pendiente
              </p>
              <p className="flex items-center gap-3">
                <Database size={18} className="text-blue-400" />
                PostgreSQL, SQLite, BoltDB y MongoDB
              </p>
            </div>
          </GridBeam>
        </div>
      </div>
    </section>
  );
}
