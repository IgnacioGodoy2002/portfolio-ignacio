import { Mail, MapPin, ExternalLink, Download, Code2, Database, Server, GraduationCap } from "lucide-react";

const profile = {
  name: "Ignacio Gabriel Godoy",
  role: "Backend Developer Jr.",
  location: "Buenos Aires, Argentina",
  email: "nachogodoy04@gmail.com",
  linkedin: "https://linkedin.com/in/ignaciogodoy",
  github: "https://github.com/IgnacioGodoy2002",
  cv: "/CV_Ignacio_Godoy.pdf",
};

const skills = [
  "Java",
  "Python",
  "Go",
  "SQL",
  "C",
  "PostgreSQL",
  "SQLite",
  "BoltDB",
  "MongoDB",
  "Git",
  "GitHub",
  "Linux",
  "APIs REST",
  "Pandas",
  "OpenCV",
];

const projects = [
  {
    title: "E-commerce Universitario",
    description:
      "Aplicación para gestión de librería online con usuarios, pedidos, pagos y notificaciones.",
    tech: ["Java", "PostgreSQL", "Swing", "GitHub"],
    role: "Desarrollo backend y base de datos.",
    repo: "https://github.com/IgnacioGodoy2002",
  },
  {
    title: "Sistema de Encuestas para Centros de Salud",
    description:
      "Aplicación para evaluar satisfacción de pacientes y analizar datos relevados.",
    tech: ["Python", "SQLite", "Pandas", "OpenCV"],
    role: "Diseño, desarrollo y testing.",
    repo: "https://github.com/IgnacioGodoy2002",
  },
  {
    title: "Gestión de Pedidos",
    description:
      "Sistema para administración de stock, gestión de pedidos y notificaciones por correo.",
    tech: ["Go", "BoltDB", "HTML básico"],
    role: "Full Stack académico.",
    repo: "https://github.com/IgnacioGodoy2002",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white border-b border-slate-200">
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
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <Server size={16} />
                Buscando primera experiencia IT
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Hola, soy {profile.name}
              </h1>

              <p className="mt-5 text-xl text-blue-600 font-semibold">
                {profile.role}
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Estudiante avanzado de Tecnicatura Universitaria en Informática y estudiante de Licenciatura en Sistemas..
                Me interesa crecer como Backend Developer Jr., participando en proyectos reales y fortaleciendo
                mis conocimientos en APIs, bases de datos y desarrollo de software.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className="bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Ver proyectos
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  className="border border-slate-300 px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:text-blue-700 transition"
                >
                  GitHub <ExternalLink size={18} />
                </a>

                <a
                  href={profile.cv}
                  className="border border-slate-300 px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:text-blue-700 transition"
                >
                  Descargar CV <Download size={18} />
                </a>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-3xl p-8 shadow-xl">
              <Code2 size={42} className="mb-6 text-blue-400" />
              <h2 className="text-2xl font-bold mb-4">Perfil técnico</h2>

              <div className="space-y-4 text-slate-300">
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-400" />
                  {profile.location}
                </p>
                <p className="flex items-center gap-3">
                  <GraduationCap size={18} className="text-blue-400" />
                  Tecnicatura en etapa final: 1 final pendiente
                </p>
                <p className="flex items-center gap-3">
                  <Database size={18} className="text-blue-400" />
                  PostgreSQL, SQLite, BoltDB y MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-10">
          Proyectos destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-600 leading-7">{project.description}</p>

              <p className="mt-4 text-sm">
                <strong>Rol:</strong> {project.role}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 font-semibold hover:text-blue-700"
              >
                Ver código <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-10">
            Tecnologías y herramientas
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-100 border border-slate-200 px-4 py-2 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
            Próximo objetivo
          </p>
          <h2 className="text-3xl font-black mt-2">
            Proyecto real recomendado
          </h2>
          <p className="mt-5 text-slate-300 leading-8 max-w-3xl">
            Mi próximo objetivo es desarrollar una API de turnos para barbería, integrando autenticación, clientes, servicios, horarios disponibles, reservas, cancelaciones, base de datos y deploy. 
            Este proyecto conecta mi experiencia real como barbero con mi formación en desarrollo backend.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
  <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
    Experiencia real
  </p>

  <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">
    Barbería y atención al cliente
  </h2>

  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
    <h3 className="text-2xl font-bold mb-3">
      Barbero y colorista
    </h3>

    <p className="text-slate-600 leading-8">
      Experiencia en atención personalizada a clientes, asesoramiento, organización de turnos
      y gestión del tiempo de trabajo. Esta experiencia me permite entender problemas reales
      de negocio y transformarlos en soluciones digitales, como un sistema de turnos, clientes
      y gestión para barberías.
    </p>
  </div>
</section>

      <section id="contacto" className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            Hablemos
          </h2>
          <p className="mt-5 text-slate-600">
            Busco mi primera oportunidad como Backend Developer Jr., Software Developer Trainee o pasantía IT.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700"
            >
              Enviar email <Mail size={18} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              className="border border-slate-300 px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:text-blue-700"
            >
              LinkedIn <ExternalLink size={18} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              className="border border-slate-300 px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:text-blue-700"
            >
              GitHub <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;