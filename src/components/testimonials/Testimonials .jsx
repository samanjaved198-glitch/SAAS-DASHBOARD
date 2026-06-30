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
    role: "Product Manager, NovaTech",
    rating: 5,
    text: "FlowSync AI completely changed how our team plans sprints. The AI suggestions alone save us hours every week.",
  },
  {
    name: "David Chen",
    role: "Founder, Brightlane Agency",
    rating: 5,
    text: "We moved three different tools into one platform. Onboarding our team took less than a day.",
  },
  {
    name: "Sara Malik",
    role: "Operations Lead, Vertex Studio",
    rating: 4,
    text: "The automation features are genuinely useful, not just a gimmick. Our task tracking is finally consistent.",
  },
  {
    name: "James Wright",
    role: "CTO, Stackline",
    rating: 5,
    text: "Clean interface, fast performance, and the AI assistant actually understands project context. Impressive.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-text-secondary">
            See what our customers have to say about working with FlowSync AI.
          </p>
        </motion.div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="h-full bg-surface/60 backdrop-blur-md border border-white/10 rounded-card p-7 flex flex-col">
                <Quote className="text-primary/40 mb-4" size={28} />
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < t.rating
                          ? "fill-accent text-accent"
                          : "text-white/15"
                      }
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.role}</p>
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