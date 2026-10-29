"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// 1. واجهات البيانات (TypeScript Interfaces)
// ==========================================

interface AdPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface PlatformData {
  name: string;
  badge: string;
  bestFor: string;
  strategy: string;
  metrics: string;
}

interface WorkflowStep {
  stepNumber: string;
  title: string;
  timing: string;
  description: string;
  deliverable: string;
}

interface ComparisonRow {
  aspect: string;
  boostingPosts: string;
  adsAgencyPro: string;
  businessBenefit: string;
}

interface AdPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  platformsCount: string;
  managementFee: string;
  features: string[];
  whatsappText: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

// ==========================================
// 2. البيانات الموسوعية لخدمة إدارة الإعلانات الممولة
// ==========================================

const AD_PILLARS: AdPillar[] = [
  {
    id: "meta-ads",
    title: "إدارة إعلانات ميتا (Facebook & Instagram Ads)",
    subtitle: "السيطرة على أكبر منصتين للتجارة الإلكترونية وبناء الوعي البيعي",
    description:
      "ندير ميزانياتك الإعلانية على إنستجرام وفيسبوك باحترافية عبر مدير الإعلانات التجاري (Meta Ads Manager). نطبق استراتيجيات الاستهداف المتقدم (Custom Audiences & Lookalikes) وحملات كتالوج المنتجات (Catalog Sales) لضمان الوصول للعملاء الأكثر جاهزية للشراء.",
    deliverables: [
      "إعداد وهندسة البكسل (Meta Pixel) وأحداث التحويل بدقة (Conversion API)",
      "تصميم واختبار زوايا إعلانية متعددة (A/B Testing لصور والفيديوهات)",
      "إدارة حملات المبيعات، الرسائل، وتجميع العملاء المحتملين (Leads)",
      "تحسين يومي للتكلفة مقابل النتيجة لتعظيم العائد على الإنفاق (ROAS)",
    ],
    kpiImpact: "مضاعفة مبيعات المتجر الإلكتروني وخفض تكلفة الاستحواذ على العميل (CPA).",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: "tiktok-snapchat",
    title: "إعلانات تيك توك وسناب شات (TikTok & Snapchat Ads)",
    subtitle: "اكتساح السوق السعودي والخليجي عبر منصات الشباب والانتشار السريع",
    description:
      "يُعد السوق الخليجي (السعودية والإمارات) من أعلى أسواق العالم استهلاكاً لتيك توك وسناب شات. نصمم ونطلق حملات مرئية سريعة وموجهة تخطف الأنظار وتحقق آلاف الطلبات اليومية بأقل تكلفة نقرة ممكنة.",
    deliverables: [
      "إطلاق حملات سبارك أدز (Spark Ads) وحملات التحويل الفوري",
      "ربط وتتبع الأحداث عبر TikTok Pixel و Snapchat Pixel",
      "توظيف محتوى الـ UGC والإعلانات القصيرة لتحقيق أعلى تفاعل",
    ],
    kpiImpact: "تحقيق انتشار فيروسي ومبيعات يومية هائلة في السوق الخليجي.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "google-search-ads",
    title: "إعلانات محرك بحث جوجل (Google Search & Performance Max)",
    subtitle: "اصطاد العملاء في اللحظة التي يبحثون فيها عن خدماتك بالاسم",
    description:
      "عندما يبحث عميل في جوجل عن (أفضل شركة مقاولات في جده) أو (متجر عطور فاخرة)، نريد لشركتك أن تظهر في النتيجة الأولى فوراً. ندير حملات شبكة البحث (Search) وحملات الأداء الأقصى (Performance Max) لضمان اقتناص الصفقات.",
    deliverables: [
      "بحث واستهداف دقيق للكلمات المفتاحية التجارية عالية النية للشراء",
      "كتابة إعلانات نصية جذابة تزيد من معدل النقر (CTR)",
      "إدارة ميزانية جوجل بدقة وتجنب النقرات غير المؤهلة",
    ],
    kpiImpact: "اقتناص عملاء عالي الجودة جاهزون لإتمام الشراء أو التعاقد فوراً.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "retargeting-funnels",
    title: "حملات إعادة الاستهداف وقمع المبيعات (Retargeting Funnels)",
    subtitle: "استرجاع الزوار المترددين وإقناعهم بإتمام عمليات الشراء",
    description:
      "97% من زوار موقعك يغادرون دون شراء في الزيارة الأولى. نحن نبني شبكة إعادة استهداف ذكية (Sequential Retargeting) تلاحق الزوار بإعلانات مخصصة تذكرهم بمنتجاتهم المفضلة وتقدم لهم حافزاً للعودة وإتمام الدفع.",
    deliverables: [
      "تقسيم الزوار حسب سلوكهم في الموقع (أضافوا للسلة، تصفحوا ولم يشتروا)",
      "إطلاق إعلانات تذكيرية وعروض حصرية لاسترجاع السلات المتروكة",
    ],
    kpiImpact: "رفع معدل إتمام المبيعات وتقليل الهدر الإعلاني إلى أدنى حد ممكن.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const PLATFORMS_GRID: PlatformData[] = [
  {
    name: "Meta (Instagram & FB)",
    badge: "الأساس للتجارة الإلكترونية",
    bestFor: "المتاجر، الأزياء، العطور، والخدمات العامة",
    strategy: "استهداف العملاء بالاهتمامات وسلوك الشراء مع حملات الكتالوج الذكي.",
    metrics: "ROAS مرتفع وتحويل مباشر",
  },
  {
    name: "TikTok & Snapchat",
    badge: "الانتشار والشباب في الخليج",
    bestFor: "المطاعم، التطبيقات، العروض السريعة، والمنتجات المرئية",
    strategy: "الاعتماد على فيديوهات UGC والخطافات السريعة لجذب الانتباه الفوري.",
    metrics: "تكلفة نقرة منخفضة وانتشار واسع",
  },
  {
    name: "Google Ads (Search & PMax)",
    badge: "نية الشراء العالية (Intent)",
    bestFor: "الشركات، العقارات، المقاولات، والخدمات الطبية",
    strategy: "الظهور للعميل وهو يبحث بالاسم عن الحل الذي تقدمه شركتك.",
    metrics: "عملاء محتملون جادون (Leads)",
  },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "التدقيق التقني وضبط أكواد التتبع",
    timing: "اليوم الأول",
    description: "نتأكد من ربط البيكسل (Pixels) وأحداث التحويل بدقة لضمان قراءة الأرقام صحيحة 100%.",
    deliverable: "بيئة تتبع إعلاني سليمة وخالية من الأخطاء.",
  },
  {
    stepNumber: "02",
    title: "بناء الاستراتيجية وتجهيز التصميمات",
    timing: "خلال 3 أيام",
    description: "نحدد الجماهير المستهدفة، نوزع الميزانية، ونصمم الفيديوهات والبوستات الإعلانية.",
    deliverable: "اعتماد الخطة الإعلانية والمواد المرئية.",
  },
  {
    stepNumber: "03",
    title: "إطلاق الحملات والاختبار الأولي",
    timing: "يوم 4 - 7",
    description: "نطلق الحملات بنظام (A/B Testing) لاختبار أيهما يحقق أفضل تفاعل وتكلفة.",
    deliverable: "بيانات أولية عن الإعلانات الرابحة.",
  },
  {
    stepNumber: "04",
    title: "التحسين اليومي وتوسيع النطاق (Scaling)",
    timing: "يومي ومستمر",
    description: "نوقف الخاسر، نضاعف الميزانية على الرابح، ونرسل لك تقارير الأرباح والعائد.",
    deliverable: "مضاعفة العائد على الإنفاق (ROAS) شهرياً.",
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    aspect: "طريقة إطلاق الإعلانات",
    boostingPosts: "ضغط زر (ترويج المنشور) المعتاد في التطبيق بدون استهداف دقيق أو بكسل.",
    adsAgencyPro: "إدارة احترافية عبر مدير الإعلانات التجاري مع استهداف دقيق وأكواد تتبع.",
    businessBenefit: "توفير الأموال وتوجيهها للعملاء المهتمين بالشراء فقط.",
  },
  {
    aspect: "متابعة وتحليل البيانات",
    amateurWriting: "",
    boostingPosts: "الاعتماد على متابعة الإعجابات والمشاهدات السطحية التي لا تعكس المبيعات.",
    adsAgencyPro: "متابعة دقيقة لمؤشرات البيزنس الحقيقية: تكلفة الاستحواذ (CPA) والعائد (ROAS).",
    businessBenefit: "رؤية مالية واضحة لكل ريال يتم إنفاقه.",
  },
  {
    aspect: "التعامل مع الحملات الخاسرة",
    boostingPosts: "استمرار حرق الميزانية على إعلانات لا تحقق أي عائد لعدم وجود خبرة بالتعديل.",
    adsAgencyPro: "إيقاف الإعلان الخاسر خلال ساعات واستبداله بزوايا إعلانية رابحة.",
    businessBenefit: "حماية ميزانيتك التسويقية من الهدر.",
  },
  {
    criterion: "التعامل مع الحملات الخاسرة",
    randomMarketing: "",
    boostingPosts: "استمرار حرق الميزانية على إعلانات لا تحقق أي عائد لعدم وجود خبرة بالتعديل.",
    adsAgencyPro: "إيقاف الإعلان الخاسر خلال ساعات واستبداله بزوايا إعلانية رابحة.",
    businessBenefit: "حماية ميزانيتك التسويقية من الهدر.",
  } as any,
];

const AD_PACKAGES: AdPackage[] = [
  {
    name: "باقة إدارة إعلانات منصة واحدة (Single Platform)",
    tagline: "إدارة احترافية مركزة لمنصة واحدة (ميتا أو تيك توك أو سناب شات)",
    targetAudience: "مثالية للمشاريع الناشئة والمتاجر في بداية انطلاقتها",
    isFeatured: false,
    platformsCount: "إدارة منصة إعلانية واحدة",
    managementFee: "مناسبة للميزانيات الصغيرة والمتوسطة",
    features: [
      "إعداد وضبط البكسل وأحداث التحويل",
      "تصميم وكتابة محتوى 3 إعلانات ممولة شهرياً",
      "استهداف دقيق وإعادة استهداف (Retargeting)",
      "تقارير أداء أسبوعية وشهرية",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة إدارة إعلانات منصة واحدة).",
  },
  {
    name: "باقة النمو المتسارع لمنصتين (Growth Pro Ads)",
    tagline: "الحزمة الأكثر طلباً للمتاجر والشركات لمضاعفة المبيعات عبر منصتين",
    targetAudience: "الأكثر طلباً للمتاجر الإلكترونية والشركات القائمة",
    isFeatured: true,
    platformsCount: "إدارة منصتين إعلنافيتين معاً (مثال: ميتا + تيك توك)",
    managementFee: "الأفضل من حيث العائد والمبيعات",
    features: [
      "هندسة قمع مبيعات متكامل (Funnel Setup)",
      "تصميم وإنتاج كافٍ للحملات واختبارات A/B Testing",
      "إدارة إعلانات الكتالوج والبحث وإعادة الاستهداف",
      "اجتماع استراتيجي شهري لمناقشة الأرقام وتحقيق نمو الـ ROAS",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة النمو المتسارع لمنصتين).",
  },
  {
    name: "باقة الهيمنة الإعلانية الشاملة (Omnichannel Enterprise)",
    tagline: "إدارة كاملة لكافة المنصات الإعلانية بميزانيات ضخمة واستراتيجية متقدمة",
    targetAudience: "للشركات الكبرى، المصانع، والمتاجر ذات التوسع الإقليمي",
    isFeatured: false,
    platformsCount: "إدارة كافة المنصات (ميتا، تيك توك، سناب، وجوجل)",
    managementFee: "مخصصة للميزانيات الكبرى والتوسع",
    features: [
      "فريق إعلاني مخصص يتابع حملاتك على مدار الساعة",
      "استراتيجيات Scaling متقدمة ومضاعفة الميزانيات بأمان",
      "تغطية كاملة لحملات البحث (Google Search) وإعادة الاستهداف",
      "تقارير مالية وتحليلية دقيقة ومتابعة حية للربحية",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار عن (باقة الهيمنة الإعلانية الشاملة).",
  },
];

const FAQ_ADS: FAQItem[] = [
  {
    category: "الميزانية والإدارة",
    question: "كم تكلفة الميزانية الإعلانية التي يجب أن أنفقها في البداية؟",
    answer:
      "تختلف الميزانية حسب قطاعك وأهدافك، ولكننا نساعدك في وضع خطة ميزانية تدريجية تبدأ باختبارات ذكية (Testing Phase) بميزانيات معقولة، ثم نضاعف الإنفاق تدريجياً كلما تأكدنا من تحقيق الحملات لعائد إيجابي (ROAS).",
  },
  {
    category: "طريقة المحاسبة والرسوم",
    question: "هل رسوم الإدارة الوكالة تتضمن قيمة الميزانية الإعلانية المنفقة في المنصات؟",
    answer:
      "لا، رسوم إدارة الإعلانات هي أتعاب الوكالة نظير التخطيط، التحسين اليومي، تصميم الإعلانات، وإدارة الحملات بخبرة تخصصية، بينما يتم دفع ميزانية الإعلانات مباشرة للمنصات (ميتا، تيك توك، جوجل) عبر بطاقتك الائتمانية البنكية.",
  },
  {
    category: "النتائج والعائد",
    question: "متى تبدأ الحملات الإعلانية في تحقيق أرباح وعائد واضح؟",
    answer:
      "تحتاج الحملات عادة إلى فترة اختبار وتجميع بيانات (Learning Phase) تستغرق من 5 إلى 7 أيام، وبمجرد ضبط الخوارزميات واستبعاد الإعلانات الضعيفة، تبدأ المبيعات والاستجابة الحقيقية في التصاعد الملحوظ.",
  },
];

// ==========================================
// 3. المكون الرئيسي للصفحة (Main Component)
// ==========================================

export default function PaidAdvertisingManagementPage() {
  const [activeTab, setActiveTab] = useState<string>(AD_PILLARS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePillar =
    AD_PILLARS.find((item) => item.id === activeTab) || AD_PILLARS[0];

  return (
    <div className="w-full min-h-screen text-white p-3 md:p-6 flex flex-col font-sans gap-20 relative overflow-x-hidden">
      
      {/* ==========================================
          خلفية الفيديو الثابتة للصفحة بالكامل (paid advertising management.mp4)
          ========================================== */}
      <div className="fixed inset-0 overflow-hidden z-[-1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105"
        >
          <source src="/paid advertising management.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-[#070b14]/90 backdrop-blur-[2px]" />
      </div>

      {/* ==========================================
          1. سكشن الهيرو الملحمي: فيديو الهيرو (paid advertising management.mp4) بارتفاع وعرض السكشن بالكامل
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto min-h-[650px] md:min-h-[760px] rounded-[2.5rem] border-2 border-[#00e5ff]/50 shadow-[0_0_70px_rgba(0,229,255,0.25)] relative overflow-hidden flex items-center justify-center p-6 md:p-16 lg:p-20 mt-4">
        
        {/* فيديو الهيرو يغطي عرض وارتفاع السكشن بالكامل 100% */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        >
          <source src="/paid advertising management.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>

        {/* طبقة التعتيم التدريجية الاحترافية */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#070b14]/95 via-[#070b14]/80 to-[#0b132b]/65 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070b14_100%)] opacity-70 z-[1]" />

        {/* محتوى الهيرو فوق الفيديو الكامل */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-7" dir="rtl">
          
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#070b14]/80 border border-[#00e5ff]/60 shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-[#00e5ff] text-xs md:text-sm font-black tracking-wider uppercase">
              إدارة الحملات والإعلانات الممولة باحترافية
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            إدارة الإعلانات{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              الممولة
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            ندير حملاتك الإعلانية على مختلف المنصات باحترافية عالية لضمان الوصول لأعلى عائد وتحقيق أهدافك.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🎯</span>
              <span className="text-white text-sm md:text-base font-bold">استهداف دقيق للعملاء المحتملين</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">📈</span>
              <span className="text-white text-sm md:text-base font-bold">تعظيم العائد على الإنفاق ROAS</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">⚡</span>
              <span className="text-white text-sm md:text-base font-bold">خفض تكلفة الاستحواذ على العميل</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AD%D9%85%D9%84%D8%A7%D8%AA%D9%8A%20%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%85%D9%88%D9%84%D8%A9%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>ابدأ حملاتك الإعلانية الآن عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#ad-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات الإعلانات الممولة
            </a>
          </div>

        </div>
      </section>

      {/* ==========================================
          2. قسم الأرقام القياسية لإدارة الإعلانات
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "+5x",
              label: "متوسط العائد على الإنفاق (ROAS)",
              desc: "نستهدف تحقيق أرباح تتجاوز أضعاف ميزانية الإنفاق الإعلاني بفضل الاستهداف الذكي.",
            },
            {
              number: "-40%",
              label: "تخفيض تكلفة الاستحواذ (CPA)",
              desc: "إيقاف الهدر الإعلاني وتوجيه الميزانية نحو الجمهور الأكثر جاهزية للشراء.",
            },
            {
              number: "+10 مليون",
              label: "ريال مبيعات محققة لعملائنا",
              desc: "إجمالي العائدات الناتجة عن الحملات الإعلانية المدارة باحترافية عالية.",
            },
            {
              number: "24/7",
              label: "مراقبة وتحسين مستمر للحملات",
              desc: "فريق متخصص يراقب أداء الإعلانات ويعدل الميزانيات على مدار الساعة.",
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

      {/* ==========================================
          3. التشريح الكامل لمحاور إدارة الإعلانات (Interactive Pillars)
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            المنصات والأقسام الإعلانية
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا ندير لك في قسم{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              الإعلانات الممولة؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            ندير حملاتك عبر كافة المنصات الرقمية الكبرى باستراتيجيات مدروسة تضمن تحقيق أهدافك. انقر لاستعراض التفاصيل:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* أزرار المحاور الأربعة */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {AD_PILLARS.map((pillar) => {
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

          {/* عرض تفاصيل المحور النشط */}
          <div className="lg:col-span-7 rounded-[2rem] border border-[#00e5ff]/40 bg-[#0b132b]/85 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_45px_rgba(0,229,255,0.15)] flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-[#00e5ff] text-xs font-bold uppercase tracking-wider">
                  تفاصيل المنصة والمهام
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
                <span>🎯</span>
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
                <span>📈 الأثر البيعي:</span>
                <span className="text-white">{activePillar.kpiImpact}</span>
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود الاستفسار عن خدمة (${activePillar.title}) للإعلانات الممولة.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                ابدأ هذه الحملة الآن ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          4. مقارنة المنصات الاستراتيجية + استخدام الفيديو الثاني (paid advertising.mp4)
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/65 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.12)] relative overflow-hidden">
          
          {/* استخدام الفيديو الثاني (paid advertising.mp4) كخلفية جمالية دمشقية */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/paid advertising.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
                توزيع المزيج الإعلاني
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                أي منصة إعلانية تناسب{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
                  طبيعة مشروعك؟
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                نحدد لك القناة المثالية لنشاطك التجاري لضمان إنفاق الميزانية في المكان الأصح:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PLATFORMS_GRID.map((plat, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/90 p-8 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                        {plat.badge}
                      </span>
                      <span className="text-xl font-black text-[#00e5ff]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white">{plat.name}</h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed border-b border-white/10 pb-4">
                      <strong className="text-white block mb-1">الأنسب لـ:</strong>
                      {plat.bestFor}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-[#00e5ff] block mb-1">الاستراتيجية المتبعة:</strong>
                      {plat.strategy}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0b132b] border border-[#00e5ff]/20 text-xs text-[#00e5ff] font-semibold text-center">
                    المؤشر المتوقع: {plat.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          5. خطوات العمل الأربع لإدارة الإعلانات (Workflow Steps)
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            منهجية العمل والتحسين
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            رحلة إطلاق وإدارة حملاتك الإعلانية في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              4 خطوات مدروسة
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نظام عمل صارم يضمن مراقبة ميزانيتك وتحقيق أعلى عائد استثماري ممكن:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-8 flex flex-col justify-between gap-6 relative overflow-hidden group hover:border-[#00e5ff] hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-bold text-gray-200 bg-[#070b14] px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                    ⏱ {step.timing}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00e5ff] transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 bg-[#070b14]/60 -mx-8 -mb-8 p-5">
                <span className="text-xs font-bold text-[#00e5ff] block mb-1">
                  المخرج النهائي:
                </span>
                <p className="text-xs text-white font-semibold">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          6. جدول المقارنة الحاسم: ترويج المنشورات العشوائي vs إدارة وكالة ADS
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-6 md:p-12 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              الفرق بين ترويج المنشورات العشوائي وإدارة{" "}
              <span className="text-[#00e5ff]">وكالة ADS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا يؤدي الاعتماد على زر (ترويج المنشور) إلى حرق الميزانية دون نتائج؟
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
                    ترويج المنشورات العشوائي من التطبيق
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    الإدارة الاحترافية في وكالة ADS
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
                      {row.boostingPosts}
                    </td>
                    <td className="p-4 md:p-5 text-gray-100 font-medium bg-[#00e5ff]/5 leading-relaxed border-x border-[#00e5ff]/20">
                      ✓ {row.adsAgencyPro}
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

      {/* ==========================================
          7. باقات إدارة الإعلانات الممولة (Packages Section)
          ========================================== */}
      <section id="ad-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات إدارة الحملات
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة إدارة الإعلانات الممولة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              المناسبة لحجم ميزانيتك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            باقات احترافية تضمن لك إدارة ميزانيتك بكفاءة عالية وتحقيق أعلى عائد على الاستثمار (ROAS):
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {AD_PACKAGES.map((pkg, idx) => (
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
                  الباقة الأكثر طلباً للمتاجر والشركات ⭐
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
                    <span className="text-gray-300">النطاق والمنصات:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.platformsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">طبيعة الميزانية:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.managementFee}</span>
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

      {/* ==========================================
          8. قسم الأسئلة الشائعة حول الإعلانات الممولة (FAQ)
          ========================================== */}
      <section className="w-full max-w-[1000px] mx-auto px-2" dir="rtl">
        <div className="text-center mb-12">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            الأسئلة الشائعة حول إدارة الإعلانات الممولة
          </h2>
          <p className="text-gray-300 text-base">
            كل ما يدور في ذهنك حول الميزانية الإعلانية، طريقة المحاسبة، ومتى تظهر النتائج:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ADS.map((faq, index) => {
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

      {/* ==========================================
          9. الخاتمة التحفيزية الكبرى (Final CTA Banner)
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-2 mb-12" dir="rtl">
        <div className="rounded-[2.5rem] border-2 border-[#00e5ff]/50 bg-gradient-to-r from-[#0b132b] via-[#070b14] to-[#0b132b] p-8 md:p-16 text-center flex flex-col items-center gap-6 shadow-[0_0_60px_rgba(0,229,255,0.25)] relative overflow-hidden">
          
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/40">
            توقف عن حرق الميزانية في ترويج المنشورات العشوائي وابدأ الإدارة الاحترافية
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لتحويل إعلاناتك إلى ماكينة أرباح{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              تضمن أعلى عائد على الاستثمار؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع خبراء إدارة الحملات في وكالة ADS عبر الواتساب، ودعنا نراجع حساباتك الإعلانية ونضع لك خطة مضاعفة المبيعات.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AD%D9%85%D9%84%D8%A7%D8%AA%D9%8A%20%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%85%D9%88%D9%84%D8%A9%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
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