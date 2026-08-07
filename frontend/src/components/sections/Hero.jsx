import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { IMAGES } from "@/lib/content";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 + i * 0.15 },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative h-screen min-h-[720px] w-full overflow-hidden"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt="Gold Skin Spa"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <img src={IMAGES.logo} alt="" className="h-11 w-11 object-contain" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-[var(--gs-champagne)]">
            Luxury Med Spa
          </span>
        </motion.div>

        <h1 className="font-serif-display font-light leading-[0.92] text-white text-[clamp(3.2rem,11vw,11rem)] tracking-tight">
          <span className="reveal-mask">
            <motion.span custom={0} variants={lineVariants} initial="hidden" animate="visible" className="block">
              Gold Skin
            </motion.span>
          </span>
          <span className="reveal-mask">
            <motion.span custom={1} variants={lineVariants} initial="hidden" animate="visible" className="block italic gold-gradient-text">
              Spa &amp; Beauty
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16 max-w-3xl"
        >
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-md">
            Medical aesthetics reimagined as ritual. Where clinical science meets
            candlelit calm — and your natural radiance is simply revealed.
          </p>
          <a
            href="#contact"
            data-testid="hero-book-btn"
            className="shrink-0 inline-flex items-center justify-center border border-[var(--gs-gold)]/70 px-9 py-4 text-[11px] uppercase tracking-[0.28em] text-white hover:bg-[var(--gs-gold)] hover:text-black transition-colors duration-400"
          >
            Reserve Your Visit
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
