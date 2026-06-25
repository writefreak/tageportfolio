export type Project = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  tags?: string[];
  live_url: string;
  /** Two paragraphs shown on the dynamic project page. */
  longDesc: [string, string];
};

export const projects: Project[] = [
  {
    slug: "scribblr",
    title: "Scribblr",
    desc: "Tech Blog website",
    image: "/proj1.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    live_url: "",
    longDesc: [
      "Scribblr is a tech blog built around readability first: a clean type scale, generous line length, and a layout that gets out of the way of long-form writing.",
      "The build focuses on fast page loads and a simple content structure that's easy to extend with new posts and categories without touching the core layout.",
    ],
  },
  {
    slug: "youngs-solution",
    title: "Young's Solution",
    desc: "Real Estate Solutions",
    image: "/proj2.png",
    tags: ["Next.js", "Tailwind CSS"],
    live_url: "https://youngssolution.com",
    longDesc: [
      "A real estate brand site designed to present listings and services with the polish and trust signals a property business needs to convert visitors into leads.",
      "Built with a clear information hierarchy, from hero to services to contact, so prospective clients can find what they need without digging.",
    ],
  },
  {
    slug: "zufeet",
    title: "Zufeet",
    desc: "Handcrafted Footwear Store",
    image: "/proj3.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    live_url: "https://zufeet.vercel.app",
    longDesc: [
      "A storefront and brand site built under a formal delivery agreement, with product detail pages, a quantity slider, a custom date picker, and a reviews section shipped to a real deadline.",
      "The build balances a handcrafted, boutique feel with the practical mechanics of an online store, covering everything from browsing to checkout-ready product pages.",
    ],
  },
  {
    slug: "k-graphics",
    title: "K-Graphics",
    desc: "Graphic designer portfolio",
    image: "/proj4.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    live_url: "",
    longDesc: [
      "A portfolio site for a graphic designer, built to let visual work carry the page with minimal interface noise getting in the way of the imagery.",
      "Galleries and project pages are structured so new work can be added easily, keeping the focus on craft rather than maintenance.",
    ],
  },
  {
    slug: "heart-of-gold",
    title: "Heart Of Gold Jewels",
    desc: "Jewelry vending website",
    image: "/proj5.png",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    live_url: "https://hogj-jewels.vercel.app",
    longDesc: [
      "A full e-commerce build with a Supabase-backed admin dashboard, product listings, and order management, covering the storefront and the operations behind it.",
      "The admin side handles inventory and orders directly, so the business can run day-to-day without needing a developer for routine updates.",
    ],
  },
  {
    slug: "zipdrift",
    title: "Zipdrift",
    desc: "Everyday Tool",
    image: "/proj6.png",
    tags: ["Next.js", "JSZip", "Tailwind CSS"],
    live_url: "https://zipdrift.vercel.app",
    longDesc: [
      "A bulk image extraction and ZIP download tool built to solve a real workflow problem, no database or auth required, just a focused utility that does one job well.",
      "It strips out the repetitive part of pulling images from bulky links, turning a manual chore into a single click.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
