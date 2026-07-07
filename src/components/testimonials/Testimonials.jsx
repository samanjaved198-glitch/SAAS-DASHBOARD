import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Product Manager",
    company: "NovaTech",
    rating: 5,
    text: "FlowSync AI completely changed how our team plans sprints. The AI suggestions alone save us hours every week. I cannot imagine going back to our old tools.",
    avatar: "AK",
    avatarBg: "bg-primary/20",
    avatarColor: "text-primary",
    verified: true,
  },
  {
    name: "David Chen",
    role: "Founder & CEO",
    company: "Brightlane Agency",
    rating: 5,
    text: "We moved three different tools into one platform. Onboarding our team took less than a day and productivity went up 40% in the first month.",
    avatar: "DC",
    avatarBg: "bg-accent/20",
    avatarColor: "text-accent",
    verified: true,
  },
  {
    name: "Sara Malik",
    role: "Operations Lead",
    company: "Vertex Studio",
    rating: 4,
    text: "The automation features are genuinely useful, not just a gimmick. Our task tracking is finally consistent and the whole team is aligned.",
    avatar: "SM",
    avatarBg: "bg-secondary/20",
    avatarColor: "text-secondary",
    verified: true,
  },
  {
    name: "James Wright",
    role: "CTO",
    company: "Stackline",
    rating: 5,
    text: "Clean interface, fast performance, and the AI assistant actually understands project context. The best project tool we have used in 5 years.",
    avatar: "JW",
    avatarBg: "bg-green-400/20",
    avatarColor: "text-green-400",
    verified: true,
  },
  {
    name: "Priya Nair",
    role: "Engineering Manager",
    company: "CloudBase Inc",
    rating: 5,
    text: "FlowSync AI cut our planning meetings in half. The AI-generated summaries are spot-on and save us so much time every sprint cycle.",
    avatar: "PN",
    avatarBg: "bg-pink-400/20",
    avatarColor: "text-pink-400",
    verified: true,
  },
  {
    name: "Omar Siddiqui",
    role: "Startup Founder",
    company: "LaunchPad HQ",
    rating: 5,
    text: "As a solo founder managing a remote team, FlowSync AI has been a game changer. Everything in one place, AI does the heavy lifting.",
    avatar: "OS",
    avatarBg: "bg-orange-400/20",
    avatarColor: "text-orange-400",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <Star size={13} className="fill-accent" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Loved by{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              teams worldwide
            </span>
          </h2>
          <p className="text-text-secondary">
            See what our customers have to say about working with FlowSync AI.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-text-secondary text-sm">from 2,400+ reviews</span>
          </div>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <div className="h-full bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-7 flex flex-col hover:border-primary/30 transition-colors duration-300 group">

                {/* Quote Icon */}
                <Quote className="text-primary/30 mb-4 group-hover:text-primary/60 transition-colors" size={30} />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < t.rating ? "fill-accent text-accent" : "text-white/15"}
                    />
                  ))}
                  <span className="text-xs text-text-secondary ml-1">{t.rating}.0</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-11 h-11 rounded-full ${t.avatarBg} border border-white/10 flex items-center justify-center text-sm font-bold ${t.avatarColor} shrink-0`}>
                      {t.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                        {t.verified && (
                          <span className="shrink-0 w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path d="M1.5 4L3 5.5L6.5 2" stroke="#06B6D4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary truncate">{t.role}</p>
                      <p className={`text-xs font-medium ${t.avatarColor} truncate`}>{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}