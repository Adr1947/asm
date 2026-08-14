import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 md:py-36 bg-[var(--sage-soft)]"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Patient Experiences</span>
          <h2 className="mt-5 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight text-[var(--ink)]">
            What Our <span className="italic sage-gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              data-testid={`testimonial-${i}`}
              className="relative bg-white rounded-sm p-8 md:p-9 border border-[var(--line)] shadow-[0_20px_50px_-30px_rgba(43,43,38,0.35)] flex flex-col"
            >
              <Quote size={40} strokeWidth={1} className="text-[var(--sage)] absolute top-6 right-6" />
              <div className="flex gap-0.5 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className="fill-[var(--gold)]" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 font-serif-display text-lg md:text-xl leading-relaxed text-[var(--ink-soft)] italic flex-1">
                “{t.quote}”
              </p>
              <div className="mt-7 pt-5 border-t border-[var(--line)]">
                <p className="font-medium text-[var(--ink)]">{t.name}</p>
                <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                  {t.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] text-[var(--muted)] max-w-2xl mx-auto">
          *Individual experiences may vary. These testimonials reflect personal opinions
          and are not guarantees of results.
        </p>
      </div>
    </section>
  );
}
