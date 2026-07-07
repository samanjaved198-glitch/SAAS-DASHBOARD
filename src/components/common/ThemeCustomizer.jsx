import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check } from "lucide-react";

const COLOR_THEMES = [
  { name: "Purple", primary: "#6366F1", secondary: "#8B5CF6", accent: "#06B6D4" },
  { name: "Blue", primary: "#3B82F6", secondary: "#6366F1", accent: "#06B6D4" },
  { name: "Green", primary: "#10B981", secondary: "#059669", accent: "#06B6D4" },
  { name: "Rose", primary: "#F43F5E", secondary: "#E11D48", accent: "#FB923C" },
  { name: "Orange", primary: "#F97316", secondary: "#EA580C", accent: "#FBBF24" },
  { name: "Cyan", primary: "#06B6D4", secondary: "#0891B2", accent: "#8B5CF6" },
];

const BG_THEMES = [
  { name: "Dark Navy", bg: "#0A0F1E", surface: "#111827" },
  { name: "Pure Dark", bg: "#000000", surface: "#0F0F0F" },
  { name: "Slate", bg: "#0F172A", surface: "#1E293B" },
  { name: "Deep Blue", bg: "#050D1A", surface: "#0D1B2E" },
];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const [activeBg, setActiveBg] = useState(0);

  const applyTheme = (colorIdx, bgIdx) => {
    const color = COLOR_THEMES[colorIdx];
    const bg = BG_THEMES[bgIdx];
    const root = document.documentElement;

    root.style.setProperty("--color-primary", color.primary);
    root.style.setProperty("--color-secondary", color.secondary);
    root.style.setProperty("--color-accent", color.accent);
    root.style.setProperty("--color-background", bg.bg);
    root.style.setProperty("--color-surface", bg.surface);
  };

  const handleColorSelect = (i) => {
    setActiveColor(i);
    applyTheme(i, activeBg);
  };

  const handleBgSelect = (i) => {
    setActiveBg(i);
    applyTheme(activeColor, i);
  };

  const resetTheme = () => {
    handleColorSelect(0);
    handleBgSelect(0);
    setActiveColor(0);
    setActiveBg(0);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.1, rotate: 30 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open theme customizer"
        className="fixed bottom-44 left-8 z-50 w-11 h-11 rounded-full bg-surface border border-white/10 text-text-secondary flex items-center justify-center shadow-lg hover:border-primary/40 hover:text-primary transition-colors"
      >
        <Palette size={18} />
      </motion.button>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-60 left-8 z-50 w-64 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            style={{ background: "var(--color-surface)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Palette size={16} className="text-primary" />
                <span className="text-sm font-semibold">Theme Customizer</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-5">
              {/* Color Theme */}
              <div>
                <p className="text-xs text-text-secondary font-medium mb-3 uppercase tracking-wide">
                  Accent Color
                </p>
                <div className="grid grid-cols-6 gap-2">
                  {COLOR_THEMES.map((theme, i) => (
                    <button
                      key={theme.name}
                      onClick={() => handleColorSelect(i)}
                      title={theme.name}
                      className="relative w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
                      style={{
                        backgroundColor: theme.primary,
                        borderColor: activeColor === i ? "white" : "transparent",
                      }}
                    >
                      {activeColor === i && <Check size={12} className="text-white" />}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-text-secondary mt-1">{COLOR_THEMES[activeColor].name}</p>
              </div>

              {/* Background Theme */}
              <div>
                <p className="text-xs text-text-secondary font-medium mb-3 uppercase tracking-wide">
                  Background
                </p>
                <div className="flex flex-col gap-2">
                  {BG_THEMES.map((bg, i) => (
                    <button
                      key={bg.name}
                      onClick={() => handleBgSelect(i)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl border transition-all duration-200 ${
                        activeBg === i
                          ? "border-primary/60 bg-primary/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-lg border border-white/20"
                        style={{ backgroundColor: bg.bg }}
                      />
                      <span className="text-xs text-text-secondary">{bg.name}</span>
                      {activeBg === i && <Check size={12} className="text-primary ml-auto" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={resetTheme}
                className="w-full text-xs text-text-secondary border border-white/10 rounded-xl py-2 hover:border-white/20 hover:text-white transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}