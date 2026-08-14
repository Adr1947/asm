import { motion } from "framer-motion";
import { MANIFESTO, IMAGES } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-28 md:py-40 bg-[#050505]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">
          {/* Left sticky heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]"
            >
              Medical Aesthetics · McAllen, TX
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 font-serif-display font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
            >
              A quiet devotion to <span className="italic gold-gradient-text">beautiful skin.</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 relative w-full max-w-md aspect-[4/5] overflow-hidden"
            >
              <picture>
                <source srcSet="/about.webp" type="image/webp" />
                <img
                  src="/about.png"
                  alt="Gold Skin Spa & Beauty building exterior, McAllen TX"
                  width={949}
                  height={922}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[15%] hover:scale-105 transition-transform duration-700 ease-out"
                />
              </picture>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.div>
          </div>

          {/* Right chapters */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col">
            {MANIFESTO.map((c, i) => (
              <motion.div
                key={c.n}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                data-testid={`manifesto-chapter-${c.n}`}
                className="py-12 border-b border-white/10 first:border-t"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif-display text-6xl md:text-7xl text-outline-gold leading-none">
                    {c.n}
                  </span>
                  <h3 className="font-serif-display text-3xl md:text-4xl text-white">{c.title}</h3>
                </div>
                <p className="mt-6 text-white/60 font-light leading-relaxed text-base md:text-lg max-w-xl">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
