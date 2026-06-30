import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For freelancers and small projects",
    monthlyPrice: 9,
    yearlyPrice: 7,
    popular: false,
    features: [
      "Up to 3 projects",
      "Basic AI suggestions",
      "5GB storage",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "For growing teams and agencies",
    monthlyPrice: 29,
    yearlyPrice: 23,
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced AI automation",
      "50GB storage",
      "Priority support",
      "Team collaboration tools",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 79,
    yearlyPrice: 63,
    popular: false,
    features: [
      "Unlimited everything",
      "Custom AI workflows",
      "Unlimited storage",
      "Dedicated account manager",
      "Advanced security & SSO",
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Simple pricing for teams of any size
          </h2>
          <p className="text-text-secondary">
            Choose a plan that fits your team. Switch anytime, no hidden fees.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle yearly pricing"
            className="relative w-14 h-7 rounded-full bg-surface border border-white/10"
          >
            <motion.span
              animate={{ x: isYearly ? 28 : 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="absolute top-0.5 left-0 w-6 h-6 rounded-full bg-primary"
            />
          </button>
          <span
            className={`text-sm font-medium flex items-center gap-2 ${
              isYearly ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            Yearly
            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-card p-8 border transition-shadow duration-300 ${
                  plan.popular
                    ? "bg-surface border-primary shadow-xl shadow-primary/20 lg:scale-105"
                    : "bg-surface/60 border-white/10 hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-text-secondary text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="text-text-secondary text-sm">
                    {" "}
                    / month
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-card font-medium transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-secondary"
                      : "bg-white/5 border border-white/10 text-text-primary hover:border-primary/40"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}