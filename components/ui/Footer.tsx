"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] px-8 md:px-16 lg:px-24 pt-24 pb-0 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 pb-24 items-start">
        {/* Left — tagline, spans 2 cols */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <h2 className="text-[#F3F0EC] font-display font-black leading-[1.05] text-4xl md:text-5xl">
            Building Unique <br />& Seamless User Experiences.
          </h2>
        </motion.div>

        {/* Spacer col */}
        <div className="hidden md:block md:col-span-1" />

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1"
        >
          <p className="text-white/40 text-base font-display font-medium mb-6 tracking-wide">
            /Quick links
          </p>
          <div className="md:flex flex-wrap gap-2 grid grid-cols-3">
            {links.map((link) => (
              <motion.div
                key={link.label}
                className="relative overflow-hidden rounded-2xl border border-white/15"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  variants={{ rest: { y: "100%" }, hover: { y: "0%" } }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
                <Link
                  href={link.href}
                  className="relative z-10 px-4 py-2 text-sm text-white/70 hover:text-[#0f0f0f] transition-colors duration-300 inline-block font-display"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1"
        >
          <p className="text-white/40 text-base font-display font-medium mb-6 tracking-wide">
            /Contact
          </p>

          <a
            href="mailto:tagelabstudios@gmail.com"
            className="text-white/80 text-sm font-sans hover:text-white transition-colors duration-300 block mb-6"
          >
            tagelabstudios@gmail.com
          </a>
          <motion.button
            onClick={() => {
              const phone = "2349169615448";
              const message =
                "Hi Heritage, I have a project in mind and I would like to bring it to life with your help.";
              window.open(
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                "_blank",
              );
            }}
            className="relative overflow-hidden px-5 py-2.5 rounded-2xl text-sm font-semibold text-[#0f0f0f] bg-lime-400"
            whileHover="hover"
            initial="rest"
          >
            <motion.span
              className="absolute inset-0 bg-white"
              variants={{ rest: { y: "100%" }, hover: { y: "0%" } }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
            <span className="relative z-10">Let's Connect</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Big name watermark */}
      <div className="relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-[#ffffff08] font-black hidden md:block leading-none select-none"
          style={{ fontSize: "clamp(80px, 18vw, 220px)" }}
        >
          HERITAGE
        </motion.p>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between pb-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} TageLabs. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Designed & built by Tage</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
