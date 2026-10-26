import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: "1A Clean", src: "/1aclean.webp" },
    { name: "أفتن اطلق", src: "/aftinatalaq.webp" },
    { name: "ليموزين المطار", src: "/airport-limousine.webp" },
    { name: "مجمع العلوي الطبي", src: "/alawimedical.webp" },
    { name: "ليموزين الإسكندرية", src: "/alexlimousine.webp" },
    { name: "السالم للترجمة", src: "/alsalemtranslation.webp" },
    { name: "دكتور هوم", src: "/doctor-home.webp" },
    { name: "EMMRCEM", src: "/emmrcem.webp" },
    { name: "فانيساحي", src: "/fanisahy.webp" },
    { name: "المركز البيولوجي", src: "/germanbiopest.webp" },
    { name: "جرين سيرفيس", src: "/greenservicejeddah.webp" },
    { name: "د. هالة نجيب", src: "/halaselim.webp" },
    { name: "كريسما", src: "/krisma.avif" },
    { name: "مولم للتسويق", src: "/molmmarketing.webp" },
    { name: "مدرار", src: "/mudarar.webp" },
    { name: "نقل عفش أثاث", src: "/naql-athath.webp" },
    { name: "بيور كيت", src: "/purekit.avif" },
    { name: "ريل ستارس", src: "/railstars.avif" },
    { name: "رُوّو ليموزين", src: "/rawlimo.webp" },
    { name: "رونق", src: "/rawnaqpaint.webp" },
    { name: "رحاب القرآن", src: "/rihabalquran.webp" },
    { name: "ركن الحرم", src: "/rukn-alharam.webp" },
    { name: "ترجمة أرينا", src: "/translationarena.webp" },
    { name: "زاد المعتمر", src: "/zadalmutamir.webp" },
    { name: "زهار", src: "/zhar.webp" },
    { name: "زي الرياض", src: "/zilriyadh.webp" },
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

      {/* الشريط المتحرك */}
      <div className="relative w-full overflow-hidden py-4" dir="ltr">
        
        {/* تدرج الأطراف لتنعيم الحواف */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070b14] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070b14] to-transparent z-20 pointer-events-none" />

        {/* تم التحكم في السرعة عبر animationDuration (كلما زاد الرقم أصبحت الحركة أبطأ وأعمق) */}
        <div className="flex gap-6 animate-marquee" style={{ animationDuration: '55s' }}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="min-w-[210px] md:min-w-[240px] h-32 rounded-2xl border border-[#00e5ff]/30 bg-[#0b132b]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.08)] flex flex-col items-center justify-center p-3 gap-2 hover:border-[#00e5ff] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-300 group cursor-pointer flex-shrink-0"
            >
              {/* صورة اللوجو */}
              <div className="relative w-full h-14 flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={110}
                  height={45}
                  className="object-contain max-h-12 filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* اسم الشركة بخط أنيق تحت اللوجو */}
              <span className="text-gray-300 font-semibold text-xs md:text-sm group-hover:text-[#00e5ff] transition-colors truncate w-full text-center" dir="rtl">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}