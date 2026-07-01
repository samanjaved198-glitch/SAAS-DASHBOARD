import { motion } from "framer-motion";

const companies = [
  "Notion",
  "Stripe",
  "Vercel",
  "Linear",
  "Figma",
  "Slack",
  "GitHub",
  "Shopify",
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 px-6 border-y border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-text-secondary mb-10 uppercase tracking-widest"
        >
          Trusted by teams at world-class companies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {companies.map((company) => (
            <div
              key={company}
              className="text-text-secondary/40 font-heading font-semibold text-lg hover:text-text-secondary/80 transition-colors duration-300 cursor-default select-none"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}