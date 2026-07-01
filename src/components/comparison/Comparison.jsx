import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Minus, ChevronDown } from "lucide-react";

const comparisonGroups = [
  {
    category: "Core Features",
    rows: [
      {
        feature: "Projects",
        starter: "Up to 3",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        feature: "Team Members",
        starter: "Up to 5",
        pro: "Up to 50",
        enterprise: "Unlimited",
      },
      {
        feature: "Storage",
        starter: "5GB",
        pro: "50GB",
        enterprise: "Unlimited",
      },
      {
        feature: "Task Management",
        starter: true,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "AI Features",
    rows: [
      {
        feature: "Basic AI Suggestions",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        feature: "Advanced AI Automation",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        feature: "Custom AI Workflows",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        feature: "AI Report Generation",
        starter: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Collaboration",
    rows: [
      {
        feature: "Real-Time Collaboration",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        feature: "Team Chat",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        feature: "Guest Access",
        starter: false,
        pro: "5 guests",
        enterprise: "Unlimited",
      },
      {
        feature: "Video Meetings",
        starter: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Security & Support",
    rows: [
      {
        feature: "SSO / SAML",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        feature: "Audit Logs",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        feature: "Priority Support",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        feature: "Dedicated Account Manager",
        starter: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
];

function CellValue({ value }) {
  if (value === true)
    return <Check size={18} className="text-accent mx-auto" />;
  if (value === false)
    return <X size={18} className="text-white/20 mx-auto" />;
  if (value === null)
    return <Minus size={18} className="text-white/20 mx-auto" />;
  return (
    <span className="text-sm text-text-secondary">{value}</span>
  );
}

function ComparisonGroup({ group }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-white/10 rounded-card overflow-hidden mb-4">
      {/* Group Header — Expandable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-surface/80 hover:bg-surface transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-sm text-text-primary">
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
                className={`grid grid-cols-4 px-6 py-4 text-sm items-center ${
                  i % 2 === 0 ? "bg-background/40" : "bg-transparent"
                }`}
              >
                <span className="text-text-secondary col-span-1">
                  {row.feature}
                </span>
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
    </div>
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
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            Compare Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Find the right plan for your team
          </h2>
          <p className="text-text-secondary">
            A detailed breakdown of what's included in each FlowSync AI plan.
          </p>
        </motion.div>

        {/* Table Header */}
        <div className="grid grid-cols-4 px-6 py-4 mb-2 text-sm font-semibold">
          <span className="text-text-secondary">Feature</span>
          <span className="text-center">Starter</span>
          <span className="text-center text-primary">Pro ⭐</span>
          <span className="text-center">Enterprise</span>
        </div>

        {/* Expandable Groups */}
        {comparisonGroups.map((group) => (
          <ComparisonGroup key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}