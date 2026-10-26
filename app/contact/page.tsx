import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 relative">
      
      {/* صندوق محتوى صفحة التواصل بتصميم النيون الفخم */}
      <div className="w-full max-w-[800px] rounded-[2.5rem] border border-[#00e5ff]/30 shadow-[0_0_50px_rgba(0,229,255,0.15)] bg-[#0b132b]/80 backdrop-blur-xl p-8 md:p-14 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* تأثير إضاءة خلفية جمالية */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#0077b6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* شارة ترويجيّة */}
        <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          تواصل مباشر وسريع
        </span>

        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          نحن جاهزون للرد على استفساراتك <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">فوراً</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          للحصول على استجابة سريعة وعروض سعر فورية لمشاريعك الرقمية أو التسويقية، تواصل معنا مباشرة عبر الواتساب وسيكون فريقنا في خدمتكم.
        </p>

        {/* زر الواتساب البارز والفاخر */}
        <a
          href="https://wa.me/201151033384"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-lg md:text-xl shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.8)] hover:scale-105 transition-all duration-300 group"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>ابدأ المحادثة عبر الواتساب الآن</span>
        </a>

        {/* تفاصيل إضافية ورابط العودة */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <span>رقم الهاتف المباشر: <strong className="text-[#00e5ff]" dir="ltr">01151033384</strong></span>
          
          <Link
            href="/"
            className="text-[#00e5ff] hover:underline font-semibold"
          >
            ← العودة للرئيسية
          </Link>
        </div>

      </div>
    </div>
  );
}