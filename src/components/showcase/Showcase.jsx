import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, KanbanSquare, MessageSquare, Bot } from "lucide-react";

const showcaseItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Unified Project Dashboard",
    description:
      "See every project, task, and deadline in one clean, real-time dashboard built for clarity.",
  },
  {
    id: "boards",
    label: "Kanban Boards",
    icon: KanbanSquare,
    title: "Flexible Kanban Boards",
    description:
      "Organize work your way with drag-and-drop boards that adapt to any workflow.",
  },
  {
    id: "chat",
    label: "Team Chat",
    icon: MessageSquare,
    title: "Built-In Team Communication",
    description:
      "Discuss tasks without switching tools — comments and chat live right next to your work.",
  },
  {
    id: "ai",
    label: "AI Assistant",
    icon: Bot,
    title: "Your AI Project Assistant",
    description:
      "Ask FlowSync AI to summarize progress, flag risks, or suggest next steps — instantly.",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(showcaseItems[0].id);
  const activeItem = showcaseItems.find((item) => item.id === active);

  return (
    <section id="showcase" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            One platform, every view your team needs
          </h2>
          <p className="text-text-secondary">
            Explore how FlowSync AI adapts to the way your team actually works.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {showcaseItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-card border transition-colors duration-200 ${
                  isActive
                    ? "bg-primary border-primary text-white"
                    : "bg-surface/60 border-white/10 text-text-secondary hover:border-primary/40 hover:text-text-primary"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="relative bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-8 lg:p-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {activeItem.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Image / Gallery Preview */}
              <div className="aspect-video w-full bg-background rounded-card border border-white/10 flex items-center justify-center text-text-secondary">
                {activeItem.label} Preview Image
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}