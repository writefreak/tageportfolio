"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  ArrowDown,
  Search,
  Sparkles,
  GamepadDirectional,
} from "lucide-react";

const TRAY_ITEMS = [
  { key: "top", label: "Scroll to top", icon: ArrowUp },
  { key: "bottom", label: "Scroll to bottom", icon: ArrowDown },
];

export function ScrollFab() {
  const [open, setOpen] = useState(false);

  const scrollTo = (pos: "top" | "bottom") => {
    window.scrollTo({
      top: pos === "top" ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const handleAction = (key: string) => {
    if (key === "top" || key === "bottom") {
      scrollTo(key as "top" | "bottom");
      return;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {open &&
          TRAY_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.key}
                type="button"
                onClick={() => handleAction(item.key)}
                initial={{ opacity: 0, scale: 0.4, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.4, y: 16 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 26,
                  delay: i * 0.04,
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label={item.label}
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[#1a1a1a] shadow-lg shadow-lime/20 appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50"
              >
                <Icon className="h-4 w-4" strokeWidth={2.5} />
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#1a1a1a] px-2.5 py-1 text-xs font-medium text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open scroll menu"}
        whileTap={{ scale: 0.9 }}
        animate={open ? { y: 0, rotate: 45 } : { y: [0, -8, 0], rotate: 0 }}
        transition={
          open
            ? { type: "spring", stiffness: 380, damping: 22 }
            : {
                y: {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: { duration: 0.3 },
              }
        }
        className="relative flex h-13 w-13 items-center justify-center rounded-full bg-accent text-[#1a1a1a] shadow-xl shadow-lime/30 appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50"
      >
        <motion.span
          animate={{
            scale: open ? [1, 1.4, 1] : 1,
            opacity: open ? [0.6, 0, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 rounded-full bg-lime"
        />
        <GamepadDirectional
          className="h-5 w-5 relative z-10"
          strokeWidth={2.25}
        />
      </motion.button>
    </div>
  );
}
