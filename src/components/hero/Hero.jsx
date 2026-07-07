import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Bot, BarChart3, DollarSign, CheckSquare, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const floatingCards = [
  {
    icon: Bot,
    label: "AI Assistant",
    value: "3 tasks automated",
    color: "text-primary",
    bg: "bg-primary/10",
    position: "top-6 left-4",
    delay: 0,
  },
  {
    icon: BarChart3,
    label: "Analytics",
    value: "↑ 24% this week",
    color: "text-accent",
    bg: "bg-accent/10",
    position: "top-6 right-4",
    delay: 0.2,
  },
  {
    icon: DollarSign,
    label: "Revenue",
    value: "$48,200",
    color: "text-green-400",
    bg: "bg-green-400/10",
    position: "bottom-6 left-4",
    delay: 0.4,
  },
  {
    icon: CheckSquare,
    label: "Tasks Done",
    value: "12 / 14 complete",
    color: "text-secondary",
    bg: "bg-secondary/10",
    position: "bottom-6 right-4",
    delay: 0.6,
  },
];

function DashboardPreview() {
  return (
    <div
      className="w-full h-full bg-background rounded-xl p-4 flex flex-col gap-3"
      style={{
        "--color-background": "#0A0F1E",
        "--color-surface": "#111827",
        "--color-surface-2": "#1a2234",
        "--color-text-secondary": "#94A3B8",
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex gap-2">
          {["Dashboard", "Projects", "Team", "Analytics"].map((tab) => (
            <span
              key={tab}
              className={`text-xs px-2 py-0.5 rounded ${
                tab === "Dashboard"
                  ? "bg-primary/20 text-primary"
                  : "text-white/30"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="w-6 h-6 rounded-full bg-primary/30" />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Projects", value: "24", color: "text-primary" },
          { label: "Tasks", value: "142", color: "text-accent" },
          { label: "Team", value: "12", color: "text-secondary" },
          { label: "Done", value: "89%", color: "text-green-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface/60 rounded-lg p-2 text-center"
          >
            <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-white/30 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="flex flex-col gap-2">
        {[
          { name: "Website Redesign", progress: 75, color: "bg-primary" },
          { name: "Mobile App", progress: 48, color: "bg-accent" },
          { name: "API Integration", progress: 90, color: "bg-secondary" },
        ].map((project) => (
          <div key={project.name} className="flex items-center gap-2">
            <span className="text-white/40 text-xs w-28 truncate">
              {project.name}
            </span>
            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className={`h-full ${project.color} rounded-full`}
              />
            </div>
            <span className="text-white/40 text-xs">{project.progress}%</span>
          </div>
        ))}
      </div>

      {/* Activity Feed */}
      <div className="flex flex-col gap-1.5 mt-1">
        {[
          { dot: "bg-primary", text: "AI automated 3 tasks in Website project" },
          { dot: "bg-accent", text: "Sara completed Mobile App wireframes" },
          { dot: "bg-green-400", text: "New revenue milestone reached: $48k" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
            <span className="text-white/30 text-xs truncate">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
        {/* Glowing blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-surface/60 border border-primary/20 rounded-full px-4 py-1.5 mb-6 text-sm text-text-secondary backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Now powered by AI workflows
          <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
            New
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Manage Projects.{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Automate Work.
          </span>{" "}
          <br className="hidden sm:block" />
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
            className="flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-card font-medium hover:bg-secondary transition-colors shadow-lg shadow-primary/30"
          >
            Get Started Free <ArrowRight size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#showcase"
            className="flex items-center gap-2 border border-white/20 text-text-primary px-8 py-3.5 rounded-card font-medium hover:border-accent hover:text-accent transition-colors backdrop-blur-sm"
          >
            <PlayCircle size={18} /> Watch Demo
          </motion.a>
        </motion.div>

        {/* Dashboard Preview with Floating Cards */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow behind dashboard */}
          <div className="absolute -inset-2 bg-linear-to-r from-primary via-secondary to-accent rounded-card blur-2xl opacity-20" />

          {/* Dashboard Frame */}
          <div className="relative bg-surface border border-white/10 rounded-card p-2 shadow-2xl">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <DashboardPreview />
            </div>
          </div>

          {/* Floating Cards */}
          {floatingCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + card.delay, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={`absolute ${card.position} bg-surface/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 items-center gap-2 shadow-xl hidden sm:flex`}
              >
                <div className={`w-7 h-7 rounded-lg ${card.bg} flex items-center justify-center`}>
                  <Icon size={14} className={card.color} />
                </div>
                <div className="text-left">
                  <p className="text-text-secondary text-xs">{card.label}</p>
                  <p className="text-text-primary text-xs font-semibold">{card.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col items-center gap-2 mt-12"
        >
          <span className="text-text-secondary text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}