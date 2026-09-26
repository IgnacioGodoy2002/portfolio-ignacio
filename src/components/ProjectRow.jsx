import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const LINK_FIELDS = [
  { key: "demo", label: "Ver demo", variant: "default" },
  { key: "frontend", label: "Código frontend", variant: "outline" },
  { key: "backend", label: "Código backend", variant: "outline" },
  { key: "repo", label: null, variant: "outline" },
  { key: "swagger", label: "Swagger API", variant: "outline" },
  { key: "video", label: "Video demo", variant: "outline" },
  { key: "manual", label: "Guía de usuario", variant: "outline" },
];

function ProjectRow({ item, index, isOpen, onToggle }) {
  return (
    <Reveal as="div" delay={index * 60} className="border-b border-neutral-800">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`project-panel-${index}`}
        className="w-full flex items-center gap-4 md:gap-6 py-6 text-left group"
      >
        <span className="font-mono text-sm text-neutral-600 w-7 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-mono font-bold uppercase text-lg md:text-2xl text-neutral-100 group-hover:text-blue-400 transition-colors">
            {item.title}
          </span>
          <span className="hidden md:block font-mono text-xs text-neutral-500 mt-1 truncate">
            {item.tech.slice(0, 4).join(" · ")}
          </span>
        </span>
        <Plus
          size={20}
          className={`shrink-0 text-neutral-500 transition-transform duration-300 ${isOpen ? "rotate-45 text-blue-400" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`project-panel-${index}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-8 pl-11 md:pl-13 grid md:grid-cols-[1fr_auto] gap-6">
            <div>
              <p className="text-sm leading-7 text-neutral-400 max-w-2xl">{item.description}</p>

              {item.role && (
                <p className="mt-4 text-sm text-neutral-300 max-w-2xl">
                  <strong className="font-mono text-blue-400">ROL:</strong> {item.role}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 px-3 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {LINK_FIELDS.filter(({ key }) => item[key]).map(({ key, label, variant }) => (
                  <Button key={key} asChild variant={variant} size="sm">
                    <a href={item[key]} target="_blank" rel="noreferrer">
                      {label ?? item.buttonText ?? "Ver código"}
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {item.image && (
              <img
                src={item.image}
                alt={`Captura de ${item.title}`}
                className="w-full md:w-64 h-40 object-cover object-top rounded-lg border border-neutral-800"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectList({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-neutral-800">
      {items.map((item, index) => (
        <ProjectRow
          key={item.title}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
