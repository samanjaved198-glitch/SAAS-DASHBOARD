import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.webp";
import EmptyState from "../common/EmptyState";

const blogs = [
  {
    category: "AI & Automation",
    title: "How AI is Transforming Project Management in 2026",
    excerpt:
      "Discover how modern teams are using AI to eliminate bottlenecks, automate repetitive tasks, and make smarter decisions faster than ever before.",
    author: "Sarah Mitchell",
    authorInitials: "SM",
    authorColor: "bg-primary/20 text-primary",
    readTime: "5 min read",
    date: "Jun 28, 2026",
    categoryColor: "text-primary bg-primary/10 border border-primary/20",
    image: blog1,
  },
  {
    category: "Productivity",
    title: "10 Workflow Habits That High-Performing Teams Share",
    excerpt:
      "We analyzed over 500 high-output teams to find the habits and tools that consistently set them apart from the competition.",
    author: "James Park",
    authorInitials: "JP",
    authorColor: "bg-accent/20 text-accent",
    readTime: "7 min read",
    date: "Jun 22, 2026",
    categoryColor: "text-accent bg-accent/10 border border-accent/20",
    image: blog2,
  },
  {
    category: "Product Update",
    title: "Introducing Smart Suggestions: Your AI Co-Pilot is Here",
    excerpt:
      "FlowSync AI now surfaces intelligent task suggestions based on your team's patterns, deadlines, and project goals — automatically.",
    author: "Priya Nair",
    authorInitials: "PN",
    authorColor: "bg-secondary/20 text-secondary",
    readTime: "3 min read",
    date: "Jun 15, 2026",
    categoryColor: "text-secondary bg-secondary/10 border border-secondary/20",
    image: blog3,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(blogs.map((b) => b.category))];
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

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
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
              <BookOpen size={13} />
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Latest from{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                FlowSync
              </span>
            </h2>
            <p className="text-text-secondary mt-3 max-w-lg">
              Tips, product updates, and insights to help your team work smarter.
            </p>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors shrink-0 font-medium"
          >
            View all articles <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-white/10 text-text-secondary hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length === 0 ? (
          <EmptyState
            icon={BookOpen}
            title="No posts in this category"
            description="Try selecting a different category to see more articles."
          />
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-surface/60 backdrop-blur-md border border-white/10 rounded-card overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              {/* Real Image Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge on image */}
                <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${blog.categoryColor}`}>
                  {blog.category}
                </span>

                {/* Read time badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-2 py-1 rounded-full">
                  <Clock size={10} />
                  {blog.readTime}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-3">
                  <Calendar size={11} />
                  {blog.date}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base leading-snug mb-3 group-hover:text-primary transition-colors cursor-pointer">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                  {blog.excerpt}
                </p>

                {/* Meta + Read More */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${blog.authorColor}`}>
                      {blog.authorInitials}
                    </div>
                    <span className="text-xs text-text-secondary">{blog.author}</span>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1 text-primary text-xs font-semibold hover:text-accent transition-colors"
                  >
                    Read More <ArrowRight size={12} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}