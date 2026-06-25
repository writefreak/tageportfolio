"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MainHero() {
  return (
    <section className="relative mx-auto h-[600px] md:min-h-screen flex flex-col justify-between px-6 sm:px-8 md:px-14 pt-36 pb-10 overflow-hidden">
      {/* Gridlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main text */}
      <div className="flex flex-col items-center justify-center w-full md:mt-auto overflow-hidden">
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[#1a1a1a] uppercase text-center leading-none tracking-tight font-black w-full"
            style={{ fontSize: "clamp(52px, 14vw, 160px)" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Frontend
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[#1a1a1a] uppercase text-center leading-none tracking-tight font-black w-full"
            style={{ fontSize: "clamp(52px, 14vw, 160px)" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            Engineer
          </motion.h1>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="flex items-end justify-between pt-8 pb-4 gap-4"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      >
        <span
          className="font-display font-black text-[#1a1a1a] leading-none shrink-0"
          style={{ fontSize: "clamp(20px, 4vw, 40px)" }}
        >
          ©{new Date().getFullYear()}
        </span>

        <button
          onClick={() => {
            const phone = "2349169615448";
            const message =
              "Hi Heritage, I have a project in mind and I would like to bring it to life with your help.";
            window.open(
              `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
              "_blank",
            );
          }}
          className="flex items-center gap-2 font-display font-semibold text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors duration-300 group"
          style={{ fontSize: "clamp(9px, 1.8vw, 14px)" }}
        >
          /AVAILABLE FOR WORK
          <span className="w-7 h-7 shrink-0 rounded-full border border-current flex items-center justify-center group-hover:bg-[#0f0f0f] group-hover:text-white group-hover:border-[#0f0f0f] transition-all duration-300">
            <ArrowUpRight size={12} />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
