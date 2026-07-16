import Image from "next/image";
import type { StaticImageData } from "next/image";
import { EyeIcon } from "./icons";
import image1 from "@/app/assets/1.webp";
import image2 from "@/app/assets/3.webp";
import image3 from "@/app/assets/2.webp";
import antiqueBharat from "@/app/assets/antique-bharat.png";
import mauryaEstate from "@/app/assets/maurya-estate.png";
import rugsBhadohi from "@/app/assets/rugs-bhadohi.png";

type Project = {
  id: number;
  category: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  image: StaticImageData;
};

const liveProjects: Project[] = [
  {
    id: 1,
    category: "REAL ESTATE",
    name: "InvestorsAvenue",
    description:
      "A live real estate marketplace with RERA-verified listings from top developers across Gurugram, Noida, Pune and more — locality pricing, profiles, and lead capture.",
    url: "https://investorsavenue.co.in",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    image: image1,
  },
  {
    id: 2,
    category: "E-COMMERCE",
    name: "Rugs Bhadohi",
    description:
      "A luxury rugs e-commerce brand from Bhadohi — curated collections, lifestyle merchandising, and a refined shopping journey for modern interiors.",
    url: "https://bhadohi.com",
    tags: ["Next.js", "E-Commerce", "Tailwind CSS"],
    image: rugsBhadohi,
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
];

const demoProjects: Project[] = [
  {
    id: 4,
    category: "VENDOR MARKETPLACE",
    name: "WeddinPlanner",
    description:
      "A two-sided wedding vendor marketplace connecting couples with photographers, decorators, caterers and planners across India.",
    url: "https://weddinplanner.com",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: image3,
  },
  {
    id: 5,
    category: "E-COMMERCE",
    name: "Antique Bharat",
    description:
      "A premium handicrafts and decor storefront celebrating timeless Indian craft — handpicked collections with an elegant, tradition-rooted shopping experience.",
    url: "https://antiquebharat.vercel.app",
    tags: ["Next.js", "E-Commerce", "Tailwind CSS"],
    image: antiqueBharat,
  },
  {
    id: 6,
    category: "REAL ESTATE",
    name: "Maurya Estate",
    description:
      "A modern real estate platform for discovering premium projects, listings, and property opportunities across cities with a clean buyer-focused experience.",
    url: "https://maurya-estate.vercel.app",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    image: mauryaEstate,
  },
];

function ProjectCard({ project, isDemo }: { project: Project; isDemo?: boolean }) {
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-lg mb-5 border border-white/10">
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={988}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
        />
        {isDemo && (
          <span className="absolute top-3 left-3 rounded px-2 py-1 text-[10px] font-semibold tracking-wider uppercase bg-navy/80 text-gold border border-gold/40">
            Demo
          </span>
        )}
      </div>
      <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
        {project.category}
      </p>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-serif text-xl font-semibold text-white">{project.name}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live view — ${project.name}`}
          className="inline-flex items-center gap-1.5 shrink-0 rounded-full border border-gold/60 text-gold px-3 py-1.5 text-xs font-semibold tracking-wide hover:bg-gold hover:text-navy transition-colors"
        >
          <EyeIcon className="w-3.5 h-3.5" />
          Live view
        </a>
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

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
          {liveProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 mb-8 text-center">
          <p className="section-label mb-2">Demo Representation</p>
          <p className="text-white/50 text-sm">
            Sample websites built to showcase design and product capability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {demoProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isDemo />
          ))}
        </div>
      </div>
    </section>
  );
}
