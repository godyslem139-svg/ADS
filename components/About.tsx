import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* محتوى النصوص (جهة اليمين للتصميم العربي) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* الشارة الترويجية */}
            <span className="text-[#00e5ff] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-6 shadow-md">
              من نحن
            </span>

            {/* العنوان الرئيسي */}
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              نحن شريكك الاستراتيجي نحو <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">القمة الرقمية</span>
            </h2>

            {/* الوصف التعريفي */}
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              لا نقتصر على تقديم خدمات التسويق التقليدية، بل نبتكر حلولاً رقمية متكاملة مصممة خصيصاً لمضاعفة أرباحك وبناء علاقة قوية ومستدامة بين علامتك التجارية وجمهورك المستهدف.
            </p>

            {/* نقاط المميزات */}
            <div className="space-y-4 mb-10 w-full">
              <div className="flex items-center gap-3 bg-[#0b132b]/50 border border-[#00e5ff]/20 p-4 rounded-xl">
                <div className="w-7 h-7 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] font-bold flex-shrink-0">✓</div>
                <p className="text-gray-200 text-sm sm:text-base font-medium">
                  استراتيجيات تسويقية مخصصة ومبنية على تحليل دقيق للبيانات.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-[#0b132b]/50 border border-[#00e5ff]/20 p-4 rounded-xl">
                <div className="w-7 h-7 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] font-bold flex-shrink-0">✓</div>
                <p className="text-gray-200 text-sm sm:text-base font-medium">
                  فريق محترف من الخبراء لتحقيق أعلى عِائد على الاستثمار (ROI).
                </p>
              </div>

              <div className="flex items-center gap-3 bg-[#0b132b]/50 border border-[#00e5ff]/20 p-4 rounded-xl">
                <div className="w-7 h-7 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] font-bold flex-shrink-0">✓</div>
                <p className="text-gray-200 text-sm sm:text-base font-medium">
                  دعم مستمر ومتابعة لحظية لحملاتك الإعلانية لضمان أفضل النتائج.
                </p>
              </div>
            </div>

            {/* زر الواتساب (Call to Action) */}
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-bold text-base shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.7)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>ابدأ مشروعك معنا</span>
            </a>

          </div>

          {/* حاوية الصورة مع الإطار المضيء (تأكد من وضع صورة about.jpg في مجلد public) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none h-[400px] sm:h-[480px] rounded-[2rem] border-2 border-[#00e5ff]/40 shadow-[0_0_50px_rgba(0,229,255,0.2)] bg-[#0b132b]/80 overflow-hidden p-3">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="من نحن - شركاء النجاح"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}