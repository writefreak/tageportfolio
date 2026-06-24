"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextAlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#", label: "Portfolio" },
  { href: "#ab", label: "About Me" },
  { href: "#rev", label: "Reviews" },
  { href: "/products", label: "Contact" },
];

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      {/* Mobile glass pill header */}
      <div className="w-full flex justify-between items-center border border-gray-200 dark:border dark:border-white/10 not-dark:bg-white/80 dark:bg-white/5 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] dark:backdrop-blur-xl backdrop-blur-md shadow-md rounded-full p-1 px-2">
        <Link href="/" className="h-10 w-10 flex items-center">
          <div className="font-display font-bold pl-5">Heritage.</div>
        </Link>
        <button
          className="flex justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <TextAlignJustify color={pathname === "/" ? "white" : "#6A3E19"} />
        </button>
      </div>

      {/* Sheet — untouched */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-60 text-text bg-background font-display flex flex-col items-center justify-center gap-8 transition-all duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-7 text-text text-2xl transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>

        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "text-2xl font-nunito font-semibold text-text transition-all text-center duration-300",
              menuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6",
            )}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/preorder"
          onClick={() => setMenuOpen(false)}
          className={cn(
            "bg-brand hover:bg-brand-light text-brand-fg font-display text-sm px-8 py-4 rounded-xl transition-all duration-300",
            menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6",
          )}
          style={{ transitionDelay: `${NAV_LINKS.length * 0.07}s` }}
        >
          Pre-Order Now
        </Link>
      </div>
    </>
  );
}
