import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Initial page-load animation. Shown briefly while the app's critical
 * assets (fonts, above-the-fold content) settle, then fades out.
 * Ties to real readiness (document + a short minimum so the animation
 * doesn't just flash) rather than an arbitrary fixed delay.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minimumDisplay = new Promise((resolve) => setTimeout(resolve, 600));
    const documentReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));

    Promise.all([minimumDisplay, documentReady]).then(() => setVisible(false));
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-200 flex items-center justify-center"
          style={{ backgroundColor: "var(--color-background)" }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-2xl font-heading font-bold">
              FlowSync<span className="text-primary">AI</span>
            </div>
            <div className="w-32 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-primary via-secondary to-accent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}