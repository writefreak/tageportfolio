"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "My Frontend Stack",
    description:
      "React, Next.js, Framer-Motion and TypeScript, with an eye for the small interaction details that make an interface unique.",
  },
  {
    icon: Layers,
    title: "Functional & Scalable Systems",
    description:
      "Component libraries, admin dashboards, and product UIs built to stay maintainable once the first version evolves.",
  },
  {
    icon: Sparkles,
    title: "Design-literate code",
    description:
      "I work from real design sensibility, not just implementation. Spacing, type, and motion get the same attention as logic and state.",
  },
];

export default function HowWork() {
  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className="font-display text-[#1A1A1A] font-black text-3xl sm:text-5xl"
          >
            How I Work
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className="md:text-base pt-7 text-sm font-sans text-neutral-600 leading-relaxed"
          >
            I build with intent, focusing on clean code structure, better
            functionality and fast load times. I pay attention to the details
            most people skip, every single thing that makes your project feel
            finished instead of just functional.
          </motion.p>
        </div>

        <div className="space-y-8">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
              className="flex gap-5"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 text-[#1a1a1a]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-medium text-[#1a1a1a] font-display">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs font-sans md:text-sm leading-relaxed text-neutral-500">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
