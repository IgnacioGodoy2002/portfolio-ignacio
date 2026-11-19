// Case-study snapshot supplied by the user in The Rewards Ledger(1).md.
// Review states and measurements describe that document, not a new production audit.
export const rewardsProject = {
  id: 'rewards-ledger',
  kind: 'engineering',
  title: 'The Rewards Ledger',
  category: 'Backend e integración',
  type: 'Ingeniería de plataforma · SURA Gaming',
  summary: 'Integración, validación y calibración de recompensas para cinco minijuegos.',
  description: 'Un contrato compartido entre los minijuegos, la API de SURA y Snag para gestionar sesiones, validar resultados y calcular SURA Points. El trabajo reúne integración de clientes, diagnóstico de errores y decisiones de validación adaptadas a cada mecánica de juego.',
  challenge: 'Aplicar reglas de recompensa consistentes a cinco juegos con ritmos y sistemas de puntaje diferentes, evitando desajustes de configuración y rechazos de partidas legítimas.',
  contribution: 'Trabajo en los clientes de juego y los servicios de plataforma: comunicación por postMessage, reglas de Snag, migraciones con TypeORM, sincronización de récords e idioma de cuenta, diagnóstico de falsos positivos y pruebas de integración.',
  highlights: [
    'Contrato INIT_GAME / GAME_COMPLETE con sesión, idioma de cuenta, récord, puntaje y duración real.',
    'Recompensa diaria y recompensa por nuevos tramos de récord personal.',
    'Lectura de reglas de Snag para mantener umbrales e importes alineados con el backend.',
    'Validación de puntajes según la mecánica: curvas derivadas de constantes y excepciones explícitas para juegos sin un modelo temporal adecuado.',
    'Pruebas del intercambio entre juego y plataforma, junto con una revisión de la configuración de recompensas.',
  ],
  tech: ['JavaScript', 'Módulos ES', 'postMessage', 'Snag', 'TypeORM', 'Phaser', 'Pruebas E2E'],
  metrics: [
    { value: '5', label: 'juegos abordados' },
    { value: '3', label: 'repositorios intervenidos' },
    { value: '2', label: 'modalidades de recompensa' },
    { value: '1', label: 'falso positivo corregido' },
  ],
  snapshotStatus: 'Estado al documentar el caso: Cosmo Rush ya contaba con integración en producción. Los cambios de Joystick Pop, Safari Crossing, Coin Kingdom y Playa Run figuraban con solicitudes de cambio (PR) abiertas.',
  contract: [
    { label: 'INIT_GAME', title: 'Contexto de la cuenta', text: 'La plataforma entrega sesión, token, nombre de jugador, idioma de cuenta y récord real. En Cosmo Rush se conserva la elección manual de idioma realizada dentro del juego.' },
    { label: 'GAME_COMPLETE', title: 'Resultado verificable', text: 'El juego informa puntaje y duración real. El servidor toma la menor duración entre su propio reloj y la reportada por el cliente.' },
    { label: 'REGLA DIARIA', title: 'Participación con un mínimo', text: 'Una cantidad fija de SP una vez por día, al superar el umbral de puntaje definido en la regla de Snag.' },
    { label: 'REGLA POR PUNTAJE', title: 'Mejora del récord personal', text: 'SP por nuevos tramos alcanzados por encima del mejor resultado previo. Repetir un puntaje ya superado no vuelve a generar esta recompensa.' },
  ],
  engineeringCases: [
    {
      game: 'Cosmo Rush', status: 'En producción al documentar el caso',
      title: 'Una base existente, mejoras en la experiencia',
      problem: 'La integración de recompensas y su curva de validación ya funcionaban. Persistían desajustes de idioma de cuenta y récord, además de un fallo del botón de inicio al terminar una partida.',
      solution: 'Propagación del idioma mediante INIT_GAME respetando la selección manual, actualización del récord y corrección del inicio de nuevas partidas. La curva existente, basada en la simulación del juego, se utilizó como referencia para los demás casos.',
      evidence: 'Optimización documentada: 19,3 → 11,4 MB de compilación, con 8 archivos sin uso eliminados.',
    },
    {
      game: 'Joystick Pop', status: 'PR abierto al documentar',
      title: 'Corregir un falso positivo que bloqueaba puntos y ranking',
      problem: 'Una partida legítima de 1.323 puntos fue marcada como sospechosa. La curva se había calibrado con sólo tres partidas y un máximo observado de 403 puntos; el rechazo impedía tanto la recompensa como la actualización del ranking.',
      solution: 'Cambio en MiniGameRewardService para tratar la ausencia de curva como una configuración explícita. En ese modo se admite el puntaje del cliente sin ese control temporal. La sincronización del código publicado se separó del cambio de velocidad de descenso para facilitar la revisión.',
      evidence: 'Validación registrada en el caso: 24 de 24 pruebas correctas.',
    },
    {
      game: 'Safari Crossing', status: 'PR abierto al documentar',
      title: 'Derivar el modelo de puntaje desde las reglas del juego',
      problem: 'La integración necesitaba una configuración inicial de Snag y un límite de puntaje sustentado en el funcionamiento del cliente.',
      solution: 'El modelo se calculó desde el salto de 200 ms por carril y la frecuencia de carriles con monedas: 2 de cada 8. Antes de preparar la migración se consultaron las dos reglas de Snag para verificar los importes que leería el backend.',
      evidence: 'Modelo documentado: 7,5 puntos/s de tasa base y un margen de seguridad del 15 %.',
    },
    {
      game: 'Coin Kingdom', status: 'PR abierto al documentar',
      title: 'Adaptar la validación a las cadenas de combinaciones',
      problem: 'El puntaje depende de la profundidad de las fusiones y sus bonificaciones, por lo que una curva de puntos por segundo no representa de forma adecuada las partidas.',
      solution: 'Configuración inicial sin curva temporal, con esa decisión registrada en la migración. Se mantienen las reglas diaria y por mejora del récord. La versión analizada contempla doce niveles de monedas y bonificaciones por combinaciones avanzadas.',
      evidence: 'Reglas documentadas: mínimo diario de 800 puntos y tramos de recompensa de 600 puntos.',
    },
    {
      game: 'Playa Run', status: 'PR abierto al documentar',
      title: 'Conectar un juego independiente con la plataforma',
      problem: 'El runner no contaba con postMessage ni un intercambio de sesión con SURA.',
      solution: 'Desarrollo de la capa de integración en módulos JavaScript: señal de disponibilidad, inicio de sesión, sincronización de récord, pausa, reanudación y envío de resultado con duración real. También se incorporó un ranking con los tres primeros puestos y acceso a la lista completa.',
      evidence: 'Prueba E2E documentada: un anfitrión simulado envió INIT_GAME y recibió GAME_COMPLETE tras una colisión real. La distancia de aceleración pasó de 580 a 980 m.',
    },
  ],
  note: 'Las métricas, configuraciones y estados de revisión corresponden al momento registrado en The Rewards Ledger. La integración de recompensas se presenta por separado de los desbloqueos locales de Potrero Rush.',
  links: [],
};

export const gameRewardsNotes = {
  cosmo: {
    label: 'Integración de Cosmo Rush',
    text: 'The Rewards Ledger documenta en la versión de origen la sincronización del idioma de cuenta y del récord, la corrección del inicio de nuevas partidas y la reducción de la compilación de 19,3 a 11,4 MB.',
    status: 'La integración base ya estaba en producción al documentar el caso.',
  },
  joystick: {
    label: 'Recompensas y validación',
    text: 'Corrección de un falso positivo que impedía acreditar SP y actualizar el ranking. La ausencia de curva de puntaje pasa a ser una decisión explícita de configuración. El caso registra 24 de 24 pruebas correctas.',
    status: 'Cambios con PR abierto al documentar el caso.',
  },
  safari: {
    label: 'Configuración inicial con Snag',
    text: 'Reglas diaria y por mejora del récord, verificadas contra Snag. El modelo de validación se deriva de la duración de los saltos y la frecuencia de carriles con monedas, con una tasa base de 7,5 puntos/s y un margen del 15 %.',
    status: 'Cambios con PR abierto al documentar el caso.',
  },
  coin: {
    label: 'Reglas adaptadas a las fusiones',
    text: 'Configuración sin curva temporal de puntaje por la naturaleza de las cadenas de combinaciones. La versión documentada mantiene recompensa diaria y por mejora del récord, con umbral diario de 800 puntos y tramos de 600 puntos.',
    status: 'Cambios con PR abierto al documentar el caso.',
  },
  playa: {
    label: 'Integración con SURA desarrollada',
    text: 'Capa de postMessage con sesión, sincronización de récord, pausa, reanudación y reporte de puntaje con duración real. Ranking integrado y prueba E2E del intercambio completo tras una colisión del juego.',
    status: 'Cambios con PR abierto al documentar el caso.',
  },
};
