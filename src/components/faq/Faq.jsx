import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle, Search, X } from "lucide-react";
import EmptyState from "../common/EmptyState";

const faqs = [
  {
    question: "What is FlowSync AI?",
    answer:
      "FlowSync AI is an AI-powered project management platform that helps teams plan, automate, and collaborate on work — from task tracking to team communication, all in one place.",
    category: "General",
  },
  {
    question: "Can I switch between monthly and yearly billing?",
    answer:
      "Yes, you can switch your billing cycle anytime from your account settings. Switching to yearly billing automatically applies a 20% discount on all plans.",
    category: "Billing",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, every plan includes a 14-day free trial with full access to all features. No credit card is required to start — just sign up and get going.",
    category: "Billing",
  },
  {
    question: "Does FlowSync AI support team collaboration?",
    answer:
      "Absolutely. Real-time collaboration, comments, shared boards, and built-in team chat are available on the Pro and Enterprise plans. You can invite unlimited collaborators on Enterprise.",
    category: "Features",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use end-to-end encryption, role-based access controls, and regular third-party security audits to keep your data safe at every level. Enterprise plans also include SSO and audit logs.",
    category: "Security",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, there are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel your subscription at any time directly from your billing settings.",
    category: "Billing",
  },
  {
    question: "Does FlowSync AI integrate with other tools?",
    answer:
      "Yes, FlowSync AI integrates with popular tools like Slack, GitHub, Google Drive, Notion, and more. API access is available on Pro and Enterprise plans for custom integrations.",
    category: "Features",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Starter plans include email support. Pro plans get priority support with faster response times. Enterprise customers receive a dedicated account manager and 24/7 phone support.",
    category: "Support",
  },
];

const categoryColors = {
  General: "text-accent bg-accent/10",
  Billing: "text-green-400 bg-green-400/10",
  Features: "text-primary bg-primary/10",
  Security: "text-yellow-400 bg-yellow-400/10",
  Support: "text-secondary bg-secondary/10",
};

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className={`border-b border-white/10 last:border-b-0 transition-colors duration-200 ${
        isOpen ? "bg-primary/5" : "hover:bg-white/5"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1">
          {/* Number */}
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full mt-0.5 shrink-0 ${
            isOpen ? "bg-primary/20 text-primary" : "bg-white/5 text-white/30"
          }`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[faq.category]}`}>
                {faq.category}
              </span>
            </div>
            <span className={`text-sm sm:text-base font-medium leading-snug transition-colors ${
              isOpen ? "text-white" : "text-text-primary"
            }`}>
              {faq.question}
            </span>
          </div>
        </div>

        {/* Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors mt-0.5 ${
            isOpen ? "bg-primary text-white" : "bg-white/10 text-white/50"
          }`}
        >
          <Plus size={16} />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed pl-16">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
    );
  }, [query]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <HelpCircle size={14} />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Frequently asked{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-text-secondary">
            Everything you need to know about FlowSync AI. Can not find the answer? Reach out to our team.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative mb-8">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
          <label htmlFor="faq-search" className="sr-only">Search questions</label>
          <input
            id="faq-search"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenIndex(null);
            }}
            placeholder="Search questions..."
            className="w-full bg-surface/60 backdrop-blur-md border border-white/10 rounded-xl pl-11 pr-10 py-3 text-sm outline-none focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Accordion */}
        {filteredFaqs.length === 0 ? (
          <EmptyState
            icon={Search}
            title="No matching questions"
            description={`We couldn't find anything for "${query}". Try a different search term.`}
            action={
              <button
                onClick={() => setQuery("")}
                className="text-primary text-sm font-medium hover:underline"
              >
                Clear search
              </button>
            }
          />
        ) : (
        <div className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-card overflow-hidden">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 p-6 bg-surface/40 border border-white/10 rounded-card"
        >
          <p className="text-white font-medium mb-1">Still have questions?</p>
          <p className="text-text-secondary text-sm mb-4">
            Our support team is happy to help you.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-card text-sm font-medium hover:bg-secondary transition-colors"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}