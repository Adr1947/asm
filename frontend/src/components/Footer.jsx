import { Instagram, Facebook, Globe } from "lucide-react";
import { NAV_LINKS, IMAGES } from "@/lib/content";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={IMAGES.logo} alt="" className="h-11 w-11 object-contain" />
              <span className="font-serif-display text-2xl tracking-[0.2em]">GOLD SKIN</span>
            </div>
            <p className="mt-6 text-white/45 font-light max-w-sm leading-relaxed">
              A medical spa in McAllen, TX offering injectables, facials, laser hair removal,
              body contouring and physician-guided weight loss. Radiance, revealed.
            </p>
            <div className="mt-8 flex gap-5 text-white/50">
              <a href="#top" aria-label="Instagram" className="hover:text-[var(--gs-gold)] transition-colors duration-300"><Instagram strokeWidth={1.2} /></a>
              <a href="#top" aria-label="Facebook" className="hover:text-[var(--gs-gold)] transition-colors duration-300"><Facebook strokeWidth={1.2} /></a>
              <a href="#top" aria-label="Website" className="hover:text-[var(--gs-gold)] transition-colors duration-300"><Globe strokeWidth={1.2} /></a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Explore</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 font-light hover:text-white transition-colors duration-300">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Visit</p>
            <p className="text-white/70 font-light leading-relaxed">
              3400 N. McColl Rd Ste D<br />McAllen, TX 78501<br />+1 (956) 310-1775<br />goldskinspa@gmail.com
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Gold Skin Spa &amp; Beauty. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#top" className="hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
