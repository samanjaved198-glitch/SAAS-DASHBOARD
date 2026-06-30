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
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Work together with your team in real time, with shared boards, comments, and live updates.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Get actionable insights into team performance, project health, and bottlenecks at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with end-to-end encryption and role-based access controls.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "Build workflows that match how your team actually works — no rigid templates required.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description:
      "Get smart recommendations for task prioritization, deadlines, and resource allocation.",
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
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Everything your team needs to move faster
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
                whileHover={{ y: -6 }}
                className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-card bg-primary/15 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}