import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="w-full min-h-screen text-white p-3 md:p-6 flex flex-col font-sans gap-8 relative">
      
      <div className="fixed inset-0 overflow-hidden z-[-1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source src="/hero.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-[#070b14]/85" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto rounded-[2rem] border border-[#00e5ff]/30 shadow-[0_0_40px_rgba(0,229,255,0.12)] bg-[#0b132b]/60 backdrop-blur-md relative flex flex-col overflow-hidden">
        <Navbar />
        <Hero />
      </div>

      <div className="w-full max-w-[1400px] mx-auto">
        <Partners />
      </div>

      <div className="w-full max-w-[1400px] mx-auto">
        <About />
      </div>

      <div className="w-full max-w-[1400px] mx-auto">
        <CTASection />
      </div>

    </div>
  );
}