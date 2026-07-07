import { motion } from "framer-motion";

const companies = [
  { name: "Google", letter: "G", color: "text-blue-400" },
  { name: "Microsoft", letter: "M", color: "text-cyan-400" },
  { name: "Slack", letter: "S", color: "text-purple-400" },
  { name: "Spotify", letter: "S", color: "text-green-400" },
  { name: "Notion", letter: "N", color: "text-white" },
  { name: "Dropbox", letter: "D", color: "text-blue-500" },
  { name: "Figma", letter: "F", color: "text-pink-400" },
  { name: "Vercel", letter: "V", color: "text-white" },
  { name: "Stripe", letter: "S", color: "text-indigo-400" },
  { name: "Linear", letter: "L", color: "text-violet-400" },
];

// Duplicate for seamless infinite scroll
const doubled = [...companies, ...companies];

export default function TrustedCompanies() {
  return (
    <section className="py-16 px-6 border-y border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-text-secondary uppercase tracking-widest"
        >
          Trusted by teams at world-class companies
        </motion.p>
      </div>

      {/* Auto-scrolling slider */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-12 shrink-0"
          >
            {doubled.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex items-center gap-3 shrink-0 group cursor-default"
              >
                {/* Logo Icon */}
                <div
                  className={`w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center font-bold text-sm ${company.color} group-hover:border-white/30 transition-colors duration-300`}
                >
                  {company.letter}
                </div>
                {/* Company Name */}
                <span className="text-text-secondary/50 font-heading font-semibold text-base group-hover:text-text-secondary/90 transition-colors duration-300 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}