import Image from "next/image";
import { ArrowRight, PlusIcon } from "./icons";
import heroImage from "@/app/assets/hero-optimized.png";

export default function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <p className="font-serif text-gold text-2xl lg:text-3xl font-medium mb-2">
              VEDA FOUNDRY
            </p>
            <h1 className="font-serif text-3xl lg:text-[2.75rem] leading-tight font-semibold text-navy mb-6">
              We build product-grade web platforms for modern businesses
            </h1>
            <p className="text-muted text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              We blend ancient principles of clarity and craftsmanship with modern
              engineering to deliver digital products that are precise, powerful, and
              built to last.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="btn-primary shrink-0">
                <span className="whitespace-nowrap">Start a Project</span>
                <PlusIcon className="text-gold" />
              </a>
              <a href="#work" className="link-arrow text-navy">
                Explore Our Work
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src={heroImage}
              alt="Veda Foundry sacred geometry"
              className="w-full max-w-md lg:max-w-lg h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
