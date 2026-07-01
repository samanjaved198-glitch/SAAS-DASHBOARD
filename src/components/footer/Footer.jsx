import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Zap,
} from "lucide-react";

const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API Reference", "Community", "Status"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

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
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 text-xl font-heading font-bold mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              FlowSync<span className="text-primary">AI</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Helping teams manage projects, automate tasks, and collaborate
              smarter — powered by AI.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-semibold mb-4">{group.heading}</h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-text-secondary">
          <p>© 2026 FlowSync AI. All rights reserved.</p>
          <p>
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}