// Experiencia laboral en SURA GG Corp (junio – noviembre 2026).
// Contenido basado en el trabajo documentado en The Rewards Ledger y en los proyectos del portfolio.
export const experience = {
  role: 'Desarrollador de Software Trainee',
  company: 'SURA GG Corp · SURA Gaming',
  period: 'JUN 2026 — NOV 2026 · BUENOS AIRES',
  summary: 'Desarrollo de minijuegos web y de la integración entre los juegos y la plataforma SURA Gaming: sesiones, puntajes, recompensas en SURA Points y validación de partidas del lado del servidor.',
  metrics: [
    { value: '8', label: 'minijuegos desarrollados o iterados' },
    { value: '5', label: 'juegos con recompensas integradas' },
    { value: '800', label: 'tiros auditados sin errores en Joystick Pop' },
  ],
  stack: ['TypeScript', 'JavaScript', 'Phaser', 'Three.js', 'NestJS', 'TypeORM', 'postMessage', 'Snag', 'Playwright'],
  areas: [
    {
      icon: 'gamepad',
      title: 'Minijuegos web',
      text: 'Desarrollo e iteración de arcades, puzzles y runners: mecánicas, física, personajes, menús, ranking, i18n (ES/EN/PT) y controles adaptados a móvil y escritorio.',
      link: { label: 'Ver la colección', href: '#minijuegos' },
    },
    {
      icon: 'trophy',
      title: 'Integración y recompensas',
      text: 'Contrato INIT_GAME / GAME_COMPLETE entre juegos y plataforma, recompensa diaria y por récord personal en SURA Points, reglas en Snag y migraciones con TypeORM.',
      link: { label: 'Ver integración', href: '#sura' },
    },
    {
      icon: 'shield',
      title: 'Anti-cheat y validación de partidas',
      text: 'Validación en servidor con duración real y curvas de puntaje derivadas de cada mecánica. Diagnóstico y corrección de un falso positivo que bloqueaba puntos y ranking a jugadores legítimos.',
      link: { label: 'Probar el simulador', href: '#sura' },
    },
    {
      icon: 'check',
      title: 'Calidad y releases',
      text: 'Auditorías automáticas con Playwright (400 tiros por plataforma en Joystick Pop), corrección de la integración en la app nativa (WebView) y versión visible en cada build para confirmar qué llegó a producción.',
    },
    {
      icon: 'store',
      title: 'Plataforma web y backoffice',
      text: 'Ajustes en la web de la plataforma (idioma de cuenta, récord y ranking) y organización del catálogo del marketplace Bonoxs por región y moneda: Argentina, Brasil y Worldwide.',
    },
    {
      icon: 'sparkles',
      title: 'Branded games',
      text: 'Propuesta comercial de minijuegos temáticos para marcas: reutilizar un motor existente y reskinearlo por marca. Prototipos jugables de runners temáticos.',
      link: { label: 'Ver Mostaza Run', href: '#minijuegos' },
    },
  ],
};
