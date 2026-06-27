import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple to-cyan origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
