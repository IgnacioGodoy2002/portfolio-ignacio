export const projects = [
  {
    title: "BarberFlow - Sistema Fullstack de Turnos para Barbería",
    description:
      "Aplicación fullstack desarrollada para gestionar turnos de barbería de forma profesional. Permite consultar servicios, ver barberos, revisar disponibilidad en tiempo real, registrar clientes, iniciar sesión, reservar turnos, consultar reservas propias, cancelar turnos y acceder a un panel interno de administración.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Swagger",
      "Render",
      "Vercel",
      "Neon",
    ],
    role:
      "Proyecto personal. Diseñé y desarrollé una solución fullstack conectando mi experiencia real como barbero con mi formación en desarrollo. Implementé frontend, backend, base de datos relacional, autenticación JWT, roles, disponibilidad dinámica, reservas online, comprobante de turno, sección de mis turnos, cancelaciones, panel interno, contacto por WhatsApp y deploy completo.",
    demo: "https://barberflow-web-six.vercel.app/",
    frontend: "https://github.com/IgnacioGodoy2002/barberflow-web",
    backend: "https://github.com/IgnacioGodoy2002/barberflow-api",
    swagger: "https://barberflow-api-9feo.onrender.com/api/docs",
  },
  {
    title: "Frozen Lácteos - Sistema de Gestión de Producción",
    description:
      "Sistema full stack para una PyME alimenticia orientado a la gestión de insumos, productos, registros de ingresos y egresos, órdenes de producción, reportes, trazabilidad y usuarios con roles. Demo online no disponible actualmente; el funcionamiento está documentado en video, guía de usuario y repositorios.",
    tech: [
      "React",
      "TypeScript",
      "Java API REST",
      "React Router",
      "Material UI",
      "Context API",
      "Recharts",
      "CSS",
      "Scrum",
    ],
    role:
      "Scrum Master. Creé historias de usuario, participé en la planificación de sprints, realicé seguimiento del avance del equipo, armé indicadores del proyecto y acompañé la comunicación entre frontend, backend y testing.",
    repo: "https://github.com/kevin-rodriguez98/TP-Principal-frontend",
    backend: "https://github.com/kevin-rodriguez98/tp-principal-backend",
    video: "/demo-frozen-lacteos.mp4",
    manual: "/guia-frozen-lacteos.pdf",
  },
  {
    title: "Sistema de Gestión de Pedidos y Stock",
    description:
      "Sistema backend desarrollado para administrar clientes, productos, pedidos, cancelaciones, entregas y control de stock disponible y reservado. Incluye lógica de base de datos con PostgreSQL, stored procedures, triggers, solicitudes de reposición y módulo NoSQL con BoltDB.",
    tech: [
      "Go",
      "PostgreSQL",
      "SQL",
      "Stored Procedures",
      "Triggers",
      "BoltDB",
      "Git",
      "Linux",
    ],
    role:
      "Proyecto académico grupal. Participé en el desarrollo del sistema, implementación de consultas SQL, organización del proyecto, pruebas y resolución de errores relacionados con claves primarias, claves foráneas y lógica de pedidos.",
    repo: "https://github.com/IgnacioGodoy2002/sistema-gestion-pedidos-stock",
  },
  {
    title: "Sistema de Reconocimiento Facial",
    description:
      "Prototipo de control de asistencia para una PyME alimenticia. Utiliza OpenCV para detección y validación de rostros mediante el algoritmo LBPH.",
    tech: ["Python", "OpenCV", "LBPH", "NumPy", "Ngrok"],
    role:
      "Proyecto grupal. Participé en el desarrollo general, pruebas y validación del funcionamiento del sistema.",
    repo: "https://github.com/kevin-rodriguez98/TP-inicial-reconocimiento-facial",
  },
  {
    title: "Sistema de Encuestas para Centros de Salud",
    description:
      "Aplicación para evaluar satisfacción de pacientes y analizar datos relevados.",
    tech: ["Python", "SQLite", "Pandas", "OpenCV"],
    role: "Diseño, desarrollo y testing.",
    repo: "https://github.com/IgnacioGodoy2002/sistema-encuestas-centros-salud",
  },
  {
    title: "LibroClick - Documentación Funcional de E-commerce",
    description:
      "Proyecto académico de análisis funcional para una librería online. Incluye documentación BRD y FRD, historias de usuario, reglas de negocio, diagramas UML, prototipo de pantallas y casos de prueba.",
    tech: [
      "BRD",
      "FRD",
      "UML",
      "Draw.io",
      "Testing",
      "Historias de Usuario",
      "Prototipado",
    ],
    role:
      "Proyecto académico grupal. Participé en el análisis de requerimientos, documentación funcional, armado de historias de usuario, diagramas, prototipo y casos de prueba.",
    repo: "https://github.com/IgnacioGodoy2002/libroclick-documentacion-funcional",
    buttonText: "Ver documentación",
  },
];

// Juegos desarrollados en SURA Gaming.
export const games = [
  {
    title: "Pengu Rush",
    description:
      "Arcade espacial: pilotás una nave con temática pingüino esquivando y destruyendo meteoritos de tres tamaños, con escudo temporal, dificultad progresiva y puntaje por sobrevivir y destruir. Juego completo, jugable en escritorio y móvil, con soporte multitouch real.",
    tech: [
      "TypeScript",
      "Phaser 4",
      "Vite",
      "Playwright",
      "localStorage",
      "i18n",
    ],
    role:
      "Proyecto individual (20 commits propios, sin coautoría). Diseñé la arquitectura por escenas de Phaser, el balance de armas/meteoritos/dificultad progresiva, un validador anti-cheat de \"puntaje máximo plausible\" que corre en Node replicando las constantes de balance del cliente para invalidar sesiones imposibles sin replay server-side, managers propios de música y efectos de sonido, soporte multitouch, tutorial integrado, i18n (es/en/pt), tests end-to-end con Playwright y la integración vía postMessage con la plataforma SURA Gaming (embebido en iframe web o WebView nativo).",
    demo: "https://pengu-rush.vercel.app",
    repo: "https://github.com/IgnacioGodoy2002/pengu-rush",
  },
  {
    title: "Safari Crossing",
    description:
      "Reescritura y expansión con temática safari de un clon de Crossy Road: cruzás carriles esquivando autos, camiones y trenes, cruzás ríos y coleccionás monedas. Integrado con SURA Gaming (cada 100 metros otorga SURA Points).",
    tech: [
      "TypeScript",
      "Three.js",
      "Vite",
      "localStorage",
      "i18n",
    ],
    role:
      "Reescritura y expansión propia sobre una base de terceros: el clon original en JavaScript vanilla (dannz510/Crossy_road) quedó como código muerto, y reescribí el juego completo en TypeScript sobre Three.js puro (sin motor de juego adicional) con arquitectura orientada a objetos: movimiento en grilla con detección de colisión propia, generación procedural infinita de carriles, vehículos con texturas generadas por canvas, cámara ortográfica con offset manual para la perspectiva isométrica, personaje animado con primitivas propias, sistema de monedas y puntaje, i18n (es/en/pt) y la misma integración con SURA Gaming que en Pengu Rush. Sin deploy público todavía.",
  },
  {
    title: "Coin Kingdom",
    description:
      "Puzzle de fusión estilo Suika Game: soltás monedas dentro de un frasco y las combinás para subir de tier hasta llegar a la moneda máxima. Juego completo con física real, menú, puntaje/récord persistente, pausa, game over, ranking y 3 idiomas.",
    tech: [
      "TypeScript",
      "Phaser 3",
      "Matter.js",
      "Webpack",
      "i18next",
      "localStorage",
    ],
    role:
      "Proyecto individual (24 commits, único autor). Diseñé 12 tiers de fusión con reacción en cadena al juntar 3 monedas del tier máximo, dos esquemas de control (tap y lanzador con teclado), y un sistema de tablero fijo con cámara adaptable (\"cover fit\") para encuadrar la física en cualquier viewport. Resolví a mano el renderizado HiDPI que Phaser no soporta nativamente en modo RESIZE (desacoplando el tamaño lógico del backing store del canvas y recalculando el escalado para que el hit-testing de punteros siguiera siendo preciso), calculé colliders circulares a partir del canal alfa real de cada sprite, e implementé i18n con detección de idioma por IP, ranking con medallas dibujadas a mano, PWA básica e integración por postMessage con la plataforma SURA (con modo mock para desarrollo) más CI/CD a GitHub Pages via GitHub Actions.",
    repo: "https://github.com/IgnacioGodoy2002/Juego-monedas",
  },
  {
    title: "Joystick Pop",
    description:
      "Bubble-shooter con temática de botones de control: disparás y unís 3+ bolas del mismo símbolo contra una grilla hexagonal que desciende progresivamente. Responsive (desktop y mobile), pensado para embeberse como minijuego dentro de una plataforma externa vía iframe.",
    tech: [
      "TypeScript",
      "Phaser 3",
      "Parcel",
      "RxJS",
      "jsx-dom",
      "i18next",
    ],
    role:
      "Proyecto individual (21 commits, único autor). Implementé la detección de matches y bolas huérfanas por flood-fill sobre la grilla hexagonal, ajusté el collider físico de las bolas por debajo del radio visual para que los tiros ajustados se sintieran bien (y resolví el bug de bolas atravesando huecos internos que eso generó con un chequeo de proximidad adicional), separé el escalado por device-pixel-ratio del breakpoint real de CSS para no romper la detección mobile en pantallas de alto DPR, forcé a mano el resize del canvas cuando el navegador mobile colapsa la barra de direcciones (Phaser fija el aspect ratio una sola vez al iniciar), y armé el protocolo propio sobre postMessage con envelope versionado y máquina de estados para reportar sesión y puntaje a la plataforma host SURA.",
    demo: "https://joystick-pop.vercel.app",
    repo: "https://github.com/IgnacioGodoy2002/joystick-pop",
  },
];
