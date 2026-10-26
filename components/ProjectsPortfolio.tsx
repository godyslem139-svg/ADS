"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPortfolio() {
  const col1 = [
    { name: "السالم - جدة", img: "/alsalemtranslation-jeddah.com.webp", url: "https://alsalemtranslation-jeddah.com/" },
    { name: "زي الرياض", img: "/zilriyadh.com.webp", url: "https://zilriyadh.com/" },
    { name: "زهار", img: "/zhar.shop.webp", url: "https://zhar.shop/" },
    { name: "زاد المعتمر", img: "/zadalmutamir.com.webp", url: "https://zadalmutamir.com/" },
    { name: "ترجمة أرينا", img: "/translationarena.net.webp", url: "https://translationarena.net/" },
    { name: "ركن الحرم", img: "/rukn-alharam.com.webp", url: "https://rukn-alharam.com/" },
    { name: "رحاب القرآن", img: "/rihabalquran.com.webp", url: "https://rihabalquran.com/" },
    { name: "رونق", img: "/rawnaqpaint.com.webp", url: "https://rawnaqpaint.com/" },
    { name: "رُوّو ليموزين", img: "/raw-limousine.webp", url: "https://raw-limousine.com/" },
    { name: "ريل ستارس", img: "/railstars.shopping.webp", url: "https://railstars.shopping/" },
  ];

  const col2 = [
    { name: "ريل ستارس Co", img: "/railstars.co.webp", url: "https://railstars.co/" },
    { name: "بيور كيت", img: "/purekit.sa.webp", url: "https://purekit.sa/" },
    { name: "مدرار", img: "/mudarar.com.webp", url: "https://mudarar.com/" },
    { name: "مولم للتسويق", img: "/molmmarketing.com.webp", url: "https://molmmarketing.com/" },
    { name: "ليموزين", img: "/limousine.webp", url: "https://rawlimo.com/" },
    { name: "كريسما", img: "/krisma.sa.webp", url: "https://krisma.sa/" },
    { name: "د. هالة نجيب", img: "/halaselim.com.webp", url: "https://www.halaselim.com/" },
    { name: "جرين سيرفيس", img: "/greenservicejeddah.com.webp", url: "https://greenservicejeddah.com/" },
    { name: "المركز البيولوجي", img: "/germanbiopest.com.webp", url: "https://germanbiopest.com/" },
    { name: "فانيساحي", img: "/fanisahy.com.webp", url: "https://fanisahy.com/" },
  ];

  const col3 = [
    { name: "EMMRCEM", img: "/emmrcem.com.webp", url: "https://emmrcem.com/" },
    { name: "دروب", img: "/doruob.com.webp", url: "https://doruoub.com/" },
    { name: "دكتور هوم", img: "/doctor-home.org.webp", url: "https://doctor-home.org/" },
    { name: "السالم للترجمة", img: "/alsalemtranslation.sa.webp", url: "https://alsalemtranslation.sa/" },
    { name: "ليموزين مصر", img: "/alexlimousine-eg.com.webp", url: "https://alexlimousine-eg.com/" },
    { name: "مجمع العلوي الطبي", img: "/alawimedical.com.webp", url: "https://alawimedical.com/" },
    { name: "ليموزين المطار", img: "/airport-limousine.com.webp", url: "https://airport-limousine.com/" },
    { name: "أفتن اطلق", img: "/aftinatalaq.com.webp", url: "https://aftinatalaq.com/" },
    { name: "1A Clean", img: "/1aclean-nrw.de.webp", url: "https://1aclean-nrw.de/" },
  ];

  return (
    <section className="py-24 relative overflow-hidden w-full bg-transparent">
      
      {/* عنوان السكشن والوصف الاحترافي */}
      <div className="text-center px-4 mb-20">
        <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4 shadow-lg">
          سجل نجاحاتنا الرقمية
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          أعمال نفخر بتقديمها لشركاء <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">النجاح والريادة</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          نخبة من المشاريع البرمجية والتسويقية المتكاملة التي صمّمت ونفّذت بأعلى معايير الجودة لتعزيز الحضور الرقمي لعملائنا في الكُبرى.
        </p>
      </div>

      {/* شبكة الأعمدة الثلاثة بمسافات أوسع تناسب الحجم الأكبر */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-36 items-center justify-items-center mb-16">
        <ProjectDeck columnItems={col1} speed={4200} />
        <ProjectDeck columnItems={col2} speed={5200} />
        <ProjectDeck columnItems={col3} speed={4700} />
      </div>

      {/* زر اتخاذ القرار (Call to Action) الانتقال لصفحة المشاريع */}
      <div className="flex justify-center px-4">
        <Link
          href="/projects"
          className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-extrabold text-base md:text-lg shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
        >
          <span>استعرض كافة مشاريعنا وأعمالنا</span>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M5 13h11.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L16.586 11H5v2z"/>
          </svg>
        </Link>
      </div>

    </section>
  );
}

// مكون عمود الكروت المتتالية بالحجم الأكبر
function ProjectDeck({ columnItems, speed }: { columnItems: any[]; speed: number }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % columnItems.length);
    }, speed);
    return () => clearInterval(interval);
  }, [columnItems.length, speed]);

  const currentProject = columnItems[activeIndex];
  const nextProject = columnItems[(activeIndex + 1) % columnItems.length];
  const thirdProject = columnItems[(activeIndex + 2) % columnItems.length];

  return (
    <div className="relative w-[440px] h-[640px] flex items-center justify-center">
      
      {/* الكارت الخلفي الأيمن (بحجم أكبر وبروز جانبي واضح) */}
      <div className="absolute w-[390px] h-[550px] rounded-3xl translate-x-24 scale-90 pointer-events-none opacity-45 z-0 overflow-hidden shadow-2xl">
        <Image src={thirdProject.img} alt={thirdProject.name} fill className="object-cover" />
      </div>

      {/* الكارت الخلفي الأيسر (بروز جانبي أيسر أكبر) */}
      <div className="absolute w-[390px] h-[550px] rounded-3xl -translate-x-24 scale-90 pointer-events-none opacity-45 z-10 overflow-hidden shadow-2xl">
        <Image src={nextProject.img} alt={nextProject.name} fill className="object-cover" />
      </div>

      {/* الكارت الأمامي النشط (حجم كبير جداً وواضح في المقدمة مع تأثير إضاءة فخم) */}
      <a
        href={currentProject.url}
        target="_blank"
        rel="noopener noreferrer"
        key={activeIndex}
        className="absolute w-[420px] h-[600px] flex flex-col items-center gap-4 transition-all duration-700 animate-slideDown cursor-pointer group z-30"
      >
        {/* موكيت المشروع بحجم كبير وساطع */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,229,255,0.4)] border-2 border-white/20 group-hover:shadow-[0_25px_90px_rgba(0,229,255,0.7)] group-hover:scale-[1.02] transition-all duration-500">
          <Image
            src={currentProject.img}
            alt={currentProject.name}
            fill
            className="object-cover"
          />
        </div>

        {/* عنوان المشروع ورابط المعاينة أسفل الموكيت مباشرة */}
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <span className="text-white font-black text-lg md:text-xl group-hover:text-[#00e5ff] transition-colors text-center truncate w-full drop-shadow-md" dir="rtl">
            {currentProject.name}
          </span>
          <span className="text-xs md:text-sm text-[#00e5ff] font-bold tracking-wider uppercase px-6 py-2 rounded-full bg-[#0b132b]/90 border border-[#00e5ff]/40 shadow-lg backdrop-blur-md group-hover:bg-[#00e5ff] group-hover:text-[#070b14] transition-all duration-300">
            معاينة المشروع ↗
          </span>
        </div>
      </a>

    </div>
  );
}