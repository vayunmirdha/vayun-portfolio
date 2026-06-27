import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Lightbulb, PenTool, Layout, Code2, CheckCircle2, Rocket, LifeBuoy } from "lucide-react";
import { useRef } from "react";

const PROCESS_STEPS = [
  { icon: Search, title: "Discovery", desc: "Understanding your brand, goals, and target audience." },
  { icon: Lightbulb, title: "Research", desc: "Analyzing competitors and market trends." },
  { icon: PenTool, title: "Wireframe", desc: "Structuring the layout and user journey." },
  { icon: Layout, title: "UI Design", desc: "Crafting a premium, pixel-perfect visual identity." },
  { icon: Code2, title: "Development", desc: "Building with modern, scalable web technologies." },
  { icon: CheckCircle2, title: "Testing", desc: "Ensuring responsiveness, speed, and zero bugs." },
  { icon: Rocket, title: "Launch", desc: "Deploying the site and optimizing for SEO." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing maintenance and continuous improvement." },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-32 relative bg-[#0F1115]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Workflow</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work <span className="text-gradient">Together</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven, transparent process that guarantees a stress-free experience and a world-class final product.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {/* Animated Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-purple to-cyan -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row group`}>
                  
                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-card border border-white/20 flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-[#0F1115]">
                    <span className="absolute -top-2 text-xs font-bold text-muted-foreground bg-[#0F1115] px-1 rounded-sm border border-white/10">0{idx + 1}</span>
                    <step.icon size={24} className="text-white group-hover:text-primary transition-colors" />
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`ml-24 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}
                  >
                    <div className={`glass-card p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.05] ${isEven ? 'md:origin-right' : 'md:origin-left'} hover:scale-[1.02]`}>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
