"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface UGCPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface UGCFormat {
  title: string;
  duration: string;
  objective: string;
  bestPlatform: string;
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
  traditionalAds: string;
  adsAgencyUGC: string;
  businessBenefit: string;
}

interface UGCPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  creatorsCount: string;
  videosCount: string;
  features: string[];
  whatsappText: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}


const UGC_PILLARS: UGCPillar[] = [
  {
    id: "authentic-reviews",
    title: "تجارب المنتجات والتقييمات العفوية (Authentic Product Reviews)",
    subtitle: "مستخدمون حقيقيون يشاركون تجاربهم الصادقة مع منتجك بلا تكللف",
    description:
      "المستهلك اليوم يهرب من الإعلانات البراقة والمباشرة، ويثق بنسبة 92% برأي الأشخاص العاديين. نوفر لك صناع محتوى (Creators) يصورون أنفسهم وهم يجربون منتجك بصدق وعفوية، مما يكسر حاجز الشك لدى المشاهد ويدفعه للشراء الفوري.",
    deliverables: [
      "اختيار صناع محتوى متطابقين مع الفئة المستهدفة لعلامتك",
      "كتابة سكريبتات عفوية تركز على حل مشكلة العميل وتجربة الاستخدام",
      "إنتاج فيديوهات ريلز وتيك توك عالية المصداقية والعفوية",
      "تسليم ملفات الفيديوهات جاهزة للإطلاق في الحملات الإعلانية",
    ],
    kpiImpact: "مضاعفة معدل النقر (CTR) في الإعلانات وخفض تكلفة الاستحواذ بنسبة 45%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "unboxing-experience",
    title: "تجارب فتح الصناديق (Unboxing & First Impressions)",
    subtitle: "لحظات الاكتشاف الأولى التي تشعل حماس العملاء وتخلق رغبة الشراء",
    description:
      "فيديوهات فتح الصناديق هي المحتوى الأكثر مشاهدة وتبييضاً للمبيعات في المتاجر الإلكترونية. نصور لحظة استلام المنتج، فك الغلاف، وانطباعات اللحظة الأولى بأسلوب مشوق يجذب المتابع ويدفعه للطلب فوراً.",
    deliverables: [
      "تصوير تفصيلي لتجربة التغليف والعلب وقطع المنتج الداخلية",
      "إبراز جودة الخامات والتفاصيل بعيون مستخدم حقيقي",
      "مرافقة الفيديو بتعليق صوتي عفوي يصف جودة المنتج",
    ],
    kpiImpact: "رفع معدل المشتريات اللحظية من زوار المتجر الإلكتروني.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "problem-solver",
    title: "فيديوهات حل المشاكل وقبل وبعد (Problem-Solution & Before/After)",
    subtitle: "إثبات عملي ملموس لقدرة منتجك على حل مشاكل العملاء",
    description:
      "العميل لا يشتري منتجاً، بل يشتري حلاً لمشكلته. نصور سيناريوهات (قبل وبعد) تظهر المعاناة وكيف ساهم منتجك في تغيير حياتهم أو تسهيل مهامهم اليومية بطريقة منطقية ومقنعة.",
    deliverables: [
      "صياغة سيناريوهات واقعية تحاكي مشاكل الجمهور المستهدف",
      "إظهار الفارق السحري والنتيجة النهائية بعد استخدام المنتج",
      "توثيق آراء واقعية مدعومة بالأدلة والبراهين البصرية",
    ],
    kpiImpact: "بناء ثقة عمياء وموثوقية عالية حول فعالية منتجاتك.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "trending-challenges",
    title: "التريندات والتحديات التفاعلية (Trending UGC & Challenges)",
    subtitle: "ركوب موجة الانتشار السريع بصوت وصورة عملائك وصناع المحتوى",
    description:
      "نتابع أحدث الترندات الرائجة على تيك توك وإنستجرام، ونعيد تطبيقها بذكاء بما يخدم منتجك لضمان تحقيق انتشار فيروسي (Viral Reach) واكتشاف حسابك من قبل ملايين المستخدمين الجدد.",
    deliverables: [
      "رصد وتوظيف الترندات الصوتية والبصرية الرائجة فوراً",
      "إنتاج محتوى ترفيهي وتفاعلي يربط البراند بالثقافة الرقمية الحالية",
      "مضاعفة فرص الظهور في صفحة الاكسبلور (For You Page)",
    ],
    kpiImpact: "مضاعفة مرات الظهور العضوي وتوسيع قاعدة المتابعين بسرعة فائقة.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const UGC_FORMATS: UGCFormat[] = [
  {
    title: "فيديو التجربة الصادقة (Testimonial)",
    duration: "15 - 30 ثانية",
    objective: "بناء الثقة الفورية وإزالة مخاوف الشراء لدى المترددين.",
    bestPlatform: "إعلانات إنستجرام وفيسبوك",
  },
  {
    title: "فيديو فتح الصندوق (Unboxing)",
    duration: "30 - 45 ثانية",
    objective: "خلق حماس الإثارة وإبراز فخامة التغليف والمنتج.",
    bestPlatform: "تيك توك وسناب شات",
  },
  {
    title: "فيديو المشكلة والحل (Problem-Solver)",
    duration: "20 - 40 ثانية",
    objective: "مخاطبة ألم العميل وتقديم منتجك كالحل الأمثل.",
    bestPlatform: "ريلز وإعلانات اليوتيوب",
  },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "تحديد الأهداف واختيار الصناع",
    timing: "اليوم الأول",
    description: "نحدد طبيعة منتجك ونختار صناع المحتوى (Creators) الأنسب لتمثيل علامتك.",
    deliverable: "اختيار طاقم صناع المحتوى المعتمدين.",
  },
  {
    stepNumber: "02",
    title: "كتابة السكريبتات وتوجيه التصوير",
    timing: "خلال 3 أيام",
    description: "نصيغ سيناريوهات عفوية ومقنعة تضمن تركيز الكرياتور على مزايا البيع.",
    deliverable: "اعتماد السكريبتات التسويقية.",
  },
  {
    stepNumber: "03",
    title: "التصوير وإنتاج الفيديوهات العفوية",
    timing: "خلال أسبوع",
    description: "ينتج صناع المحتوى المواد المصورة بطريقة طبيعية بعيدة عن الرسمية.",
    deliverable: "استلام المواد الخام المصورة.",
  },
  {
    stepNumber: "04",
    title: "المونتاج والتسليم لإطلاق الحملات",
    timing: "خلال يومين",
    description: "نضيف الترجمة والنصوص الجذابة ونسلمك الفيديوهات جاهزة لتحقيق المبيعات.",
    deliverable: "النسخ النهائية بصيغ عالية الدقة.",
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    aspect: "مصداقية الإعلان لدى المشاهد",
    traditionalAds: "إعلان استعراضي مباشر تشعر فوراً بأنه مدفوع وموجه للبيع البحت.",
    adsAgencyUGC: "فيديو عفوي من شخص حقيقي يشبه تماماً محتوى الأصدقاء على السوشيال ميديا.",
    businessBenefit: "تقبل تام من المشاهدين وعدم تجاوز الإعلان (No Ad Fatigue).",
  },
  {
    aspect: "معدل التحويل والمبيعات (Conversion)",
    traditionalAds: "معدلات تحويل منخفضة لأن الثقة في الإعلانات التقليدية تتراجع باستمرار.",
    adsAgencyUGC: "معدلات تحويل عالية جداً مدفوعة بقوة الدليل الاجتماعي والثقة.",
    businessBenefit: "مضاعفة العائد على الإنفاق الإعلاني (ROAS) بشكل ملحوظ.",
  },
  {
    aspect: "التكلفة وسرعة الإنتاج",
    traditionalAds: "تكاليف باهظة في طاقم الإخراج والاستوديوهات والممثلين الكلاسيكيين.",
    adsAgencyUGC: "تكلفة اقتصادية معقولة وسرعة فائقة في إنتاج كميات ضخمة من المحتوى.",
    businessBenefit: "توفير الميزانية مع الحصول على نتائج بيع استثنائية.",
  },
];

const UGC_PACKAGES: UGCPackage[] = [
  {
    name: "باقة انطلاق UGC (Startup UGC Pack)",
    tagline: "حزمة فيديوهات عفوية مثالية لاختبار المتاجر والمنتجات الجديدة",
    targetAudience: "مثالية للمشاريع الناشئة والمتاجر الإلكترونية الصاعدة",
    isFeatured: false,
    creatorsCount: "2 صانع محتوى (Creator)",
    videosCount: "4 فيديوهات UGC احترافية",
    features: [
      "كتابة سكريبتات تسويقية عفوية لكل فيديو",
      "تنوع في اللهجات والأسلوب لجذب الجمهور",
      "مونتاج سريع مع ترجمة نصية بارزة",
      "صلاحية كاملة للاستخدام الإعلاني والعضوي",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة انطلاق UGC لصناعة المحتوى).",
  },
  {
    name: "باقة الهيمنة الإعلانية UGC (Growth Pro Pack)",
    tagline: "الحزمة الأكثر طلباً للمتاجر والشركات لمضاعفة المبيعات الإعلانية",
    targetAudience: "الأكثر طلباً للمتاجر، العيادات، وشركات التجارة الإلكترونية",
    isFeatured: true,
    creatorsCount: "4 صناع محتوى متنوعين",
    videosCount: "10 فيديوهات UGC شاملة (تجارب، Unboxing، وحل مشاكل)",
    features: [
      "تنوع ممتاز في الجنس، الأعمار، والأسلوب",
      "سكريبتات مدروسة تستهدف نقاط ألم العملاء بدقة",
      "مُناسبة لإعلانات تيك توك، سناب شات، وإنستجرام",
      "استشارة تسويقية لكيفية توظيف الفيديوهات في الحملات",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في حجز (باقة الهيمنة الإعلانية UGC).",
  },
  {
    name: "باقة الإمبراطورية المرئية UGC (Enterprise Elite)",
    tagline: "مكتبة ضخمة ومتجددة شهرياً من محتوى مستخدمين للبراندات الكبرى",
    targetAudience: "للشركات الكبرى والعلامات ذات الميزانيات التوسعية",
    isFeatured: false,
    creatorsCount: "8 صناع محتوى محترفين",
    videosCount: "25 فيديو UGC متنوع شهرياً",
    features: [
      "تغطية مستمرة ومكتبة متجددة من المحتوى الإعلاني",
      "إدارة كاملة لاختبارات الإعلانات (A/B Testing) بالفيديوهات",
      "فريق إنتاج وإشراف متكامل على مدار الساعة",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار عن (باقة الإمبراطورية المرئية UGC).",
  },
];

const FAQ_UGC: FAQItem[] = [
  {
    category: "طبيعة المحتوى",
    question: "ما هو الفرق بين إعلانات الفيديوهات العادية ومحتوى UGC؟",
    answer:
      "الإعلانات العادية تبدو وكأنها صُنعت في استوديو تجاري ضخم (وهو ما يجعل المشاهد يتجاوزها فوراً). أما محتوى UGC فيبدو كفيديو طبيعي صوره شخص عادي بهاتفه وهو يتحدث عن تجربته الصادقة مع المنتج، مما يزيل حاجز التشكك ويحقق ثقة ومبيعات أضعافاً مضاعفة.",
  },
  {
    category: "حقوق الاستخدام",
    question: "هل يمكننا استخدام فيديوهات UGC في إعلاناتنا الممولة وحساباتنا الرسمية؟",
    answer:
      "نعم 100%. عند تسليم الفيديوهات، تمنحك وكالة ADS حقوق الاستخدام الكاملة سواء في إعلاناتك المدفوعة على منصات (متاجر، تيك توك، سناب، ميتا) أو في نشرها بصيغة عضوية (Organic) على حساباتك دون أي قيود.",
  },
  {
    category: "شحن المنتجات",
    question: "كيف تصل المنتجات إلى صناع المحتوى (Creators) لتصويرها؟",
    answer:
      "نقوم بالتنسيق معك لشحن عينة من منتجك إلى عناوين صناع المحتوى المعتمدين لدينا، وبمجرد استلامهم للمنتج تبدأ عملية تصوير الفيديوهات فوراً حسب السيناريوهات المعتمدة.",
  },
];


export default function UGCContentCreationPage() {
  const [activeTab, setActiveTab] = useState<string>(UGC_PILLARS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePillar =
    UGC_PILLARS.find((item) => item.id === activeTab) || UGC_PILLARS[0];

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
          <source src="/ugc content creation.mp4" type="video/mp4" />
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
          <source src="/ugc content creation.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>

        <div className="absolute inset-0 bg-gradient-to-l from-[#070b14]/95 via-[#070b14]/80 to-[#0b132b]/65 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070b14_100%)] opacity-70 z-[1]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-7" dir="rtl">
          
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#070b14]/80 border border-[#00e5ff]/60 shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-[#00e5ff] text-xs md:text-sm font-black tracking-wider uppercase">
              صناعة محتوى واقع المستخدمين UGC
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            صناعة محتوى{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              UGC
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            ننتج محتوى تفاعلياً من واقع المستخدمين (UGC) لزيادة ثقة الجمهور ومضاعفة المبيعات.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">👥</span>
              <span className="text-white text-sm md:text-base font-bold">صناع محتوى حقيقيون ومحترفون</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">📈</span>
              <span className="text-white text-sm md:text-base font-bold">مضاعفة معدلات التحويل الإعلاني</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">⭐</span>
              <span className="text-white text-sm md:text-base font-bold">بناء ثقة عمياء لدى الجمهور</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B5%D9%86%D8%A7%D8%B9%20%D9%85%D8%AD%D8%AA%D9%88%D9%8A%20UGC%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>اطلب فيديوهات UGC الآن عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#ugc-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات UGC المتاحة
            </a>
          </div>

        </div>
      </section>
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "92%",
              label: "يثقون بتوصيات الأشخاص",
              desc: "المستهلكون يثقون بتجارب الأفراد العاديين أكثر من الإعلانات التجارية التقليدية بضعفاس.",
            },
            {
              number: "+4x",
              label: "معدل النقر الإعلاني (CTR)",
              desc: "فيديوهات UGC تحقق نسب تفاعل ونقر أعلى بكثير في إعلانات تيك توك وميتا وسناب شات.",
            },
            {
              number: "45%",
              label: "تخفيض في تكلفة الاستحواذ",
              desc: "زيادة المبيعات بفضل المصداقية العالية التي تقدمها وجوه المستخدمين الحقيقيين.",
            },
            {
              number: "+250",
              label: "فيديو UGC منتج بنجاح",
              desc: "للمتاجر والعلامات الكبرى في المملكة العربية السعودية ومصر والخليج.",
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
            ركائز محتوى واقع المستخدمين
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا نقدم لك في خدمة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              صناعة محتوى UGC؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            نوفر لك حزمة متكاملة من الأساليب المصممة خصيصاً لمضاعفة ثقة عملائك. انقر على كل ركيزة لاستعراض تفاصيلها:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* أزرار الركائز الأربع */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {UGC_PILLARS.map((pillar) => {
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

          {/* عرض تفاصيل الركيزة النشطة */}
          <div className="lg:col-span-7 rounded-[2rem] border border-[#00e5ff]/40 bg-[#0b132b]/85 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_45px_rgba(0,229,255,0.15)] flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-[#00e5ff] text-xs font-bold uppercase tracking-wider">
                  تفاصيل النوع والمخرجات
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
                <span>🎥</span>
                <span>المخرجات التفصيلية التي تستلمها:</span>
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
                  `مرحباً وكالة ADS، أود الاستفسار عن خدمة (${activePillar.title}) لمحتوى UGC.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                اطلب هذا النوع الآن ↗
              </a>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            تنوع الأشكال المرئية
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            أشهر أشكال فيديوهات UGC التي{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              ننتجها لعملائنا
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نصمم الفيديوهات بناءً على المنصة التسويقية وهدف الحملة الإعلانية المباشرة:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UGC_FORMATS.map((fmt, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-8 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                    ⏱ {fmt.duration}
                  </span>
                  <span className="text-xl font-black text-[#00e5ff]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white">{fmt.title}</h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white block mb-1">الهدف التسويقي:</strong>
                  {fmt.objective}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#070b14] border border-[#00e5ff]/20 text-xs text-[#00e5ff] font-semibold text-center">
                المنصة المثالية: {fmt.bestPlatform}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            منهجية الإنتاج الميداني
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            كيف نصنع لك فيديوهات UGC في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              4 خطوات سهلة؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نحن نتولى التنسيق، شحن المنتجات، كتابة السكريبتات، والمونتاج لنصل بك إلى نتائج مبهرة:
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
              الفرق بين الإعلانات الاستعراضية التقليدية ومحتوى{" "}
              <span className="text-[#00e5ff]">UGC</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا تتفوق فيديوهات واقع المستخدمين بشكل ساحر في الإعلانات الميمولة؟
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
                    الإعلانات التقليدية الاستعراضية
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    محتوى واقع المستخدمين (UGC) في ADS
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
                      {row.traditionalAds}
                    </td>
                    <td className="p-4 md:p-5 text-gray-100 font-medium bg-[#00e5ff]/5 leading-relaxed border-x border-[#00e5ff]/20">
                      ✓ {row.adsAgencyUGC}
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


      <section id="ugc-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات محتوى UGC
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة محتوى UGC{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              المناسبة لحجم مبيعاتك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            باقات إنتاجية مرنة ومصممة خصيصاً لمضاعفة نتائج حملاتك الإعلانية على تيك توك وميتا وسناب شات:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {UGC_PACKAGES.map((pkg, idx) => (
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
                  الباقة الأكثر طلباً للمتاجر الإلكترونية ⭐
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
                    <span className="text-gray-300">صناع المحتوى (Creators):</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.creatorsCount}</span>
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
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            الأسئلة الشائعة حول صناعة محتوى UGC
          </h2>
          <p className="text-gray-300 text-base">
            كل ما يدور في ذهنك حول طبيعة الفيديوهات، حقوق الملكية، وشحن المنتجات:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_UGC.map((faq, index) => {
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
            اجعل العملاء يتحدثون عن منتجك بصدق وعفوية تضاعف مبيعاتك
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لمضاعفة نتائج إعلاناتك بـ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              فيديوهات UGC فائقة المصداقية؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع فريق إنتاج محتوى واقع المستخدمين في وكالة ADS عبر الواتساب لبدء اختيار صناع المحتوى لمنتجك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B5%D9%86%D8%A7%D8%B9%20%D9%85%D8%AD%D8%AA%D9%88%D9%8A%20UGC%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-lg shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300"
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