"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const p1Words =
  "I'm a frontend engineer and founder of TageLabs Digital Solutions, with a strong focus on building modern, scalable, and conversion-driven web experiences.".split(
    " ",
  );
const p2Words =
  "Over the years, I've designed and shipped websites and web applications for clients across industries, helping them launch faster and look better doing it.".split(
    " ",
  );
const allWords = [...p1Words, ...p2Words];

function Word({
  word,
  start,
  end,
  scrollProgress,
}: {
  word: string;
  start: number;
  end: number;
  scrollProgress: any;
}) {
  const color = useTransform(
    scrollProgress,
    [start, end],
    ["#a3a3a3", "#0f0f0f"],
  );
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

function HighlightText({
  words,
  startProgress,
  endProgress,
  scrollProgress,
}: {
  words: string[];
  startProgress: number;
  endProgress: number;
  scrollProgress: any;
}) {
  return (
    <p className="md:text-base text-sm font-sans leading-relaxed">
      {words.map((word, i) => {
        const wordStart =
          startProgress + (i / allWords.length) * (endProgress - startProgress);
        const wordEnd =
          startProgress +
          ((i + 1) / allWords.length) * (endProgress - startProgress);
        return (
          <Word
            key={i}
            word={word}
            start={wordStart}
            end={wordEnd}
            scrollProgress={scrollProgress}
          />
        );
      })}
    </p>
  );
}

const AboutMe = () => {
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const set = () =>
      document.documentElement.style.setProperty(
        "--svh",
        `${window.innerHeight * 0.01}px`,
      );
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalWords = allWords.length;
  const p1End = p1Words.length / totalWords;

  return (
    <div ref={sectionRef} style={{ height: "calc(250 * var(--svh, 1vh))" }}>
      <section className="sticky top-0 min-h-screen bg-[#f0ece4] px-8 md:px-16 lg:px-24 py-20 flex items-center">
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
            <HighlightText
              words={p1Words}
              startProgress={0}
              endProgress={p1End}
              scrollProgress={scrollYProgress}
            />
            <HighlightText
              words={p2Words}
              startProgress={p1End}
              endProgress={1}
              scrollProgress={scrollYProgress}
            />
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
    </div>
  );
};

export default AboutMe;
