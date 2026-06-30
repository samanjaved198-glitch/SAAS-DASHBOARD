import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-surface/60 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-sm text-text-secondary"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Now powered by AI workflows
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Manage Projects.{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Automate Work.
          </span>{" "}
          Collaborate Smarter.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg text-text-secondary max-w-2xl mx-auto mb-10"
        >
          FlowSync AI helps startups, agencies, and enterprise teams plan,
          automate, and collaborate on projects — all powered by intelligent
          AI workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#pricing"
            className="flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-card font-medium hover:bg-secondary transition-colors"
          >
            Get Started Free <ArrowRight size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#showcase"
            className="flex items-center gap-2 border border-white/20 text-text-primary px-7 py-3 rounded-card font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <PlayCircle size={18} /> Watch Demo
          </motion.a>
        </motion.div>

        {/* Product Preview */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-accent rounded-card blur-2xl opacity-30" />
          <div className="relative bg-surface border border-white/10 rounded-card p-2 shadow-2xl">
            <div className="aspect-video w-full bg-background rounded-[12px] flex items-center justify-center text-text-secondary">
              Product Preview / Dashboard Screenshot
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}