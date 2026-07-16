import Image from "next/image";
import image1 from "@/app/assets/1.webp";
import image2 from "@/app/assets/3.webp";
import image3 from "@/app/assets/2.webp";
import antiqueBharat from "@/app/assets/antique-bharat.png";
import mauryaEstate from "@/app/assets/maurya-estate.png";
import rugsBhadohi from "@/app/assets/rugs-bhadohi.png";

const projects = [
  {
    id: 1,
    category: "FINTECH",
    name: "InvestorsAvenue",
    description:
      "A finance and investment platform connecting investors with opportunities — mutual funds, stocks and wealth management services.",
    url: "https://investorsavenue.co.in",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    image: image1,
  },
  {
    id: 2,
    category: "VENDOR MARKETPLACE",
    name: "WeddinPlanner",
    description:
      "A two-sided wedding vendor marketplace connecting couples with photographers, decorators, caterers and planners across India.",
    url: "https://weddinplanner.com",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: image3,
  },
  {
    id: 3,
    category: "CAREER PLATFORM",
    name: "Navikara",
    description:
      "A comprehensive career opportunities platform for Indian students — aggregating government jobs, exam results, admit cards, scholarships and internships in one place.",
    url: "https://navikara.com",
    tags: ["Next.js", "SEO", "MongoDB"],
    image: image2,
  },
  {
    id: 4,
    category: "E-COMMERCE",
    name: "Antique Bharat",
    description:
      "A premium handicrafts and decor storefront celebrating timeless Indian craft — handpicked collections with an elegant, tradition-rooted shopping experience.",
    url: "https://antiquebharat.vercel.app",
    tags: ["Next.js", "E-Commerce", "Tailwind CSS"],
    image: antiqueBharat,
  },
  {
    id: 5,
    category: "REAL ESTATE",
    name: "Maurya Estate",
    description:
      "A modern real estate platform for discovering premium projects, listings, and property opportunities across cities with a clean buyer-focused experience.",
    url: "https://maurya-estate.vercel.app",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    image: mauryaEstate,
  },
  {
    id: 6,
    category: "E-COMMERCE",
    name: "Rugs Bhadohi",
    description:
      "A luxury rugs e-commerce brand from Bhadohi — curated collections, lifestyle merchandising, and a refined shopping journey for modern interiors.",
    url: "https://bhadohi.com",
    tags: ["Next.js", "E-Commerce", "Tailwind CSS"],
    image: rugsBhadohi,
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Work</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white">
            Digital products that make an impact
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg mb-5 border border-white/10">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1920}
                  height={988}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
                {project.category}
              </p>
              <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                {project.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
