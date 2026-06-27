import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-[rgba(5,5,5,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="relative group">
          <span className="text-2xl font-heading font-bold text-white tracking-tighter">VM</span>
          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-cyan transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] rounded-full px-2 py-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "bg-[rgba(255,255,255,0.1)] text-white"
                  : "text-muted-foreground hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <button 
            onClick={() => scrollTo("#contact")}
            className="relative px-6 py-2.5 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            <span className="absolute inset-[1px] bg-[#050505] rounded-full z-0" />
            <span className="relative z-10 text-sm font-medium text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200">
              Hire Me
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(5,5,5,0.95)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => scrollTo("#contact")}
                className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-primary to-purple text-white font-medium"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
