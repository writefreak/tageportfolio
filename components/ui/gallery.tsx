"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  desc: string;
  hasVideo?: boolean;
};

interface GalleryCarouselProps {
  items: GalleryItem[];
  autoPlayInterval?: number;
}

const VISIBLE_RANGE = 2;

export default function DesktopGallery({ items }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const count = items.length;

  const goTo = useCallback(
    (nextIndex: number, dir: number) => {
      setDirection(dir);
      setActiveIndex(((nextIndex % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(
    () => goTo(activeIndex + 1, 1),
    [activeIndex, goTo],
  );
  const goPrev = useCallback(
    () => goTo(activeIndex - 1, -1),
    [activeIndex, goTo],
  );

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -50) goNext();
    else if (info.offset.x > 50) goPrev();
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
  };

  const active = items[activeIndex];

  return (
    <div className="w-full hidden md:block">
      <div
        className="relative mx-auto w-full max-w-5xl sm:h-85 md:h-100"
        style={{ perspective: 1200 }}
      >
        <AnimatePresence initial={false} custom={direction}>
          {items.map((item, index) => {
            const offset = getOffset(index);
            if (Math.abs(offset) > VISIBLE_RANGE) return null;

            const isActive = offset === 0;
            const absOffset = Math.abs(offset);
            const xStep = 230;
            const x = offset * xStep;
            const scale = isActive ? 1 : Math.max(0.72, 1 - absOffset * 0.16);
            const opacity = isActive ? 1 : Math.max(0.35, 1 - absOffset * 0.32);
            const zIndex = 10 - absOffset;
            const rotateY = offset * -8;

            return (
              <motion.div
                key={item.id}
                className="absolute left-1/2 top-1/2 select-none"
                style={{
                  zIndex,
                  width: "min(78vw, 360px)",
                  willChange: "transform, opacity",
                }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${x}px)`,
                  y: "-50%",
                  scale,
                  opacity,
                  rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                  mass: 0.9,
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (!isActive) goTo(index, offset > 0 ? 1 : -1);
                }}
              >
                <div
                  className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5"
                  style={{
                    boxShadow: isActive
                      ? "0 30px 60px -15px rgba(0,0,0,0.35), 0 10px 20px -10px rgba(0,0,0,0.25)"
                      : "0 20px 40px -15px rgba(0,0,0,0.25)",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  {item.hasVideo && (
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm">
                      <Play className="h-4 w-4 fill-neutral-800 text-neutral-800" />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Name + desc */}
      <div className="mt-10 flex flex-col items-center gap-1 text-center">
        <AnimatePresence mode="wait">
          <motion.h3
            key={active.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-lg font-bold text-[#0f0f0f]"
          >
            {active.title}
          </motion.h3>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={active.desc}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="text-sm text-[#0f0f0f]/40"
          >
            {active.desc}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="pt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400 text-neutral-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400 text-neutral-700 transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
