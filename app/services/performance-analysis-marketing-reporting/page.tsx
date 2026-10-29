"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";



interface AnalysisPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface MetricCard {
  title: string;
  code: string;
  importance: string;
  targetGoal: string;
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
  randomGuessing: string;
  adsAgencyAnalytics: string;
  businessBenefit: string;
}

interface AnalyticsPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  frequency: string;
  features: string[];
  whatsappText: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}



const ANALYSIS_PILLARS: AnalysisPillar[] = [
  {
    id: "data-tracking",
    title: "تدقيق وهندسة بيانات التتبع (Tracking & Attribution Audit)",
    subtitle: "تأسيس بنية تحتية دقيقة لبياناتك تضمن عدم ضياع أي معلومة أو مبيعة",
    description:
      "الكثير من الشركات تنفق أموالاً طائلة على الإعلانات دون أن تعرف بدقة أي إعلان حقق المبيعة الفعلية بسبب ضعف التتبع. نقوم بإعادة هندسة وتدقيق كافة أدوات القياس مثل Google Analytics 4, Meta Pixel, و Conversions API لضمان وصول بيانات دقيقة 100%.",
    deliverables: [
      "فحص شامل لكافة أكواد التتبع (Pixels & Tags) والتأكد من عملها بسلاسة",
      "إعداد وتفعيل أحداث التحويل المتقدمة (Purchase, Add to Cart, Lead)",
      "ربط منصات الإعلانات بقواعد بيانات المتجر أو الموقع لمنع فقدان البيانات",
    ],
    kpiImpact: "تتبع دقيق وشامل لرحلة العميل ونسب إتمام الصفقات والمشتريات.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "financial-roas",
    title: "تحليل الربحية والعائد على الإنفاق (ROAS & Profitability Analysis)",
    subtitle: "معرفة صافي الربح الحقيقي لكل ريال أو جنيه يتم إنفاقه تسويقياً",
    description:
      "العائد الظاهري قد يخدعك! لا يكفي أن نعرف كم حققنا مبيعات إجمالية، بل يجب أن نحسب تكلفة المنتج، الشحن، المرتجعات، والإنفاق الإعلاني لنخرج بصافي الربح الحقيقي لكل حملة (Blended ROAS & MER).",
    deliverables: [
      "حساب دقيق لتكلفة الاستحواذ على العميل (CPA) وصافي الربح (Profit Margin)",
      "تحديد الحملات الرابحة وتصفية الحملات الخاسرة التي تستنزف الميزانية",
      "بناء نموذج مالي متكامل لتوقع أرباح الشهور القادمة بناءً على الأرقام",
    ],
    kpiImpact: "رفع صافي أرباح الشركة وحماية الميزانية من الحملات غير المجدية.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "dashboards-bi",
    title: "لوحات المؤشرات الحية وتقارير الباور بي آي (Live BI Dashboards)",
    subtitle: "راقب أداء شركتك ومبيعاتك لحظة بلحظة عبر لوحة تحكم تفاعلية واحدة",
    description:
      "نودع التقارير الورقية والمعقدة! نصمم لك لوحات تحكم حية (Interactive Dashboards) تربط مبيعات متجرك، إعلاناتك، وموقعك في شاشة واحدة مبسطة تحدث بياناتها لحظياً لتمكن الإدارة العليا من اتخاذ القرار في ثوانٍ.",
    deliverables: [
      "ربط مصادر البيانات المختلفة في لوحة تحكم مركزية واحدة",
      "عرض مؤشرات الأداء الرئيسية (KPIs) في رسوم بيانية واضحة وسهلة",
      "إتاحة المتابعة الحية من جوالك أو حاسوبك في أي وقت ومن أي مكان",
    ],
    kpiImpact: "سرعة اتخاذ القرارات الإدارية بناءً على أرقام حية ودقيقة.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: "growth-recommendations",
    title: "التقارير الاستراتيجية وتوصيات النمو (Executive Growth Reports)",
    subtitle: "تحليلات عميقة وتوصيات عملية لتطوير الأداء وزيادة المبيعات شهرياً",
    description:
      "التقرير ليس مجرد أرقام وجداول صماء، بل هو خارطة طريق واضحة. نلخص لك أهم الاستنتاجات ونقدم لك توصيات دقيقة وقابلة للتنفيذ شهرياً لتطوير أداء حملاتك وموقعك.",
    deliverables: [
      "إعداد تقرير تنفيذي شهري مصمم بالإنفوجرافيك للإدارة العليا",
      "تحديد الفرص الضائعة ونقاط الضعف التي تحتاج إلى معالجة فورية",
      "جلسة استشارية شهرية لمناقشة النتائج ووضع خطة الشهر القادم",
    ],
    kpiImpact: "تطوير مستمر للأداء ونمو تصاعدي في الأرباح والمبيعات.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const METRIC_CARDS: MetricCard[] = [
  {
    title: "العائد على الإنفاق الإعلاني",
    code: "ROAS (Return on Ad Spend)",
    importance: "يقيس كم ريال ربحته مقابل كل ريال أنفقته على الإعلانات.",
    targetGoal: "أعلى من 4x في المتاجر الإلكترونية",
  },
  {
    title: "تكلفة الاستحواذ على العميل",
    code: "CPA (Cost Per Acquisition)",
    importance: "يقيس متوسط تكلفتك للحصول على مشتري أو عميل جديد فعلي.",
    targetGoal: "أقل من هامش ربح المنتج بمسافة آمنة",
  },
  {
    title: "معدل التحويل في المتجر",
    code: "Conversion Rate",
    importance: "نسبة الزوار الذين أتموا عملية الشراء فعلياً من إجمالي الزوار.",
    targetGoal: "بين 2% إلى 4% كحد قياسي ممتاز",
  },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "فحص وربط أدوات القياس",
    timing: "اليوم الأول",
    description: "نراجع إعدادات البكسل وأكواد التتبع ونربط جميع المنصات بنظام مركزي موحد.",
    deliverable: "بيانات دقيقة وسليمة 100%.",
  },
  {
    stepNumber: "02",
    title: "بناء لوحات التحكم الحية",
    timing: "خلال 3 أيام",
    description: "نصمم لوحات المتابعة الحية (Dashboards) الخاصة بشركتك ومبيعاتك.",
    deliverable: "لوحة تحكم تفاعلية تعمل لحظياً.",
  },
  {
    stepNumber: "03",
    title: "التحليل العميق واكتشاف الفرص",
    timing: "مستمر",
    description: "نحلل أرقام الإنفاق والمبيعات لنكتشف أين يضيع المال وأين تكمن أرباحك.",
    deliverable: "تحديد فرص مضاعفة العائد.",
  },
  {
    stepNumber: "04",
    title: "إعداد التقرير التنفيذي والتوصيات",
    timing: "نهاية كل شهر",
    description: "نلخص النتائج في تقرير فخم ونناقشه معك في جلسة استشارية تطويرية.",
    deliverable: "التقرير الشهري الشامل وخارطة طريق النمو.",
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    aspect: "الاعتماد على اتخاذ القرارات",
    randomGuessing: "اتخاذ القرارات بناءً على الحدس والتخمين الشخصي دون الاستناد لأرقام حقيقية.",
    adsAgencyAnalytics: "اتخاذ القرارات بناءً على تحليل دقيق للبيانات والأرقام ومؤشرات الأداء (KPIs).",
    businessBenefit: "تجنب القرارات الخاطئة وحماية استثمارات الشركة من الهدر.",
  },
  {
    aspect: "رؤية أداء الحملات التسويقية",
    randomGuessing: "النظر فقط للإعجابات والمشاهدات السطحية التي لا تعكس الأرباح.",
    adsAgencyAnalytics: "تتبع دقيق لصافي الربح، العائد ROAS، وتكلفة الاستحواذ CPA.",
    businessBenefit: "وضوح تام في رؤية أين تذهب أرباحك وكيف تتضاعف.",
  },
  {
    aspect: "تطوير وتحسين الأداء المستمر",
    randomGuessing: "الاستمرار في نفس الأخطاء التسويقية شهراً بعد شهر لعدم وجود تقارير تحلل السبب.",
    adsAgencyAnalytics: "رصد الخلل في بدايته ومعالجته فوراً بناءً على تقارير الأداء اليومية والأسبوعية.",
    businessBenefit: "نمو تصاعدي مستقر ومستدام في المبيعات.",
  },
];

const ANALYTICS_PACKAGES: AnalyticsPackage[] = [
  {
    name: "باقة تدقيق وتحليل الأداء التأسيسي (Audit & Setup)",
    tagline: "تدقيق شامل لبيانات التتبع وإعداد لوحة التحكم الأولى لمشروعك",
    targetAudience: "مثالية للمشاريع الناشئة والمتاجر في بداية انطلاقتها",
    isFeatured: false,
    frequency: "تدقيق لمرة واحدة + تقرير شهري",
    features: [
      "فحص وإصلاح أخطاء البكسل وأكواد التتبع",
      "إعداد لوحة تحكم أساسية لمتابعة المبيعات والإعلانات",
      "تقرير تحليل أداء أولي مع أبرز نقاط التحسين",
      "توصيات سريعة لخفض تكلفة الإعلانات",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة تحليل الأداء التأسيسي).",
  },
  {
    name: "باقة التقارير الشاملة وتحسين العائد (Growth Analytics Pro)",
    tagline: "الحزمة الأكثر طلباً للشركات والمتاجر لمتابعة الأرباح ورفع الـ ROAS",
    targetAudience: "الأكثر طلباً للمتاجر الإلكترونية والشركات القائمة",
    isFeatured: true,
    frequency: "متابعة أسبوعية + تقرير تنفيذي شهري مفصل",
    features: [
      "هندسة وتتبع كامل لرحلة العميل والتحويلات المتقدمة",
      "بناء لوحات مؤشرات حية (Dashboards) متكاملة ومحدثة لحظياً",
      "تحليل عميق للربحية، تكلفة الاستحواذ، والحملات الرابحة",
      "جلسة استشارية شهرية خاصة لمناقشة الأرقام وتطوير خطة النمو",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة التقارير الشاملة وتحسين العائد).",
  },
  {
    name: "باقة القيادة المالية والتحليل المؤسسي (Enterprise BI)",
    tagline: "حلول تحليل بيانات متقدمة ولوحات تحكم مخصصة للمؤسسات الكبرى",
    targetAudience: "للشركات الكبرى، المصانع، والمتاجر ذات التوسع الإقليمي",
    isFeatured: false,
    frequency: "متابعة يومية وتقارير مالية تنفيذية",
    features: [
      "ربط أنظمة الـ ERP والـ CRM مع لوحات الأداء التسويقي",
      "فريق تحليل بيانات مخصص لمتابعة ربحية الشركة بدقة",
      "توقعات مالية ونماذج تنبؤية للنمو المستقبلي",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار عن (باقة القيادة المالية والتحليل المؤسسي).",
  },
];

const FAQ_ANALYTICS: FAQItem[] = [
  {
    category: "أهمية التحليل",
    question: "لماذا يعد تحليل الأداء وإعداد التقارير أمراً حاسماً لنجاح الإعلانات؟",
    answer:
      "بدون تحليل الأداء، أنت تدير إعلاناتك وأموالك وأنت مغمض العينين. التحليل يخبرك بدقة أي إعلان حقق مبيعات فعلية وأي إعلان يستنزف أموالك بلا جدوى، مما يتيح لك توجيه الميزانية نحو الرابح دائماً ومضاعفة أرباحك.",
  },
  {
    category: "الأدوات المستخدمة",
    question: "ما هي الأدوات والمنصات التي تعتمدون عليها في تحليل الأداء؟",
    answer:
      "نعتمد على أقوى أدوات التحليل العالمية مثل Google Analytics 4 (GA4), Looker Studio (Power BI), Google Tag Manager, بالإضافة إلى لوحات التحكم المباشرة لمديري الإعلانات (Meta, TikTok, Google Ads).",
  },
  {
    category: "التقارير المقدمة",
    question: "هل التقارير معقدة أم سهلة الفهم للإدارة العليا؟",
    answer:
      "نحرص تماماً على أن تكون تقاريرنا واضحة ومباشرة؛ نترجم الأرقام المعقدة إلى رسوم بيانية ومؤشرات أداء رئيسية (KPIs) يفهمها أي مسؤول تنفيذي في دقائق معدودة، مع إرفاق توصيات عملية واضحة للخطوة القادمة.",
  },
];



export default function PerformanceAnalysisPage() {
  const [activeTab, setActiveTab] = useState<string>(ANALYSIS_PILLARS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePillar =
    ANALYSIS_PILLARS.find((item) => item.id === activeTab) || ANALYSIS_PILLARS[0];

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
          <source src="/performance analysis.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-[#070b14]/90 backdrop-blur-[2px]" />
      </div>

      <section className="w-full max-w-[1400px] mx-auto min-h-[650px] md:min-h-[760px] rounded-[2.5rem] border-2 border-[#00e5ff]/50 shadow-[0_0_70px_rgba(0,229,255,0.25)] relative overflow-hidden flex items-center justify-center p-6 md:p-16 lg:p-20 mt-4">
        
        {/* فيديو الهيرو يغطي عرض وارتفاع السكشن بالكامل 100% */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        >
          <source src="/performance analysis.mp4" type="video/mp4" />
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
              تحليل الأداء وإعداد التقارير التسويقية المتقدمة
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            تحليل الأداء وإعداد{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              التقارير التسويقية
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            نحلل أرقامك ونقدم لك تقارير دقيقة وشفافة لتطوير الأداء المستمر واتخاذ القرارات الصحيحة.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">📊</span>
              <span className="text-white text-sm md:text-base font-bold">لوحات متابعة حية ومحدثة</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">💰</span>
              <span className="text-white text-sm md:text-base font-bold">حساب دقيق لصافي الربح والـ ROAS</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">💡</span>
              <span className="text-white text-sm md:text-base font-bold">توصيات استراتيجية لنمو المبيعات</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%AA%D8%AD%D9%84%D9%8A%D9%8„%20%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>اطلب تحليل أداء شركتك الآن عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#analytics-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات التحليل والتقارير
            </a>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "100%",
              label: "دقة مطابقة بيانات البيع",
              desc: "القضاء على تضارب الأرقام بين المنصات الإعلانية وموقعك الإلكتروني.",
            },
            {
              number: "-35%",
              label: "تخفيض هدر الميزانية التسويقية",
              desc: "تحديد الحملات التي تخسر المال وإيقافها فوراً بناءً على الأرقام الحقيقية.",
            },
            {
              number: "لحظياً",
              label: "تحديث لوحات المؤشرات الحية",
              desc: "متابعة المبيعات والأرباح أينما كنت وفي أي وقت عبر لوحة تحكم واحدة.",
            },
            {
              number: "+15 عاماً",
              label: "خبرة في قراءة وتفسير البيانات",
              desc: "تحويل الأرقام الصماء إلى توصيات استراتيجية واضحة تزيد الأرباح.",
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
            ركائز هندسة البيانات
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا نغطي في خدمة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              تحليل الأداء والتقارير؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            منظومة متكاملة لتدقيق التتبع، قياس الربحية، وبناء لوحات التحكم الحية. انقر لاستعراض التفاصيل:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* أزرار المحاور الأربعة */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {ANALYSIS_PILLARS.map((pillar) => {
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
                <span>📊</span>
                <span>المخرجات والمهام المعتمدة في هذا القسم:</span>
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
                <span>📈 الأثر المالي:</span>
                <span className="text-white">{activePillar.kpiImpact}</span>
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود الاستفسار عن خدمة (${activePillar.title}) لتحليل الأداء.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                اطلب خدمة التحليل الآن ↗
              </a>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            البوصلة المالية للبيزنس
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            أهم مؤشرات الأداء (KPIs) التي{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              نحللها ونراقبها لشركتك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نتابع الأرقام التي تقود أرباحك وتكشف لك الصحة المالية لعملياتك التسويقية:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {METRIC_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-8 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30 w-fit font-mono">
                  {card.code}
                </span>

                <h3 className="text-xl font-black text-white">{card.title}</h3>
                
                <p className="text-gray-300 text-sm leading-relaxed border-b border-white/10 pb-4">
                  <strong className="text-white block mb-1">الأهمية الاستراتيجية:</strong>
                  {card.importance}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#070b14] border border-[#00e5ff]/25 text-xs text-[#00e5ff] font-bold text-center">
                المستهدف القياسي: {card.targetGoal}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            منهجية العمل والتدقيق
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            كيف نبدأ تحليل أداء شركتك في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              4 خطوات دقيقة
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نظام عمل احترافي يربط بياناتك ويخرج لك بتوصيات واضحة ومباشرة:
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


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-6 md:p-12 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              الفرق بين اتخاذ القرارات بالتخمين وتحليل البيانات في{" "}
              <span className="text-[#00e5ff]">وكالة ADS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا تعتمد الشركات الناجحة على تحليل البيانات الدقيق للنمو المستدام؟
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
                    اتخاذ القرارات بالتخمين والحدس الشخصي
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    تحليل الأداء الاحترافي في وكالة ADS
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
                      {row.randomGuessing}
                    </td>
                    <td className="p-4 md:p-5 text-gray-100 font-medium bg-[#00e5ff]/5 leading-relaxed border-x border-[#00e5ff]/20">
                      ✓ {row.adsAgencyAnalytics}
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


      <section id="analytics-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات هندسة البيانات
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة تحليل الأداء والتقارير{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              المناسبة لشركتك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            باقات تحليلية دقيقة تمنحك رؤية كاملة وشفافة لأرقامك ومبيعاتك لتعظيم العائد والربحية:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {ANALYTICS_PACKAGES.map((pkg, idx) => (
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
                    <span className="text-gray-300">دورية المتابعة والتقارير:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.frequency}</span>
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
            الأسئلة الشائعة حول تحليل الأداء وإعداد التقارير
          </h2>
          <p className="text-gray-300 text-base">
            كل ما يدور في ذهنك حول أدوات القياس، أهمية التحليل، وطبيعة التقارير المقدمة:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ANALYTICS.map((faq, index) => {
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
            توقف عن إدارة إعلاناتك بالتخمين وابدأ بناء قراراتك على بيانات حقيقية
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لربط بياناتك ومعرفة صافي أرباحك وعائدك الإعلاني{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              بدقة تسجله لحظياً؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع محللي البيانات في وكالة ADS عبر الواتساب لاكتشاف الثغرات في تتبع مبيعاتك وبدء تحسين الأداء.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%AA%D8%AD%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
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