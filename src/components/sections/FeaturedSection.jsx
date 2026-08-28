import { ExternalLink } from "lucide-react";
import { GridBeam } from "@/components/ui/grid-beam";
import { BrowserWindow } from "@/components/ui/mock-browser-window";
import { TextureButton } from "@/components/ui/texture-button";
import { projects } from "@/data/projects";

const barberFlow = projects.find((p) => p.title.startsWith("BarberFlow"));

export function FeaturedSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <GridBeam
        rows={3}
        cols={8}
        colorVariant="mono"
        theme="dark"
        borderRadius={24}
        className="bg-neutral-900 border border-neutral-800 text-white p-8 md:p-12"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
              Proyecto fullstack destacado
            </p>
            <h2 className="text-3xl font-black mt-2">
              BarberFlow ya está online
            </h2>
            <p className="mt-5 text-neutral-300 leading-8">
              Desarrollé BarberFlow como un sistema real de turnos para barbería, con frontend en React, backend en NestJS,
              base de datos PostgreSQL, autenticación JWT, disponibilidad dinámica, reservas, cancelaciones, Swagger y deploy
              completo en Vercel, Render y Neon.
            </p>

            {barberFlow?.demo && (
              <TextureButton asChild variant="accent" className="w-auto mt-6">
                <a href={barberFlow.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  Ver demo en vivo <ExternalLink size={16} />
                </a>
              </TextureButton>
            )}
          </div>

          <BrowserWindow
            variant="chrome"
            headerStyle="full"
            theme="dark"
            size="sm"
            url="barberflow-web-six.vercel.app"
            className="w-full max-w-full mx-auto"
          >
            {barberFlow?.image && (
              <img
                src={barberFlow.image}
                alt="Captura de la demo en vivo de BarberFlow"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            )}
          </BrowserWindow>
        </div>
      </GridBeam>
    </section>
  );
}
