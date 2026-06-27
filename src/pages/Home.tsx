import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <Process />
        <TechStack />
        <WhyChooseMe />
        <Testimonials />
        <Achievements />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
