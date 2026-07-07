import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  KanbanSquare,
  MessageSquare,
  Bot,
  CheckCircle,
  Clock,
  AlertCircle,
  Send,
  Sparkles,
} from "lucide-react";

// --- Mini UI Components for each tab ---

function DashboardUI() {
  return (
    <div className="w-full h-full bg-background rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/60 text-xs font-semibold">Project Overview</span>
        <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">Live</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Total Tasks", value: "142", color: "text-primary" },
          { label: "In Progress", value: "38", color: "text-accent" },
          { label: "Completed", value: "94", color: "text-green-400" },
        ].map((s) => (
          <div key={s.label} className="bg-surface/60 rounded-lg p-3 text-center">
            <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-white/30 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-1">
        {[
          { name: "Website Redesign", progress: 75, color: "bg-primary" },
          { name: "Mobile App", progress: 48, color: "bg-accent" },
          { name: "API Integration", progress: 90, color: "bg-green-400" },
          { name: "Marketing Campaign", progress: 30, color: "bg-secondary" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-3">
            <span className="text-white/40 text-xs w-32 truncate">{p.name}</span>
            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full ${p.color} rounded-full`}
              />
            </div>
            <span className="text-white/40 text-xs">{p.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KanbanUI() {
  const columns = [
    {
      title: "To Do",
      color: "text-white/50",
      cards: ["Design system setup", "API docs review"],
    },
    {
      title: "In Progress",
      color: "text-accent",
      cards: ["Homepage redesign", "Auth integration"],
    },
    {
      title: "Done",
      color: "text-green-400",
      cards: ["User research", "Wireframes"],
    },
  ];
  return (
    <div className="w-full h-full bg-background rounded-xl p-4 flex gap-3">
      {columns.map((col) => (
        <div key={col.title} className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs font-semibold ${col.color}`}>{col.title}</span>
            <span className="text-white/20 text-xs">{col.cards.length}</span>
          </div>
          {col.cards.map((card) => (
            <div
              key={card}
              className="bg-surface/80 border border-white/10 rounded-lg p-2.5 text-xs text-white/60 hover:border-white/20 transition-colors cursor-pointer"
            >
              {card}
            </div>
          ))}
          <div className="border border-dashed border-white/10 rounded-lg p-2 text-center text-white/20 text-xs cursor-pointer hover:border-white/20 transition-colors">
            + Add card
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatUI() {
  const messages = [
    { from: "Sara", text: "Homepage wireframes are done!", time: "10:32", mine: false },
    { from: "You", text: "Great! Ill review them now.", time: "10:33", mine: true },
    { from: "AI", text: "Summary: 3 tasks updated, 1 deadline today.", time: "10:34", mine: false, ai: true },
    { from: "You", text: "Thanks FlowSync AI!", time: "10:34", mine: true },
  ];
  return (
    <div className="w-full h-full bg-background rounded-xl flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs text-primary font-bold">P</div>
        <span className="text-white/60 text-xs font-semibold">#project-alpha</span>
        <span className="ml-auto text-xs text-green-400">● 4 online</span>
      </div>
      <div className="flex-1 flex flex-col gap-3 p-4 overflow-hidden">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs rounded-xl px-3 py-2 text-xs ${
              msg.ai
                ? "bg-accent/10 border border-accent/20 text-accent"
                : msg.mine
                ? "bg-primary/20 text-white"
                : "bg-surface text-white/60"
            }`}>
              {!msg.mine && (
                <p className={`font-semibold mb-0.5 text-xs ${msg.ai ? "text-accent" : "text-white/40"}`}>
                  {msg.ai ? "🤖 FlowSync AI" : msg.from}
                </p>
              )}
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2">
        <input
          className="flex-1 bg-surface/60 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/40 outline-none"
          placeholder="Type a message..."
          readOnly
        />
        <Send size={14} className="text-primary" />
      </div>
    </div>
  );
}

function AIAssistantUI() {
  const suggestions = [
    { icon: AlertCircle, text: "API Integration deadline is tomorrow", color: "text-red-400", bg: "bg-red-400/10" },
    { icon: Clock, text: "Sara has 5 overdue tasks", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { icon: CheckCircle, text: "Website Redesign is 75% complete", color: "text-green-400", bg: "bg-green-400/10" },
    { icon: Sparkles, text: "Suggest reassigning 2 tasks to James", color: "text-primary", bg: "bg-primary/10" },
  ];
  return (
    <div className="w-full h-full bg-background rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
          <Bot size={14} className="text-primary" />
        </div>
        <div>
          <p className="text-white text-xs font-semibold">FlowSync AI</p>
          <p className="text-white/30 text-xs">Project Intelligence</p>
        </div>
        <span className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Active</span>
      </div>
      <div className="bg-surface/60 rounded-xl p-3 text-xs text-white/50 border border-white/10">
        Here is your project health summary for today...
      </div>
      <div className="flex flex-col gap-2">
        {suggestions.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`flex items-center gap-3 ${s.bg} border border-white/5 rounded-lg px-3 py-2`}
            >
              <Icon size={14} className={s.color} />
              <span className="text-white/60 text-xs">{s.text}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// --- Main Data ---
const showcaseItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Unified Project Dashboard",
    description:
      "See every project, task, and deadline in one clean, real-time dashboard. Get a birds-eye view of team progress, blockers, and milestones — all in one place.",
    ui: <DashboardUI />,
    color: "text-primary",
    activeBg: "bg-primary",
  },
  {
    id: "boards",
    label: "Kanban Boards",
    icon: KanbanSquare,
    title: "Flexible Kanban Boards",
    description:
      "Organize work your way with drag-and-drop boards that adapt to any workflow. Move cards across columns and keep everyone aligned without a single meeting.",
    ui: <KanbanUI />,
    color: "text-accent",
    activeBg: "bg-accent",
  },
  {
    id: "chat",
    label: "Team Chat",
    icon: MessageSquare,
    title: "Built-In Team Communication",
    description:
      "Discuss tasks without switching tools — comments, mentions, and team chat live right next to your work. Less email, more clarity.",
    ui: <ChatUI />,
    color: "text-secondary",
    activeBg: "bg-secondary",
  },
  {
    id: "ai",
    label: "AI Assistant",
    icon: Bot,
    title: "Your AI Project Assistant",
    description:
      "Ask FlowSync AI to summarize progress, flag risks, or suggest next steps — instantly. It learns your team's patterns and gets smarter every day.",
    ui: <AIAssistantUI />,
    color: "text-pink-400",
    activeBg: "bg-pink-500",
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
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <LayoutDashboard size={14} />
            Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            One platform,{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              every view
            </span>{" "}
            your team needs
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
              <motion.button
                key={item.id}
                onClick={() => setActive(item.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-card border transition-all duration-200 ${
                  isActive
                    ? `${item.activeBg} border-transparent text-white shadow-lg`
                    : "bg-surface/60 border-white/10 text-text-secondary hover:border-primary/40 hover:text-text-primary"
                }`}
              >
                <Icon size={17} />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="relative bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-8 lg:p-10 overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Text */}
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${activeItem.color}`}>
                  {activeItem.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {activeItem.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {["Real-time updates", "Team-friendly UI", "AI-powered insights"].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Dashboard UI — intentionally always dark, like a real
                  product screenshot, regardless of the site's light/dark mode */}
              <div
                className="aspect-video w-full bg-background rounded-card border border-white/10 overflow-hidden"
                style={{
                  "--color-background": "#0A0F1E",
                  "--color-surface": "#111827",
                  "--color-surface-2": "#1a2234",
                  "--color-text-secondary": "#94A3B8",
                }}
              >
                {activeItem.ui}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}