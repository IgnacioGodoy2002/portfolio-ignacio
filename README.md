# Ignacio Godoy — Portfolio profesional

Portfolio en español construido con React y Vite. Presenta el trabajo de Ignacio Godoy en desarrollo backend, productos fullstack y minijuegos.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Contenido y estructura

- `src/App.jsx`: composición de la página, navegación, fichas de proyecto, filtros y recorrido interactivo de SURA.
- `src/App.css`: identidad visual y adaptación a escritorio, tablet y móvil.
- `src/index.css`: fuentes locales, estilos base, foco y preferencias de movimiento.
- `src/data/portfolio.js`: casos de producto, colección de juegos y tecnologías.
- `src/data/gameCovers.js`: las ocho portadas ilustradas proporcionadas por el usuario y sus dimensiones originales.
- `src/data/rewards.js`: contrato, decisiones y resultados documentados en The Rewards Ledger.
- `src/components/RewardsCase.jsx`: tarjeta del caso técnico y detalle por juego.
- `docs/rewards-ledger-source.md`: copia del documento aportado por el usuario, conservada como fuente editorial.
- `src/data/projects.js`: datos originales de los seis proyectos de software, reutilizados por la nueva presentación.
- `src/data/profile.js`: nombre, contacto, enlaces profesionales y CV.
- `public/`: portadas originales, capturas, CV, guía y video de Frozen Lácteos.

La página incluye BarberFlow, Frozen Lácteos, cuatro proyectos de backend/análisis, el caso técnico The Rewards Ledger, el ecosistema SURA, ocho minijuegos y una mención al prototipo de supervivencia El valle de las manadas. Pengu Rush aparece dentro del caso de Cosmo Rush como su versión de origen.

## Interacciones

Las fichas de proyecto se abren como diálogos modales con navegación por teclado. La galería permite filtrar por arcade, puzzle y runner. El bloque SURA incluye pestañas y cuatro componentes de integración; representa el trabajo de integración documentado y no ejecuta operaciones contra servicios de SURA o Snag. El contacto abre el cliente de correo y permite copiar la dirección; no usa un formulario que simule envíos.

## Notas de contenido

- Se incorporaron tres capturas reales tomadas el 7 de octubre de 2026 en las versiones públicas de los juegos: Pengu Rush (https://pengu-rush.vercel.app/), Joystick Pop (https://joystick-pop.vercel.app/) y Coin Kingdom (https://juego-monedas.vercel.app/). La captura de Pengu Rush se identifica como versión de origen de Cosmo Rush; Coin Kingdom muestra el menú de la versión pública. Las imágenes anteriores del ZIP se conservan como archivos originales. Las capturas anteriores se conservan como material del proyecto. Las portadas actuales usan las ilustraciones proporcionadas por el usuario; no se presentan como capturas de gameplay.
- Snag se presenta como plataforma externa de fidelización integrada con SURA Gaming. El alcance descrito se apoya en el panel de reglas de Sura Gaming facilitado por el usuario: minijuegos, torneos, clanes, acciones sociales, QR, ruleta y exploración de la aplicación. No se atribuye a Ignacio la autoría de Snag ni se infieren mecanismos técnicos no verificados. Referencia de la plataforma: https://docs.snagsolutions.io/loyalty/available-loyalty-rules .
- El CV descargable es el archivo original. La formación se describe de forma general porque el CV y el texto anterior del portfolio tienen diferencias sobre la finalización de la Tecnicatura.
- Las fichas locales de Potrero Rush se describen por separado de SURA Points.
- Mostaza Run se identifica como proyecto en revisión.
- Las vistas actuales de varios minijuegos requieren acceso a la cuenta autorizada; los enlaces no cambian esos permisos.
- No se atribuyen colaboraciones comerciales por el uso de nombres de marcas en prototipos temáticos.

## Publicación

`npm run build` genera `dist/`. Se puede servir con un alojamiento de archivos estáticos. La configuración del mockup en Sites se conserva en `.openai/hosting.json`. Para publicarlo en otro dominio, actualizar el canonical, `og:url`, `robots.txt` y `sitemap.xml`. La imagen social original se conserva.

El video de Frozen Lácteos está optimizado y conserva su duración. Las fuentes están incluidas localmente para evitar depender de servicios tipográficos externos durante la carga.

## Ampliación: The Rewards Ledger

El caso técnico se incorporó a partir del documento proporcionado por el usuario el 7 de octubre de 2026. Sus cifras son resultados del caso documentado, no mediciones nuevas realizadas al actualizar este portfolio. No se infiere que los PR abiertos en ese documento continúen abiertos hoy, ni que ya hayan sido publicados.

- Cinco juegos abordados: Pengu Rush, Joystick Pop, Safari Crossing, Coin Kingdom y Playa Run. Pengu Rush ya tenía integración y sirvió como referencia; no se presentan cinco integraciones nuevas desde cero.
- Contrato INIT_GAME / GAME_COMPLETE con sesión, contexto de cuenta, puntaje y duración real.
- Recompensa diaria y recompensa por nuevos tramos sobre el récord personal. La regla diaria se evalúa de manera independiente.
- Se retira la afirmación anterior de una recompensa fija por cada 100 metros en Safari Crossing: el documento nuevo describe el esquema común de dos modalidades. La tasa de 7,5 puntos/s corresponde al modelo de validación, no a la acreditación de SP.
- Joystick Pop: falso positivo de 1.323 puntos y decisión explícita de operar sin curva temporal cuando corresponde. Las 24/24 pruebas son las reportadas en el caso.
- Coin Kingdom: parámetros de 800 puntos de umbral diario, 600 por tramo y doce niveles de monedas circunscritos a la versión documentada. No se extrapolan a todas las versiones del modo de parejas.
- Playa Run: integración en módulos ES, ranking y prueba E2E con colisión real, con PR abierto en el documento.
- Las mejoras y la reducción de 19,3 a 11,4 MB se atribuyen a Pengu Rush, la versión de origen de Cosmo Rush.

## Portadas de juegos

Se incorporaron las ocho portadas proporcionadas por el usuario el 7 de octubre de 2026, sin recortar, redibujar ni modificar sus píxeles. Se utilizan en la galería y en las fichas; Cosmo Rush también aparece en el destacado principal.

| Juego | Archivo |
| --- | --- |
| Cosmo Rush | `public/covers/cosmo-rush.jpeg` |
| Coin Kingdom | `public/covers/coin-kingdom.jpeg` |
| Safari Crossing | `public/covers/safari-crossing.jpeg` |
| Joystick Pop | `public/covers/joystick-pop.jpeg` |
| Playa Run | `public/covers/playa-run.jpeg` |
| Potrero Rush | `public/covers/potrero-rush.jpeg` |
| Burger King Run | `public/covers/burger-king-run.jpeg` |
| Mostaza Run | `public/covers/mostaza-run.jpeg` |

Las imágenes se encuadran completas con `object-fit: contain`, sin zoom ni elementos superpuestos. Los ocho juegos utilizan sus portadas ilustradas originales. Las futuras capturas y videos se incorporarán al recibir los archivos; no se muestran secciones vacías ni material simulado.
