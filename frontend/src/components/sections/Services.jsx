import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, MORE_SERVICES, BOOKING_URL } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 md:py-36 bg-[var(--cream)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">What We Offer</span>
          <h2 className="mt-5 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight text-[var(--ink)]">
            Our <span className="italic sage-gradient-text">Services</span>
          </h2>
          <p className="mt-5 text-[var(--muted)] font-light md:text-lg">
            Advanced, results-driven treatments — each one tailored to your goals during a
            personal consultation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.n}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`service-item-${s.n}`}
              className="group block bg-white border border-[var(--line)] rounded-sm overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(110,138,88,0.45)] transition-shadow duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  width={900}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                  {s.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif-display text-2xl md:text-3xl text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.4}
                    className="text-[var(--sage-deep)] shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="mt-3 text-[var(--muted)] font-light leading-relaxed text-sm md:text-[15px]">
                  {s.desc}
                </p>
                <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.2em] text-[var(--sage-deep)] border-b border-[var(--sage)] pb-1 group-hover:border-[var(--gold-deep)] group-hover:text-[var(--gold-deep)] transition-colors duration-300">
                  Learn More
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* more services + CTA */}
        <div className="mt-14 flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-3">
            {MORE_SERVICES.map((m) => (
              <span
                key={m}
                className="px-5 py-2 rounded-full border border-[var(--line)] bg-[var(--sage-mist)] text-[13px] text-[var(--ink-soft)]"
              >
                {m}
              </span>
            ))}
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="services-book-link"
            className="inline-flex items-center gap-3 bg-[var(--ink)] text-white px-10 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--sage-deep)] transition-colors duration-400"
          >
            View All Services & Book
          </a>
        </div>
      </div>
    </section>
  );
}
