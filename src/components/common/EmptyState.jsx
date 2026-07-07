import { motion } from "framer-motion";
import { Inbox } from "lucide-react";

/**
 * Reusable empty-state block. Use whenever a list, search, or filter
 * result set is empty (e.g. "no blog posts match", "no results found").
 */
export default function EmptyState({
  icon: Icon = Inbox,
  title = "Nothing here yet",
  description = "Try adjusting your filters or search terms.",
  action,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-card border border-dashed border-white/10 bg-surface/40"
      role="status"
    >
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-text-secondary">
        <Icon size={22} />
      </div>
      <h3 className="font-semibold text-base mb-1.5">{title}</h3>
      <p className="text-text-secondary text-sm max-w-sm">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </motion.div>
  );
}