import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, BarChart2 } from "lucide-react";

const comparisonGroups = [
  {
    category: "Core Features",
    rows: [
      { feature: "Projects", starter: "Up to 3", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Team Members", starter: "Up to 5", pro: "Up to 50", enterprise: "Unlimited" },
      { feature: "Storage", starter: "20GB", pro: "100GB", enterprise: "Unlimited" },
      { feature: "Task Management", starter: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "AI Features",
    rows: [
      { feature: "AI Assistant", starter: true, pro: true, enterprise: true },
      { feature: "Advanced AI Automation", starter: false, pro: true, enterprise: true },
      { feature: "Custom AI Workflows", starter: false, pro: false, enterprise: true },
      { feature: "AI Report Generation", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Analytics & Reporting",
    rows: [
      { feature: "Analytics", starter: true, pro: true, enterprise: true },
      { feature: "Advanced Reports", starter: false, pro: true, enterprise: true },
      { feature: "Custom Dashboards", starter: false, pro: true, enterprise: true },
      { feature: "Data Export", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Collaboration",
    rows: [
      { feature: "Real-Time Collaboration", starter: false, pro: true, enterprise: true },
      { feature: "Team Chat", starter: false, pro: true, enterprise: true },
      { feature: "Guest Access", starter: false, pro: "5 guests", enterprise: "Unlimited" },
      { feature: "Video Meetings", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Security & Support",
    rows: [
      { feature: "API Access", starter: false, pro: true, enterprise: true },
      { feature: "SSO / SAML", starter: false, pro: false, enterprise: true },
      { feature: "Audit Logs", starter: false, pro: true, enterprise: true },
      { feature: "Priority Support", starter: false, pro: true, enterprise: true },
      { feature: "Dedicated Account Manager", starter: false, pro: false, enterprise: true },
    ],
  },
];

function CellValue({ value }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
          <Check size={13} className="text-accent" />
        </div>
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <X size={15} className="text-white/20" />
      </div>
    );
  return (
    <span className="text-sm text-text-secondary font-medium">{value}</span>
  );
}

function ComparisonGroup({ group, index }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border border-white/10 rounded-card overflow-hidden mb-4"
    >
      {/* Group Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-surface/80 hover:bg-surface transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-sm text-text-primary group-hover:text-primary transition-colors">
          {group.category}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-text-secondary"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      {/* Expandable Rows */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {group.rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 px-6 py-3.5 text-sm items-center transition-colors hover:bg-white/5 ${
                  i % 2 === 0 ? "bg-background/30" : "bg-transparent"
                }`}
              >
                <span className="text-text-secondary text-sm">{row.feature}</span>
                <div className="text-center">
                  <CellValue value={row.starter} />
                </div>
                <div className="text-center">
                  <CellValue value={row.pro} />
                </div>
                <div className="text-center">
                  <CellValue value={row.enterprise} />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <BarChart2 size={14} />
            Compare Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Find the{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              right plan
            </span>{" "}
            for your team
          </h2>
          <p className="text-text-secondary">
            A detailed breakdown of what is included in each FlowSync AI plan.
          </p>
        </motion.div>

        {/* Table — scrolls horizontally on mobile instead of squeezing 4 columns */}
        <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="min-w-[560px] sm:min-w-0">
            {/* Table Header */}
            <div className="grid grid-cols-4 px-6 py-4 mb-3 rounded-card bg-surface/80 border border-white/10">
              <span className="text-text-secondary text-sm font-medium">Feature</span>
              <div className="text-center">
                <p className="text-sm font-semibold text-white">Starter</p>
                <p className="text-xs text-text-secondary mt-0.5">$9/mo</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-primary">Pro ⭐</p>
                <p className="text-xs text-accent mt-0.5">$29/mo</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-secondary">Enterprise</p>
                <p className="text-xs text-text-secondary mt-0.5">$79/mo</p>
              </div>
            </div>

            {/* Expandable Groups */}
            {comparisonGroups.map((group, index) => (
              <ComparisonGroup key={group.category} group={group} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-text-secondary text-sm mb-4">
            Not sure which plan is right for you?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-card text-sm font-medium hover:bg-secondary transition-colors"
          >
            Talk to Sales
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}