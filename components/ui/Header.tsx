"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Me", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleConnect = () => {
    const phone = "2349169615448";
    const message =
      "Hi Heritage, I have a project in mind and I would like to bring it to life with your help.";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.div
        layout
        className="bg-[#1a1a1a] rounded-2xl overflow-hidden w-75 pointer-events-auto"
        style={{ borderRadius: 16 }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href={"/"}>
            <span className="text-white font-display font-bold text-sm md:text-base tracking-tight">
              Heritage
            </span>
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="bg-white/90 rounded-xl w-9 h-9 flex items-center justify-center transition-all duration-200 active:scale-95"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={16} className="text-[#1a1a1a]" />
                </motion.span>
              ) : (
                <motion.span
                  key="dots"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex gap-0.75 items-center"
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="block w-1 h-1 rounded-full bg-[#1a1a1a]"
                    />
                  ))}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block text-white/80 hover:text-lime-400 text-sm font-medium py-2 border-b border-white/5 last:border-none transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.04, duration: 0.2 }}
                  className="pt-2"
                >
                  <button
                    onClick={handleConnect}
                    className="w-full rounded-xl py-2.5 text-sm font-semibold text-[#1a1a1a] bg-lime-400 hover:bg-lime-300 active:scale-95 transition-all duration-200"
                  >
                    Let's Connect
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Header;
