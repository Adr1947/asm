import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { toast } from "sonner";
import { IMAGES, GIFT_CARDS } from "@/lib/content";

function TiltCard({ card, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center"
      style={{ perspective: 1000 }}
      data-testid={`gift-card-${index}`}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full aspect-[1.6/1] overflow-hidden rounded-md ring-1 ring-[var(--gs-gold)]/25"
      >
        <img src={index === 1 ? IMAGES.product2 : index === 2 ? IMAGES.product3 : IMAGES.product1} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-black/60" />
        <div style={{ transform: "translateZ(40px)" }} className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <img src={IMAGES.logo} alt="" className="h-8 w-8 object-contain" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">Gift Card</span>
          </div>
          <div>
            <p className="font-serif-display italic text-2xl text-white/90">{card.tier}</p>
            <p className="font-serif-display text-4xl gold-gradient-text">{card.amount}</p>
          </div>
        </div>
      </motion.div>

      <p className="mt-6 text-center text-white/55 font-light text-sm max-w-xs">{card.note}</p>
      <button
        data-testid={`gift-card-buy-${index}`}
        onClick={() => toast.success(`${card.tier} gift card (${card.amount}) added — checkout is coming soon.`)}
        className="mt-5 border border-[var(--gs-gold)]/60 px-8 py-3 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-[var(--gs-gold)] hover:text-black transition-colors duration-400"
      >
        Purchase
      </button>
    </motion.div>
  );
}

export default function GiftCards() {
  return (
    <section id="gift-cards" data-testid="giftcards-section" className="relative py-28 md:py-40 bg-[#080808]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]">
            The Gift of Glow
          </span>
          <h2 className="mt-6 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Gift Cards
          </h2>
          <p className="mt-6 text-white/55 font-light md:text-lg">
            Give the rare luxury of time and radiance. Each card is beautifully presented
            and redeemable across every treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14 max-w-6xl mx-auto">
          {GIFT_CARDS.map((c, i) => (
            <TiltCard key={c.tier} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
