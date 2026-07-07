import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-7 py-3 transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:brightness-110",
    secondary:
      "border border-white/20 text-text-primary backdrop-blur-sm hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10",
    ghost:
      "text-primary hover:text-accent transition-colors",
  };

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const Tag = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: disabled ? 1 : 1.03 }} whileTap={{ scale: disabled ? 1 : 0.97 }}>
      <Tag
        href={href}
        onClick={onClick}
        disabled={disabled}
        type={href ? undefined : type}
        className={classes}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}