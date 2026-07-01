import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";

const blogs = [
  {
    category: "AI & Automation",
    title: "How AI is Transforming Project Management in 2026",
    excerpt:
      "Discover how modern teams are using AI to eliminate bottlenecks, automate repetitive tasks, and make smarter decisions faster.",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    date: "Jun 28, 2026",
    color: "text-primary bg-primary/10",
  },
  {
    category: "Productivity",
    title: "10 Workflow Habits That High-Performing Teams Share",
    excerpt:
      "We analyzed over 500 high-output teams to find the habits and tools that consistently set them apart from the rest.",
    author: "James Park",
    readTime: "7 min read",
    date: "Jun 22, 2026",
    color: "text-accent bg-accent/10",
  },
  {
    category: "Product Update",
    title: "Introducing Smart Suggestions: Your AI Co-Pilot is Here",
    excerpt:
      "FlowSync AI now surfaces intelligent task suggestions based on your team's patterns, deadlines, and project goals.",
    author: "Priya Nair",
    readTime: "3 min read",
    date: "Jun 15, 2026",
    color: "text-secondary bg-secondary/10",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wide">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Latest from FlowSync
            </h2>
            <p className="text-text-secondary mt-3 max-w-lg">
              Tips, product updates, and insights to help your team work smarter.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors shrink-0"
          >
            View all articles <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-video w-full bg-background flex items-center justify-center text-text-secondary text-sm border-b border-white/10">
                Blog Thumbnail
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Category Badge */}
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full w-fit mb-4 ${blog.color}`}
                >
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="font-semibold text-base leading-snug mb-3 hover:text-primary transition-colors cursor-pointer">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-text-secondary border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1.5">
                    <User size={12} />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {blog.readTime}
                  </div>
                </div>

                {/* Read More */}
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-1.5 text-primary text-sm font-medium mt-4 w-fit"
                >
                  Read More <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}