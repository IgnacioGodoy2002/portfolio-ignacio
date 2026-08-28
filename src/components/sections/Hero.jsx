import { Code2, Database, Download, ExternalLink, GraduationCap, MapPin, Server } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { GridBeam } from "@/components/ui/grid-beam";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { CosmicButton } from "@/components/ui/cosmic-button";
import { TextureButton } from "@/components/ui/texture-button";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const stats = [
  { label: "Proyectos", value: projects.length },
  { label: "Tecnologías", value: 20 },
  { label: "Años de experiencia real", value: 2 },
];

export function Hero() {
  return (
    <section className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16">
          <h2 className="font-bold text-lg text-neutral-100">Portfolio</h2>
          <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-300">
            <a href="#proyectos" className="hover:text-blue-400">Proyectos</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#contacto" className="hover:text-blue-400">Contacto</a>
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-950/40 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-blue-900/50">
              <Server size={16} />
              Buscando primera experiencia IT
            </div>

            <GradientHeading size="xl" className="!pb-0">
              Hola, soy {profile.name}
            </GradientHeading>

            <p className="mt-5 text-xl text-blue-400 font-semibold">
              {profile.role}
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Técnico Universitario en Informática recibido, actualmente cursando la Licenciatura en Sistemas.
              Me interesa crecer como Backend Developer Jr., participando en proyectos reales y fortaleciendo
              mis conocimientos en APIs, bases de datos y desarrollo de software.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CosmicButton as="a" href="#proyectos" target="_self" rel={undefined}>
                Ver proyectos
              </CosmicButton>

              <TextureButton asChild variant="secondary" className="w-auto">
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  GitHub <ExternalLink size={16} />
                </a>
              </TextureButton>

              <TextureButton asChild variant="secondary" className="w-auto">
                <a href={profile.cv} className="inline-flex items-center gap-2">
                  Descargar CV <Download size={16} />
                </a>
              </TextureButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-blue-400">
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
            className="bg-neutral-900 border border-neutral-800 text-white p-8 shadow-2xl"
          >
            <Code2 size={42} className="mb-6 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4">Perfil técnico</h2>

            <div className="space-y-4 text-neutral-300">
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                {profile.location}
              </p>
              <p className="flex items-center gap-3">
                <GraduationCap size={18} className="text-blue-400" />
                Técnico Univ. en Informática | Cursando Lic. en Sistemas
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
