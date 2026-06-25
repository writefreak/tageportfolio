"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Frontend Development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    description:
      "Unique, functional and responsive interfaces built to convert, from landing pages to complex mobile apps",
  },
  {
    title: "Website Design & Build",
    tags: ["UI Design", "Framer Motion", "CMS"],
    description:
      "I handle the design thinking, the component architecture, and the final polish your brand deserves.",
  },
  {
    title: "SaaS Product Engineering",
    tags: ["Dashboards", "Auth", "APIs", "Admin Panels"],
    description:
      "I build aesthetically clean and scalable interfaces your users seamlessly interact with.",
  },
  {
    title: "Mobile Development",
    tags: ["React Native", "iOS", "Android"],
    description:
      "I build cross-platform mobile apps that feel native with same code quality, and attention to all screens.",
  },
  {
    title: "Product Consulting",
    tags: ["Strategy", "UI Audit", "Tech Direction"],
    description:
      "Not sure what to build or where to start? I'll help you think through the product and move with clarity.",
  },
];

const Services = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className=" px-8 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl font-display font-black text-[#0f0f0f] leading-none"
          >
            What I Offer
          </motion.h2>
        </div>

        {/* List */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group border-t last:border-b cursor-default"
              style={{ borderColor: "#a3a3a3" }}
            >
              <div className="flex items-center justify-between py-7 md:py-8 gap-8">
                {/* Left */}
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="h-2 w-2 rounded-full bg-[#0f0f0f]"></span>
                  <h3
                    className={`text-xl md:text-3xl font-display font-bold transition-all duration-500 ${
                      hovered === i
                        ? "text-[#0f0f0f] translate-x-1"
                        : hovered !== null
                          ? "text-[#0f0f0f]/30"
                          : "text-[#0f0f0f]"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Right */}
                <div className="flex items-center gap-6 shrink-0">
                  <div className="hidden md:flex items-center gap-2">
                    {service.tags.map((tag, t) => (
                      <span
                        key={t}
                        className={`text-xs flex items-center  font-medium transition-all duration-500 ${
                          hovered === i
                            ? "text-[#0f0f0f]/50"
                            : hovered !== null
                              ? "text-[#0f0f0f]/15"
                              : "text-[#0f0f0f]/35"
                        }`}
                      >
                        {tag}
                        {t < service.tags.length - 1 && (
                          <span className="ml-2 text-xl">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.div
                animate={{
                  height: hovered === i ? "auto" : 0,
                  opacity: hovered === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-7 text-xs font-sans md:text-sm text-[#0f0f0f]/50 max-w-xl pl-12 md:pl-16 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
