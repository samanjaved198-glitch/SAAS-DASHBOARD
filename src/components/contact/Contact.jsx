import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, MapPin, Phone, Send, CheckCircle,
  XCircle, MessageSquare, Globe, Link, Code
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@flowsyncai.com",
    color: "text-primary",
    bg: "bg-primary/15",
    href: "mailto:hello@flowsyncai.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-1234",
    color: "text-accent",
    bg: "bg-accent/15",
    href: "tel:+15550001234",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA, USA",
    color: "text-secondary",
    bg: "bg-secondary/15",
    href: "#",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.flowsyncai.com",
    color: "text-green-400",
    bg: "bg-green-400/15",
    href: "#",
  },
];

const socialLinks = [
  { icon: Globe, label: "Twitter", href: "#", color: "hover:text-sky-400 hover:border-sky-400/40" },
  { icon: Link, label: "LinkedIn", href: "#", color: "hover:text-blue-400 hover:border-blue-400/40" },
  { icon: Code, label: "GitHub", href: "#", color: "hover:text-white hover:border-white/40" },
  { icon: MessageSquare, label: "Discord", href: "#", color: "hover:text-indigo-400 hover:border-indigo-400/40" },
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
      setSubmitStatus("success");
      toast.success(`Thanks ${data.name}, we'll get back to you soon!`);
      reset();
    } catch {
      setSubmitStatus("error");
      toast.error("Something went wrong. Please try again.");
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
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <MessageSquare size={13} />
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Get in{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              touch
            </span>{" "}
            with us
          </h2>
          <p className="text-text-secondary">
            Have a question or want to learn more? We would love to hear from you.
            Our team responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Info Cards */}
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 bg-surface/60 border border-white/10 rounded-card p-4 hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className={item.color} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary mb-0.5">{item.label}</p>
                    <p className={`text-sm font-medium ${item.color}`}>{item.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="bg-surface/60 border border-white/10 rounded-card p-5"
            >
              <p className="text-sm font-semibold mb-4">Follow Us</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className={`flex items-center gap-2 text-xs text-text-secondary border border-white/10 rounded-xl px-3 py-2.5 transition-all duration-200 ${s.color}`}
                    >
                      <Icon size={14} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
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
              {/* Success State */}
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center"
                  >
                    <CheckCircle size={40} className="text-accent" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-2">Message Sent!</h3>
                  <p className="text-text-secondary text-sm max-w-xs">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitStatus(null)}
                    className="mt-2 bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-card text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Send another message
                  </motion.button>
                </motion.div>

              ) : submitStatus === "error" ? (
                /* Error State */
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-red-400/15 flex items-center justify-center"
                  >
                    <XCircle size={40} className="text-red-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-2">Something went wrong</h3>
                  <p className="text-text-secondary text-sm max-w-xs">
                    Please try again or email us directly at{" "}
                    <span className="text-primary">hello@flowsyncai.com</span>
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitStatus(null)}
                    className="mt-2 bg-red-400/10 text-red-400 border border-red-400/20 px-5 py-2 rounded-card text-sm font-medium hover:bg-red-400 hover:text-white transition-colors"
                  >
                    Try again
                  </motion.button>
                </motion.div>

              ) : (
                /* Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-lg font-semibold mb-1">Send us a message</h3>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs text-text-secondary mb-1.5 block font-medium">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        {...register("name", {
                          required: "Name is required",
                          minLength: { value: 2, message: "At least 2 characters" },
                        })}
                        placeholder="Jane Smith"
                        className={`w-full bg-background border rounded-xl px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 ${
                          errors.name ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <XCircle size={10} /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-xs text-text-secondary mb-1.5 block font-medium">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        placeholder="jane@company.com"
                        type="email"
                        className={`w-full bg-background border rounded-xl px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 ${
                          errors.email ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <XCircle size={10} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="text-xs text-text-secondary mb-1.5 block font-medium">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="How can we help?"
                      className={`w-full bg-background border rounded-xl px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 ${
                        errors.subject ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <XCircle size={10} /> {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="text-xs text-text-secondary mb-1.5 block font-medium">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 20, message: "At least 20 characters" },
                      })}
                      placeholder="Tell us more about your project or question..."
                      rows={4}
                      className={`w-full bg-background border rounded-xl px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none ${
                        errors.message ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <XCircle size={10} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-medium hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-text-secondary text-center">
                    We typically respond within{" "}
                    <span className="text-accent font-medium">24 hours</span>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}