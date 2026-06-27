import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, label }: { end: number, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-8 glass-card rounded-2xl">
      <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
        {count}{label.includes("%") ? "%" : "+"}
      </div>
      <div className="text-muted-foreground uppercase tracking-widest text-sm font-medium">
        {label.replace("%", "")}
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="py-20 relative bg-[#0F1115]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Counter end={100} label="Projects" />
          <Counter end={50} label="Clients" />
          <Counter end={99} label="Satisfaction%" />
          <Counter end={24} label="Support/7" />
        </div>
      </div>
    </section>
  );
}
