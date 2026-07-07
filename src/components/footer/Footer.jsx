import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Zap, CheckCircle, Loader2 } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Community", href: "/community" },
      { label: "Status", href: "https://status.flowsyncai.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Security", href: "/legal/security" },
    ],
  },
];

const socialLinks = [
  { icon: FaXTwitter, label: "Twitter", href: "https://twitter.com/flowsyncai" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/company/flowsyncai" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/flowsyncai" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/flowsyncai" },
];

function NewsletterForm() {
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async ({ email }) => {
    try {
      // No backend exists for this static landing page — simulate the
      // network round-trip the same way Contact.jsx does, instead of
      // hitting a /api/newsletter endpoint that will always 404.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      toast.success(`Subscribed! We'll email ${email} with updates.`);
      reset();
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus("error");
      toast.error("Subscription failed. Please try again.");
    }
  };

  return (
    <div>
      <h4 className="text-sm font-semibold mb-2">Stay in the loop</h4>
      <p className="text-text-secondary text-sm mb-4 max-w-xs">
        Product updates and tips, once or twice a month. No spam.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            aria-live="polite"
            className="flex items-center gap-2 text-sm text-accent"
          >
            <CheckCircle size={16} />
            You're subscribed — welcome aboard!
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                {...register("email", {
                  required: "Enter your email to subscribe",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "newsletter-error" : undefined}
                className={`flex-1 bg-background border rounded-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary ${
                  errors.email || status === "error" ? "border-red-500" : "border-white/10"
                }`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-card hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
              >
                {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : "Subscribe"}
              </button>
            </div>
            {errors.email && (
              <p id="newsletter-error" className="text-red-400 text-xs">
                {errors.email.message}
              </p>
            )}
            {status === "error" && !errors.email && (
              <p role="alert" className="text-red-400 text-xs">
                Something went wrong subscribing. Please try again.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10 pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Newsletter band */}
        <div className="border border-white/10 rounded-card p-6 sm:p-8 mb-14">
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-xl font-heading font-bold mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              FlowSync<span className="text-primary">AI</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Helping teams manage projects, automate tasks, and collaborate smarter — powered by AI.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${s.label} page`}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-semibold mb-4">{group.heading}</h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-text-secondary">
          <p>© 2026 FlowSync AI. All rights reserved.</p>
          <p>Built with React, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </motion.footer>
  );
}