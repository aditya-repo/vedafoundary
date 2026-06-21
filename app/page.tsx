import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        {/* <Values /> */}
        <Testimonials />
        <Philosophy />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
