import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import heroImage from "@/app/assets/hero-optimized.png";
import { buildHomeJsonLd, buildHomeMetadata } from "@/lib/home-seo";

export const metadata = buildHomeMetadata(heroImage);

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomeJsonLd(heroImage)} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Philosophy />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
