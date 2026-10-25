export default function Partners() {
  const partners = [
    "سهم للدعاية والإعلان",
    "القمة للتسويق العقاري",
    "نيو فاكتور للإنتاج",
    "منصة الخليج التجارية",
    "براند آي كيو",
    "رؤية مستقبلية",
  ];

  return (
    <section className="py-16 relative overflow-hidden w-full bg-transparent">
      
      {/* عنوان السكشن والوصف */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
          شركاء <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">النجاح</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          نفتخر بثقة نخبة من الشركات والعلامات التجارية الكبرى
        </p>
      </div>

      {/* الشريط المتحرك (تم تحديد dir="ltr" لضمان انتظام الحركة بدون فراغات في المواقع العربية) */}
      <div className="relative w-full overflow-hidden py-4" dir="ltr">
        
        {/* تدرج الأطراف لتنعيم الحواف */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070b14] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070b14] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="min-w-[240px] md:min-w-[280px] h-24 rounded-2xl border border-[#00e5ff]/30 bg-[#0b132b]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.08)] flex items-center justify-center p-4 text-center hover:border-[#00e5ff] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-300 group cursor-pointer flex-shrink-0"
            >
              {/* النص مضبوط بالـ RTL داخلياً لضمان ظهوره بشكل صحيح */}
              <span className="text-white font-bold text-sm md:text-base group-hover:text-[#00e5ff] transition-colors" dir="rtl">
                {partner}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}