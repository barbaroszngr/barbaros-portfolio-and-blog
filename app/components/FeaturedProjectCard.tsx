import Link from "next/link";
import { Eye } from "lucide-react";
import { Card } from "./card";

interface Project {
  slug: string;
  date?: string;
  title: string;
  description?: string;
}

interface FeaturedProjectCardProps {
  project: Project;
  views: number;
}

export function FeaturedProjectCard({ project, views }: FeaturedProjectCardProps) {
  return (
    <Card>
      <Link href={`/projects/${project.slug}`}>
        <article className="relative w-full h-full p-4 md:p-8">
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

          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
          >
            {project.title}
          </h2>
          {project.description && (
            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
              {project.description}
            </p>
          )}
          <div className="absolute bottom-4 md:bottom-8">
            <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
          </div>
        </article>
      </Link>
    </Card>
  );
}