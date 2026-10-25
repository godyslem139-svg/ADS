export default function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-[2.5rem] border border-[#00e5ff]/30 bg-gradient-to-r from-[#0b132b]/90 via-[#070b14]/95 to-[#0b132b]/90 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,229,255,0.1)] overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#0077b6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/201151033384"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#00e5ff]/20 via-[#0b132b] to-[#0077b6]/30 border-2 border-[#00e5ff]/50 flex flex-col items-center justify-center text-center p-6 shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                {/* حلقة مضيئة متحركة */}
                <div className="absolute inset-0 rounded-full border border-[#00e5ff] animate-ping opacity-25 pointer-events-none" />
                
                <span className="text-[#00e5ff] text-2xl mb-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
                <span className="text-white font-bold text-sm md:text-base leading-tight">
                  أحصل على 30 دقيقة <br />مجانية
                </span>
              </a>
            </div>

            <div className="lg:col-span-8 text-right flex flex-col items-start">
              <span className="text-[#00e5ff] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 mb-4 shadow-sm">
                استشارة استراتيجية حصرية
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4">
                احصل على جلسة مجانية خاصة بالاستراتيجية لمدة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">30 دقيقة</span> مع مسوق رقمي خبير.
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                دعنا نناقش تحديات مشروعك، ونحلل منافسيك، ونضع بين يديك خريطة طريق واضحة لمضاعفة مبيعاتك وعائداتك الرقمية بكل ثقة.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}