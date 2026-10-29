"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


interface ProductionPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface ProductionStage {
  stageNumber: string;
  title: string;
  timing: string;
  description: string;
  keyOutputs: string[];
}

interface ComparisonRow {
  aspect: string;
  amateurProduction: string;
  adsAgencyCinematic: string;
  businessImpact: string;
}

interface ProductionPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  shootDays: string;
  videosCount: string;
  features: string[];
  whatsappText: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}


const PRODUCTION_PILLARS: ProductionPillar[] = [
  {
    id: "commercial-ads",
    title: "إنتاج الإعلانات التجارية السينمائية (TV & Digital Commercials)",
    subtitle: "إعلانات ضخمة تخطف الأنظار وتعكس ضخامة وفخامة علامتك التجارية",
    description:
      "نترجم رؤيتك الإعلانية إلى أعمال سينمائية متكاملة تبهر المشاهد من اللقطة الأولى. ندير عملية الإنتاج بالكامل من كتابة الفكرة، توفير الممثلين والمواقع، التصوير بأحدث كاميرات السينما العالمية (4K/8K)، وحتى هندسة الإضاءة والمونتاج وتصحيح الألوان (Color Grading).",
    deliverables: [
      "كتابة القصة الإعلانية وتطوير لوحات القصة (Storyboard & Treatment)",
      "توفير طاقم الإخراج، التصوير، والإضاءة المحترف بأعلى التجهيزات",
      "اختيار الممثلين الأصوات والتعليق الصوتي المناسب لرسالة الإعلان",
      "تصحيح ألوان سينمائي (Color Grading) يمنح الفيديو طابعاً هوليوودياً فخماً",
    ],
    kpiImpact: "رفع الموثوقية الفورية للشركات ومضاعفة معدل التفاعل والمبيعات الإعلانية.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "product-food-shoot",
    title: "تصوير المنتجات والأطعمة الاحترافي (Product & Food Videography)",
    subtitle: "اجعل منتجاتك تنطق بالجمال وتفتح شهية العملاء للشراء الفوري",
    description:
      "في المتاجر الإلكترونية والمطاعم، العين تحب قبل العقل! نصور منتجاتك ووجباتك بتقنيات ماكرو متقدمة وإضاءات تبرز تفاصيل الملمس والنكهة، سواء لتصوير المنتجات على خلفيات بيضاء نقية للمتاجر أو فيديوهات طعام سينمائية (Food Styling).",
    deliverables: [
      "تصوير منتجات احترافي 360 درجة وفيديوهات Unboxing مذهلة",
      "تنسيق وتصوير الأطعمة (Food Styling) بإضاءات تحفز الشهية",
      "إزالة الخلفيات بدقة وتسليم الملفات جاهزة لمنصات سلة، زد، وشوبيفاي",
      "لقطات بصرية بطيئة (Slow Motion) تبرز دقة وحرفية الصنع",
    ],
    kpiImpact: "مضاعفة معدل تحويل زوار المتجر إلى مشترين حقيقيين بنسبة تتجاوز 65%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    ),
  },
  {
    id: "ugc-reels-production",
    title: "إنتاج فيديوهات الواقع وتجارب المستخدمين (UGC Production)",
    subtitle: "فيديوهات عفوية وطبيعية من واقع المستخدمين لمضاعفة الثقة والمبيعات",
    description:
      "المستهلك اليوم يثق بتجارب الأشخاص الحقيقيين أكثر من الإعلانات التقليدية. نوفر صناع محتوى محترفين لتجربة منتجاتك وخدماتك وتصوير فيديوهات عفوية (UGC) تثبت جودتها وتدفع المشاهد للشراء بثقة مطلقة.",
    deliverables: [
      "توفير صناع محتوى (وجوه حقيقية) بمختلف الفئات العمرية واللهجات",
      "كتابة سكريبتات عفوية تركز على حل المشاكل وتجربة الاستخدام",
      "مونتاج سريع ومناسب لطبيعة منصات تيك توك وإنستجرام وسناب شات",
    ],
    kpiImpact: "خفض تكلفة الإعلانات ومضاعفة نسبة النقر والمشتريات عبر الإعلانات المرئية.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "corporate-docu",
    title: "الأفلام الوثائقية وبروفايلات الشركات (Corporate & Brand Films)",
    subtitle: "احكِ قصة نجاح شركتك بفلم مؤسسي يفخر به مستثمروك وعملاؤك",
    description:
      "ننتج أفلاماً وثائقية قصيرة ومميزة عن منشأتك، مصانعك، فريق عملك، وقصة نجاحك عبر السنين. ندمج المقابلات الاحترافية مع اللقطات الجوية (Drone) والمشاهد الميدانية لنرسم صورة ذهنية ضخمة لمؤسستك.",
    deliverables: [
      "تصوير جوي احترافي (Drone) للمقار، المصانع، والمشاريع الكبرى",
      "إجراء وتسجيل مقابلات مؤسسية مع الإدارة العليا ومسؤولي الشركة",
      "إنتاج فيلم وثائقي تعريفي للشركة (Corporate Profile Video)",
    ],
    kpiImpact: "تعزيز الثقة المطلقة لدى المستثمرين والعملاء المؤسسيين (B2B).",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const PRODUCTION_STAGES: ProductionStage[] = [
  {
    stageNumber: "01",
    title: "ما قبل الإنتاج وتطوير الفكرة (Pre-Production)",
    timing: "الأيام 1 - 4",
    description: "نضع حجر الأساس؛ نكتب القصة، نرسم اللقطات (Storyboard)، ونحدد مواقع التصوير وتوفير الممثلين والمعدات.",
    keyOutputs: ["السيناريو المعتمد", "خطة التصوير اليومية (Call Sheet)", "اختيار المواقع والممثلين"],
  },
  {
    stageNumber: "02",
    title: "يوم التصوير والإنتاج الميداني (Production / Shoot)",
    timing: "يوم إلى 3 أيام",
    description: "ينزل فريقنا الميداني بكاميرات السينما والإضاءة الاحترافية لتنفيذ كافة اللقطات المطلوبة بأعلى دقة.",
    keyOutputs: ["تسجيل المواد الخام البديلة (Raw Footage 4K)", "تسجيل الصوت النقي"],
  },
  {
    stageNumber: "03",
    title: "ما بعد الإنتاج والمونتاج (Post-Production)",
    timing: "أيام 5 - 10",
    description: "يبدأ سحر المونتاج؛ دمج اللقطات، إضافة المؤثرات الصوتية، هندسة الصوت، وتصحيح الألوان السينمائي.",
    keyOutputs: ["مونتاج الفيديوهات الأول", "إضافة الترجمة والمؤثرات", "تصحيح الألوان (Color Grading)"],
  },
  {
    stageNumber: "04",
    title: "المراجعة والتسليم النهائي (Final Delivery)",
    timing: "اليوم الأخير",
    description: "نستقبل ملاحظاتك، نجري التعديلات النهائية، ونسلمك الفيديوهات بكافة المقاسات المطلوبة.",
    keyOutputs: ["نسخ سينمائية بجودة 4K و Full HD", "نسخ مخصصة لمقاسات الريلز والتيك توك والإعلانات"],
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    aspect: "جودة التصوير والمعدات",
    amateurProduction: "تصوير بكاميرات هاتف عادية أو كاميرات ضعيفة بدون إضاءة مهنية أو استقرار.",
    adsAgencyCinematic: "كاميرات سينمائية عالمية 4K مع إضاءات احترافية وعدسات سينمائية فاخرة.",
    businessImpact: "صورة بصرية تليق بضخامة شركتك وتعكس جودة منتجاتك.",
  },
  {
    aspect: "الصوت والمونتاج والألوان",
    amateurProduction: "صوت مشوش بخلفية مزعجة ومونتاج تقليدي بدون ألوان جذابة.",
    adsAgencyCinematic: "هندسة صوتية نقية، فويس أوفر معتمد، وتصحيح ألوان سينمائي هوليوودي.",
    businessImpact: "جذب انتباه المشاهد وإبقاؤه منسجماً مع الإعلان للنهاية.",
  },
  {
    aspect: "التوجيه التسويقي للقطات",
    amateurProduction: "لقطات عشوائية للشركة أو المنتج بدون دراسة لسيكولوجية الشراء.",
    adsAgencyCinematic: "لقطات مدروسة تركز على إبراز نقاط القوة وحل مشاكل العميل لزيادة المبيعات.",
    businessImpact: "تحويل الإنتاج المرئي إلى أداة مبيعات قوية وعائد استثماري مضمون.",
  },
];

const PRODUCTION_PACKAGES: ProductionPackage[] = [
  {
    name: "باقة الإنتاج السريع (Quick Reel & Product)",
    tagline: "باقة مخصصة للمتاجر وصناع المحتوى الراغبين بفيديوهات ريلز ومنتجات احترافية",
    targetAudience: "مثالية للمتاجر الإلكترونية والمطاعم الجديدة",
    isFeatured: false,
    shootDays: "يوم تصوير واحد (ميداني أو استوديو)",
    videosCount: "6 فيديوهات ريلز / منتجات احترافية",
    features: [
      "تصوير بكاميرات عالية الدقة مع إضاءة أساسية",
      "مونتاج سينمائي مع إضافة مؤثرات وتصحيح ألوان",
      "كتابة السكريبتات وتوجيه التصوير",
      "تسليم الفيديوهات بمقاسات السوشيال ميديا",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة الإنتاج السريع للريلز والمنتجات).",
  },
  {
    name: "باقة الحملات السينمائية (Commercial Pro Shoot)",
    tagline: "الإنتاج المتكامل للإعلانات التجارية وفيديوهات الشركات والعيادات",
    targetAudience: "الأكثر طلباً للشركات، العيادات، والعلامات الطموحة",
    isFeatured: true,
    shootDays: "2 إلى 3 أيام تصوير متكاملة",
    videosCount: "إعلان تجاري رئيسي + 10 فيديوهات ريلز وتغطيات",
    features: [
      "إخراج سينمائي وتوفير طاقم تصوير وإضاءة متكامل",
      "كتابة القصة والسكريبتات ولوحات القصة (Storyboard)",
      "تصحيح ألوان هوليوودي وتسجيل صوتي احترافي",
      "فيديوهات UGC وتغطيات تفاعلية للبراند",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة الحملات السينمائية للإعلانات التجارية).",
  },
  {
    name: "باقة الإنتاج الإمبراطوري (Enterprise Film Production)",
    tagline: "أفلام مؤسسية ضخمة وحملات تلفزيونية ورقمية متكاملة",
    targetAudience: "للشركات الكبرى، المصانع، والكيانات الإقليمية",
    isFeatured: false,
    shootDays: "أيام تصوير مفتوحة حسب المشروع",
    videosCount: "فلم وثائقي للشركة + حزمة إعلانات ضخمة",
    features: [
      "تصوير جوي بالدرون وأحدث كاميرات السينما العالمية",
      "توفير ممثلين معتمدين وطاقم إخراج وإنتاج تنفيذي كامل",
      "حملة مرئية متكاملة لجميع منصات التواصل والتلفزيون",
      "دعم استشاري وإنتاجي مستمر على مدار العام",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار عن (باقة الإنتاج الإمبراطوري والأفلام الوثائقية).",
  },
];

const FAQ_PRODUCTION: FAQItem[] = [
  {
    category: "مواقع التصوير",
    question: "هل يتم التصوير في مقر شركتنا أم في استوديو خاص بكم؟",
    answer:
      "نحن نتحرك أينما كنت! ينتقل فريقنا بكامل معدات التصوير، الكاميرات، والإضاءة إلى مقر شركتك، مصنعك، مطعمك، أو عيادتك في أي مدينة بالمملكة أو مصر أو الخليج. كما نوفر استوديوهات مجهزة لتصوير المنتجات عند الطلب.",
  },
  {
    category: "المعدات والجودة",
    question: "ما هي جودة الكاميرات والمعدات المستخدمة في التصوير؟",
    answer:
      "نستخدم حصرياً كاميرات سينمائية احترافية تدعم تصوير دقة 4K و 8K، مع عدسات سينمائية فاخرة، طائرات درون مرخصة للتصوير الجوي، وأنظمة إضاءة متطورة (Aputure / Godox) تضمن حصولك على نقاء بصري يضاهي إعلانات التلفزيون الكبرى.",
  },
  {
    category: "مدة التنفيذ",
    question: "كم تستغرق مدة تسليم الفيديوهات بعد انتهاء يوم التصوير؟",
    answer:
      "تتراوح مدة المونتاج وما بعد الإنتاج بين 5 إلى 10 أيام عمل حسب حجم المشروع وعدد الفيديوهات المطلوبة، مع إمكانية تسليم عينة أولية سريعة خلال 48 ساعة في حال وجود إعلانات عاجلة.",
  },
];


export default function PhotographyVideoProductionPage() {
  const [activeTab, setActiveTab] = useState<string>(PRODUCTION_PILLARS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePillar =
    PRODUCTION_PILLARS.find((item) => item.id === activeTab) || PRODUCTION_PILLARS[0];

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
          <source src="/photography and video production.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-[#070b14]/90 backdrop-blur-[2px]" />
      </div>
      <section className="w-full max-w-[1400px] mx-auto min-h-[650px] md:min-h-[760px] rounded-[2.5rem] border-2 border-[#00e5ff]/50 shadow-[0_0_70px_rgba(0,229,255,0.25)] relative overflow-hidden flex items-center justify-center p-6 md:p-16 lg:p-20 mt-4">
        

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        >
          <source src="/photography and video production.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>

        <div className="absolute inset-0 bg-gradient-to-l from-[#070b14]/95 via-[#070b14]/80 to-[#0b132b]/65 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070b14_100%)] opacity-70 z-[1]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-7" dir="rtl">
          
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#070b14]/80 border border-[#00e5ff]/60 shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-[#00e5ff] text-xs md:text-sm font-black tracking-wider uppercase">
              التصوير وإنتاج الفيديوهات السينمائية
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            التصوير وإنتاج{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              الفيديوهات
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            نترجم أفكارك إلى مشاهد بصرية سينمائية عالية الجودة تخطف الأنظار وتعزز مصداقية علامتك.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🎥</span>
              <span className="text-white text-sm md:text-base font-bold">كاميرات سينمائية دقة 4K و 8K</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">✨</span>
              <span className="text-white text-sm md:text-base font-bold">تصحيح ألوان هوليوودي فخم</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🚀</span>
              <span className="text-white text-sm md:text-base font-bold">إنتاج إعلانات ترفع المبيعات</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%AC%D9%84%D8%B3%D8%A9%20%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D9%88%D8%A5%D9%86%D8%AA%D8%A7%D8%AC%20%D9%81%D9%8A%D8%AF%D9%8A%D9%88%D9%87%D8%A7%D8%AA%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>احجز جلسة التصوير الآن عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#production-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات الإنتاج السينمائي
            </a>
          </div>

        </div>
      </section>
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "4K / 8K",
              label: "أعلى دقة نقاء سينمائي",
              desc: "استخدام أحدث الكاميرات والعدسات لضمان ظهور منتجاتك وشركتك في أبهى صورة.",
            },
            {
              number: "+350",
              label: "إعلان وفلم تجاري منتج",
              desc: "أعمال ناجحة قمنا بتصويرها وإنتاجها لشركات كبرى وعلامات تجارية رائدة.",
            },
            {
              number: "2.5x",
              label: "مضاعفة معدل التحويل البيعي",
              desc: "الفيديوهات الاحترافية ترفع ثقة العميل وتدفعه لإتمام الشراء بسرعة أكبر.",
            },
            {
              number: "100%",
              label: "جاهزية لجميع المنصات",
              desc: "تسليم الفيديوهات بمقاسات مخصصة لتلفزيون، يوتيوب، تيك توك، وإنستجرام وسناب شات.",
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
            قطاعات الإنتاج السينمائي
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا نقدم لك في قسم{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              التصوير وإنتاج الفيديوهات؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            نغطي كافة أشكال التصوير التجاري والوثائقي والإعلاني بأعلى معايير الجودة العالمية. انقر لاستعراض التفاصيل:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* أزرار الأقسام الأربعة */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {PRODUCTION_PILLARS.map((pillar) => {
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
                  تفاصيل القطاع والمخرجات
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
                <span>🎬</span>
                <span>المخرجات والمستلمات النهائية في هذا القطاع:</span>
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
                <span>📈 الأثر التسويقي:</span>
                <span className="text-white">{activePillar.kpiImpact}</span>
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود حجز جلسة تصوير وإنتاج فيديو لقطاع (${activePillar.title}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                احجز جلسة التصوير الآن ↗
              </a>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/65 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.12)] relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/photography video production.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 w-fit">
                معايير الإنتاج السينمائي
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-snug">
                لماذا تحدث فيديوهاتنا هذا التأثير الساحر على{" "}
                <span className="text-[#00e5ff]">الجمهور والمبيعات؟</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                الفرق بين الكاميرا العادية وعدسات السينما ليس في وضوح الصورة فحسب، بل في القدرة على إثارة المشاعر وتحريك وجدان المشاهد. نحن نصمم كل إطار (Frame) بعناية فائقة من حيث الزوايا، حركة الكاميرا، هندسة الإضاءة، وتصحيح الألوان لتعكس الهيبة الحقيقية لمنتجاتك.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-2xl bg-[#070b14]/80 border border-[#00e5ff]/30">
                  <h4 className="text-[#00e5ff] font-bold text-base mb-1">🎬 معدات احترافية</h4>
                  <p className="text-xs text-gray-300">كاميرات سينمائية وعدسات برايم ومعدات حركة ودوران متطورة.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#070b14]/80 border border-[#00e5ff]/30">
                  <h4 className="text-[#00e5ff] font-bold text-base mb-1">🎨 تصحيح ألوان هوليوودي</h4>
                  <p className="text-xs text-gray-300">لمسات لونية تنقل المشاهد إلى أجواء الأفلام السينمائية الكبرى.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[340px] md:h-[400px] w-full">
              <Image
                src="/photography video production.webp"
                alt="التصوير وإنتاج الفيديوهات"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,229,255,0.35)]"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            دورة حياة الإنتاج
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            رحلة إنتاج فيديوهاتك في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              4 مراحل سينمائية دقيقة
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            من فكرة النص على الورق وحتى تسليم النسخة النهائية لشاشات العرض والإعلانات:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTION_STAGES.map((stage, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-8 flex flex-col justify-between gap-6 relative overflow-hidden group hover:border-[#00e5ff] hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                    {stage.stageNumber}
                  </span>
                  <span className="text-xs font-bold text-gray-200 bg-[#070b14] px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                    ⏱ {stage.timing}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00e5ff] transition-colors">
                  {stage.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 bg-[#070b14]/60 -mx-8 -mb-8 p-5">
                <span className="text-xs font-bold text-[#00e5ff] block mb-2">
                  مخرجات المرحلة:
                </span>
                <ul className="flex flex-col gap-1.5">
                  {stage.keyOutputs.map((out, oIdx) => (
                    <li key={oIdx} className="text-xs text-gray-200 flex items-center gap-2">
                      <span className="text-[#00e5ff]">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-6 md:p-12 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              الفرق بين التصوير العشوائي والانتاج السينمائي في{" "}
              <span className="text-[#00e5ff]">وكالة ADS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا تحدث فيديوهاتنا هذا الفارق الهائل في إقناع العملاء ورفع المبيعات؟
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
                    التصوير الهاوي أو بكاميرات الجوال العادية
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    الإنتاج السينمائي في وكالة ADS
                  </th>
                  <th className="p-4 md:p-5 text-[#00e5ff] font-black text-sm md:text-base rounded-tl-2xl">
                    الأثر على بيزنسك
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
                      {row.amateurProduction}
                    </td>
                    <td className="p-4 md:p-5 text-gray-100 font-medium bg-[#00e5ff]/5 leading-relaxed border-x border-[#00e5ff]/20">
                      ✓ {row.adsAgencyCinematic}
                    </td>
                    <td className="p-4 md:p-5 text-[#00e5ff] font-semibold leading-relaxed">
                      {row.businessImpact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>


      <section id="production-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات الإنتاج المرئي
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة التصوير والإنتاج{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              المناسبة لحجم عملك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            باقات إنتاجية احترافية مصممة لتلبي احتياجات المتاجر، الشركات، والعيادات بأعلى جودة سينمائية:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {PRODUCTION_PACKAGES.map((pkg, idx) => (
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
                    <span className="text-gray-300">أيام التصوير:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.shootDays}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">مخرجات الفيديوهات:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.videosCount}</span>
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
            إجابات واضحة وشفافة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            الأسئلة الشائعة حول التصوير وإنتاج الفيديوهات
          </h2>
          <p className="text-gray-300 text-base">
            كل ما يدور في ذهنك حول مواقع التصوير، المعدات، ومواعيد التسليم:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_PRODUCTION.map((faq, index) => {
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
            اجعل منتجك وشركتك تتحدث بلغة السينما والإبداع البصري
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لإنتاج إعلان سينمائي يخطف الأنظار{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              ويضاعف مبيعاتك؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع فريق الإنتاج السينمائي في وكالة ADS عبر الواتساب لحجز جلسة التصوير وتخطيط مشروعك القادم.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D8%AA%20%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D9%88%D8%A5%D9%86%D8%AA%D8%A7%D8%AC%20%D8%A7%D9%84%D9%81%D9%8A%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
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