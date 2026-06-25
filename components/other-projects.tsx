"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "./ui/project-card";
import { projects, Project } from "@/lib/projects";

const PER_PAGE = 2;

export function OtherProjects({ currentSlug }: { currentSlug: string }) {
  const others: Project[] = projects.filter((p) => p.slug !== currentSlug);
  const TOTAL_PAGES = Math.ceil(others.length / PER_PAGE);
  const [page, setPage] = useState(0);

  const paginate = (dir: number) =>
    setPage((p) => Math.min(Math.max(p + dir, 0), TOTAL_PAGES - 1));

  if (others.length === 0) return null;

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className="bg-[#F0ECE4] px-8 md:px-16 lg:px-24 py-27"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className="text-3xl md:text-6xl font-display font-black text-[#0f0f0f] leading-none"
          >
            Other Projects
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className="hidden md:flex items-center gap-4"
          >
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                disabled={page === 0}
                className="w-9 h-9 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={() => paginate(1)}
                disabled={page === TOTAL_PAGES - 1}
                className="w-9 h-9 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
            },
          }}
          className="overflow-hidden w-full"
        >
          <motion.div
            animate={{ x: `${-page * 100}%` }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex w-full"
          >
            {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-4"
              >
                {others
                  .slice(pageIndex * PER_PAGE, pageIndex * PER_PAGE + PER_PAGE)
                  .map((project, i) => (
                    <div
                      key={project.slug}
                      className="flex flex-col gap-2 md:gap-3"
                    >
                      <ProjectCard
                        index={i}
                        project={project}
                        imageSrc={project.image}
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display text-[#1a1a1a] text-sm md:text-lg font-semibold leading-snug truncate">
                          {project.title}
                        </h3>
                        <span className="text-[10px] md:text-sm text-neutral-600 font-medium">
                          {project.desc}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.5 } },
          }}
          className="md:hidden flex items-center justify-center pt-12 gap-4"
        >
          <div className="flex gap-2">
            <button
              onClick={() => paginate(-1)}
              disabled={page === 0}
              className="w-9 h-9 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={page === TOTAL_PAGES - 1}
              className="w-9 h-9 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.5 } },
          }}
          className="flex gap-2 mt-10 justify-center"
        >
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: i === page ? 32 : 16,
                backgroundColor: "rgba(15,15,15,0.15)",
              }}
            >
              {i === page && (
                <motion.div
                  layoutId="dot"
                  className="absolute inset-0 bg-[#0f0f0f] rounded-full"
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default OtherProjects;
