import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, Eye, EyeOff, Loader } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

// Google "G" logo — lucide-react removed brand icons, so we use inline SVG instead
function GoogleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const { login, signup, loginWithGoogle } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    try {
      if (tab === "login") {
        await login(form.email, form.password);
        toast.success("Welcome back!");
      } else {
        await signup(form.email, form.password, form.name);
        toast.success("Account created! Welcome to FlowSync AI.");
      }
      onClose();
    } catch (err) {
      const message =
        err.code === "auth/user-not-found" ? "No account found with this email." :
        err.code === "auth/wrong-password" ? "Incorrect password." :
        err.code === "auth/email-already-in-use" ? "Email already in use." :
        err.code === "auth/weak-password" ? "Password must be at least 6 characters." :
        "Something went wrong. Please try again.";
      setFormError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      toast.success("Signed in with Google!");
      onClose();
    } catch {
      setFormError("Google sign-in failed. Please try again.");
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-101 flex items-center justify-center px-4"
          >
            <div
              className="w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              style={{ background: "var(--color-surface)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div>
                  <h2 className="text-lg font-bold">
                    {tab === "login" ? "Welcome back" : "Create an account"}
                  </h2>
                  <p className="text-text-secondary text-sm mt-0.5">
                    {tab === "login"
                      ? "Sign in to your FlowSync AI account"
                      : "Start your 14-day free trial today"}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-text-secondary"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6">
                {/* Tabs */}
                <div className="flex bg-white/5 rounded-xl p-1 mb-6">
                  {["login", "signup"].map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTab(t); setFormError(""); }}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        tab === t
                          ? "bg-primary text-white shadow-lg"
                          : "text-text-secondary hover:text-white"
                      }`}
                    >
                      {t === "login" ? "Sign In" : "Sign Up"}
                    </button>
                  ))}
                </div>

                {/* Google Button */}
                <button
                  onClick={handleGoogle}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 border border-white/10 rounded-xl py-2.5 text-sm font-medium hover:bg-white/5 transition-colors mb-5 disabled:opacity-50"
                >
                  <GoogleIcon size={16} />
                  Continue with Google
                </button>

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-xs text-text-secondary">or</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {tab === "signup" && (
                    <div className="relative">
                      <label htmlFor="auth-name" className="sr-only">Full Name</label>
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                      <input
                        id="auth-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full bg-background border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors"
                      />
                    </div>
                  )}

                  <div className="relative">
                    <label htmlFor="auth-email" className="sr-only">Email Address</label>
                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input
                      id="auth-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full bg-background border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="auth-password" className="sr-only">Password</label>
                    <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input
                      id="auth-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      className="w-full bg-background border border-white/10 rounded-xl pl-9 pr-10 py-2.5 text-sm outline-none focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>

                  {/* Error */}
                  {formError && (
                    <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                      {formError}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-2.5 rounded-xl font-medium hover:bg-secondary transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <><Loader size={15} className="animate-spin" /> Please wait...</>
                    ) : (
                      tab === "login" ? "Sign In" : "Create Account"
                    )}
                  </motion.button>
                </form>

                <p className="text-center text-xs text-text-secondary mt-4">
                  {tab === "login" ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setTab(tab === "login" ? "signup" : "login")}
                    className="text-primary hover:underline font-medium"
                  >
                    {tab === "login" ? "Sign up free" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}