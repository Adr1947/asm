import "@/App.css";
import { Toaster } from "sonner";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import GiftCards from "@/components/sections/GiftCards";
import Faq from "@/components/sections/Faq";
import LeadCapture from "@/components/sections/LeadCapture";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

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
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <GiftCards />
        <LeadCapture />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
