import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, DollarSign } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for freelancers and small projects",
    monthlyPrice: 9,
    yearlyPrice: 7,
    popular: false,
    color: "text-accent",
    icon: "🚀",
    features: [
      "Up to 3 projects",
      "Basic AI suggestions",
      "5GB storage",
      "Email support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    description: "Best for growing teams and agencies",
    monthlyPrice: 29,
    yearlyPrice: 23,
    popular: true,
    color: "text-primary",
    icon: "⚡",
    features: [
      "Unlimited projects",
      "Advanced AI automation",
      "50GB storage",
      "Priority support",
      "Team collaboration tools",
      "Custom workflows",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations at scale",
    monthlyPrice: 79,
    yearlyPrice: 63,
    popular: false,
    color: "text-secondary",
    icon: "🏢",
    features: [
      "Unlimited everything",
      "Custom AI workflows",
      "Unlimited storage",
      "Dedicated account manager",
      "Advanced security & SSO",
      "SLA guarantee",
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
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <DollarSign size={14} />
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Simple pricing for{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              teams of any size
            </span>
          </h2>
          <p className="text-text-secondary">
            Choose a plan that fits your team. Switch anytime, no hidden fees.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-text-primary" : "text-text-secondary"}`}>
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle yearly pricing"
            className={`relative w-14 h-7 rounded-full border transition-colors duration-300 ${
              isYearly ? "bg-primary/20 border-primary/40" : "bg-surface border-white/10"
            }`}
          >
            <motion.span
              animate={{ x: isYearly ? 28 : 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="absolute top-0.5 left-0 w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/40"
            />
          </button>

          <span className={`text-sm font-medium flex items-center gap-2 transition-colors ${isYearly ? "text-text-primary" : "text-text-secondary"}`}>
            Yearly
            <motion.span
              animate={{ scale: isYearly ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.3 }}
              className="text-xs bg-accent/20 text-accent border border-accent/20 px-2 py-0.5 rounded-full font-semibold"
            >
              Save 20%
            </motion.span>
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
                whileHover={{ y: -8 }}
                className={`relative flex flex-col rounded-card p-8 border overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "bg-surface border-primary shadow-2xl shadow-primary/25"
                    : "bg-surface/60 border-white/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                }`}
              >
                {/* Popular glow background */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-transparent pointer-events-none" />
                )}

                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <span className="flex items-center gap-1 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-b-lg shadow-lg">
                      <Zap size={11} /> Most Popular
                    </span>
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full pt-4">
                  {/* Plan Icon + Name */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{plan.icon}</span>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                  </div>

                  <p className="text-text-secondary text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${plan.name}-${isYearly}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-end gap-1"
                      >
                        <span className={`text-5xl font-bold ${plan.color}`}>
                          ${price}
                        </span>
                        <span className="text-text-secondary text-sm mb-1.5">
                          / month
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    {isYearly && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-accent mt-1"
                      >
                        Billed annually — save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/yr
                      </motion.p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 mb-6" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check size={15} className="text-accent mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-card font-medium transition-all duration-200 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/30"
                        : "bg-white/5 border border-white/10 text-text-primary hover:border-primary/40 hover:bg-primary/5"
                    }`}
                  >
                    {plan.popular ? "Get Started — Most Popular" : "Get Started"}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-secondary text-xs mt-10"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}