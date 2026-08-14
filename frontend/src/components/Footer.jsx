import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS, IMAGES, BUSINESS, MORE_SERVICES, SERVICES, BOOKING_URL } from "@/lib/content";

export default function Footer() {
  const serviceLinks = [...SERVICES.map((s) => s.title), ...MORE_SERVICES];

  return (
    <footer data-testid="footer" className="relative bg-[var(--ink)] text-[var(--cream)] pt-20 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-full bg-[var(--cream)] flex items-center justify-center">
                <img src={IMAGES.logo} alt="" loading="lazy" decoding="async" className="h-9 w-9 object-contain" />
              </span>
              <span className="font-serif-display text-2xl tracking-[0.22em]">ART MED SPA</span>
            </div>
            <p className="mt-6 text-[var(--cream)]/55 font-light max-w-sm leading-relaxed">
              Enhancing natural beauty through advanced aesthetic treatments in a serene,
              luxurious environment — in Bethlehem, Georgia.
            </p>
            <div className="mt-8 flex gap-5 text-[var(--cream)]/60">
              <a href="#top" aria-label="Instagram" className="hover:text-[var(--champagne)] transition-colors duration-300"><Instagram strokeWidth={1.3} /></a>
              <a href="#top" aria-label="Facebook" className="hover:text-[var(--champagne)] transition-colors duration-300"><Facebook strokeWidth={1.3} /></a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--cream)]/40 mb-6">Explore</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[var(--cream)]/70 font-light hover:text-white transition-colors duration-300">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--cream)]/40 mb-6">Services</p>
            <ul className="grid grid-cols-1 gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--cream)]/70 font-light text-sm hover:text-white transition-colors duration-300">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--cream)]/40 mb-6">Visit</p>
            <div className="flex flex-col gap-4 text-[var(--cream)]/70 font-light text-sm">
              <span className="flex items-start gap-2.5"><MapPin size={16} strokeWidth={1.3} className="text-[var(--champagne)] mt-0.5 shrink-0" />{BUSINESS.address}</span>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 hover:text-white transition-colors"><Phone size={16} strokeWidth={1.3} className="text-[var(--champagne)] shrink-0" />{BUSINESS.phone}</a>
              <a href={BUSINESS.emailHref} className="flex items-center gap-2.5 hover:text-white transition-colors"><Mail size={16} strokeWidth={1.3} className="text-[var(--champagne)] shrink-0" />{BUSINESS.email}</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[var(--cream)]/40 text-xs">
          <p>© {new Date().getFullYear()} ART Med Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#top" className="hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
