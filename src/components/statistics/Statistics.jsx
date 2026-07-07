import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Building2, Activity, Globe, TrendingUp } from "lucide-react";
import MiniBarChart from "../common/MiniBarChart";

function useCountUp(end, duration = 2500, decimals = 0, inView = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const start = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parseFloat((start + (end - start) * eased).toFixed(decimals));
      setCount(current);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, end, duration, decimals]);

  return count;
}

const growthData = [
  { label: "Feb", value: 6.2 },
  { label: "Mar", value: 7.8 },
  { label: "Apr", value: 9.1 },
  { label: "May", value: 11.4 },
  { label: "Jun", value: 13.0 },
  { label: "Jul", value: 15.0 },
];

const stats = [
  {
    value: 15,
    suffix: "K+",
    label: "Customers",
    description: "Teams managing projects with FlowSync AI daily",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "hover:border-primary/40",
    gradient: "from-primary/20 to-transparent",
  },
  {
    value: 300,
    suffix: "+",
    label: "Companies",
    description: "World-class companies trust FlowSync AI for their workflow",
    icon: Building2,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/40",
    gradient: "from-accent/20 to-transparent",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    description: "Guaranteed availability for all paid plans",
    icon: Activity,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "hover:border-green-400/40",
    gradient: "from-green-400/20 to-transparent",
    decimals: 1,
  },
  {
    value: 50,
    suffix: "+",
    label: "Countries",
    description: "Teams from over 50 countries use FlowSync AI every day",
    icon: Globe,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "hover:border-secondary/40",
    gradient: "from-secondary/20 to-transparent",
  },
];

function StatCard({ stat, inView, index }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, 2500, stat.decimals || 0, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-7 text-center overflow-hidden transition-all duration-300 hover:shadow-2xl ${stat.border}`}
    >
      <div className={`absolute inset-0 bg-linear-to-b ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-4`}>
          <Icon size={22} className={stat.color} />
        </div>

        <div className={`text-4xl sm:text-5xl font-bold mb-2 ${stat.color}`}>
          {count}{stat.suffix}
        </div>

        <p className="font-semibold text-white mb-2">{stat.label}</p>
        <p className="text-text-secondary text-xs leading-relaxed">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <Activity size={14} />
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Trusted by teams{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              around the world
            </span>
          </h2>
          <p className="text-text-secondary">
            Real numbers from real teams using FlowSync AI every day.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp size={16} />
              </div>
              <div>
                <p className="font-semibold text-sm">Customer Growth</p>
                <p className="text-text-secondary text-xs">Active teams, thousands (last 6 months)</p>
              </div>
            </div>
            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">
              ↑ 142% YoY
            </span>
          </div>
          <MiniBarChart data={growthData} inView={inView} />
        </motion.div>
      </div>
    </section>
  );
}