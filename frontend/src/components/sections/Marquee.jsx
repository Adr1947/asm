import Marquee from "react-fast-marquee";

const WORDS = ["Injectables", "Wellness", "Laser", "Facials", "Renewal", "Radiance"];

export default function EditorialMarquee() {
  return (
    <section
      data-testid="marquee-section"
      className="py-9 border-y border-[var(--line)] bg-[var(--sage-soft)] overflow-hidden"
    >
      <Marquee speed={45} gradient={false} autoFill>
        {WORDS.map((w, i) => (
          <div key={i} className="flex items-center">
            <span className="font-serif-display italic text-4xl md:text-6xl text-[var(--ink)] px-8">
              {w}
            </span>
            <span className="text-[var(--gold-deep)] text-2xl md:text-4xl px-2">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
