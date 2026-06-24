"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 w-5 h-5 bg-lime-400 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      {/* Ring */}
      {/* <motion.div
        style={{
          x: useSpring(cursorX, { damping: 28, stiffness: 180, mass: 0.8 }),
          y: useSpring(cursorY, { damping: 28, stiffness: 180, mass: 0.8 }),
        }}
        className="fixed top-0 left-0 w-8 h-8 border border-lime-400/50 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      /> */}
    </>
  );
};

export default CustomCursor;
