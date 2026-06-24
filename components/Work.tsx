import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section id="work" className="mx-auto md:px-14 px-6 py-10 sm:px-8 sm:py-20">
      <div className="mb-12 max-w-xl">
        <h2 className="font-display text-3xl italic text-foreground sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-3 text-xs md:text-sm text-muted">
          A few projects that shaped how I think about building for real
          constraints, not just demo conditions.
        </p>
      </div>

      <ul className="">
        {projects.map((project) => (
          <li key={project.slug} className="group py-8 sm:py-10">
            <a
              href={project.href ?? "#contact"}
              className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
            >
              <div className="flex-1">
                <h3 className="flex items-center gap-2 font-display text-xl text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {project.name}
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={2}
                  />
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>
              </div>

              <ul className="flex shrink-0 flex-wrap gap-2 sm:max-w-45 sm:justify-end">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
