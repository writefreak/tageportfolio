"use client";
import { motion } from "framer-motion";

const SERVICES = [
  "Frontend Development",
  "Website Design & Build",
  "SaaS Product Engineering",
  "Mobile Development",
  "Product Consulting",
];

export default function ServiceMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-[#1a1a1a] py-3">
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {[...SERVICES, ...SERVICES].map((service, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display font-semibold uppercase text-background whitespace-nowrap shrink-0"
            style={{ fontSize: "clamp(11px, 1.6vw, 15px)" }}
          >
            {service}
            <span className="text-background">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
