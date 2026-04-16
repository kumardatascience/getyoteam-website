import Hero          from "@/app/components/Hero";
import Achievements  from "@/app/components/Achievements";
import Services      from "@/app/components/Services";
import Portfolio     from "@/app/components/Portfolio";
import KaggleSection from "@/app/components/KaggleSection";
import About         from "@/app/components/About";
import Testimonials  from "@/app/components/Testimonials";
import TechStack     from "@/app/components/TechStack";
import Contact       from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <Services />
      <Portfolio />
      <KaggleSection />
      <About />
      <Testimonials />
      <TechStack />
      <Contact />
    </>
  );
}
