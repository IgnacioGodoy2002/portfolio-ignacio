import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, ChevronLeft, ChevronRight, Code2, Copy, Database, Download, FileText, Gamepad2, CodeXml as Github, GraduationCap, Layers3, LayoutTemplate, UserRound as Linkedin, Mail, MapPin, Menu, Play, Plus, Radio, ShieldCheck, Smartphone, Sparkles, Trophy, Workflow, X, Briefcase, Store, Gauge, ShieldAlert, Timer } from 'lucide-react';
import { experience } from './data/experience';
import { CustomCursor, useScrollReveal } from './components/Motion';
import { profile } from './data/profile';
import { expertise, gameProjects, softwareProjects } from './data/portfolio';
import { rewardsProject } from './data/rewards';
import { RewardsDetails, RewardsFeature } from './components/RewardsCase';
import avatar from './assets/foto-ignacio.jpg';
import './App.css';

const navItems = [{ href: '#experiencia', label: 'Experiencia' }, { href: '#sura', label: 'SURA' }, { href: '#minijuegos', label: 'Minijuegos' }, { href: '#proyectos', label: 'Proyectos' }, { href: '#sobre-mi', label: 'Sobre mí' }];
const icons = { database: Database, layout: LayoutTemplate, gamepad: Gamepad2, workflow: Workflow };
function LinkIcon({ kind }) { return kind === 'code' ? <Github size={17} /> : kind === 'demo' || kind === 'video' ? <Play size={16} /> : <FileText size={17} />; }
function SectionLabel({ children, number }) { return <div className="section-label"><span className="section-number">{number}</span><span>{children}</span></div>; }
function TagList({ items, limit }) { return <div className="tags">{items.slice(0, limit || items.length).map(item => <span key={item}>{item}</span>)}</div>; }

function CaseModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    if (!triggerRef.current) triggerRef.current = document.activeElement;
    const previousFocus = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.showModal();
    closeRef.current?.focus();
    return () => { dialogRef.current?.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [project]);
  const visual = project.cover || project.image;
  return <dialog ref={dialogRef} className="case-dialog" aria-labelledby="case-title" onCancel={onClose} onClick={event => { if (event.target === dialogRef.current) onClose(); }}>
    <div className="case-content">
      <div className="case-topline"><span className="eyebrow">{project.kind === 'game' ? 'Proyecto de juego' : project.kind === 'engineering' ? 'Caso técnico de plataforma' : 'Proyecto de software'} / {project.category}</span><button ref={closeRef} className="icon-button close-button" onClick={onClose} aria-label="Cerrar detalle"><X size={22} /></button></div>
      <div className="case-title-wrap"><p className="case-type">{project.type}</p><h2 id="case-title">{project.title}</h2><p className="case-summary">{project.description}</p></div>
      {project.snapshotStatus && <div className="case-snapshot"><span className="small-kicker">ESTADO DEL CASO</span><p>{project.snapshotStatus}</p></div>}
      {visual && <figure className={`case-figure ${project.coverKind === 'artwork' ? 'case-figure--cover' : ''}`}><img src={visual} alt={project.coverAlt || (project.coverLabel ? `${project.coverLabel}: ${project.title}` : `Captura de ${project.title}`)} width={project.coverWidth} height={project.coverHeight} decoding="async" /><figcaption>{project.coverLabel || `Captura del proyecto ${project.title}`}</figcaption></figure>}
      {project.screens && <div className="case-screens"><div className="case-screens-head"><div><h3>Capturas de la última versión</h3><p className="case-screens-note">Tomadas fuera de la app de SURA: sin sesión de usuario, el ranking y el récord muestran datos de ejemplo o vacíos.</p></div>{project.build && <span>{project.build}</span>}</div><div className="case-screens-grid">{project.screens.map(sc => <figure key={sc.src} className={sc.tall ? 'screen-tall' : 'screen-wide'}><img src={sc.src} alt={`${project.title}: ${sc.label}`} loading="lazy" decoding="async"/><figcaption>{sc.label}</figcaption></figure>)}</div></div>}
      <div className="case-columns"><div><h3>Objetivo</h3><p>{project.challenge}</p></div><div><h3>Mi participación</h3><p>{project.contribution}</p></div></div>
      <div className="case-highlights"><h3>Funcionalidades y alcance</h3><ul>{project.highlights.map(text => <li key={text}><Check size={18} aria-hidden="true" /><span>{text}</span></li>)}</ul></div>
      {project.engineeringCases && <RewardsDetails project={project} />}
      <TagList items={project.tech} />
      {project.rewardIntegration && <section className="case-rewards-note" aria-label="Trabajo de integración y recompensas"><span className="small-kicker">THE REWARDS LEDGER</span><h3>{project.rewardIntegration.label}</h3><p>{project.rewardIntegration.text}</p><span className="case-rewards-status">{project.rewardIntegration.status}</span></section>}
      {project.video && <div className="case-video"><h3>Demostración del sistema</h3><video controls preload="none" poster={project.image}><source src={project.video} type="video/mp4" />Tu navegador no puede reproducir este video. <a href={project.video}>Descargar video</a></video></div>}
      {project.note && <p className="case-note">{project.note}</p>}
      {project.links.some(link => link.restricted) && <p className="case-access-note">La versión de desarrollo requiere acceso autorizado al proyecto.</p>}
      {project.links.length > 0 && <div className="case-links">{project.links.map((link, i) => <a key={link.href} className={`button ${i === 0 ? 'button-primary' : 'button-outline'}`} href={link.href} target="_blank" rel="noopener noreferrer"><LinkIcon kind={link.kind} />{link.label}</a>)}</div>}
    </div>
  </dialog>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { if (!menuOpen) return; const close = event => { if (event.key === 'Escape') setMenuOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [menuOpen]);
  return <header className="site-header"><div className="container nav-shell">
    <a className="brand" href="#inicio" aria-label="Ignacio Godoy, inicio"><span className="brand-symbol">ig<span>.</span></span><span className="brand-name">Ignacio Godoy<span>Desarrollador de software</span></span></a>
    <nav className="desktop-nav" aria-label="Navegación principal">{navItems.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
    <a className="header-contact" href="#contacto">Contacto<Mail size={16} /></a>
    <button className="icon-button mobile-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">{[...navItems, {href:'#contacto',label:'Contacto'}].map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav>}</header>;
}

function Hero({ onProject }) {
  const project = gameProjects[0];
  return <section id="inicio" className="hero-section"><div className="container">
    <div className="hero-grid"><div className="hero-copy">
      <div className="hero-eyebrow"><span className="tiny-cross" aria-hidden="true">✳</span> Backend · Fullstack · Juegos web</div>
      <h1>Desarrollo<br /><span>de software.</span></h1>
      <p className="hero-intro">Soy <strong>Ignacio Godoy</strong>. Desarrollo aplicaciones e integraciones que conectan lógica de negocio, datos y experiencia de usuario.</p>
      <p className="hero-description">Trabajé como Desarrollador de Software Trainee en SURA GG Corp, con minijuegos web, integración de recompensas y validación de partidas para SURA Gaming.</p>
      <div className="hero-actions"><a className="button button-primary" href="#experiencia">Ver mi trabajo<Layers3 size={18} /></a><a className="button button-outline" href={profile.cv} download><Download size={18} />Descargar CV</a></div>
      <div className="hero-meta"><span><MapPin size={15} />Buenos Aires, Argentina</span><span><i className="availability-dot" aria-hidden="true"/>Abierto a nuevas oportunidades</span></div>
    </div><div className="hero-showcase">
      <div className="showcase-heading"><span className="eyebrow">PROYECTO DESTACADO</span><span className="edition">2026 / 01</span></div>
      <button className="hero-project hero-project--cover" onClick={() => onProject(project)} aria-label={`Ver proyecto de ${project.title}`}>
        <span className="hero-project-photo"><img src={project.cover} alt={project.coverAlt} width={project.coverWidth} height={project.coverHeight} fetchPriority="high" decoding="async" /></span>
        <span className="hero-cover-info"><span className="hero-cover-topline"><Gamepad2 size={15} aria-hidden="true"/>SURA GAMING<span>PORTADA</span></span><span className="hero-cover-title"><strong>{project.title}</strong><span className="round-plus"><Plus size={20}/></span></span><span className="hero-cover-description">Shooter espacial</span></span>
      </button>
      <div className="showcase-bottom"><div><span className="mini-index">01—08</span><span>Colección de minijuegos web</span></div><a href="#minijuegos" aria-label="Explorar la colección de minijuegos"><Gamepad2 size={20} /></a></div>
    </div></div>
    <div className="focus-strip"><div><span className="focus-index">01</span><strong>Backend y APIs</strong><span>Lógica de negocio, servicios y bases de datos.</span></div><div><span className="focus-index">02</span><strong>Aplicaciones fullstack</strong><span>Interfaces conectadas con sistemas de gestión.</span></div><div><span className="focus-index">03</span><strong>Juegos e integración</strong><span>Mecánicas, controles y conexión con plataformas.</span></div></div>
  </div></section>;
}

function ProductCard({ project, index, onProject }) {
  return <article className="product-card"><button className="product-image-button" onClick={() => onProject(project)} aria-label={`Ver proyecto de ${project.title}`}><div className="browser-frame"><div className="browser-top"><span /><span /><span /><p>{project.id === 'barberflow' ? 'BarberFlow / reservas' : 'Frozen / producción'}</p></div><img src={project.image} alt={`Captura del sistema ${project.title}`} loading="lazy" /></div><span className="image-case-label"><span>CASO {String(index + 1).padStart(2,'0')}</span><Plus size={21}/></span></button><div className="product-card-text"><div className="project-eyebrow">{project.category}<span>{project.id === 'barberflow' ? 'DESARROLLO INTEGRAL' : 'SCRUM MASTER'}</span></div><h3><button onClick={() => onProject(project)}>{project.title}</button></h3><p>{project.summary}</p><div className="card-bottom"><TagList items={project.tech} limit={3}/><button className="text-button" onClick={() => onProject(project)}>Ver proyecto<Plus size={17}/></button></div></div></article>;
}

function Projects({ onProject }) {
  const [expanded, setExpanded] = useState(false);
  return <section id="proyectos" className="section work-section"><div className="container"><SectionLabel number="04">PROYECTOS DE SOFTWARE</SectionLabel><div className="section-heading"><h2>Aplicaciones y<br /><span className="muted-word">sistemas.</span></h2><p>Proyectos de gestión, backend y análisis funcional. Cada caso presenta su objetivo, mi participación y las tecnologías utilizadas.</p></div><div className="products-grid">{softwareProjects.slice(0,2).map((project,i) => <ProductCard key={project.id} project={project} index={i} onProject={onProject} />)}</div>
    <div className="more-projects"><div className="more-projects-header"><h3>Otros proyectos</h3><button className="text-button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="more-projects-list">{expanded ? 'Ocultar proyectos adicionales' : 'Ver todos los proyectos'}<ChevronDown size={18} className={expanded ? 'rotate' : ''}/></button></div><div id="more-projects-list" hidden={!expanded}>{softwareProjects.slice(2).map((project,i) => <button className="project-list-item" key={project.id} onClick={() => onProject(project)}><span className="list-index">{String(i+3).padStart(2,'0')}</span><span className="project-list-copy"><strong>{project.title}</strong><span>{project.summary}</span></span><span className="project-list-category">{project.category}</span><Plus size={19}/></button>)}</div>{!expanded && <div className="project-name-strip">{softwareProjects.slice(2).map(project => <button key={project.id} onClick={() => onProject(project)}>{project.title}<Plus size={14}/></button>)}</div>}</div>
  </div></section>;
}

const ecosystemTabs = [{id: 'integracion', label: 'Integración', icon: Radio},{id: 'recompensas', label: 'Recompensas', icon: Trophy},{id: 'anticheat', label: 'Anti-cheat', icon: ShieldAlert},{id: 'snag', label: 'Snag', icon: Layers3}];
const integrationSteps = [
  {title:'Inicialización de la sesión', text:'Handshake MINIGAME_READY → INIT_GAME → SESSION_ACCEPTED: el juego recibe sesión, nombre de jugador, idioma y récord real, tanto en el iframe web como en el WebView de la app nativa.', icon: Smartphone},
  {title:'Reporte de la partida', text:'GAME_COMPLETE envía puntaje y duración real a la plataforma mediante postMessage.', icon: Radio},
  {title:'Validación según la mecánica', text:'El servidor contrasta la duración y aplica la curva de puntaje cuando está configurada para ese juego.', icon: ShieldCheck},
  {title:'Cálculo de SURA Points', text:'El esquema combina una asignación diaria y recompensas por nuevos tramos superados sobre el récord personal.', icon: Trophy},
];
function Ecosystem({ onProject }) {
  const [tab,setTab] = useState('recompensas');
  const [step,setStep] = useState(0);
  const stepData = integrationSteps[step];
  const setTabFromKeyboard = (event,index) => { let next; const n=ecosystemTabs.length; if(event.key==='ArrowRight')next=(index+1)%n; if(event.key==='ArrowLeft')next=(index+n-1)%n; if(event.key==='Home')next=0; if(event.key==='End')next=n-1; if(next!==undefined){event.preventDefault();setTab(ecosystemTabs[next].id);document.getElementById(`tab-${ecosystemTabs[next].id}`)?.focus();} };
  return <section id="sura" className="section ecosystem-section"><div className="container"><SectionLabel number="02">INTEGRACIÓN Y RECOMPENSAS</SectionLabel><div className="ecosystem-layout"><div className="ecosystem-copy"><div className="sura-wordmark">SURA<span>GAMING</span><span className="sura-asterisk" aria-hidden="true">✳</span></div><h2>Integración<br />con SURA.</h2><p className="lead">Minijuegos, misiones y recompensas dentro del ecosistema SURA Gaming.</p><p>Trabajé en la comunicación entre los juegos y la plataforma, el cálculo de SURA Points y la validación de resultados. The Rewards Ledger reúne estas intervenciones en cinco minijuegos, junto con la validación anti-cheat de partidas y la configuración de recompensas en Snag.</p><div className="sura-chips"><span>Web y móvil</span><span>ES / EN / PT</span><span>Sesiones y puntajes</span><span>App nativa (WebView)</span><span>Anti-cheat</span></div></div>
      <div className="ecosystem-panel"><div className="eco-tabs" role="tablist" aria-label="Áreas del ecosistema SURA">{ecosystemTabs.map(({id,label,icon:Icon},index)=><button key={id} role="tab" id={`tab-${id}`} aria-selected={tab===id} aria-controls={`panel-${id}`} tabIndex={tab===id ? 0 : -1} onKeyDown={e=>setTabFromKeyboard(e,index)} onClick={()=>setTab(id)}><Icon size={17}/>{label}</button>)}</div>
      {tab==='integracion' && <div className="eco-tabpanel" role="tabpanel" id="panel-integracion" aria-labelledby="tab-integracion" tabIndex={0}><div className="eco-topline"><span>COMPONENTES DE INTEGRACIÓN</span><span>0{step+1} / 04</span></div><div className="integration-steps">{integrationSteps.map(({title,icon:Icon},i)=><button key={title} className={step===i?'step active-step':'step'} onClick={()=>setStep(i)} aria-label={`Componente ${i+1}: ${title}`} aria-pressed={step===i}><span className="step-icon"><Icon size={22}/></span><span>0{i+1}</span></button>)}</div><div className="step-explanation" aria-live="polite"><h3>{stepData.title}</h3><p>{stepData.text}</p></div><div className="step-navigation"><span>Consultar cada componente</span><div><button className="icon-button" aria-label="Componente anterior" onClick={()=>setStep((step+3)%4)}><ChevronLeft size={19}/></button><button className="icon-button" aria-label="Componente siguiente" onClick={()=>setStep((step+1)%4)}><ChevronRight size={19}/></button></div></div><div className="eco-footnote"><Code2 size={15}/><span>Contrato compartido entre los clientes de juego y la API de SURA. Implementación y pruebas detalladas en The Rewards Ledger.</span></div></div>}
      {tab==='recompensas' && <div className="eco-tabpanel" role="tabpanel" id="panel-recompensas" aria-labelledby="tab-recompensas" tabIndex={0}>
        <div className="eco-topline"><span>REGLAS DE SURA POINTS</span><Trophy size={17}/></div>
        <div className="reward-feature"><span className="reward-distance">2</span><div><h3>Modalidades de<br/>recompensa.</h3><p>Un esquema compartido, con reglas configuradas en Snag y consultadas por el backend.</p></div></div>
        <div className="reward-comparison"><div><span className="small-kicker">PARTICIPACIÓN DIARIA</span><strong>Una vez por día</strong><p>SP al superar el puntaje mínimo definido en la regla diaria de Snag.</p></div><div><span className="small-kicker">MEJORA DEL RÉCORD</span><strong>Nuevos tramos de puntaje</strong><p>SP por tramos alcanzados por encima del mejor resultado previo. Los tramos ya superados no se pagan de nuevo.</p></div></div>
        <p className="eco-footnote">Cada modalidad se evalúa de forma independiente. Los desbloqueos locales de Potrero Rush pertenecen a su propia progresión.</p>
        <button className="text-button eco-case-link" onClick={() => onProject(rewardsProject)}>Ver The Rewards Ledger<Plus size={17}/></button>
      </div>}
      {tab==='anticheat' && <AntiCheatPanel onProject={onProject} />}
      {tab==='snag' && <div className="eco-tabpanel snag-panel" role="tabpanel" id="panel-snag" aria-labelledby="tab-snag" tabIndex={0}>
        <div className="eco-topline"><span>PROGRAMA DE FIDELIZACIÓN</span><Layers3 size={18}/></div>
        <div className="snag-heading"><div className="snag-type">Snag<span>↗</span></div><span className="snag-context">SURA GAMING</span></div>
        <h3>Misiones y reglas de recompensa.</h3>
        <p>Integración con Snag para organizar misiones y reglas de recompensas vinculadas a la participación en SURA Gaming.</p>
        <div className="snag-missions">
          <div><Gamepad2 size={19}/><div><strong>Actividad en la aplicación</strong><span>Primer minijuego, inscripción en torneos y exploración de la plataforma.</span></div></div>
          <div><Workflow size={19}/><div><strong>Participación de la comunidad</strong><span>Ingreso a clanes, acciones sociales y misiones mediante QR.</span></div></div>
          <div><Trophy size={19}/><div><strong>Reglas compartidas con el backend</strong><span>Consulta de umbrales e importes en Snag para mantener alineado el cálculo de SP.</span></div></div>
        </div>
        <p className="eco-footnote">El programa reúne también misiones de ruleta, marketplace y descubrimiento de contenidos.</p>
      </div>}

    </div></div><div className="eco-rewards"><RewardsFeature onProject={onProject} /></div><div className="ecosystem-principles"><div><Smartphone size={19}/><span>Interfaces adaptadas a distintas pantallas</span></div><div><Radio size={19}/><span>Comunicación entre juegos y plataforma</span></div><div><ShieldCheck size={19}/><span>Reglas de puntaje y progresión</span></div></div>
  </div></section>;
}


const BASE_RATE = 7.5, MARGIN = 0.15;
function AntiCheatPanel({ onProject }) {
  const [clientSec,setClientSec]=useState(90);
  const [serverSec,setServerSec]=useState(60);
  const [score,setScore]=useState(480);
  const effective=Math.min(clientSec,serverSec);
  const limit=Math.round(effective*BASE_RATE*(1+MARGIN));
  const ok=score<=limit;
  const pct=Math.min(100,Math.round(score/Math.max(limit,1)*100));
  return <div className="eco-tabpanel anticheat-panel" role="tabpanel" id="panel-anticheat" aria-labelledby="tab-anticheat" tabIndex={0}>
    <div className="eco-topline"><span>VALIDACIÓN DE PARTIDAS EN SERVIDOR</span><ShieldAlert size={17}/></div>
    <h3 className="ac-title">El cliente informa. <span>El servidor decide.</span></h3>
    <div className="ac-layers">
      <div><Timer size={18}/><div><strong>Duración real</strong><span>Se usa la menor entre el reloj del servidor y la duración que informa el juego.</span></div></div>
      <div><Gauge size={18}/><div><strong>Curva por mecánica</strong><span>Puntaje máximo plausible derivado de las constantes de cada juego, con margen de seguridad.</span></div></div>
      <div><ShieldCheck size={18}/><div><strong>Excepciones explícitas</strong><span>Juegos sin modelo temporal válido (fusiones, burbujas) se configuran sin curva, para no rechazar partidas legítimas.</span></div></div>
    </div>
    <div className="ac-sim" aria-label="Simulador de validación">
      <div className="ac-sim-head"><span className="small-kicker">PROBALO · MODELO DE SAFARI CROSSING</span><span className="ac-formula">{BASE_RATE} pts/s × {effective}s × 1,15 = <b>{limit}</b></span></div>
      <label><span>Duración que informa el juego</span><input type="range" min="10" max="180" value={clientSec} onChange={e=>setClientSec(+e.target.value)}/><output>{clientSec}s</output></label>
      <label><span>Duración medida por el servidor</span><input type="range" min="10" max="180" value={serverSec} onChange={e=>setServerSec(+e.target.value)}/><output>{serverSec}s</output></label>
      <label><span>Puntaje reportado</span><input type="range" min="0" max="1600" step="10" value={score} onChange={e=>setScore(+e.target.value)}/><output>{score}</output></label>
      <div className="ac-meter"><div className={ok?'ac-bar':'ac-bar ac-bar--bad'} style={{width:`${pct}%`}}/></div>
      <div className={ok?'ac-verdict':'ac-verdict ac-verdict--bad'} role="status">{ok?<><Check size={16}/>Partida válida: acredita SURA Points y actualiza el ranking.</>:<><X size={16}/>Puntaje fuera de la curva: la partida se marca como sospechosa.</>}</div>
    </div>
    <p className="eco-footnote">Simulación ilustrativa con la tasa base y el margen documentados para Safari Crossing. En Joystick Pop, este mismo control generaba un falso positivo (1.323 pts vs. curva calibrada con un máximo de 403) que se corrigió.</p>
    <button className="text-button eco-case-link" onClick={() => onProject(rewardsProject)}>Ver casos en The Rewards Ledger<Plus size={17}/></button>
  </div>;
}

const expIcons = { check: ShieldCheck, gamepad: Gamepad2, trophy: Trophy, shield: ShieldAlert, store: Store, sparkles: Sparkles };
function Experience() {
  const job = experience;
  return <section id="experiencia" className="section experience-section"><div className="container"><SectionLabel number="01">EXPERIENCIA LABORAL</SectionLabel>
    <div className="exp-layout">
      <div className="exp-role">
        <span className="exp-period">{job.period}</span>
        <h2>{job.role}</h2>
        <p className="exp-company"><Briefcase size={17}/>{job.company}</p>
        <p className="exp-summary">{job.summary}</p>
        <div className="exp-metrics">{job.metrics.map(m=><div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>
        <TagList items={job.stack}/>
      </div>
      <ol className="exp-areas">{job.areas.map((a,i)=>{const Icon=expIcons[a.icon];return <li key={a.title}><span className="exp-area-icon"><Icon size={20}/></span><div><span className="exp-area-index">{String(i+1).padStart(2,'0')}</span><h3>{a.title}</h3><p>{a.text}</p>{a.link && <a className="text-button" href={a.link.href}>{a.link.label}<ChevronRight size={16}/></a>}</div></li>;})}</ol>
    </div>
  </div></section>;
}

function GameArtwork({ project }) {
  return <div className={`game-art game-art-${project.art} ${project.coverKind === 'artwork' ? 'game-art--cover' : ''}`} style={{'--game-accent': project.color}}>
    {project.cover ? <img src={project.cover} alt={project.coverAlt || `${project.coverLabel || 'Imagen del juego'}: ${project.title}`} width={project.coverWidth} height={project.coverHeight} loading="lazy" decoding="async"/> : <div className="game-typography" aria-hidden="true"><span className="game-art-caption">IGNACIO GODOY / JUEGOS WEB</span><span className="game-monogram">{project.monogram}</span><span className="game-art-line"/><span className="game-art-genre">{project.category.toUpperCase()}</span></div>}
  </div>;
}
function Games({ onProject }) {
  const [filter,setFilter]=useState('Todos');
  const filtered=gameProjects.filter(game=>filter==='Todos'||game.genre===filter);
  return <section id="minijuegos" className="section games-section"><div className="container"><SectionLabel number="03">DESARROLLO DE VIDEOJUEGOS</SectionLabel><div className="section-heading"><h2>Juegos web<br/><span className="muted-word">e integración.</span></h2><p>Una colección de arcades, puzzles y runners que reúne desarrollo de mecánicas, adaptación de interfaces e integración con plataformas.</p></div><div className="games-toolbar"><div className="game-filters" role="group" aria-label="Filtrar minijuegos">{['Todos','Arcade','Puzzle','Runner'].map(category=><button key={category} className={filter===category?'active-filter':''} onClick={()=>setFilter(category)} aria-pressed={filter===category}>{category}{category==='Todos' && <span>{gameProjects.length.toString().padStart(2,'0')}</span>}</button>)}</div><span className="collection-note">Colección de proyectos / 2026</span></div><div className="games-grid" aria-live="polite">{filtered.map(project=><article key={project.id} className="game-card"><button className="game-cover-button" onClick={()=>onProject(project)} aria-label={`Ver proyecto de ${project.title}`}><GameArtwork project={project}/></button><div className="game-card-details"><div><h3><button onClick={()=>onProject(project)}>{project.title}</button></h3><p>{project.category}</p></div><button className="game-detail-button" onClick={()=>onProject(project)} aria-label={`Abrir detalle de ${project.title}`}><Plus size={18}/></button></div>{(()=>{const play=project.links.find(l=>l.kind==='demo'&&/^Jugar/.test(l.label));const code=project.links.find(l=>l.kind==='code');return (play||code)&&<div className="game-card-actions">{play&&<a className="game-action game-action--play" href={play.href} target="_blank" rel="noopener noreferrer" aria-label={`Jugar ${project.title}`}><Play size={14}/>Jugar</a>}{code&&<a className="game-action" href={code.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title}`}><Github size={14}/>Código</a>}</div>;})()}</article>)}</div><div className="lab-banner"><div className="lab-symbol"><Sparkles size={25}/></div><div><span className="small-kicker">PROTOTIPO EN DESARROLLO</span><h3>El valle de las manadas</h3><p>Prototipo de supervivencia PVE con recolección de recursos, fabricación, cultivo y domesticación de criaturas.</p></div><div className="lab-action"><a className="button button-outline" href="https://valle-de-las-manadas.product34.chatgpt.site" target="_blank" rel="noopener noreferrer"><Play size={16}/>Ver prototipo</a><span>Requiere acceso al proyecto</span></div></div></div></section>;
}

function About() {
  return <section id="sobre-mi" className="section about-section"><div className="container"><SectionLabel number="05">PERFIL PROFESIONAL</SectionLabel><div className="about-grid"><div className="about-heading"><h2>Formación y<br/><span className="muted-word">experiencia.</span></h2><div className="profile-card"><img src={avatar} width="720" height="900" loading="lazy" alt="Foto de Ignacio Godoy"/><div><strong>Ignacio Gabriel Godoy</strong><span>Desarrollador de software</span><span><MapPin size={14}/>Buenos Aires, Argentina</span></div></div></div><div className="about-copy"><p className="about-lead">Desarrollador de software con experiencia en backend, integración de plataformas y juegos web.</p><p>En SURA GG Corp desarrollé minijuegos web y la capa que los conecta con la plataforma: sesiones, recompensas en SURA Points, validación de partidas y corrección de errores en producción, tanto en la web como en la app nativa.</p><p>Me gusta entender el problema antes de escribir código: reproducir el error, medirlo y dejar una prueba que confirme la solución.</p><p>Antes de programar trabajé como barbero y en atención al cliente. Esa experiencia me dio trato con las personas y organización, y de ahí nació BarberFlow, mi sistema de reservas para barberías.</p><div className="education"><GraduationCap size={22}/><div><strong>Técnico Universitario en Informática · UNGS</strong><span>Licenciatura en Sistemas en curso.</span></div></div><div className="education about-facts"><Sparkles size={20}/><div><strong>Idiomas</strong><span>Español nativo · Inglés técnico (lectura de documentación).</span></div></div><a className="text-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/>Ver perfil en LinkedIn</a></div></div><div id="skills" className="expertise-section"><div className="expertise-heading"><h3>Tecnologías y<br/><span>metodologías.</span></h3><span className="eyebrow">ÁREAS DE TRABAJO</span></div><div className="expertise-grid">{expertise.map(group=>{const Icon=icons[group.icon];return <div className="expertise-card" key={group.title}><Icon size={23}/><h4>{group.title}</h4><p>{group.description}</p><TagList items={group.skills}/></div>;})}</div></div></div></section>;
}

function Contact() {
  const [copied,setCopied]=useState(false);
  const [copyError,setCopyError]=useState(false);
  const timer=useRef(null);
  useEffect(()=>()=>clearTimeout(timer.current),[]);
  async function copyEmail(){try{await navigator.clipboard.writeText(profile.email);setCopied(true);setCopyError(false);clearTimeout(timer.current);timer.current=setTimeout(()=>setCopied(false),2600);}catch{setCopyError(true);}}
  return <section id="contacto" className="contact-section"><div className="container"><div className="contact-card"><div className="contact-topline"><span className="eyebrow">CONTACTO</span><span>BUENOS AIRES · ARGENTINA</span></div><div className="contact-main"><div><h2>Oportunidades y<br/>colaboración.</h2><p>Busco oportunidades de desarrollo backend y fullstack, y proyectos en los que pueda aportar mi experiencia y continuar mi formación profesional.</p></div><a className="contact-main-button" href={`mailto:${profile.email}`}><Mail size={25}/><span>Enviar un mensaje</span></a></div><div className="contact-bottom"><div className="email-group"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copyEmail} aria-label={copied?'Email copiado':'Copiar dirección de email'} className="copy-button">{copied?<Check size={18}/>:<Copy size={17}/>}</button><span className="copy-status" role="status">{copied?'Copiado':copyError?'Seleccioná la dirección para copiarla.':''}</span></div><div className="contact-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/>GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/>LinkedIn</a></div></div></div><footer className="footer"><a href="#inicio" className="footer-brand">ig.</a><span>© 2026 Ignacio Godoy</span><a href={profile.cv} download><Download size={15}/>Descargar CV</a><a href="#inicio">Volver al inicio</a></footer></div></section>;
}

export default function App() { const [selectedProject,setSelectedProject] = useState(null); useScrollReveal(); return <><CustomCursor/><a href="#main-content" className="skip-link">Saltar al contenido</a><Header/><main id="main-content"><Hero onProject={setSelectedProject}/><Experience/><Ecosystem onProject={setSelectedProject}/><Games onProject={setSelectedProject}/><Projects onProject={setSelectedProject}/><About/><Contact/></main>{selectedProject && <CaseModal project={selectedProject} onClose={()=>setSelectedProject(null)}/>}</>; }
