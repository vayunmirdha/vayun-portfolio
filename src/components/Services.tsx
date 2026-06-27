import { motion } from "framer-motion";
import { 
  Laptop, Code, LineChart, Building2, ShoppingCart, 
  Image as ImageIcon, Search, RefreshCw, Wrench, Zap, ArrowRight 
} from "lucide-react";

const SERVICES = [
  { icon: Laptop, title: "Website Design", desc: "Custom, pixel-perfect UI crafted for your brand's unique identity." },
  { icon: Code, title: "Website Development", desc: "Clean, scalable, and secure code built on modern architectures." },
  { icon: LineChart, title: "Landing Pages", desc: "High-converting funnels designed to turn visitors into leads." },
  { icon: Building2, title: "Business Websites", desc: "Professional corporate presences that establish authority and trust." },
  { icon: ShoppingCart, title: "E-commerce Websites", desc: "Beautiful online stores optimized for seamless shopping experiences." },
  { icon: ImageIcon, title: "Portfolio Websites", desc: "Showcase your work and achievements beautifully." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google, get found, and drive organic traffic." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize your outdated online presence with a fresh luxury look." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing care, security updates, and performance monitoring." },
  { icon: Zap, title: "Speed Optimization", desc: "Lightning-fast performance tuning to reduce bounce rates." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-[#0F1115]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Build <span className="text-gradient">For You</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand, engage your audience, and drive measurable business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative glass-card p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)] flex flex-col h-full"
            >
              {/* Hover Gradient Border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-purple to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-[2px] p-[1px]">
                <div className="absolute inset-0 bg-[#0F1115] rounded-2xl z-0" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                  <service.icon className="text-white group-hover:text-primary transition-colors" size={24} />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                
                <a href="#contact" className="mt-auto flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-cyan-400 transition-colors">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
