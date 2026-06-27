import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0 bg-aurora opacity-30" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtdjRoNHYtNGgtdi00aDRWMTJoLTRWOGgtdi00aDRWMEgwdjYwaDM2VjM0em0tNCAwVjEyaC00djIySDIwdjRoNHY0aDR2LTRoNHYtNHo4IDBoNHY0aC00di00em0wLTRoNHYtNGgtNHY0em0wLTRoNHYtNGgtNHY0em0wLTRoNHYtNGgtNHY0em0wLTRoNHYtNGgtNHY0eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full z-0 opacity-20"
          animate={{
            y: ["0vh", "-100vh"],
            x: Math.random() * 100 - 50,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div 
        className="container relative z-10 px-6 mx-auto"
        style={{ y, opacity }}
      >
        <motion.div
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center border-t border-white/10"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-medium text-sm mb-6 uppercase tracking-wider backdrop-blur-md">
            Premium Web Developer & Agency Founder
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Crafting <span className="text-gradient">Premium</span> Digital <br className="hidden md:block"/>
            Experiences That Grow Businesses.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            I build modern, high-converting, fast, SEO-friendly websites that help businesses stand out and generate more customers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => scrollTo("#projects")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple text-white font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              Book a Call
            </button>
            <a 
              href="#" 
              className="w-full sm:w-auto px-6 py-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-white transition-colors group"
            >
              Download CV
              <Download size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground/60 font-medium tracking-wide">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"/> Responsive</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> SEO Optimized</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"/> Fast Loading</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"/> Premium UI</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer"
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground/60">Scroll Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center p-1 bg-white/5 backdrop-blur-sm"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
