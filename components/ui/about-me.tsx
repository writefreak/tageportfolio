"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const AboutMe = () => {
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="min-h-screen bg-[#f0ece4] px-8 md:px-16 lg:px-24 py-20 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mx-auto items-center">
        {/* Left */}
        <div className="flex flex-col justify-between h-full gap-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-7xl md:text-8xl font-display font-black text-[#0f0f0f] leading-none"
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

        {/* Center image — flip card */}
        <div
          ref={cardRef}
          className="aspect-3/4 w-full"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
          onClick={() => setFlipped((v) => !v)}
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full h-full"
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-2xl bg-[#1a1a1a] flex flex-col items-center justify-center gap-4 px-8"
              style={{ backfaceVisibility: "hidden" }}
            >
              <h2 className="text-white font-display text-2xl md:text-3xl font-black text-center leading-tight">
                Founder, Tagelabs
              </h2>
            </div>

            {/* Back — photo */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src="/tage.png"
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-end h-full gap-6 self-end"
        >
          <p className="md:text-base text-sm font-sans text-neutral-600 leading-relaxed">
            I'm a frontend engineer and founder of TageLabs Digital Solutions,
            with a strong focus on building modern, scalable, and
            conversion-driven web experiences.
          </p>
          <p className="md:text-base text-sm font-sans text-neutral-600 leading-relaxed">
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
            className="flex font-display items-center gap-2 text-[#0f0f0f] font-medium text-base group w-fit"
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
