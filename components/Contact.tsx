"use client";

import { ArrowUpRight, FolderGit2, Link2, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "heritagendwell2020@gmail.com",
    href: "mailto:heritagendwell2020@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/kaleidoscope",
    href: "https://github.com",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/endwellheritage",
    href: "https://linkedin.com",
    icon: Link2,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.description) return;
    setSent(true);
    setForm({ name: "", email: "", description: "" });
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="rounded-3xl border border-border bg-[#1a1a1a] px-8 py-14 sm:px-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-foreground md:text-5xl">
                Let's talk about what you're building.
              </h2>
              <p className="mt-4 text-neutral-400 md:text-sm text-xs font-sans leading-relaxed">
                Open to frontend roles, freelance projects, team collaborations
                and conversations that definitely lead somewhere interesting.
              </p>
            </div>

            <ul className="mt-10 space-y-5">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong">
                      <Icon
                        className="h-4 w-4 text-accent"
                        strokeWidth={1.75}
                      />
                    </span>
                    <span className="flex flex-col">
                      <span className="link-quiet font-display text-foreground text-sm md:text-base">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100"
                      strokeWidth={2}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-neutral-500 font-medium tracking-widest">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime-400/50 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-neutral-500 font-medium tracking-widest">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime-400/50 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-neutral-500 font-medium tracking-widest">
                Project Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Tell me what you're building..."
                rows={5}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime-400/50 transition-colors duration-300 resize-none"
              />
            </div>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl bg-lime-400/10 border border-lime-400/20 px-4 py-3 text-sm text-lime-400"
              >
                Got it! I'll get back to you soon.
              </motion.div>
            )}

            <motion.button
              onClick={handleSubmit}
              whileTap={{ scale: 0.97 }}
              className="mt-2 w-full rounded-xl py-3.5 text-sm font-semibold bg-lime-400 text-[#0f0f0f] hover:bg-lime-300 transition-colors duration-300"
            >
              {sent ? "Message sent!" : "Send Message"}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
