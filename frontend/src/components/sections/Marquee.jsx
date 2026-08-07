import Marquee from "react-fast-marquee";

const WORDS = ["Aesthetics", "Wellness", "Renewal", "Radiance", "Rituals", "Glow"];

export default function EditorialMarquee() {
  return (
    <section
      data-testid="marquee-section"
      className="py-10 border-y border-[var(--gs-gold-muted)]/30 bg-[var(--gs-ivory)] overflow-hidden"
    >
      <Marquee speed={45} gradient={false} autoFill>
        {WORDS.map((w, i) => (
          <div key={i} className="flex items-center">
            <span className="font-serif-display italic text-4xl md:text-6xl text-[var(--gs-ink)] px-8">
              {w}
            </span>
            <span className="text-[var(--gs-gold-muted)] text-2xl md:text-4xl px-2">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
