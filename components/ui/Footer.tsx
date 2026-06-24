export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-t-gray-400 px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted-dim sm:flex-row">
        <p>© {year} Endwell Heritage.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
