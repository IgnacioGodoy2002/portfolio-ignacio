import { GridBeam } from "@/components/ui/grid-beam";

export function FeaturedSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <GridBeam
        rows={3}
        cols={8}
        colorVariant="mono"
        theme="dark"
        borderRadius={24}
        className="bg-slate-950 text-white p-8 md:p-12"
      >
        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
          Proyecto fullstack destacado
        </p>
        <h2 className="text-3xl font-black mt-2">
          BarberFlow ya está online
        </h2>
        <p className="mt-5 text-slate-300 leading-8 max-w-3xl">
          Desarrollé BarberFlow como un sistema real de turnos para barbería, con frontend en React, backend en NestJS,
          base de datos PostgreSQL, autenticación JWT, disponibilidad dinámica, reservas, cancelaciones, Swagger y deploy
          completo en Vercel, Render y Neon.
        </p>
      </GridBeam>
    </section>
  );
}
