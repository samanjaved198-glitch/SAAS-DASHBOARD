import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Spring smooths out the raw scroll value so the bar doesn't feel jumpy
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, height: "3px", zIndex: 60 }}
      className="fixed top-0 left-0 right-0 bg-primary origin-left"
      aria-hidden="true"
    />
  );
}