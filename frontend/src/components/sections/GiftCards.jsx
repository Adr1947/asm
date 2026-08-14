import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { toast } from "sonner";
import { Check, ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/content";

const DESIGNS = [
  { id: "bloom", name: "Golden Bloom", image: IMAGES.product1 },
  { id: "onyx", name: "Onyx Noir", image: IMAGES.product2 },
  { id: "champagne", name: "Champagne", image: IMAGES.product3 },
];

const PRESETS = [100, 250, 500, 1000];

export default function GiftCards() {
  const [amount, setAmount] = useState(250);
  const [design, setDesign] = useState("bloom");
  const [recipient, setRecipient] = useState("else");

  const activeDesign = DESIGNS.find((d) => d.id === design) || DESIGNS[0];

  // preview tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  const checkout = () => {
    if (!amount || Number(amount) <= 0) {
      toast.error("Please choose a gift card amount.");
      return;
    }
    toast.success(`$${amount} · ${activeDesign.name} gift card — checkout is coming soon.`);
  };

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
            Give the gift of confidence at McAllen's Gold Skin Spa & Beauty. Build the
            perfect card in seconds — redeemable across facials, injectables, laser and
            weight-loss treatments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* LEFT — live preview */}
          <div style={{ perspective: 1200 }} className="flex justify-center">
            <motion.div
              onMouseMove={handleMove}
              onMouseLeave={reset}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              data-testid="giftcard-preview"
              className="relative w-full max-w-md aspect-[1.6/1] overflow-hidden rounded-md ring-1 ring-[var(--gs-gold)]/25 shadow-2xl"
            >
              <img src={activeDesign.image} alt={activeDesign.name} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/45 to-black/60" />
              <div style={{ transform: "translateZ(45px)" }} className="absolute inset-0 p-7 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <img src={IMAGES.logo} alt="" className="h-9 w-9 object-contain" />
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">Gift Card</span>
                </div>
                <div>
                  <p className="font-serif-display italic text-xl text-white/85">{activeDesign.name}</p>
                  <p className="font-serif-display text-5xl gold-gradient-text leading-tight">${amount || 0}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                    Gold Skin Spa &amp; Beauty
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — configurator */}
          <div className="flex flex-col gap-10">
            {/* a. amount */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-4">Choose an amount</p>
              <div className="flex flex-wrap gap-3">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    data-testid={`giftcard-amount-${p}`}
                    onClick={() => setAmount(p)}
                    className={`px-6 py-3 text-sm tracking-wide border transition-colors duration-300 ${
                      Number(amount) === p
                        ? "bg-[var(--gs-gold)] text-black border-[var(--gs-gold)]"
                        : "border-white/20 text-white/80 hover:border-[var(--gs-gold)]"
                    }`}
                  >
                    ${p}
                  </button>
                ))}
                <div className="flex items-center border border-white/20 px-4">
                  <span className="text-white/50 text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    data-testid="giftcard-amount-custom"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Custom"
                    className="w-24 bg-transparent py-3 px-2 text-white placeholder:text-white/40 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* b. design select */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-4">Card design</p>
              <div className="relative">
                <select
                  data-testid="giftcard-design-select"
                  value={design}
                  onChange={(e) => setDesign(e.target.value)}
                  className="w-full appearance-none bg-transparent border-b border-white/25 py-4 pr-10 text-white text-lg font-serif-display focus:outline-none focus:border-[var(--gs-gold)] transition-colors duration-300 cursor-pointer"
                >
                  {DESIGNS.map((d) => (
                    <option key={d.id} value={d.id} className="bg-[#0a0a0a]">{d.name}</option>
                  ))}
                </select>
                <ChevronDown size={18} strokeWidth={1.5} className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[var(--gs-gold)]" />
              </div>
            </div>

            {/* c. recipient toggle */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-4">Who is this gift card for?</p>
              <div className="inline-flex border border-white/20">
                {[
                  { id: "else", label: "Someone else" },
                  { id: "myself", label: "Myself" },
                ].map((r) => (
                  <button
                    key={r.id}
                    data-testid={`giftcard-recipient-${r.id}`}
                    onClick={() => setRecipient(r.id)}
                    className={`flex items-center gap-2 px-6 py-3 text-sm transition-colors duration-300 ${
                      recipient === r.id ? "bg-[var(--gs-gold)] text-black" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {recipient === r.id && <Check size={14} strokeWidth={2} />}
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* d. checkout */}
            <button
              data-testid="giftcard-checkout"
              onClick={checkout}
              className="mt-2 self-start bg-[var(--gs-ivory)] text-[var(--gs-ink)] px-12 py-4 text-[11px] uppercase tracking-[0.26em] hover:bg-[var(--gs-champagne)] transition-colors duration-400"
            >
              Checkout · ${amount || 0}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
