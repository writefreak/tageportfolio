import { useMotionValue, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    quote:
      "Working with Tage was seamless from start to finish. He understood the brief immediately and delivered something that looked better than what I had in mind.",
    name: "Chidi Okafor",
    role: "Startup Founder",
  },
  {
    quote:
      "The attention to detail is unreal. Every interaction, every animation felt intentional. Our site went from embarrassing to something we're proud to share.",
    name: "Amara Nwosu",
    role: "Marketing Director",
  },
  {
    quote:
      "Fast, clean, and no back-and-forth. Tage just gets it. The codebase he handed over was so well structured our dev team had zero complaints.",
    name: "Femi Adeyemi",
    role: "Product Manager",
  },
  {
    quote:
      "I've worked with a few frontend engineers before but none that move this fast without cutting corners. Genuinely impressive output.",
    name: "Sola Bello",
    role: "Indie Maker",
  },
];

export default function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[0];
  index: number;
}) {
  const initials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        whileHover={{ rotateX: 25, scale: 0.92 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "bottom center",
        }}
        className="bg-[#1a1a1a] backdrop-blur-2xl rounded-2xl p-6 flex flex-col justify-between gap-10 min-h-80 cursor-default"
      >
        <p className="text-white/80 text-sm leading-relaxed">{review.quote}</p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center shrink-0">
            <span className="text-[#0f0f0f] text-xs font-black">
              {initials(review.name)}
            </span>
          </div>
          <div>
            <p className="text-white text-sm font-display font-semibold leading-tight">
              {review.name}
            </p>
            <p className="text-white/40 font-sans text-xs mt-0.5">
              {review.role}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
