import { Database, Download, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { MouseGradient } from "@/components/MouseGradient";
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

const meta = [
  { icon: MapPin, text: profile.location },
  { icon: GraduationCap, text: "Técnico Univ. en Informática · Cursando Lic. en Sistemas" },
  { icon: Database, text: "PostgreSQL · SQLite · BoltDB · MongoDB" },
];

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export function Hero() {
  return (
    <section className="relative border-b border-neutral-800 overflow-hidden">
      <MouseGradient />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <nav className="flex justify-between items-center mb-16 md:mb-24 font-mono">
          <span className="font-bold text-sm tracking-widest text-neutral-100">IG_</span>
          <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-blue-400 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-current after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-blue-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Buscando primera experiencia IT
          </div>

          <h1 className="font-mono font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.75rem,9vw,6.5rem)] text-neutral-50">
            Ignacio
            <br />
            Gabriel Godoy
          </h1>

          <p className="mt-3 font-mono font-bold uppercase text-[clamp(1.25rem,3vw,2.25rem)] text-blue-400">
            {profile.role}
          </p>

          <p className="mt-8 text-lg leading-8 text-neutral-400 max-w-2xl">
            Técnico Universitario en Informática recibido, actualmente cursando la Licenciatura en Sistemas.
            Me interesa crecer como Backend Developer Jr., participando en proyectos reales y fortaleciendo
            mis conocimientos en APIs, bases de datos y desarrollo de software.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-neutral-500">
            {meta.map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2">
                <Icon size={14} className="text-blue-500" />
                {text}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
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

          <div className="mt-14 flex flex-wrap gap-10 font-mono">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-blue-400">
                  <AnimatedNumber value={stat.value} />+
                </p>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
