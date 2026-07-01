import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 12000,
    suffix: "+",
    label: "Active Teams",
    description: "Teams managing projects with FlowSync AI daily",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Customers who rate their experience as excellent",
  },
  {
    value: 3.5,
    suffix: "M+",
    label: "Tasks Automated",
    description: "Repetitive tasks eliminated through AI automation",
    decimals: 1,
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    description: "Guaranteed availability for all paid plans",
    decimals: 1,
  },
];

export default function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Trusted by teams around the world
          </h2>
          <p className="text-text-secondary">
            Real numbers from real teams using FlowSync AI every day.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-7 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="font-semibold mb-2">{stat.label}</p>
              <p className="text-text-secondary text-xs leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}