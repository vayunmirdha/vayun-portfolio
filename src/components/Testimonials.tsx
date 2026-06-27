import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Vayun transformed our restaurant's online presence. Bookings increased 40% in the first month!",
    author: "Rajesh Sharma",
    role: "Bella Vista Restaurant",
    initials: "RS"
  },
  {
    text: "Our property listings look stunning. Leads have doubled since the redesign.",
    author: "Priya Mehta",
    role: "Prestige Realty",
    initials: "PM"
  },
  {
    text: "The website looks so luxurious, clients compliment us on it every day.",
    author: "Ananya Singh",
    role: "Luxe Salon",
    initials: "AS"
  },
  {
    text: "Memberships skyrocketed after our new site. The design is phenomenal.",
    author: "Vikram Patel",
    role: "Peak Fitness",
    initials: "VP"
  },
  {
    text: "Professional, fast, and exactly what we needed. Highly recommend!",
    author: "Dr. Rahul Sharma",
    role: "Clinic",
    initials: "DR"
  },
  {
    text: "Our conversion rate jumped 60%. Vayun's work speaks for itself.",
    author: "Neha Gupta",
    role: "CoreBiz",
    initials: "NG"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients <span className="text-gradient">Say</span></h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center glass-card p-10 rounded-3xl"
            >
              <Quote size={48} className="text-white/10 mb-6" />
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-8 leading-relaxed">
                "{TESTIMONIALS[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-purple flex items-center justify-center text-white font-bold">
                  {TESTIMONIALS[currentIndex].initials}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{TESTIMONIALS[currentIndex].author}</h4>
                  <p className="text-sm text-muted-foreground">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={16} className="text-gold fill-gold" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-primary" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
