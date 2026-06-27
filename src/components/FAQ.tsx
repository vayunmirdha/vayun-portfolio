import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "How long does a website take?", a: "Most projects take between 2 to 4 weeks depending on the complexity, features, and how quickly we finalize the designs." },
  { q: "What is your pricing?", a: "My pricing is custom to each project depending on the requirements, starting from ₹15,000 / $500 for standard business websites." },
  { q: "Do you provide revisions?", a: "Yes, I offer unlimited revisions during the development phase to ensure the final product matches your exact vision." },
  { q: "Will the website be mobile-friendly?", a: "Absolutely. Every website I build is 100% responsive and tested across all device sizes from mobile to large desktop screens." },
  { q: "Do you provide SEO?", a: "Yes, on-page SEO is included with all websites to ensure you start ranking on Google right after launch." },
  { q: "What technologies do you use?", a: "I specialize in modern stacks like React, Next.js, Node.js, and Tailwind CSS to guarantee the best performance." },
  { q: "Do you offer maintenance?", a: "Yes, I offer monthly maintenance plans to keep your website updated, secure, and running smoothly." },
  { q: "How do I get started?", a: "Simply book a discovery call or send me a WhatsApp message. We'll discuss your goals and how I can help achieve them." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-lg font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-5 text-muted-foreground">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
