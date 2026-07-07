import { motion } from "framer-motion";
import {
  Zap,
  Users,
  BarChart3,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI Task Automation",
    description:
      "Let AI handle repetitive tasks — from scheduling to status updates — so your team can focus on real work.",
    gradient: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    iconBg: "bg-primary/15",
    glowColor: "group-hover:shadow-primary/20",
    borderHover: "group-hover:border-primary/40",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Work together with your team in real time, with shared boards, comments, and live updates.",
    gradient: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    iconBg: "bg-accent/15",
    glowColor: "group-hover:shadow-accent/20",
    borderHover: "group-hover:border-accent/40",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Get actionable insights into team performance, project health, and bottlenecks at a glance.",
    gradient: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/15",
    glowColor: "group-hover:shadow-secondary/20",
    borderHover: "group-hover:border-secondary/40",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with end-to-end encryption and role-based access controls.",
    gradient: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/15",
    glowColor: "group-hover:shadow-green-500/20",
    borderHover: "group-hover:border-green-500/40",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "Build workflows that match how your team actually works — no rigid templates required.",
    gradient: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15",
    glowColor: "group-hover:shadow-orange-500/20",
    borderHover: "group-hover:border-orange-500/40",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description:
      "Get smart recommendations for task prioritization, deadlines, and resource allocation.",
    gradient: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15",
    glowColor: "group-hover:shadow-pink-500/20",
    borderHover: "group-hover:border-pink-500/40",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <Sparkles size={14} />
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Everything your team needs{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              to move faster
            </span>
          </h2>
          <p className="text-text-secondary">
            FlowSync AI brings automation, collaboration, and insight together
            in one platform built for modern teams.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-7 overflow-hidden transition-all duration-300 hover:shadow-2xl ${feature.glowColor} ${feature.borderHover}`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card`}
                />

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-13 h-13 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 w-12 h-12`}
                  >
                    <Icon className={feature.iconColor} size={24} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 0 }}
                    className={`inline-flex items-center gap-1 text-sm font-medium mt-4 ${feature.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    Learn more →
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}