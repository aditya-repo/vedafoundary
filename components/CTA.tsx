import { PhoneIcon } from "./icons";
import { SITE_PHONE_URL } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-4">
          Ready to build something extraordinary?
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-lg mx-auto">
          Let&apos;s discuss your project and explore how we can bring your vision to life
          with precision and craftsmanship.
        </p>
        <a href={SITE_PHONE_URL} className="btn-gold">
          <PhoneIcon className="w-4 h-4" />
          Free Demo
        </a>
      </div>
    </section>
  );
}
