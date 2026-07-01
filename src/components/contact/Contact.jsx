import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, XCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@flowsyncai.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-1234",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA, USA",
  },
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Get in touch with us
          </h2>
          <p className="text-text-secondary">
            Have a question or want to learn more? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-surface/60 border border-white/10 rounded-card p-5"
                >
                  <div className="w-10 h-10 rounded-card bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary mb-1">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div className="bg-surface/60 border border-white/10 rounded-card p-5">
              <p className="text-sm font-medium mb-3">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs text-text-secondary border border-white/10 rounded-full px-3 py-1 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-8"
          >
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
                >
                  <CheckCircle size={48} className="text-accent" />
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-text-secondary text-sm">
                    Thanks for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="mt-2 text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : submitStatus === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
                >
                  <XCircle size={48} className="text-red-400" />
                  <h3 className="text-xl font-semibold">Something went wrong</h3>
                  <p className="text-text-secondary text-sm">
                    Please try again or email us directly at hello@flowsyncai.com
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="mt-2 text-sm text-primary hover:underline"
                  >
                    Try again
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <div>
                    <label className="text-sm text-text-secondary mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                      })}
                      placeholder="Jane Smith"
                      className={`w-full bg-background border rounded-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-text-secondary mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      placeholder="jane@company.com"
                      type="email"
                      className={`w-full bg-background border rounded-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-sm text-text-secondary mb-1.5 block">
                      Subject
                    </label>
                    <input
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="How can we help?"
                      className={`w-full bg-background border rounded-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                        errors.subject ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm text-text-secondary mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 20, message: "Message must be at least 20 characters" },
                      })}
                      placeholder="Tell us more about your project or question..."
                      rows={4}
                      className={`w-full bg-background border rounded-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary resize-none ${
                        errors.message ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-card font-medium hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}