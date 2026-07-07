import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

const QUICK_REPLIES = [
  "What is FlowSync AI?",
  "Tell me about pricing",
  "How does AI automation work?",
  "Is there a free trial?",
];

const BOT_RESPONSES = {
  default:
    "Thanks for reaching out! FlowSync AI helps teams manage projects, automate tasks, and collaborate smarter. How can I help you today?",
  pricing:
    "We offer 3 plans: Starter ($9/mo), Pro ($29/mo), and Enterprise ($79/mo). All plans include a 14-day free trial — no credit card required!",
  automation:
    "FlowSync AI automates repetitive tasks like scheduling, status updates, and deadline reminders using intelligent AI workflows tailored to your team.",
  trial:
    "Yes! Every plan includes a 14-day free trial with full access to all features. No credit card needed to start.",
  flowsync:
    "FlowSync AI is an AI-powered project management platform built for startups, agencies, and enterprise teams. It combines task management, team chat, AI assistance, and analytics in one place.",
};

function getBotReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes("price") || lower.includes("pricing") || lower.includes("cost") || lower.includes("plan"))
    return BOT_RESPONSES.pricing;
  if (lower.includes("automat") || lower.includes("ai") || lower.includes("workflow"))
    return BOT_RESPONSES.automation;
  if (lower.includes("trial") || lower.includes("free"))
    return BOT_RESPONSES.trial;
  if (lower.includes("flowsync") || lower.includes("what is") || lower.includes("about"))
    return BOT_RESPONSES.flowsync;
  return BOT_RESPONSES.default;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hi! I am FlowSync AI assistant. How can I help you today? 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const prevOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen && !prevOpenRef.current) {
      setUnread(0);
    }
    prevOpenRef.current = isOpen;
  }, [isOpen]);

  const sendMessage = (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: userMsg },
    ]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(userMsg);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: reply },
      ]);
      setIsTyping(false);
      if (!isOpen) setUnread((n) => n + 1);
    }, 1200);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
        className="fixed bottom-24 right-8 z-50 w-14 h-14 rounded-full bg-linear-to-br from-primary to-secondary text-white flex items-center justify-center shadow-2xl shadow-primary/40"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        {unread > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-xs flex items-center justify-center font-bold">
            {unread}
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-44 right-8 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20"
            style={{ background: "var(--color-surface)" }}
          >
            {/* Header */}
            <div className="bg-linear-to-r from-primary to-secondary px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">FlowSync AI</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  <span className="text-white/70 text-xs">Online — replies instantly</span>
                </div>
              </div>
              <Sparkles size={16} className="text-white/60 ml-auto" />
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-3 flex flex-col gap-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.from === "bot" ? "bg-primary/20" : "bg-accent/20"}`}>
                    {msg.from === "bot" ? <Bot size={14} className="text-primary" /> : <User size={14} className="text-accent" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.from === "bot"
                      ? "bg-white/5 border border-white/10 text-text-primary rounded-bl-none"
                      : "bg-primary text-white rounded-br-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary/60 block"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs border border-white/10 rounded-full px-3 py-1 text-text-secondary hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 pb-4 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-primary/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center disabled:opacity-40"
              >
                <Send size={15} className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}