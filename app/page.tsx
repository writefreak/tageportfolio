import Header from "@/components/ui/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Mobileheader from "@/components/ui/mobile-header";
import MainHero from "@/components/main-hero";
import AboutMe from "@/components/ui/about-me";

export default function Home() {
  return (
    <>
      {/* <ScrollProgress /> */}

      <Header />
      <main>
        {/* <Hero /> */}
        <MainHero />
        <AboutMe />
        {/* <Work /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
