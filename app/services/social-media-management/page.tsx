"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface ContentPillarType {
  title: string;
  percentage: string;
  goal: string;
  formats: string[];
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
  freelancerOrRandom: string;
  adsAgencyPro: string;
  businessBenefit: string;
}

interface SocialPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  postsCount: string;
  reelsCount: string;
  platformsCount: string;
  features: string[];
  whatsappText: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}


const SOCIAL_PILLARS: SocialPillar[] = [
  {
    id: "content-creation",
    title: "صناعة المحتوى الإبداعي وكتابة السكريبتات (Creative Content & Copywriting)",
    subtitle: "كلمات تلامس القلوب، وفيديوهات توقف إبهام المتصفح فوراً",
    description:
      "المحتوى الجيد هو وقود السوشيال ميديا. نقوم بتأليف وكتابة محتوى تفاعلي وتثقيفي وترويجي مصمم خصيصاً ليناسب خوارزميات منصات (إنستجرام، تيك توك، سناب شات، إكس، وفيسبوك). نصيغ الخطافات الإعلانية (Hooks) في أول 3 ثوانٍ لكل فيديو لضمان أعلى معدل مشاهدة واحتفاظ بالجمهور.",
    deliverables: [
      "ابتكار خطافات (Hooks) إعلانية جذابة لكل فيديو وسكريبت",
      "كتابة نصوص المنشورات والكروسيل (Copywriting) مع الهاشتاقات المستهدفة",
      "تصميم قوالب بصرية متسقة تماماً مع الهوية البصرية للبراند",
      "جدولة ونشر المحتوى في الأوقات الذهبية لذروة تفاعل جمهورك",
      "إعداد تقويم المحتوى الشهري (Content Calendar) للموافقة المسبقة",
    ],
    kpiImpact: "رفع معدل التفاعل والوصول العضوي (Organic Reach) بنسبة تصل إلى 280%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    id: "reels-video-production",
    title: "إنتاج الريلز، التيك توك، والموشن جرافيك (Reels & Short-Form Videos)",
    subtitle: "الفيديوهات القصيرة هي الملك بلا منازع في جذب الانتباه والمبيعات",
    description:
      "لم يعد الظهور التقليدي كافياً. يدير فريقنا الإنتاج المرئي بالكامل؛ نصور المادة، ننتج الريلز باحترافية سينمائية، نُدخل التعليق الصوتي السعودي المعتمد (Voiceover)، ونضيف الترجمة الحية الديناميكية (Dynamic Subtitles) التي تبقي المشاهد مسماراً أمام الشاشة حتى الثانية الأخيرة.",
    deliverables: [
      "مونتاج واحترافية عالية لفيديوهات الريلز والتيك توك واليوتيوب شورتس",
      "إضافة المؤثرات البصرية والصوتية العصرية الرائجة (Trending Audio)",
      "تسجيل فويس أوفر احترافي بأصوات سعودية وعربية معتمدة",
      "تصميم فيديوهات موشن قصير مبهرة لشرح الخدمات والمنتجات",
      "إنتاج محتوى تفاعلي من واقع المستخدمين (UGC Concepts)",
    ],
    kpiImpact: "مضاعفة مرات الظهور والانتشار السريع واكتساب آلاف المتابعين الجدد.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "community-management",
    title: "إدارة المجتمع والرد الذكي على العملاء (Community Management)",
    subtitle: "حول المتابعين إلى مشجعين أوفياء لعلامتك التجارية",
    description:
      "التفاعل لا ينتهي بمجرد نشر المنشور! فريقنا متواجد للرد على التعليقات والرسائل الخاصة (DM) بروح احترافية وودودة تعكس قيم شركتك، مع الإجابة على استفسارات المنتجات، تحويل العملاء المهتمين إلى مبيعات فورية، وحماية صفحتك من التعليقات المزعجة والسبام.",
    deliverables: [
      "الرد الفوري والذكي على كافة الرسائل الخاصة (Direct Messages)",
      "التفاعل النشط والابداعي مع تعليقات المتابعين لبناء مجتمع دافئ",
      "إدارة الأزمات والتعامل مع استفسارات العملاء بدبلوماسية واحترافية",
      "توجيه العملاء المهتمين نحو روابط الشراء أو الواتساب لإغلاق الصفقات",
      "إعداد تقرير أسبوعي بنبرة الجمهور والأسئلة الأكثر تكراراً (FAQs)",
    ],
    kpiImpact: "رفع معدل رضا العملاء وبناء ولاء حقيقي يرفع نسبة الشراء المتكرر.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: "paid-ads-integration",
    title: "ربط السوشيال ميديا بالحملات الإعلانية المدفوعة (Social Ads Boost)",
    subtitle: "مضاعفة أثر المحتوى العضوي عبر الترويج الاستراتيجي للبوستات الرابحة",
    description:
      "لا نترك المحتوى الناجح للصدفة. عندما يحقق أي منشور أو ريل تفاعلاً عضوياً عالياً، نقوم فوراً بتحويله إلى إعلان ممول مدروس بـ Boost يستهدف شرائح جديدة بدقة، مما يقلل تكلفة النقرة ويضاعف المبيعات والعملاء المحتملين.",
    deliverables: [
      "تحديد المنشورات الحائزة على أعلى تفاعل عضوي لترويجها",
      "إدارة إعلانات الانستجرام وتيك توك وسناب شات من منصة الإعلانات الرسمية",
      "ضبط استهداف الجمهور المشابه والمخصص (Custom & Lookalike Audiences)",
      "متابعة أداء الحملات وتحسينها يومياً لضمان أعلى عائد (ROAS)",
    ],
    kpiImpact: "خفض تكلفة الاستحواذ الإعلاني بنسبة تصل إلى 40%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "analytics-reporting",
    title: "التحليل العميق والتقارير الشهرية الشفافة (Analytics & Growth Reports)",
    subtitle: "أرقام حقيقية وشفافة توضح بدقة كيف ينمو مشروعك شهراً بعد شهر",
    description:
      "نؤمن بأن ما لا يمكن قياسه لا يمكن تطويره. نقدم لك مع نهاية كل شهر تقريراً استراتيجياً مفصلاً يشرح بالأرقام نسبة النمو في المتابعين، التفاعل، مرات الظهور، النقرات، والعملاء الذين تم تحويلهم، مع توصيات واضحة للشهر القادم.",
    deliverables: [
      "تقرير شهري شامل ومصمم بالإنفوجرافيك السهل القراءة",
      "تحليل أداء المحتوى (أي الفيديوهات حققت أعلى وصول ومبيعات؟)",
      "دراسة أوقات نشاط جمهورك بدقة لتعديل مواعيد النشر",
      "جلسة استشارية شهرية لمناقشة النتائج وتطوير الخطة المستقبلية",
    ],
    kpiImpact: "رؤية إدارية واضحة ومتابعة دقيقة لعائد الاستثمار التسويقي.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const CONTENT_PILLARS_MIX: ContentPillarType[] = [
  {
    title: "محتوى بناء الوعي والسلطة (Authority & Educational)",
    percentage: "40%",
    goal: "جذب متابعين جدد، ترسيخ خبرة علامتك التجارية، وتقديم حلول لمشاكل جمهورك.",
    formats: ["فيديوهات ريلز تعليمية", "إنفوجرافيك معلوماتي", "دروث ونصائح سريعة"],
  },
  {
    title: "محتوى التفاعل وبناء المجتمع (Engagement & Community)",
    percentage: "30%",
    goal: "خلق حوار حقيقي مع المتابعين، زيادة الولاء، ورفع خوارزميات التفاعل.",
    formats: ["قصص يومية تفاعلية (Stories)", "مسابقات واستطلاعات رأي", "كواليس العمل وفريق العمل"],
  },
  {
    title: "محتوى التحويل والمبيعات المباشرة (Conversion & Sales)",
    percentage: "30%",
    goal: "دفع المتابعين المهتمين لاتخاذ قرار الشراء، حجز الخدمة، أو التواصل عبر واتساب.",
    formats: ["عروض حصرية محدودة", "آراء وقصص نجاح العملاء (UGC)", "شرح تفصيلي للمنتج ومميزاته"],
  },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "جلسة العصف الذهني ودراسة الهوية",
    timing: "اليوم الأول",
    description: "نجلس معك لنفهم أهدافك الشهرية، نبرة صوت علامتك التجارية، وعروضك الأهم.",
    deliverable: "اعتماد نبرة الخطاب والهوية البصرية للسوشيال ميديا.",
  },
  {
    stepNumber: "02",
    title: "إعداد وتجهيز تقويم المحتوى الشهري",
    timing: "أسبوعياً / شهرياً",
    description: "نبتكر الأفكار، نكتب السكريبتات، ونصمم المنشورات والريلز لمراجعتها واعتمادها مسبقاً.",
    deliverable: "جدول محتوى تفاعلي جاهز للاطلاع والموافقة.",
  },
  {
    stepNumber: "03",
    title: "الإنتاج، المونتاج، والنشر الاحترافي",
    timing: "يومياً",
    description: "ننتج الفيديوهات بأعلى جودة، نصمم البوستات، وننشرها في مواعيد الذروة المحددة.",
    deliverable: "نشر منتظم ومستمر بدون أي انقطاع.",
  },
  {
    stepNumber: "04",
    title: "إدارة التفاعل وتقديم التقارير الختامية",
    timing: "مستمر وشهري",
    description: "نرد على عملائك، نتفاعل معهم، ونرسل لك تقريراً شاملاً بنمو الأرقام والأرباح.",
    deliverable: "تقرير أداء شهري موثق بالأرقام وتوصيات النمو.",
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    aspect: "طريقة التفكير وصياغة المحتوى",
    freelancerOrRandom: "نشر عشوائي لصور أو تصاميم ثابتة بدون خطة أو هدف تسويقي واضح.",
    adsAgencyPro: "استراتيجية محتوى علمية مبنية على قمع المبيعات وسيكولوجية المستهلك.",
    businessBenefit: "تحويل الحسابات من مجرد صفحة نشر إلى ماكينة جذب عملاء مستمرة.",
  },
  {
    aspect: "جودة الفيديوهات والريلز",
    freelancerOrRandom: "تصوير هاتف عادي بدون مونتاج احترافي أو خطافات تجذب الانتباه في أول ثوانٍ.",
    adsAgencyPro: "مونتاج سينمائي، فويس أوفر سعودي احترافي، وترجمة ديناميكية عصرية.",
    businessBenefit: "مضاعفة المشاهدات والانتشار الفيروسي على تيك توك وإنستجرام.",
  },
  {
    aspect: "الاستمرارية والالتزام بالمواعيد",
    freelancerOrRandom: "انقطاع متكرر في النشر وتأخير في الرد على العملاء بسبب ضغط العمل الفردي.",
    adsAgencyPro: "فريق متكامل (كاتب، مصمم، مونتير، ومدير حساب) يعمل لخدمتك 24/7.",
    businessBenefit: "الحفاظ على ثبات الخوارزميات وثقة العملاء الفورية في شركتك.",
  },
];

const SOCIAL_PACKAGES: SocialPackage[] = [
  {
    name: "باقة الانطلاق الرقمي (Starter Social)",
    tagline: "حضور احترافي متسق للمشاريع الناشئة والمتاجر الجديدة",
    targetAudience: "مثالية للمشاريع في مرحلة التأسيس وبناء الوعي",
    isFeatured: false,
    postsCount: "12 تصميم ثابت",
    reelsCount: "3 ريلز مونتاج احترافي",
    platformsCount: "إدارة منصتين (إنستجرام + تيك توك أو فيسبوك)",
    features: [
      "كتابة النصوص الإبداعية والهاشتاقات المستهدفة",
      "إدارة الردود والرسائل الخاصة خلال أوقات العمل",
      "تصميم قصص تفاعلية (Stories) أسبوعياً",
      "تقرير أداء شهري مبسط ومباشر",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاشتراك في (باقة الانطلاق الرقمي للسوشيال ميديا).",
  },
  {
    name: "باقة الهيمنة والنمو (Growth Pro Social)",
    tagline: "الإدارة الشاملة والأكثر طلباً للشركات والمتاجر الطموحة",
    targetAudience: "الأكثر طلباً للشركات، العيادات، والمطاعم",
    isFeatured: true,
    postsCount: "20 تصميم ثابت واحترافي",
    reelsCount: "6 ريلز مونتاج + فويس أوفر",
    platformsCount: "إدارة 3 منصات رئيسية",
    features: [
      "إدارة المجتمع والرد السريع على الرسائل والتعليقات",
      "تصميم وإنتاج قصص تفاعلية يومية (Stories)",
      "تخطيط حملات الترويج للبوستات الناجحة (Boost)",
      "تقرير شهري استراتيجي متكامل ومناقشته عبر اجتماع خاص",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاشتراك في (باقة الهيمنة والنمو للسوشيال ميديا).",
  },
  {
    name: "باقة الصدارة والإمبراطورية (Enterprise Elite)",
    tagline: "إدارة مكثفة بمستوى وكالات الإنتاج الكبرى للعلامات الرائدة",
    targetAudience: "للشركات الكبرى والعلامات ذات الفروع المتعددة",
    isFeatured: false,
    postsCount: "30 تصميم ثابت (نشر يومي)",
    reelsCount: "12 ريلز مونتاج سينمائي (3 أسبوعياً)",
    platformsCount: "إدارة كافة المنصات (4 منصات)",
    features: [
      "إشراف فريق كامل متخصص (كاتب، مصمم، مونتير، مدير حساب)",
      "جلسة تصوير ميدانية شهرية (حسب الموقع أو التنسيق)",
      "إدارة الحملات الإعلانية الممولة المرتبطة بالمحتوى",
      "دعم فني استشاري ومتابعة فورية على مدار الساعة",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاشتراك في (باقة الصدارة والإمبراطورية للسوشيال ميديا).",
  },
];

const FAQ_SOCIAL: FAQItem[] = [
  {
    category: "آلية العمل والموافقة",
    question: "كيف تتم الموافقة على التصميمات والفيديوهات قبل نشرها؟",
    answer:
      "نحن نعتمد نظام تقويم المحتوى الشهري أو الأسبوعي (Content Calendar). قبل بداية كل شهر أو أسبوع، نرسل لك كافة التصميمات، السكريبتات، والفيديوهات للاطلاع عليها وإبداء ملاحظاتك. لا ننشر أي شيء نهائياً إلا بعد اعتمادك الصريح والمطلق.",
  },
  {
    category: "التصوير والمادة المرئية",
    question: "هل نحتاج إلى إرسال صور وفيديوهات منتجاتنا لكم بأنفسنا؟",
    answer:
      "يمكنك تزويدنا بصور وفيديوهات منتجاتك الخام (Raw Footage) وسنقوم بتحويلها إلى مونتاج وتصميمات مبهرة. كما نقدم ضمن باقاتنا المتقدمة توجيهات دقيقة لكيفية تصوير المنتجات بالهاتف لتبدو باحترافية عالية، أو ترتيب جلسات تصوير ميدانية حسب الاتفاق.",
  },
  {
    category: "الرد على العملاء",
    question: "من يتولى الرد على الرسائل والتعليقات الخاصة بالعملاء؟",
    answer:
      "فريق إدارة المجتمع (Community Managers) لدينا يتولى الرد على كافة التعليقات والرسائل الخاصة بناءً على دليل خدمة عملاء نقوم ببنائه خصيصاً لشركتك يتضمن الأسئلة الشائعة، الأسعار، وأوقات العمل، مع تحويل العملاء الجادين مباشرة إلى رقم الواتساب الخاص بالمبيعات لديك.",
  },
  {
    category: "النتائج والعائد",
    question: "متى تبدأ النتائج الحقيقية بالظهور على حسابات السوشيال ميديا؟",
    answer:
      "تبدأ اللمسة الاحترافية والاتساق البصري بالظهور خلال أول أسبوعين من تنظيم النشر. أما النمو الحقيقي في التفاعل العضوي وانتشار الريلز وبناء قاعدة عملاء حقيقية فيظهر بوضوح خلال الشهر الثاني والثالث مع استمرارية النشر الذكي وتحليل خوارزميات المنصات.",
  },
];


export default function SocialMediaManagementPage() {
  const [activeTab, setActiveTab] = useState<string>(SOCIAL_PILLARS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePillar =
    SOCIAL_PILLARS.find((item) => item.id === activeTab) || SOCIAL_PILLARS[0];

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
          <source src="/social media management.mp4" type="video/mp4" />
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
          <source src="/social media management.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>


        <div className="absolute inset-0 bg-gradient-to-l from-[#070b14]/95 via-[#070b14]/80 to-[#0b132b]/65 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070b14_100%)] opacity-70 z-[1]" />


        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-7" dir="rtl">
          
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#070b14]/80 border border-[#00e5ff]/60 shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-[#00e5ff] text-xs md:text-sm font-black tracking-wider uppercase">
              إدارة منصات التواصل الاجتماعي باحترافية مطلقة
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            إدارة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              السوشيال ميديا
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            نرتقي بحضورك الرقمي عبر إدارة احترافية لمنصات التواصل الاجتماعي وبناء تفاعل حقيقي مع عملائك.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">✨</span>
              <span className="text-white text-sm md:text-base font-bold">محتوى إبداعي فريد ومبتكر</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🎬</span>
              <span className="text-white text-sm md:text-base font-bold">إنتاج ريلز وفيديوهات سينمائية</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🤝</span>
              <span className="text-white text-sm md:text-base font-bold">إدارة تفاعل ومجتمع نشط</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D9%88%D8%B4%D9%8A%D8%A7%D9%84%20%D9%85%D9%8A%D8%AF%D9%8A%D8%A7%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>ابدأ إدارة حساباتك الآن عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#social-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات السوشيال ميديا
            </a>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "+3.8 مليون",
              label: "إجمالي المشاهدات المحققة",
              desc: "إجمالي مرات الظهور والمشاهدات التي حصدناها لعملائنا عبر منصات السوشيال ميديا المختلفة.",
            },
            {
              number: "+300%",
              label: "نمو في معدل التفاعل العضوي",
              desc: "تحويل الحسابات الصامتة إلى مجتمعات تفاعلية تنبض بالحياة والتعليقات الإيجابية.",
            },
            {
              number: "5 ثوانٍ",
              label: "سرعة جذب انتباه المشاهد",
              desc: "هندسة خطافات بصرية وصوتية توقف المستخدم وتدفعه لمشاهدة الفيديو للنهاية.",
            },
            {
              number: "100%",
              label: "التزام ونشر منتظم وثابت",
              desc: "جدولة ونشر في مواعيد الذروة بدقة م, لضمان ثبات الخوارزميات واستمرار النمو.",
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
            منظومة العمل المتكاملة
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا نقدم لك في خدمة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              إدارة السوشيال ميديا؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            نحن لا نقتصر على النشر العشوائي، بل ندير حضورك الرقمي بمنظومة متكاملة تشمل كتابة المحتوى، المونتاج السينمائي، الرد على العملاء، والتحليل. انقر على كل قسم لاستعراض تفاصيله:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          

          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {SOCIAL_PILLARS.map((pillar) => {
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
                  تفاصيل الركيزة والمخرجات
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
                <span>📦</span>
                <span>ما تحصل عليه في هذا القسم بالتفصيل:</span>
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
                <span>📈 الأثر المباشر:</span>
                <span className="text-white">{activePillar.kpiImpact}</span>
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود الاستفسار عن تفاصيل خدمة (${activePillar.title}) ضمن إدارة السوشيال ميديا.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                اطلب الخدمة الآن ↗
              </a>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/65 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.12)] relative overflow-hidden">
          
          {/* استخدام الفيديو الثاني (social media.mp4) كخلفية جمالية دمشقية داخل القسم */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/social media.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
                المعادلة الذهبية للمحتوى
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                كيف نقسم محتوى حساباتك لضمان{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
                  أعلى تفاعل ومبيعات؟
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                لا نعتمد على نوع واحد من المنشورات، بل نطبق قاعدة المزيج التسويقي المتوازن (40% - 30% - 30%):
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CONTENT_PILLARS_MIX.map((mix, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/90 p-8 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                        النسبة المستهدفة
                      </span>
                      <span className="text-3xl font-black text-[#00e5ff] font-mono">
                        {mix.percentage}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white">{mix.title}</h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed border-b border-white/10 pb-4">
                      <strong className="text-white block mb-1">الهدف التسويقي:</strong>
                      {mix.goal}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-bold block mb-2">أبرز الأشكال المستخدمة:</span>
                    <div className="flex flex-wrap gap-2">
                      {mix.formats.map((fmt, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-xs bg-[#0b132b] text-gray-200 px-3 py-1.5 rounded-xl border border-white/10"
                        >
                          • {fmt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            رحلة العمل معنا
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            كيف نبدأ إدارة حساباتك في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              4 خطوات سهلة ومدروسة؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نظام عمل مرن لا يتطلب منك سوى الموافقة على المحتوى، ونحن نتولى الباقي بالكامل:
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
              الفرق بين النشر العشوائي والعمل مع{" "}
              <span className="text-[#00e5ff]">وكالة ADS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا تعتمد كبرى الشركات والمتاجر على وكالة متكاملة لإدارة حضورها الرقمي؟
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
                    المستقل أو النشر العشوائي الفردي
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    منهجية وكالة ADS الاحترافية
                  </th>
                  <th className="p-4 md:p-5 text-[#00e5ff] font-black text-sm md:text-base rounded-tl-2xl">
                    المكسب العائد على مشروعك
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
                      {row.freelancerOrRandom}
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


      <section id="social-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات إدارة الحسابات
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة إدارة السوشيال ميديا{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              المناسبة لحجم عملك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            باقات متكاملة تشمل التصميم، كتابة المحتوى، المونتاج السينمائي، والرد على العملاء بأسعار تنافسية:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {SOCIAL_PACKAGES.map((pkg, idx) => (
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

                {/* مؤشرات حجم الباقة */}
                <div className="grid grid-cols-1 gap-2.5 mb-6 p-4 rounded-2xl bg-[#070b14]/70 border border-[#00e5ff]/20">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">التصميمات الثابتة:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.postsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">الريلز والمونتاج:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.reelsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">المنصات المدارة:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.platformsCount}</span>
                  </div>
                </div>

                <h4 className="text-white font-bold text-sm mb-4">
                  المميزات والخدمات المشمولة:
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
            الأسئلة الشائعة حول إدارة السوشيال ميديا
          </h2>
          <p className="text-gray-300 text-base">
            كل ما يدور في ذهنك حول آلية العمل، الموافقة على المحتوى، والرد على العملاء:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_SOCIAL.map((faq, index) => {
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
            تفرغ لنمو بيزنسك ودع السوشيال ميديا لخبراء وكالة ADS
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لنقل حضورك الرقمي إلى{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              مستوى استثنائي من التفاعل والمبيعات؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع فريق الإدارة في وكالة ADS عبر الواتساب للحصول على تحليل مجاني لحساباتك الحالية وبدء خطة النمو الجديدة.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D9%88%D8%B4%D9%8A%D8%A7%D9%84%20%D9%85%D9%8A%D8%AF%D9%8A%D8%A7%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
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