import "@/App.css";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

// Below-the-fold sections are code-split so they don't block first paint.
const Marquee = lazy(() => import("@/components/sections/Marquee"));
const Services = lazy(() => import("@/components/sections/Services"));
const About = lazy(() => import("@/components/sections/About"));
const Gallery = lazy(() => import("@/components/sections/Gallery"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const CTABanner = lazy(() => import("@/components/sections/CTABanner"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Faq = lazy(() => import("@/components/sections/Faq"));
const Footer = lazy(() => import("@/components/Footer"));

function App() {
  useLenis();

  return (
    <div className="App bg-[var(--cream)] text-[var(--ink)] min-h-screen relative" data-testid="app-root">
      <div className="grain-overlay" />
      <Toaster
        position="bottom-center"
        theme="light"
        toastOptions={{
          style: {
            background: "#ffffff",
            border: "1px solid rgba(110,138,88,0.35)",
            color: "#2B2B26",
            borderRadius: "2px",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Marquee />
          <Services />
          <About />
          <Gallery />
          <Testimonials />
          <CTABanner />
          <Contact />
          <Faq />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
