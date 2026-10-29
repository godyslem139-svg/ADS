"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "الاستراتيجيات والخطط التسويقية",
      img: "/marketing strategies plans.webp",
      slug: "marketing-strategies",
    },
    {
      title: "إدارة السوشيال ميديا",
      img: "/social media management.webp",
      slug: "social-media-management",
    },
    {
      title: "صناعة المحتوى والسكريبتات",
      img: "/content creation scriptwriting.webp",
      slug: "content-creation-scriptwriting",
    },
    {
      title: "التصميمات الإبداعية والهوية البصرية",
      img: "/creative designs visual identity.webp",
      slug: "creative-designs-visual-identity",
    },
    {
      title: "التصوير وإنتاج الفيديوهات",
      img: "/photography video production.webp",
      slug: "photography-video-production",
    },
    {
      title: "صناعة محتوى UGC",
      img: "/UGC content creation.webp",
      slug: "ugc-content-creation",
    },
    {
      title: "إدارة الإعلانات الممولة",
      img: "/paid advertising management.webp",
      slug: "paid-advertising-management",
    },
    {
      title: "تصميم وتطوير المواقع والمتاجر الإلكترونية",
      img: "/design development websites online stores.webp",
      slug: "websites-online-stores-development",
    },
    {
      title: "تحسين محركات البحث SEO",
      img: "/seo.webp",
      slug: "seo-optimization",
    },
    {
      title: "تحليل الأداء وإعداد التقارير التسويقية",
      img: "/performance analysis marketing reporting.webp",
      slug: "performance-analysis-marketing-reporting",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden w-full bg-transparent">
      

      <div className="text-center px-4 mb-20">
        <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          خدماتنا الاحترافية
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          حلول تسويقية متكاملة لرفع <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">علامتك التجارية</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          اكتشف باقة خدماتنا الرقمية المتكاملة، وانطلق بعلامتك التجارية نحو آفاق جديدة من التميز والنجاح.
        </p>
      </div>


      <div className="relative w-full overflow-hidden flex py-8" dir="ltr">
        <div className="animate-marquee flex gap-12 items-center">

          {[...services, ...services, ...services].map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="w-[480px] md:w-[560px] flex-shrink-0 flex flex-col items-center gap-6 group cursor-pointer p-4 transition-transform duration-500 hover:scale-105"
            >

              <div className="relative w-full h-[420px] md:h-[500px] transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,229,255,0.35)]"
                />
              </div>


              <div className="flex flex-col items-center gap-3 text-center w-full" dir="rtl">
                <span className="text-white font-black text-2xl md:text-3xl group-hover:text-[#00e5ff] transition-colors drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                  {service.title}
                </span>
                <span className="text-sm md:text-base text-[#00e5ff] font-bold tracking-wider uppercase px-8 py-3 rounded-full bg-[#0b132b]/95 border border-[#00e5ff]/60 shadow-[0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-md group-hover:bg-[#00e5ff] group-hover:text-[#070b14] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all duration-300">
                  استكشف الخدمة ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}