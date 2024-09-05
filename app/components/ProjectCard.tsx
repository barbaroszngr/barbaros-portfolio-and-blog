import Link from "next/link";
import { Eye } from "lucide-react";
import { Card } from "./card";

interface Project {
  slug: string;
  date?: string;
  title: string;
  description?: string;
}

interface ProjectCardProps {
  project: Project;
  views: number;
  compact?: boolean;
}

export function ProjectCard({ project, views, compact = false }: ProjectCardProps) {
  return (
    <Card>
      <Link href={`/projects/${project.slug}`}>
        <article className={`relative w-full h-full p-4 ${compact ? '' : 'md:p-8'}`}>
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-100">
              {project.date ? (
                <time dateTime={new Date(project.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(project.date))}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Eye className="w-4 h-4" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
            </span>
          </div>

          <h2 className={`${compact ? 'mt-2 text-xl' : 'mt-4 text-2xl'} font-bold text-zinc-100 group-hover:text-white font-display`}>
            {project.title}
          </h2>
          {!compact && project.description && (
            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
              {project.description}
            </p>
          )}
        </article>
      </Link>
    </Card>
  );
}