import { motion } from "framer-motion";
import { 
  SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, 
  SiSupabase, SiFramer, SiGreensock, SiFigma, SiGithub
} from "react-icons/si";

type IconComponent = React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;

const CssIcon: IconComponent = ({ size = 24, className, style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} style={style}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const VscodeIcon: IconComponent = ({ size = 24, className, style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} style={style}>
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
);

const TECH_STACK = [
  { icon: SiHtml5 as IconComponent, name: "HTML5", color: "#E34F26" },
  { icon: CssIcon, name: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
  { icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { icon: SiGreensock, name: "GSAP", color: "#88CE02" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiGithub as IconComponent, name: "GitHub", color: "#FFFFFF" },
  { icon: VscodeIcon, name: "VS Code", color: "#007ACC" },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Tools & Frameworks</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technologies <span className="text-gradient">I Use</span></h2>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative flex overflow-hidden mb-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-12 items-center min-w-full flex-shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 text-white/50 hover:text-white transition-colors grayscale hover:grayscale-0">
                <tech.icon size={48} />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-12 items-center min-w-full flex-shrink-0 absolute top-0 left-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 text-white/50 hover:text-white transition-colors grayscale hover:grayscale-0">
                <tech.icon size={48} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mt-20">
          {TECH_STACK.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-6 glass-card rounded-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ '--hover-color': tech.color } as React.CSSProperties}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: tech.color }} />
              <tech.icon size={36} className="text-white/70 group-hover:text-white transition-colors duration-300 mb-4" />
              <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
