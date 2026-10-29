import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="/heroo.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/85 via-[#070b14]/65 to-[#070b14]/95" />
      </div>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 max-w-4xl mx-auto">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs md:text-sm mb-6 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
          نصنع نمو علامتك التجارية الرقمية
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          حلول التسويق الرقمي <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">المتكاملة</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          نحّول رؤيتك إلى نتائج حقيقية ومبيعات متصاعدة عبر استراتيجيات تسويقية مبتكرة ومصممة خصيصاً لتعزيز حضورك الريادي في السوق.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          
          <Link 
            href="/projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white font-semibold shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:shadow-[0_0_25px_rgba(0,180,216,0.7)] hover:scale-[1.02] transition-all duration-300 text-center"
          >
            استكشف خدماتنا ومشاريعنا
          </Link>

          <a 
            href="https://wa.me/201151033384"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#00e5ff]/40 bg-[#0b132b]/80 text-[#00e5ff] font-semibold hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-300 flex items-center justify-center gap-2 text-center"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            تواصل معنا عبر الواتساب
          </a>

        </div>

      </main>

    </div>
  );
}