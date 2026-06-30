import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is FlowSync AI?",
    answer:
      "FlowSync AI is an AI-powered project management platform that helps teams plan, automate, and collaborate on work — from task tracking to team communication, all in one place.",
  },
  {
    question: "Can I switch between monthly and yearly billing?",
    answer:
      "Yes, you can switch your billing cycle anytime from your account settings. Switching to yearly billing automatically applies a 20% discount.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, every plan includes a 14-day free trial with full access to features. No credit card is required to start.",
  },
  {
    question: "Does FlowSync AI support team collaboration?",
    answer:
      "Absolutely. Real-time collaboration, comments, shared boards, and built-in team chat are available on the Pro and Enterprise plans.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use end-to-end encryption, role-based access controls, and regular security audits to keep your data safe at every level.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, there are no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time from your billing settings.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-text-primary">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-primary"
        >
          <Plus size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-secondary leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-text-secondary">
            Everything you need to know about FlowSync AI.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-card px-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}