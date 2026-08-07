import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SERVICES } from "@/lib/content";

const INFO = [
  { icon: MapPin, label: "Studio", value: "128 Aurelia Avenue, Beverly Hills, CA" },
  { icon: Phone, label: "Call", value: "+1 (310) 555-0147" },
  { icon: Mail, label: "Email", value: "hello@goldskin.com" },
  { icon: Clock, label: "Hours", value: "Tue – Sat · 9am – 7pm" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please add your name and email.");
      return;
    }
    toast.success("Request received — our concierge will be in touch shortly.");
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-28 md:py-40 bg-[#080808]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]">
            Book Your Visit
          </span>
          <h2 className="mt-6 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Begin your <span className="italic gold-gradient-text">ritual.</span>
          </h2>
          <p className="mt-6 text-white/55 font-light md:text-lg">
            Share a few details and our concierge will craft the perfect appointment
            around you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* CARD 1 — Form */}
          <motion.form
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={submit}
            data-testid="contact-form"
            className="bg-[var(--gs-ivory)] text-[var(--gs-ink)] p-8 md:p-10 flex flex-col gap-5"
          >
            <p className="font-serif-display text-2xl text-[var(--gs-ink)]">Request an appointment</p>
            {/* ivory-card inputs override */}
            <input data-testid="contact-name" placeholder="Full name" value={form.name} onChange={update("name")}
              className="w-full bg-white/70 border border-[var(--gs-ink)]/15 py-3 px-4 text-[var(--gs-ink)] placeholder:text-[var(--gs-ink)]/40 focus:outline-none focus:border-[var(--gs-gold-muted)] transition-colors duration-300" />
            <input data-testid="contact-phone" type="tel" placeholder="Phone number" value={form.phone} onChange={update("phone")}
              className="w-full bg-white/70 border border-[var(--gs-ink)]/15 py-3 px-4 text-[var(--gs-ink)] placeholder:text-[var(--gs-ink)]/40 focus:outline-none focus:border-[var(--gs-gold-muted)] transition-colors duration-300" />
            <input data-testid="contact-email" type="email" placeholder="Email address" value={form.email} onChange={update("email")}
              className="w-full bg-white/70 border border-[var(--gs-ink)]/15 py-3 px-4 text-[var(--gs-ink)] placeholder:text-[var(--gs-ink)]/40 focus:outline-none focus:border-[var(--gs-gold-muted)] transition-colors duration-300" />
            <select data-testid="contact-service" value={form.service} onChange={update("service")}
              className="w-full bg-white/70 border border-[var(--gs-ink)]/15 py-3 px-4 text-[var(--gs-ink)] focus:outline-none focus:border-[var(--gs-gold-muted)] transition-colors duration-300 appearance-none cursor-pointer">
              <option value="">Select a treatment</option>
              {SERVICES.map((s) => (
                <option key={s.n} value={s.title}>{s.title}</option>
              ))}
            </select>
            <textarea data-testid="contact-message" rows={3} placeholder="Tell us about your goals (optional)" value={form.message} onChange={update("message")}
              className="w-full bg-white/70 border border-[var(--gs-ink)]/15 py-3 px-4 text-[var(--gs-ink)] placeholder:text-[var(--gs-ink)]/40 focus:outline-none focus:border-[var(--gs-gold-muted)] transition-colors duration-300 resize-none" />
            <button type="submit" data-testid="contact-submit"
              className="mt-1 bg-[var(--gs-ink)] text-[var(--gs-ivory)] py-4 text-[11px] uppercase tracking-[0.26em] hover:bg-[var(--gs-gold-muted)] hover:text-black transition-colors duration-400">
              Request Appointment
            </button>
            <p className="text-[11px] text-[var(--gs-ink)]/50 leading-relaxed">
              By submitting, you agree to be contacted about your enquiry. We never share
              your details with third parties.
            </p>
          </motion.form>

          {/* CARD 2 — Studio info */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-testid="contact-info-card"
            className="bg-[#101010] border border-white/10 p-8 md:p-10 flex flex-col"
          >
            <p className="font-serif-display text-2xl text-white">The Studio</p>
            <div className="mt-8 flex flex-col gap-8">
              {INFO.map((it) => (
                <div key={it.label} className="flex items-start gap-4" data-testid={`contact-info-${it.label.toLowerCase()}`}>
                  <it.icon size={20} strokeWidth={1} className="text-[var(--gs-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{it.label}</p>
                    <p className="mt-1.5 text-white/80 font-light">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-10">
              <p className="font-serif-display italic text-lg text-[var(--gs-champagne)]">
                Complimentary valet parking for all guests.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 — Map */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-testid="contact-map-card"
            className="relative min-h-[420px] lg:min-h-full border border-white/10 overflow-hidden"
          >
            <iframe
              title="Gold Skin Spa location"
              src="https://www.google.com/maps?q=Beverly+Hills+California&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.1]"
              style={{ border: 0, filter: "grayscale(40%) invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute bottom-5 left-5 bg-black/80 backdrop-blur-md border border-[var(--gs-gold)]/30 px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gs-champagne)]">Find us</p>
              <p className="mt-1 text-white/85 font-light text-sm">Beverly Hills, CA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
