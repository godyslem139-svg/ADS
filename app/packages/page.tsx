import Image from "next/image";
import Link from "next/link";

export default function PackagesPage() {
  const packages = [
    {
      name: "باقة الانطلاق",
      price: "900",
      currency: "ريال فقط",
      img: "/starter package.webp",
      popular: false,
      features: [
        "18 تصميم احترافي • 3 ريلز مونتاج",
        "ريل موشن قصير مع فويس أوفر سعودي",
        "ادارة الحملات الاعلانية على منصتين",
        "تقرير شهري تفصيلي",
      ],
      whatsappMsg: "مرحباً، أريغب في الاشتراك في (باقة الانطلاق) بقيمة 900 ريال.",
    },
    {
      name: "باقة الاحتراف",
      price: "1400",
      currency: "ريال فقط",
      img: "/burnout package.webp",
      popular: true, // الأكثر طلباً
      features: [
        "24 تصميم احترافي",
        "5 ريلز مونتاج",
        "ريل موشن قصير بفويس أوفير سعودي",
        "20 استوري تفاعلي",
        "ادارة حملات اعلانية على منصتين",
        "تقرير شهري تفصيلي",
      ],
      whatsappMsg: "مرحباً، أريغب في الاشتراك في (باقة الاحتراف) بقيمة 1400 ريال.",
    },
    {
      name: "باقة الصدارة",
      price: "2200",
      currency: "ريال فقط",
      img: "/leadership package.webp",
      popular: false,
      features: [
        "30 تصميم احترافي",
        "6 ريلز مونتاج",
        "2 ريلز موشن قصير مع فويس أوفر سعودي",
        "25 استوري تفاعلي",
        "ادارة الحملات الاعلانية على 3 منصات",
        "تقرير شهري تفصيلي",
      ],
      whatsappMsg: "مرحباً، أريغب في الاشتراك في (باقة الصدارة) بقيمة 2200 ريال.",
    },
  ];

  return (
    <div className="w-full min-h-screen text-white p-3 md:p-6 flex flex-col font-sans gap-8 relative">
      
      {/* خلفية الفيديو الثابتة لكل الصفحة */}
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

      <div className="w-full max-w-[1400px] mx-auto px-4 py-12">
        
        {/* الترويسة الإبداعية */}
        <div className="text-center mb-20">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4 shadow-lg">
            باقات السوق السعودي المعتمدة
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر الباقة المناسبة لنمو <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">علامتك التجارية</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            باقات تسويقية متكاملة ومصممة خصيصاً لتحقيق أعلى عائد على الاستثمار والسيطرة على السوق السعودي.
          </p>
        </div>

        {/* شبكة الباقات مع صور ضخمة وبدون أي مستطيلات متداخلة */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`w-full max-w-[460px] rounded-[2.5rem] border ${
                pkg.popular ? "border-[#00e5ff] shadow-[0_0_50px_rgba(0,229,255,0.3)] bg-[#0b132b]/80" : "border-[#00e5ff]/30 bg-[#0b132b]/60"
              } backdrop-blur-xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-[#00e5ff] hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] hover:-translate-y-2 relative`}
            >
              {pkg.popular && (
                <div className="absolute top-6 right-6 bg-[#00e5ff] text-[#070b14] text-xs font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider z-10">
                  الأكثر طلباً ⭐
                </div>
              )}

              {/* صورة الباقة بكامل حجمها الطبيعي وبدون قص */}
              <div className="relative w-full h-[500px] md:h-[580px] mb-6 transition-transform duration-500 hover:scale-105">
                <Image
                  src={pkg.img}
                  alt={pkg.name}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,229,255,0.35)]"
                />
              </div>

              {/* السعر البارز */}
              <div className="flex items-center justify-center gap-2 mb-6 w-full py-3 rounded-2xl bg-[#070b14]/60 border border-[#00e5ff]/30">
                <span className="text-3xl md:text-4xl font-black text-[#00e5ff]" dir="ltr">
                  {pkg.price}
                </span>
                <span className="text-sm text-gray-300 font-bold">
                  {pkg.currency}
                </span>
              </div>

              {/* قائمة المميزات */}
              <ul className="flex flex-col gap-3 mb-8 w-full text-right" dir="rtl">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-gray-200 text-sm md:text-base">
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff] shrink-0 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* زر الاشتراك الفوري عبر الواتساب */}
              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-sm md:text-base text-[#00e5ff] font-bold tracking-wider uppercase py-3.5 rounded-full bg-[#0b132b]/95 border border-[#00e5ff]/60 shadow-[0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all duration-300 mt-auto"
              >
                اشترك في الباقة الآن ↗
              </a>

            </div>
          ))}
        </div>

        {/* زر العودة للرئيسية */}
        <div className="text-center mt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#00e5ff]/40 bg-[#0b132b]/80 text-[#00e5ff] font-semibold hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-300 text-sm shadow-[0_0_15px_rgba(0,229,255,0.2)]"
          >
            ← العودة إلى الصفحة الرئيسية
          </Link>
        </div>

      </div>
    </div>
  );
}