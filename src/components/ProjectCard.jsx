import { ExternalLink } from "lucide-react";
import {
  TextureCard,
  TextureCardHeader,
  TextureCardTitle,
  TextureCardContent,
  TextureCardFooter,
} from "@/components/ui/texture-card";
import { Button } from "@/components/ui/button";

const LINK_FIELDS = [
  { key: "demo", label: "Ver demo", variant: "default" },
  { key: "frontend", label: "Código frontend", variant: "outline" },
  { key: "backend", label: "Código backend", variant: "outline" },
  { key: "repo", label: null, variant: "outline" },
  { key: "swagger", label: "Swagger API", variant: "outline" },
  { key: "video", label: "Video demo", variant: "outline" },
  { key: "manual", label: "Guía de usuario", variant: "outline" },
];

export function ProjectCard({ item }) {
  return (
    <TextureCard className="h-full flex flex-col">
      <TextureCardHeader className="px-6 pt-6">
        <TextureCardTitle>{item.title}</TextureCardTitle>
      </TextureCardHeader>

      <TextureCardContent className="flex-1 flex flex-col">
        <p className="text-sm leading-7 text-neutral-400">
          {item.description}
        </p>

        {item.role && (
          <p className="mt-4 text-sm text-neutral-300">
            <strong>Rol:</strong> {item.role}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-5">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </TextureCardContent>

      <TextureCardFooter className="flex-wrap gap-2 justify-start mt-auto">
        {LINK_FIELDS.filter(({ key }) => item[key]).map(({ key, label, variant }) => (
          <Button key={key} asChild variant={variant} size="sm">
            <a href={item[key]} target="_blank" rel="noreferrer">
              {label ?? item.buttonText ?? "Ver código"}
              <ExternalLink size={14} />
            </a>
          </Button>
        ))}
      </TextureCardFooter>
    </TextureCard>
  );
}
