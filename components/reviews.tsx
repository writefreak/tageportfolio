"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import ReviewCard from "./ui/review-card";

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

const Reviews = () => {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-display md:text-6xl font-black text-[#0f0f0f] leading-none mb-12"
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
