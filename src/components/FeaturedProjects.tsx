import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Bella Vista Restaurant",
    category: "Restaurant",
    image: "/src/assets/images/project-restaurant.png",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    title: "Prestige Realty",
    category: "Real Estate",
    image: "/src/assets/images/project-real-estate.png",
    tech: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    id: 3,
    title: "Luxe Salon & Spa",
    category: "Salon",
    image: "/src/assets/images/project-salon.png",
    tech: ["React", "Node.js", "Stripe"],
  },
  {
    id: 4,
    title: "Peak Fitness",
    category: "Gym",
    image: "/src/assets/images/project-gym.png",
    tech: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    id: 5,
    title: "Dr. Sharma Clinic",
    category: "Doctor",
    image: "/src/assets/images/project-clinic.png",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    id: 6,
    title: "CoreBiz Solutions",
    category: "Corporate",
    image: "/src/assets/images/project-corporate.png",
    tech: ["Next.js", "Framer Motion", "CMS"],
  },
];

const CATEGORIES = ["All", "Restaurant", "Real Estate", "Salon", "Gym", "Doctor", "Corporate", "E-commerce"];

// 3D Tilt Card Component
function ProjectCard({ project }: { project: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="group relative rounded-2xl overflow-hidden glass-card aspect-[4/3] flex flex-col"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <div className="mb-2">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-md border border-primary/20">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs text-muted-foreground bg-white/10 px-2 py-1 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          <button className="flex-1 py-2.5 rounded-lg bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            <ExternalLink size={16} /> Live Preview
          </button>
          <button className="flex-1 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-colors backdrop-blur-md">
            <BookOpen size={16} /> Case Study
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold">Selected <span className="text-gradient">Work</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-2 md:justify-end max-w-2xl">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-muted-foreground border border-dashed border-white/10 rounded-2xl">
            No projects found in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
