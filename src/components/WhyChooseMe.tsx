import { motion } from "framer-motion";
import { Zap, HeartHandshake, ShieldCheck, Code, Smartphone, Rocket, Star, Layers, Settings, DollarSign, Clock } from "lucide-react";

const REASONS = [
  { icon: Layers, title: "Modern Design", desc: "Aesthetic, award-winning UI." },
  { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and high scores." },
  { icon: Search, title: "SEO Friendly", desc: "Built to rank on search engines." },
  { icon: Smartphone, title: "Responsive", desc: "Flawless on all devices." },
  { icon: Star, title: "Premium UI", desc: "Attention to typography and whitespace." },
  { icon: Code, title: "Clean Code", desc: "Maintainable, bug-free development." },
  { icon: ShieldCheck, title: "Scalable Architecture", desc: "Built to grow with your business." },
  { icon: Rocket, title: "Fast Delivery", desc: "Strict adherence to deadlines." },
  { icon: HeartHandshake, title: "Lifetime Support", desc: "I'm here even after launch." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium quality at fair rates." },
  { icon: Clock, title: "Excellent Communication", desc: "Always available, no ghosting." },
];
import { Search } from "lucide-react";

export default function WhyChooseMe() {
  return (
    <section className="py-32 relative bg-[#0F1115]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Clients <span className="text-gradient">Choose Me</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/[0.05] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
