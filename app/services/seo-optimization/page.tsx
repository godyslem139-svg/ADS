"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SEOPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface SEORoadmapPhase {
  phaseNumber: string;
  timeframe: string;
  phaseTitle: string;
  focusArea: string;
  actionItems: string[];
  milestoneDeliverable: string;
}

interface ComparisonRow {
  aspect: string;
  amateurSEO: string;
  adsAgencySEO: string;
  businessBenefit: string;
}

interface SEOPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  keywordsCount: string;
  duration: string;
  features: string[];
  whatsappText: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const SEO_PILLARS: SEOPillar[] = [
  {
    id: "technical-seo",
    title: "السيو التقني وهندسة سرعة الموقع (Technical SEO & Core Vitals)",
    subtitle: "تجهيز البنية البرمجية لموقعك لتكون صديقة 100% لعناكب جوجل",
    description:
      "لا قيمة للمحتوى الرائع إذا كان موقعك بطيئاً أو يعاني من مشاكل برمجية تمنع عناكب جوجل من فهرستها. نقوم بإجراء تدقيق تقني شامل (Technical Audit) لإصلاح الروابط التالفة، تسريع زمن التحميل، تحسين تجربة الهاتف (Mobile-First Indexing)، وضبط ملفات الروابط (Sitemap & Robots.txt).",
    deliverables: [
      "فحص وإصلاح كافة أخطاء الـ 404 والروابط المعطلة في الموقع",
      "تحسين سرعة التحميل ومؤشرات الأداء الأساسية (Core Web Vitals)",
      "ضبط شهادات الأمان (SSL) وهيكلة خريطة الموقع XML Sitemap",
      "إصلاح مشاكل الفهرسة (Indexing Errors) عبر Google Search Console",
    ],
    kpiImpact: "رفع سرعة الموقع وسهولة فهرسة مئات الصفحات والمنتجات في جوجل خلال أيام.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "on-page-seo",
    title: "السيو الداخلي وتحسين المحتوى (On-Page SEO & Keywords)",
    subtitle: "استهداف الكلمات المفتاحية الأكثر ربحية التي يبحث عنها عملاؤك",
    description:
      "نقوم بإجراء بحث عميق واستخراج الكلمات المفتاحية ذات النية الشرائية العالية في قطاعك، ثم نعمل على تحسين العناوين (Titles)، الوصف (Meta Descriptions)، الهيكلة (H1, H2, H3)، والربط الداخلي لضمان تصدرك للنتائج الأولى.",
    deliverables: [
      "بحث واختيار الكلمات المفتاحية عالية البحث وقليلة المنافسة",
      "تحسين عناوين الصفحات، الأوصاف، والوسوم التعريفية",
      "هيكلة المحتوى والكلمات الدلالية بطريقة ترضي خوارزميات جوجل",
      "بناء شبكة روابط داخلية قوية (Internal Linking) لتوزيع قوة الموقع",
    ],
    kpiImpact: "تصدر الكلمات المستهدفة وجذب زيارات مجانية مستدامة (Organic Traffic).",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "off-page-seo",
    title: "السيو الخارجي وبناء الروابط الخلفية (Off-Page SEO & Backlinks)",
    subtitle: "اكتساب قوة وثقة من المواقع الكبرى لرفع سلطة موقعك (Domain Authority)",
    description:
      "يعتبر نظام الروابط الخلفية (Backlinks) بمثابة شهادات تزكية لموقعك في نظر جوجل. نبني لك روابط خلفية قوية ونظيفة من مواقع إخبارية ومقالات ذات صلة عالية بقطاعك، مما يرفع من ثقة محرك البحث بموقعك ويدفعه نحو الصدارة.",
    deliverables: [
      "بناء روابط خلفية قوية من مواقع ذات سلطة عالية (High DA/DR)",
      "نشر مقالات ضيف (Guest Blogging) في منصات ومواقع كبرى",
      "إزالة الروابط الضارة أو السامة التي تضر بترتيب الموقع (Toxic Backlinks Disavow)",
    ],
    kpiImpact: "رفع قوة وموثوقية الدومين (Domain Rating) وصدارة الكلمات الصعبة.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    id: "local-seo",
    title: "سيو الخرائط والبحث المحلي (Local SEO & Google Business)",
    subtitle: "الظهور الأول في خريطة جوجل عندما يبحث العميل عن خدمتك في مدينتك",
    description:
      "إذا كان لديك مقر، مطعم، عيادة، أو متجر محلي، فإن الظهور في حزمة الخرائط (Google Local Pack) هو مصدرك الأهم للعملاء الجدد. نقوم بتحسين وتوثيق نشاطك التجاري على خرائط جوجل ليتصدر نتائج البحث الجغرافي.",
    deliverables: [
      "توثيق وتحسين الملف التعريفي للنشاط التجاري (Google Business Profile)",
      "تحسين الكلمات المفتاحية المحلية المربوطة بالمدن والأحياء",
      "جمع وتحفيز تقييمات العملاء الإيجابية لرفع معدل التحويل المحلي",
    ],
    kpiImpact: "استقبال مئات الاتصالات والزيارات الفعلية للمقر أو المتجر من المنطقة المحيطة.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const SEO_ROADMAP: SEORoadmapPhase[] = [
  {
    phaseNumber: "المرحلة 01",
    timeframe: "الشهر الأول (1 - 30)",
    phaseTitle: "التدقيق الشامل وإصلاح الأخطاء التقنية",
    focusArea: "تهيئة بيئة الموقع لعناكب جوجل",
    actionItems: [
      "إجراء فحص تقني كامل عبر أدوات Ahrefs و SEMrush و Search Console",
      "إصلاح الروابط المعطلة، مشاكل سرعة التحميل، وفهرسة الصفحات",
      "إعداد خريطة الموقع وضبط ملف Robots.txt",
    ],
    milestoneDeliverable: "موقع نظيف تقنياً وخالٍ من أخطاء الفهرسة.",
  },
  {
    phaseNumber: "المرحلة 02",
    timeframe: "الشهر الثاني والثالث (31 - 90)",
    phaseTitle: "بحث الكلمات المفتاحية وتحسين المحتوى الداخلي",
    focusArea: "استهداف الكلمات الأكثر ربحية وصياغة المقالات والصفحات",
    actionItems: [
      "استخراج أفضل الكلمات المفتاحية ذات النية الشرائية العالية",
      "إعادة كتابة وتحسين العناوين والوسوم وصفحات الخدمات",
      "بناء هيكل روابط داخلية يربط أقسام الموقع بذكاء",
    ],
    milestoneDeliverable: "بداية صعود الكلمات المستهدفة نحو الصفحة الثانية والأولى.",
  },
  {
    phaseNumber: "المرحلة 03",
    timeframe: "الشهر الرابع إلى السادس (91 - 180)",
    phaseTitle: "بناء الروابط الخلفية والسيطرة على الصدارة",
    focusArea: "تعزيز سلطة الدومين وصدارة نتائج البحث الأولى",
    actionItems: [
      "إطلاق حملات بناء الروابط الخلفية القوية (Backlinks)",
      "تحسين الظهور في الخرائط والبحث المحلي (Local SEO)",
      "متابعة التقارير الشهرية وقياس نمو الزيارات المجانية (Organic Traffic)",
    ],
    milestoneDeliverable: "تصدر الكلمات الرئيسية في المركز الأول وجذب آلاف الزيارات المجانية.",
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    aspect: "طريقة جذب الزيارات للموقع",
    amateurSEO: "الاعتماد فقط على الإعلانات المدفوعة التي يتوقف ظهورها فور توقف الدفع.",
    adsAgencySEO: "بناء أصول رقمية مستدامة تجلب زيارات مجانية 24/7 دون تكلفة لكل نقرة.",
    businessBenefit: "تقليل الاعتماد الكلي على الإعلانات وخفض تكاليف التسويق بعيدة المدى.",
  },
  {
    aspect: "الاستدامة والثبات في النتائج",
    amateurSEO: "استخدام طرق وهمية قد تعرض الموقع للحظر والعقوبات من محركات البحث.",
    adsAgencySEO: "اتباع المعايير البيضاء الرسمية (White-Hat SEO) المعتمدة من جوجل.",
    businessBenefit: "نتائج مستقرة لسنوات طويلة تحمي استثمارك الرقمي.",
  },
  {
    aspect: "بناء الموثوقية والثقة",
    amateurSEO: "ظهور عشوائي غير منظم لا يعكس قوة أو سلطة الشركة في السوق.",
    adsAgencySEO: "الظهور في الصدارة كخبير أول في مجالك، مما يرفع ثقة العميل الفورية.",
    businessBenefit: "مضاعفة معدلات تحويل الزوار إلى عملاء دائمين.",
  },
];

const SEO_PACKAGES: SEOPackage[] = [
  {
    name: "باقة السيو التأسيسي (Startup SEO Audit & Setup)",
    tagline: "فحص وتأسيس السيو التقني والداخلي للمشاريع والمتاجر الناشئة",
    targetAudience: "مثالية للمواقع الجديدة والمتاجر التي تبدأ طريقها في جوجل",
    isFeatured: false,
    keywordsCount: "استهداف حتى 15 كلمة مفتاحية رئيسية",
    duration: "عقد خدمة لمدة 3 أشهر",
    features: [
      "تدقيق تقني شامل وإصلاح أخطاء الفهرسة الأساسية",
      "بحث واختيار الكلمات المفتاحية الأكثر أهمية",
      "تحسين العناوين، الوصف، والوسوم لصفحات الموقع الرئيسية",
      "تقرير أداء شهري لتقدم الكلمات والزيارات",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة السيو التأسيسي لموقعي).",
  },
  {
    name: "باقة الهيمنة والنمو في محركات البحث (Growth Pro SEO)",
    tagline: "الحزمة الأكثر طلباً للشركات والمتاجر لتصدر النتائج الأولى في جوجل",
    targetAudience: "الأكثر طلباً للمتاجر الإلكترونية، العيادات، والشركات القائمة",
    isFeatured: true,
    keywordsCount: "استهداف حتى 40 كلمة مفتاحية رئيسية",
    duration: "عقد خدمة لمدة 6 أشهر",
    features: [
      "إصلاح كامل للسيو التقني وتحسين سرعة الموقع (Core Vitals)",
      "إنشاء محتوى مقالات وصفحات خدمية محسنة للسيو شهرياً",
      "بناء روابط خلفية قوية (Backlinks) لرفع سلطة الدومين",
      "تحسين السيو المحلي (Local SEO) وتوثيق خرائط جوجل",
      "اجتماع استراتيجي شهري لمناقشة نمو الزيارات والأرباح",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة الهيمنة والنمو في محركات البحث).",
  },
  {
    name: "باقة الصدارة المؤسسية (Enterprise SEO Elite)",
    tagline: "استراتيجية سيو متقدمة للمواقع الكبرى، البوابات، والمصانع",
    targetAudience: "للشركات الكبرى والمواقع ذات آلاف الصفحات والمنتجات",
    isFeatured: false,
    keywordsCount: "استهداف كلمات غير محدودة وبناء سلطة كبرى",
    duration: "عقد سنوي متكامل",
    features: [
      "متابعة يومية وفحص تقني مستمر للمواقع الضخمة",
      "استراتيجية بناء روابط خلفية مكثفة من صحف ومواقع كبرى",
      "تحسين تجربة المستخدم ومعدل التحويل (CRO & SEO)",
      "فريق سيو مخصص يتابع مشروعك على مدار الساعة",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار عن (باقة الصدارة المؤسسية SEO).",
  },
];

const FAQ_SEO: FAQItem[] = [
  {
    category: "مدة النتائج",
    question: "متى تبدأ نتائج تحسين محركات البحث (SEO) في الظهور وتصدر جوجل؟",
    answer:
      "يُعد السيو استثماراً بعيد المدى وليس حلاً سحرياً مؤقتاً. تبدأ مؤشرات التحسن والظهور في الظهور خلال أول 60 إلى 90 روز، بينما تبدأ النتائج الكبرى وتصدر المراكز الأولى في الظهور بوضوح خلال الفترة من 4 إلى 6 أشهر حسب قوة المنافسة في قطاعك.",
  },
  {
    category: "الفرق بين السيو والإعلانات",
    question: "ما الفرق الأساسي بين السيو (SEO) والإعلانات الممولة (Paid Ads)؟",
    answer:
      "الإعلانات الممولة تمنحك ظهوراً سريعاً ولكنه يتوقف فور توقف دفع الميزانية لمنصات الإعلانات. أما السيو فهو بناء أصول رقمية ملك لك تدوم لسنوات طويلة وتجلب لك آلاف الزيارات والمبيعات مجاناً على مدار الساعة دون دفع تكلفة لكل نقرة.",
  },
  {
    category: "منصات العمل",
    question: "هل تعملون على جميع أنظمة إدارة المواقع مثل وردبريس، سلة، زد، وشوبيفاي؟",
    answer:
      "نعم بكل تأكيد! خبراتنا البرمجية والتسويقية تغطي كافة المنصات الشهيرة (WordPress / WooCommerce, Shopify, Salla, Zid, Custom PHP)، ونقوم بضبط السيو التقني والداخلي مهما كانت المنصة التي يعمل عليها موقعك.",
  },
];



export default function SeoOptimizationPage() {
  const [activeTab, setActiveTab] = useState<string>(SEO_PILLARS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePillar =
    SEO_PILLARS.find((item) => item.id === activeTab) || SEO_PILLARS[0];

  return (
    <div className="w-full min-h-screen text-white p-3 md:p-6 flex flex-col font-sans gap-20 relative overflow-x-hidden">
      

      <div className="fixed inset-0 overflow-hidden z-[-1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105"
        >
          <source src="/seo.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-[#070b14]/90 backdrop-blur-[2px]" />
      </div>


      <section className="w-full max-w-[1400px] mx-auto min-h-[650px] md:min-h-[760px] rounded-[2.5rem] border-2 border-[#00e5ff]/50 shadow-[0_0_70px_rgba(0,229,255,0.25)] relative overflow-hidden flex items-center justify-center p-6 md:p-16 lg:p-20 mt-4">
        

        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/seo optimization.gif"
            alt="تحسين محركات البحث SEO"
            fill
            sizes="100vw"
            priority
            className="object-cover scale-105"
          />
        </div>


        <div className="absolute inset-0 bg-gradient-to-l from-[#070b14]/95 via-[#070b14]/85 to-[#0b132b]/70 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070b14_100%)] opacity-75 z-[1]" />


        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-7" dir="rtl">
          
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#070b14]/80 border border-[#00e5ff]/60 shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-[#00e5ff] text-xs md:text-sm font-black tracking-wider uppercase">
              تحسين محركات البحث والظهور في صدارة جوجل
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            تحسين محركات البحث{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              SEO
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            نصعد بموقعك إلى صدارة نتائج بحث جوجل لجذب آلاف الزيارات المستهدفة مجاناً بشكل مستدام.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🥇</span>
              <span className="text-white text-sm md:text-base font-bold">تصدر المركز الأول في جوجل</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🔍</span>
              <span className="text-white text-sm md:text-base font-bold">زيارات مجانية مستدامة 24/7</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">⚡</span>
              <span className="text-white text-sm md:text-base font-bold">هندسة سرعة الموقع والسيو التقني</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%AA%D8%AD%D8%B3%D9%8A%D9%86%20%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%AD%D8%AB%20SEO%20%D9%84%D9%85%D9%88%D9%82%D8%B9%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>اطلب تحليل السيو لموقعك عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#seo-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات السيو المتاحة
            </a>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "+53%",
              label: "متوسط نمو الزيارات المجانية",
              desc: "الزيارات العضوية من جوجل تحقق أعلى معدلات ثقة وتحويل مقارنة بالإعلانات.",
            },
            {
              number: "المركز #1",
              label: "صدارة نتائج البحث المستهدفة",
              desc: "نستهدف وضع كلمات نشاطك التجاري في المرتبة الأولى لتستحوذ على حصة الأسد من العملاء.",
            },
            {
              number: "24/7",
              label: "عملاء مجانيون على مدار الساعة",
              desc: "موقعك يبيع خدماتك ويستقبل الزوار طوال اليوم دون دفع تكلفة إعلانية عن كل نقرة.",
            },
            {
              number: "+15 عاماً",
              label: "خبرة في خوارزميات جوجل",
              desc: "فهم عميق ومتجدد لتحديثات محركات البحث وكيفية استغلالها لتصدر الصدارة.",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-7 flex flex-col gap-3 shadow-[0_0_30px_rgba(0,229,255,0.12)] hover:border-[#00e5ff] hover:-translate-y-1.5 transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-black text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                {stat.number}
              </span>
              <h3 className="text-white font-black text-lg">{stat.label}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            ركائز السيو الأربع الكبرى
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا نطبق في موقعك ضمن خدمة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              تحسين محركات البحث SEO؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            منظومة متكاملة تغطي الجانب التقني، المحتوى، الروابط الخلفية، والخرائط المحلية. انقر لاستعراض التفاصيل:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          

          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {SEO_PILLARS.map((pillar) => {
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full text-right p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    isActive
                      ? "bg-[#00e5ff]/15 border-[#00e5ff] shadow-[0_0_25px_rgba(0,229,255,0.25)]"
                      : "bg-[#0b132b]/60 border-[#00e5ff]/20 hover:border-[#00e5ff]/50 hover:bg-[#0b132b]"
                  }`}
                >
                  <div className="p-3 rounded-xl bg-[#070b14] border border-[#00e5ff]/30 shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`font-black text-base md:text-lg ${
                        isActive ? "text-[#00e5ff]" : "text-white"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <span className="text-xs text-gray-300 line-clamp-1">
                      {pillar.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>


          <div className="lg:col-span-7 rounded-[2rem] border border-[#00e5ff]/40 bg-[#0b132b]/85 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_45px_rgba(0,229,255,0.15)] flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-[#00e5ff] text-xs font-bold uppercase tracking-wider">
                  تفاصيل الركيزة والمهام المعتمدة
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-1">
                  {activePillar.title}
                </h3>
              </div>
              <div className="hidden sm:flex p-4 rounded-2xl bg-[#070b14] border border-[#00e5ff]/40 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                {activePillar.icon}
              </div>
            </div>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              {activePillar.description}
            </p>

            <div className="bg-[#070b14]/80 rounded-2xl p-6 border border-[#00e5ff]/25">
              <h4 className="text-[#00e5ff] font-bold text-base mb-4 flex items-center gap-2">
                <span>🔍</span>
                <span>المهام والتنفيذ المعتمد في هذا القسم:</span>
              </h4>
              <ul className="grid grid-cols-1 gap-3.5">
                {activePillar.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-200 text-sm md:text-base">
                    <span className="w-5 h-5 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] text-[#00e5ff] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#00e5ff] font-semibold bg-[#00e5ff]/10 px-4 py-3 rounded-xl border border-[#00e5ff]/30 w-full sm:w-auto">
                <span>📈 الأثر المجاني:</span>
                <span className="text-white">{activePillar.kpiImpact}</span>
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود الاستفسار عن خدمة (${activePillar.title}) لتحسين محركات البحث SEO.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                اطلب تدقيق السيو الآن ↗
              </a>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/65 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.12)] relative overflow-hidden">
          
          {/* استخدام الفيديو الثاني (seo.mp4) كخلفية جمالية دمشقية */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/seo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
                خارطة طريق النجاح في جوجل
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                مراحل العمل في السيو خلال{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
                  الأشهر الستة الأولى
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                كيف نقود موقعك تدريجياً من الأخطاء الفنية وحتى صدارة نتائج البحث الكبرى:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {SEO_ROADMAP.map((phase, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/90 p-8 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                        {phase.phaseNumber}
                      </span>
                      <span className="text-xs font-bold text-gray-200 bg-[#0b132b] px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                        🗓 {phase.timeframe}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white mb-2">{phase.phaseTitle}</h3>
                    <span className="text-xs font-bold text-[#00e5ff] block mb-5">
                      التركيز المحوري: {phase.focusArea}
                    </span>

                    <ul className="flex flex-col gap-3 mb-6">
                      {phase.actionItems.map((act, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed">
                          <span className="text-[#00e5ff] font-black mt-0.5">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-4 bg-[#0b132b]/60 -mx-8 -mb-8 p-6">
                    <span className="text-xs font-bold text-[#00e5ff] block mb-1">
                      🏆 ثمرة نهاية المرحلة:
                    </span>
                    <p className="text-xs md:text-sm text-white font-semibold">
                      {phase.milestoneDeliverable}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-6 md:p-12 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              الفرق بين محاولات السيو الهاوية والاحترافية في{" "}
              <span className="text-[#00e5ff]">وكالة ADS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا يؤدي العمل مع وكالة متخصصة إلى نتائج مستدامة تحمي موقعك وتضاعف أرباحك؟
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-[#00e5ff]/30 bg-[#070b14]/80">
                  <th className="p-4 md:p-5 text-[#00e5ff] font-black text-sm md:text-base rounded-tr-2xl">
                    معيار المقارنة
                  </th>
                  <th className="p-4 md:p-5 text-gray-400 font-bold text-sm md:text-base">
                    محاولات السيو الهاوية أو غير المدروسة
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    الاحترافية في وكالة ADS
                  </th>
                  <th className="p-4 md:p-5 text-[#00e5ff] font-black text-sm md:text-base rounded-tl-2xl">
                    المكسب على مشروعك
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm md:text-base">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 md:p-5 font-black text-white whitespace-nowrap">
                      {row.aspect}
                    </td>
                    <td className="p-4 md:p-5 text-gray-400 leading-relaxed">
                      {row.amateurSEO}
                    </td>
                    <td className="p-4 md:p-5 text-gray-100 font-medium bg-[#00e5ff]/5 leading-relaxed border-x border-[#00e5ff]/20">
                      ✓ {row.adsAgencySEO}
                    </td>
                    <td className="p-4 md:p-5 text-[#00e5ff] font-semibold leading-relaxed">
                      {row.businessBenefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>


      <section id="seo-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات تحسين محركات البحث
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة السيو المناسبة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              لتصدر نتائج جوجل
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            باقات متكاملة لتأسيس والارتقاء بموقعك في محركات البحث بأعلى معايير الجودة والاستدامة:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {SEO_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 relative ${
                pkg.isFeatured
                  ? "border-2 border-[#00e5ff] bg-[#0b132b]/95 shadow-[0_0_50px_rgba(0,229,255,0.3)] lg:-translate-y-4"
                  : "border border-[#00e5ff]/30 bg-[#0b132b]/65 hover:border-[#00e5ff]"
              }`}
            >
              {pkg.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] text-xs font-black px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.6)] uppercase tracking-wider whitespace-nowrap">
                  الباقة الأكثر طلباً للشركات والمتاجر ⭐
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30 inline-block mb-4">
                  {pkg.targetAudience}
                </span>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {pkg.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 pb-6 border-b border-white/10">
                  {pkg.tagline}
                </p>

                <div className="grid grid-cols-1 gap-2.5 mb-6 p-4 rounded-2xl bg-[#070b14]/70 border border-[#00e5ff]/20">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">الكلمات المستهدفة:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.keywordsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">المدى الزمني:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.duration}</span>
                  </div>
                </div>

                <h4 className="text-white font-bold text-sm mb-4">
                  المميزات والتجهيزات المشمولة:
                </h4>

                <ul className="flex flex-col gap-3.5 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] text-[#00e5ff] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <a
                  href={`https://wa.me/201151033384?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-black text-center text-base transition-all duration-300 block ${
                    pkg.isFeatured
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)]"
                      : "bg-[#070b14] text-[#00e5ff] border border-[#00e5ff]/60 hover:bg-[#00e5ff] hover:text-[#070b14]"
                  }`}
                >
                  احجز الباقة الآن عبر واتساب ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full max-w-[1000px] mx-auto px-2" dir="rtl">
        <div className="text-center mb-12">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            الأسئلة الشائعة حول تحسين محركات البحث SEO
          </h2>
          <p className="text-gray-300 text-base">
            كل ما يدور في ذهنك حول توقيت النتائج، الفرق بين السيو والإعلانات، ومنصات العمل:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_SEO.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#00e5ff] bg-[#0b132b]/90 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
                    : "border-[#00e5ff]/30 bg-[#0b132b]/60 hover:border-[#00e5ff]/60"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-xs font-bold text-[#00e5ff] bg-[#070b14] px-3 py-1 rounded-full border border-[#00e5ff]/30 w-fit">
                      {faq.category}
                    </span>
                    <span className="text-white font-black text-base md:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`w-8 h-8 rounded-full border border-[#00e5ff]/50 flex items-center justify-center text-[#00e5ff] font-bold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#00e5ff] text-[#070b14]" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-200 text-sm md:text-base leading-relaxed border-t border-white/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2 mb-12" dir="rtl">
        <div className="rounded-[2.5rem] border-2 border-[#00e5ff]/50 bg-gradient-to-r from-[#0b132b] via-[#070b14] to-[#0b132b] p-8 md:p-16 text-center flex flex-col items-center gap-6 shadow-[0_0_60px_rgba(0,229,255,0.25)] relative overflow-hidden">
          
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/40">
            اجعل عملاءك يجدونك في صدارة جوجل دون دفع تكلفة عن كل نقرة
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لصدارة نتائج بحث جوجل وجذب آلاف{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              الزيارات المجانية المستدامة؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع خبراء تحسين محركات البحث في وكالة ADS عبر الواتساب للحصول على تدقيق مجاني لموقعك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%AA%D8%AD%D8%B3%D9%8A%D9%86%20%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%AD%D8%AB%20SEO%20%D9%84%D9%85%D9%88%D9%82%D8%B9%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-lg shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300"
            >
              <span>تواصل معنا عبر واتساب الآن</span>
              <span>↗</span>
            </a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl border border-[#00e5ff]/40 bg-[#0b132b]/80 text-[#00e5ff] font-bold text-base hover:bg-[#00e5ff]/10 transition-all duration-300"
            >
              <span>← العودة لصفحة كافة الخدمات</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}