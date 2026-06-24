"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-[#f0ece4] px-8 md:px-16 lg:px-24 py-20 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mx-auto items-center">
        {/* Left */}
        <div className="flex flex-col justify-between h-full gap-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-7xl md:text-8xl font-black text-[#0f0f0f] leading-none"
          >
            Hey!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-display md:text-3xl font-semibold text-[#0f0f0f] leading-snug"
          >
            I'm Tage, a Frontend Engineer based in Port Harcourt, Nigeria.
          </motion.p>
        </div>

        {/* Center image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden aspect-[3/4] w-full bg-neutral-300"
        >
          <div className="w-full h-full bg-neutral-400 flex items-center justify-center text-neutral-500 text-sm">
            Your photo here
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-end h-full gap-6 self-end"
        >
          <p className="md:text-base text-sm font-sans text-[#0f0f0f]/80 leading-relaxed">
            I'm a frontend engineer and founder of TageLabs Digital Solutions,
            with a strong focus on building modern, scalable, and
            conversion-driven web experiences.
          </p>
          <p className="md:text-base  text-sm font-sans text-[#0f0f0f]/80 leading-relaxed">
            Over the years, I've designed and shipped websites and web
            applications for clients across industries, helping them launch
            faster and look better doing it.
          </p>
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
            className="flex items-center gap-2 text-[#0f0f0f] font-medium text-base group w-fit"
          >
            Get Started
            <span className="w-8 h-8 rounded-full border border-[#0f0f0f] flex items-center justify-center group-hover:bg-[#0f0f0f] group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={12} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
