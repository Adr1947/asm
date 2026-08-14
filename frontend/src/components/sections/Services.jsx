import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, IMAGES } from "@/lib/content";

const IMG_POOL = [IMAGES.product1, IMAGES.candles, IMAGES.portraitGlow, IMAGES.spaInterior, IMAGES.product3, IMAGES.product2, IMAGES.portrait2, IMAGES.candles];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" data-testid="services-section" className="relative py-28 md:py-40 bg-[#080808]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]">
              Treatments
            </span>
            <h2 className="mt-6 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight">
              The Menu
            </h2>
          </div>
          <p className="text-white/50 font-light max-w-sm text-sm md:text-base">
            Every treatment is bespoke. Prices are a starting point — your protocol is
            designed in consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Floating preview image */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={IMG_POOL[active]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] text-white/70">
                {SERVICES[active].title}
              </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-8 flex flex-col">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
                onMouseEnter={() => setActive(i)}
                data-testid={`service-item-${s.n}`}
                className="group flex items-start gap-5 md:gap-8 py-7 border-b border-white/10 first:border-t cursor-default transition-colors duration-500 hover:bg-white/[0.02]"
              >
                <span className="font-body text-xs text-[var(--gs-gold)]/70 pt-2 tracking-widest">
                  {s.n}
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
                    <h3 className="font-serif-display text-2xl md:text-4xl text-white/90 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 transform-gpu will-change-transform">
                      {s.title}
                    </h3>
                    <span className="font-body text-sm md:text-base text-[var(--gs-champagne)] whitespace-nowrap flex flex-col md:items-end">
                      {s.price}
                      {s.deposit && (
                        <span className="text-[10px] tracking-wide text-white/35 normal-case">{s.deposit}</span>
                      )}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-white/45 font-light text-sm md:text-base overflow-hidden max-h-0 group-hover:max-h-24 transition-[max-height,opacity] duration-500 opacity-0 group-hover:opacity-100">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <a
              href="#contact"
              data-testid="services-full-menu-link"
              className="group/link mt-10 inline-flex items-center gap-3 font-serif-display italic text-xl md:text-2xl text-[var(--gs-champagne)] hover:text-white transition-colors duration-300"
            >
              <span className="border-b border-[var(--gs-gold)]/40 group-hover/link:border-white/60 transition-colors duration-300 pb-1">
                40+ treatments, one visit away — explore the full menu
              </span>
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
