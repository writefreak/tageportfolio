"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { OtherProjects } from "./other-projects";

const toAbsoluteUrl = (url: string) =>
  url.startsWith("http") ? url : `https://${url}`;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ProjectView({ project }: { project: Project }) {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="bg-background px-8 md:px-16 lg:px-24 py-20 md:py-27 min-h-screen"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors duration-300"
            >
              <ArrowLeft size={14} />
              Go Back
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
            className="mt-8 overflow-hidden rounded-2xl h-[260px] md:h-[420px] w-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-left"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease, delay: 0.05 },
              },
            }}
            className="flex items-end justify-between mt-10 gap-4 flex-wrap"
          >
            <h1 className="text-3xl md:text-5xl font-display font-black text-[#1a1a1a] leading-none">
              {project.title}
            </h1>

            {project.live_url && (
              <a
                href={toAbsoluteUrl(project.live_url)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-[#1a1a1a] text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-300 shrink-0"
              >
                Visit live site
                <ArrowUpRight size={14} />
              </a>
            )}
          </motion.div>

          {project.tags && project.tags.length > 0 && (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.1,
                    staggerChildren: 0.06,
                  },
                },
              }}
              className="flex flex-wrap gap-2 mt-5"
            >
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="text-xs md:text-sm font-medium text-[#1a1a1a]/70 border border-[#1a1a1a]/15 rounded-full px-3 py-1"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease, delay: 0.15 },
              },
            }}
            className="mt-10 space-y-5 max-w-2xl md:max-w-4xl"
          >
            <p className="text-sm md:text-lg text-[#1a1a1a]/80 leading-relaxed">
              {project.longDesc}
            </p>
          </motion.div>
        </div>
      </motion.main>
      <OtherProjects currentSlug={project.slug} />
    </>
  );
}
