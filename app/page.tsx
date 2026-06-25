import Header from "@/components/ui/Header";
import Hero from "@/components/Hero";
import About from "@/components/how-work";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Mobileheader from "@/components/ui/mobile-header";
import MainHero from "@/components/main-hero";
import AboutMe from "@/components/ui/about-me";
import HowWork from "@/components/how-work";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import { ScrollFab } from "@/components/ui/scroll-fab";

export default function Home() {
  return (
    <>
      <main>
        {/* <ScrollFab /> */}
        <MainHero />

        <AboutMe />
        <HowWork />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
