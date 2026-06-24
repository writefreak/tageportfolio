import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto h-150 justify-center md:min-h-screen flex flex-col items-center md:px-14 px-6 pt-36 pb-20 sm:px-8 sm:pt-32 sm:pb overflow-hidden">
      {/* Gradient + noise background layer */}
      <div className="absolute inset-0 -z-10">
        {/* Top brand-color glow */}
        <div
          className="absolute inset-x-0 top-0 h-150"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 0%, rgba(92,143,31,0.22), rgba(92,143,31,0) 70%)",
          }}
        />

        {/* Frosted blur to soften the gradient edges */}
        <div className="absolute inset-0 backdrop-blur-2xl" />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(92,143,31,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(92,143,31,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Rough/grainy noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      <div className="max-w-2xl flex flex-col items-center">
        <p className="font-sans italic py-4 text-base md:text-lg font-light">
          I'm Heritage, a Frontend Engineer
        </p>
        <h1 className="font-display text-4xl text-center font-bold leading-[1.15] tracking-tight text-foreground sm:text-7xl sm:leading-[1.12] lg:text-7xl">
          Translating Unique Ideas into{" "}
          <span className="text-accent italic">Seamless</span> User Experiences.
        </h1>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            className="inline-flex font-sans items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-dim hover:text-foreground"
          >
            See the work
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>

          <a
            href="#contact"
            className="inline-flex font-sans items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent-dim transition-colors hover:text-foreground"
          >
            My Resume
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
