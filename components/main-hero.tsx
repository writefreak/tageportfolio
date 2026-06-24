import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function MainHero() {
  return (
    <section className="relative mx-auto h-100 justify-center md:min-h-screen flex flex-col items-center md:px-14 px-6 pt-36 pb-20 sm:px-8 sm:pt sm:pb overflow-hidden">
      {/* Gradient + noise background layer */}

      <div className="max-w-2xl flex flex-col items-center">
        <h1 className="font-display text-black text-5xl uppercase text-center leading-none tracking-tight font-extrabold sm:text-7xl sm:leading-[1.12] lg:text-[160px]">
          Frontend <br /> Engineer
        </h1>
      </div>
    </section>
  );
}
