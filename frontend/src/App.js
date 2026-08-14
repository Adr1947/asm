import "@/App.css";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

// Below-the-fold sections are code-split so they don't block first paint / inflate TBT.
const Marquee = lazy(() => import("@/components/sections/Marquee"));
const About = lazy(() => import("@/components/sections/About"));
const Services = lazy(() => import("@/components/sections/Services"));
const Gallery = lazy(() => import("@/components/sections/Gallery"));
const GiftCards = lazy(() => import("@/components/sections/GiftCards"));
const LeadCapture = lazy(() => import("@/components/sections/LeadCapture"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Faq = lazy(() => import("@/components/sections/Faq"));
const Footer = lazy(() => import("@/components/Footer"));

function App() {
  useLenis();

  return (
    <div className="App bg-[#050505] text-white min-h-screen relative" data-testid="app-root">
      <div className="grain-overlay" />
      <Toaster
        position="bottom-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#fff",
            borderRadius: "2px",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Marquee />
          <About />
          <Services />
          <LeadCapture />
          <Gallery />
          <GiftCards />
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
