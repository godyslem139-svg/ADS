import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "الاستراتيجيات والخطط التسويقية",
      description: "نبتكر لك خططاً تسويقية مدروسة بعناية تستهدف جمهورك بدقة وتضمن أعلى عائد على الاستثمار.",
      img: "/marketing strategies plans.webp",
      slug: "marketing-strategies",
    },
    {
      title: "إدارة السوشيال ميديا",
      description: "نرتقي بحضورك الرقمي عبر إدار احترافية لمنصات التواصل الاجتماعي وبناء تفاعل حقيقي مع عملائك.",
      img: "/social media management.webp",
      slug: "social-media-management",
    },
    {
      title: "صناعة المحتوى والسكريبتات",
      description: "نصنع محتوى إبداعياً وسكريبتات جذابة تأسر أطراف عقول متابعيك وتدفعهم لاتخاذ القرار.",
      img: "/content creation scriptwriting.webp",
      slug: "content-creation-scriptwriting",
    },
    {
      title: "التصميمات الإبداعية والهوية البصرية",
      description: "نصمم هوية بصرية فريدة تعكس قوة علامتك التجارية وتترك انطباعاً لا يُنسى لدى عملائك.",
      img: "/creative designs visual identity.webp",
      slug: "creative-designs-visual-identity",
    },
    {
      title: "التصوير وإنتاج الفيديوهات",
      description: "نترجم أفكارك إلى مشاهد بصرية سينمائية عالية الجودة تخطف الأنظار وتعزز مصداقية علامتك.",
      img: "/photography video production.webp",
      slug: "photography-video-production",
    },
    {
      title: "صناعة محتوى UGC",
      description: "ننتج محتوى تفاعلياً من واقع المستخدمين (UGC) لزيادة ثقة الجمهور ومضاعفة المبيعات.",
      img: "/UGC content creation.webp",
      slug: "ugc-content-creation",
    },
    {
      title: "إدارة الإعلانات الممولة",
      description: "ندير حملاتك الإعلانية على مختلف المنصات باحترافية عالية لضمان الوصول لأعلى عائد وتحقيق أهدافك.",
      img: "/paid advertising management.webp",
      slug: "paid-advertising-management",
    },
    {
      title: "تصميم وتطوير المواقع والمتاجر الإلكترونية",
      description: "نبني لك مواقع ومتاجر إلكترونية فائقة السرعة، متجاوبة، وبتصميم مستقبلية مبهرة.",
      img: "/design development websites online stores.webp",
      slug: "websites-online-stores-development",
    },
    {
      title: "تحسين محركات البحث SEO",
      description: "نصعد بموقعك إلى صدارة نتائج بحث جوجل لجذب آلاف الزيارات المستهدفة مجاناً بشكل مستدام.",
      img: "/seo.webp",
      slug: "seo-optimization",
    },
    {
      title: "تحليل الأداء وإعداد التقارير التسويقية",
      description: "نحلل أرقامك ونقدم لك تقارير دقيقة وشفافة لتطوير الأداء المستمر واتخاذ القرارات الصحيحة.",
      img: "/performance analysis marketing reporting.webp",
      slug: "performance-analysis-marketing-reporting",
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
        
        {/* الترويسة الإبداعية للخدمات */}
        <div className="text-center mb-20">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4 shadow-lg">
            خدماتنا الرقمية المتكاملة
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            حلول إبداعية ترتقي بـ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">علامتك التجارية</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            استعرض كافة خدماتنا الاحترافية المصممة خصيصاً لتلبية احتياجات مشروعك الرقمي وتحقيق أهدافك التسويقية بكفاءة عالية.
          </p>
        </div>

        {/* شبكة الخدمات بحجم ضخم وعرض كامل للصور */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="w-full max-w-[440px] group rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/60 backdrop-blur-md p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-[#00e5ff] hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* صورة الخدمة بحجم كبير جداً وكاملة تماماً وبدون أي قص */}
              <div className="relative w-full h-[360px] md:h-[400px] mb-6 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,229,255,0.35)]"
                />
              </div>

              {/* عنوان الخدمة */}
              <h3 className="text-white font-black text-2xl mb-3 group-hover:text-[#00e5ff] transition-colors drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                {service.title}
              </h3>

              {/* نبذة مختصرة إبداعية */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              {/* زر التوجيه */}
              <span className="text-sm md:text-base text-[#00e5ff] font-bold tracking-wider uppercase px-8 py-3 rounded-full bg-[#0b132b]/95 border border-[#00e5ff]/60 shadow-[0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-md group-hover:bg-[#00e5ff] group-hover:text-[#070b14] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all duration-300">
                استكشف الخدمة ↗
              </span>
            </Link>
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