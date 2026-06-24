import { ArrowUpRight, FolderGit2, Link2, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "heritage@tagelabs.com",
    href: "mailto:heritage@tagelabs.com",
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
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="rounded-3xl border border-border bg-surface px-8 py-14 sm:px-16 sm:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl italic text-foreground sm:text-4xl">
            Let's talk about what you're building.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Open to frontend roles, freelance projects, and conversations that
            might lead somewhere interesting. The fastest way to reach me is
            email.
          </p>
        </div>

        <ul className="mt-10 space-y-5">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 hrink-0 items-center justify-center rounded-full border border-border-strong">
                  <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-dim">
                    {label}
                  </span>
                  <span className="link-quiet text-foreground sm:text-lg">
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
    </section>
  );
}
