import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { HowItWorks, Packages, Subsidy, WhyUs, Faq } from "@/components/Sections";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { Footer, WhatsAppFloat } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Packages />
      <Subsidy />
      <Projects />
      <Reviews />
      <WhyUs />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
