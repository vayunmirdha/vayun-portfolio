import { motion } from "framer-motion";
import { Download, Code2, Rocket, HeartHandshake } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend Development", value: 95 },
    { name: "UI/UX Design", value: 90 },
    { name: "Backend & APIs", value: 85 },
    { name: "SEO & Performance", value: 92 },
  ];

  const values = [
    { icon: <Code2 className="text-primary" size={24} />, title: "Clean Code", desc: "Maintainable & scalable architecture." },
    { icon: <Rocket className="text-purple-500" size={24} />, title: "Fast Performance", desc: "Lightning fast load times." },
    { icon: <HeartHandshake className="text-cyan-500" size={24} />, title: "Client First", desc: "Transparent communication." },
  ];

  return (
    <section id="about" className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Architect Behind<br/>The <span className="text-gradient">Experiences</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src="/src/assets/images/about-photo.png" 
                alt="Vayun Mirdha" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl z-20 pointer-events-none" />
            </div>

            {/* Floating Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -right-8 -bottom-8 glass-card p-6 rounded-2xl hidden md:block"
            >
              <p className="text-5xl font-bold text-gradient mb-1">5+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Years of<br/>Excellence</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Hi, I'm Vayun Mirdha.</h3>
            <div className="space-y-6 text-muted-foreground font-light text-lg mb-10">
              <p>
                I'm a premium freelance web developer and the founder of <strong>Tech Grow Web Agency</strong>. I specialize in crafting bespoke digital experiences for ambitious brands, luxury businesses, and forward-thinking entrepreneurs.
              </p>
              <p>
                My mission is simple: to build websites that don't just look beautiful, but act as powerful growth engines. Every pixel I push and every line of code I write is driven by the goal of converting your visitors into loyal clients.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6 mb-12">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm text-white/90">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-cyan rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Action */}
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3 text-white font-medium group">
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download Full Resume
            </button>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-32">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card p-8 rounded-2xl hover-glow group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
