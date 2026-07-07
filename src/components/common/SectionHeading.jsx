import { motion } from "framer-motion";

export default function SectionHeading({ badge, badgeIcon: Icon, title, highlight, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl mb-14 ${center ? "mx-auto text-center" : ""}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
          {Icon && <Icon size={13} />}
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
        {title}{" "}
        {highlight && (
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-text-secondary leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}