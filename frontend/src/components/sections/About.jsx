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
    <section id="about" data-testid="about-section" className="relative py-24 md:py-36 bg-[var(--sage-mist)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">
          {/* Left sticky heading + image */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="eyebrow"
            >
              Our Story
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 font-serif-display font-light text-5xl md:text-6xl leading-[0.98] tracking-tight text-[var(--ink)]"
            >
              Where science, luxury &amp;{" "}
              <span className="italic sage-gradient-text">wellness unite.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 text-[var(--muted)] font-light leading-relaxed md:text-lg max-w-md"
            >
              At ART Med Spa, we elevate aesthetics through precision, artistry and
              innovation — results-driven treatments designed to rejuvenate the skin,
              restore vitality and enhance your natural beauty with subtle sophistication.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_70px_-30px_rgba(110,138,88,0.45)]"
            >
              <img
                src={IMAGES.spaInterior}
                alt="ART Med Spa storefront in Bethlehem, GA"
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--line)]" />
            </motion.div>
          </div>

          {/* Right pillars */}
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
                className="py-11 border-b border-[var(--line)] first:border-t"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif-display text-6xl md:text-7xl text-outline-sage leading-none">
                    {c.n}
                  </span>
                  <h3 className="font-serif-display text-3xl md:text-4xl text-[var(--ink)]">{c.title}</h3>
                </div>
                <p className="mt-6 text-[var(--muted)] font-light leading-relaxed text-base md:text-lg max-w-xl">
                  {c.body}
                </p>
              </motion.div>
            ))}

            <a
              href="#contact"
              data-testid="about-consult-link"
              className="group mt-10 inline-flex items-center gap-3 font-serif-display italic text-xl md:text-2xl text-[var(--sage-deep)] hover:text-[var(--gold-deep)] transition-colors duration-300"
            >
              <span className="border-b border-[var(--sage)] group-hover:border-[var(--gold-deep)] transition-colors duration-300 pb-1">
                Book your free consultation
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
