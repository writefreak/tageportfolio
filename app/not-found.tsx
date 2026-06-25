"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-14 overflow-hidden bg-[#F0ECE4]">
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

      <div className="flex flex-col items-center gap-4 w-full">
        <h1
          className="font-display text-[#1a1a1a] uppercase text-center leading-none tracking-tight font-black w-full"
          style={{ fontSize: "clamp(100px, 28vw, 340px)" }}
        >
          404
        </h1>
        <p
          className="font-display text-[#1a1a1a]/40 uppercase text-center tracking-tight font-black"
          style={{ fontSize: "clamp(16px, 3vw, 36px)" }}
        >
          Page not found
        </p>
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-accent"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <motion.span
            className="absolute inset-0 bg-[#1a1a1a]"
            variants={{ rest: { y: "100%" }, hover: { y: "0%" } }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2 p-4 font-display font-semibold transition-colors duration-300 group text-[#1a1a1a] hover:text-white"
            style={{ fontSize: "clamp(10px, 1.8vw, 14px)" }}
          >
            /BACK TO HOME
            <ArrowUpRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
