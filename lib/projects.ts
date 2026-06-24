export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "zufeet",
    name: "Zufeet",
    description:
      "A storefront and brand site built under a formal delivery agreement, with product detail pages, a quantity slider, a custom date picker, and a reviews section shipped to a real deadline.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "heart-of-gold",
    name: "Heart of Gold Jewelry",
    description:
      "A full e-commerce build with a Supabase-backed admin dashboard, product listings, and order management, covering the storefront and the operations behind it.",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    slug: "zipdrift",
    name: "ZipDrift",
    description:
      "A bulk image extraction and ZIP download tool built to solve a real workflow problem, no database or auth required, just a focused utility that does one job well.",
    stack: ["Next.js", "JSZip", "Tailwind CSS"],
  },
  {
    slug: "tagelabs",
    name: "TageLabs",
    description:
      "The studio site and the admin systems behind it, including a reviews moderation panel, a projects manager, and a CV manager with a live preview pane.",
    stack: ["Next.js", "Supabase", "Framer Motion"],
  },
];
