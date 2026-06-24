import { Code2, Layers, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Frontend engineering",
    description:
      "React, Next.js, and TypeScript, with an eye for the small interaction details that make an interface feel finished rather than assembled.",
  },
  {
    icon: Layers,
    title: "Systems that hold up",
    description:
      "Component libraries, admin dashboards, and product UIs built to stay maintainable once the first version stops being the only version.",
  },
  {
    icon: Sparkles,
    title: "Design-literate code",
    description:
      "I work from real design sensibility, not just implementation. Spacing, type, and motion get the same attention as logic and state.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl italic text-foreground sm:text-4xl">
            A bit about how I work
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            I'm a Computer Science graduate of Rivers State University and
            the founder of TageLabs Digital Solutions, a studio building
            landing pages, frontend systems, and brand-level digital work.
            This site is where the engineering speaks for itself, separate
            from the studio.
          </p>
        </div>

        <div className="space-y-8">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-5">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
