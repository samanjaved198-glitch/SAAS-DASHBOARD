import { useEffect, useRef } from "react";

// Handle keyboard navigation for accordion/dropdown items
export function useKeyboardNav(onEnter, onEscape) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onEnter?.();
      }
      if (e.key === "Escape") {
        onEscape?.();
      }
    };

    el.addEventListener("keydown", handleKey);
    return () => el.removeEventListener("keydown", handleKey);
  }, [onEnter, onEscape]);

  return ref;
}

// Skip to main content for accessibility
export function useSkipLink() {
  const handleSkip = () => {
    const main = document.querySelector("main");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus();
    }
  };
  return handleSkip;
}