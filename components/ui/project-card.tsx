import { Project } from "@/lib/projects";
import Link from "next/link";

export function ProjectCard({
  project,
  index,
  imageSrc,
}: {
  project: Project;
  index: number;
  imageSrc: string;
}) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="group relative overflow-hidden rounded-2xl h-[200px] md:h-[380px] w-full">
        <img
          src={imageSrc}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover  object-left transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4"></div>
      </article>
    </Link>
  );
}
