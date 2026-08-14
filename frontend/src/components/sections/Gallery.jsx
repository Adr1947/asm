import { motion } from "framer-motion";
import { GALLERY, BOOKING_URL } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="relative py-24 md:py-36 bg-[var(--cream)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Our Work</span>
          <h2 className="mt-5 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight text-[var(--ink)]">
            Our <span className="italic gold-gradient-text">Gallery</span>
          </h2>
          <p className="mt-5 text-[var(--muted)] font-light md:text-lg">
            A glimpse inside ART Med Spa — our space, our treatments and the natural
            radiance we help reveal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 [grid-auto-rows:180px] md:[grid-auto-rows:230px]">
          {GALLERY.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`gallery-item-${i}`}
              className={`group relative overflow-hidden rounded-sm ring-1 ring-inset ring-[var(--line)] ${
                g.span === "tall" ? "row-span-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.label}
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(43,43,38,0.55)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {g.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-book-link"
            className="inline-flex items-center gap-3 border border-[var(--gold-deep)] text-[var(--gold-deep)] px-10 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--gold-deep)] hover:text-white transition-colors duration-400"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
