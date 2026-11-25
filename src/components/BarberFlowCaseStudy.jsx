import { useEffect, useState } from 'react';
import { Activity, CalendarClock, CreditCard, Database, Eye, Globe, Lock, Mail, Server, ShieldCheck, TestTube2, Workflow } from 'lucide-react';

const API = 'https://barberflow-api-9feo.onrender.com/v1';

const decisions = [
  {
    icon: Lock,
    problem: 'Dos clientes confirmaban el mismo horario a la vez y los dos quedaban reservados.',
    solution: 'Cada reserva corre en una transacción que toma un lock de PostgreSQL por barbero (pg_advisory_xact_lock). La segunda espera, valida de nuevo y ve el horario ocupado. Lo cubre un test que dispara 8 reservas simultáneas: entra 1, rebotan 7.',
  },
  {
    icon: CreditCard,
    problem: 'Turnos reservados por gente que después no venía.',
    solution: 'Seña con Mercado Pago (Checkout Pro). El turno queda pendiente; cuando llega el webhook verifico la firma HMAC, consulto el pago a la API de Mercado Pago (no confío en el body) y recién ahí lo confirmo. Si no se paga a tiempo, una tarea programada libera el horario.',
  },
  {
    icon: Globe,
    problem: 'El servidor corre en UTC y la barbería en Argentina: un turno de las 18:00 se evaluaba como 21:00.',
    solution: 'Toda la lógica de días y horarios usa la zona America/Argentina/Buenos_Aires de forma explícita, y los tests corren con esa misma zona.',
  },
  {
    icon: ShieldCheck,
    problem: 'El registro público aceptaba el campo "role": cualquiera podía crearse una cuenta ADMIN.',
    solution: 'Lo detecté revisando la API: ahora el registro siempre crea clientes, el secreto JWT es obligatorio en producción y hay un test que intenta registrarse como ADMIN y espera un 400.',
  },
  {
    icon: Eye,
    problem: 'Quien llega desde el portfolio no puede ver el panel admin sin usuario.',
    solution: 'Modo demo: un interceptor global de NestJS bloquea cualquier escritura (403) y enmascara nombres, emails y teléfonos de los clientes en todas las respuestas.',
  },
  {
    icon: Activity,
    problem: 'Render (plan gratis) duerme la API y la primera visita tardaba hasta un minuto.',
    solution: 'Un workflow de GitHub Actions la mantiene despierta cada 10 minutos y aprovecha para disparar los recordatorios y el vencimiento de señas (endpoint protegido con secreto).',
  },
];

const architecture = [
  { icon: Globe, title: 'Web', detail: 'React 19 · TypeScript · Tailwind', host: 'Vercel' },
  { icon: Server, title: 'API REST', detail: 'NestJS · JWT con roles · Swagger', host: 'Render' },
  { icon: Database, title: 'Base de datos', detail: 'PostgreSQL · Prisma', host: 'Neon' },
];

const services = [
  { icon: CreditCard, label: 'Mercado Pago', detail: 'Seña + webhook firmado' },
  { icon: Mail, label: 'Resend', detail: 'Recordatorios y lista de espera' },
  { icon: Workflow, label: 'GitHub Actions', detail: 'CI + tareas programadas' },
  { icon: TestTube2, label: 'Jest + Supertest', detail: 'Tests con Postgres real' },
];

const screens = [
  { src: './barberflow/panel-demo.jpg', label: 'Panel admin en modo demo' },
  { src: './barberflow/sena.jpg', label: 'Reserva con seña de Mercado Pago' },
  { src: './barberflow/reprogramar.jpg', label: 'Reprogramar un turno' },
  { src: './barberflow/lista-espera.jpg', label: 'Lista de espera cuando no hay lugar' },
];

const MIN_TO_SHOW = 10;

/** Ficha técnica de BarberFlow dentro del detalle del proyecto. */
export function BarberFlowCaseStudy() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API}/stats/public`)
      .then(response => (response.ok ? response.json() : null))
      .then(data => { if (!cancelled && data && data.appointmentsManaged >= MIN_TO_SHOW) setStats(data); })
      .catch(() => undefined);
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="bf-case">
      <section className="bf-block" aria-labelledby="bf-numbers">
        <h3 id="bf-numbers">En números</h3>
        <div className="bf-numbers">
          <div><strong>44</strong><span>endpoints REST</span></div>
          <div><strong>33</strong><span>tests automáticos</span></div>
          <div><strong>8 → 1</strong><span>reservas simultáneas, 1 confirmada</span></div>
          {stats ? (
            <div><strong>{stats.appointmentsManaged}</strong><span>turnos reales gestionados</span></div>
          ) : (
            <div><strong>3</strong><span>roles: admin, barbero, cliente</span></div>
          )}
        </div>
      </section>

      <section className="bf-block" aria-labelledby="bf-arch">
        <h3 id="bf-arch">Arquitectura</h3>
        <div className="bf-arch">
          {architecture.map(({ icon: Icon, title, detail, host }, index) => (
            <div className="bf-arch-node" key={title}>
              <div className="bf-arch-card">
                <Icon size={20} aria-hidden="true" />
                <strong>{title}</strong>
                <span>{detail}</span>
                <em>{host}</em>
              </div>
              {index < architecture.length - 1 && <span className="bf-arch-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
        <ul className="bf-services">
          {services.map(({ icon: Icon, label, detail }) => (
            <li key={label}><Icon size={16} aria-hidden="true" /><b>{label}</b><span>{detail}</span></li>
          ))}
        </ul>
      </section>

      <section className="bf-block" aria-labelledby="bf-decisions">
        <h3 id="bf-decisions">Problemas reales y cómo los resolví</h3>
        <ol className="bf-decisions">
          {decisions.map(({ icon: Icon, problem, solution }) => (
            <li key={problem}>
              <Icon size={19} aria-hidden="true" />
              <div>
                <p className="bf-problem">{problem}</p>
                <p>{solution}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bf-block" aria-labelledby="bf-screens">
        <h3 id="bf-screens"><CalendarClock size={18} aria-hidden="true" /> Pantallas</h3>
        <div className="bf-screens">
          {screens.map(screen => (
            <figure key={screen.src}>
              <img src={screen.src} alt={`BarberFlow: ${screen.label}`} loading="lazy" decoding="async" width="960" height="600" />
              <figcaption>{screen.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
