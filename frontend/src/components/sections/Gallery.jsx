import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { GALLERY } from "@/lib/content";

function SliderHandle() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-px h-full bg-[var(--gs-gold)]/70" />
      <div className="absolute h-11 w-11 rounded-full bg-black/70 backdrop-blur border border-[var(--gs-gold)]/70 flex items-center justify-center">
        <span className="text-[var(--gs-gold)] text-lg leading-none">‹›</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="relative py-28 md:py-40 bg-[#050505]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]">
            Real Results
          </span>
          <h2 className="mt-6 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Before &amp; <span className="italic gold-gradient-text">After</span>
          </h2>
          <p className="mt-6 text-white/55 font-light md:text-lg">
            Drag to reveal the transformation. Individual results vary — every journey is
            unique to the client.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {GALLERY.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`gallery-item-${i}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden ring-1 ring-inset ring-white/10">
                <ReactCompareSlider
                  handle={<SliderHandle />}
                  position={i === 0 ? 55 : 50}
                  itemOne={
                    <ReactCompareSliderImage
                      src={g.after}
                      alt="Before"
                      style={{ filter: "grayscale(1) brightness(0.72) contrast(0.9)" }}
                    />
                  }
                  itemTwo={<ReactCompareSliderImage src={g.after} alt="After" />}
                  className="h-full w-full"
                />
                <div className="pointer-events-none absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/70 bg-black/40 px-3 py-1 backdrop-blur-sm">
                  Before
                </div>
                <div className="pointer-events-none absolute top-4 right-4 text-[10px] uppercase tracking-[0.25em] text-black bg-[var(--gs-gold)] px-3 py-1">
                  After
                </div>
              </div>
              <p className="mt-4 font-serif-display text-xl text-white/85">{g.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
