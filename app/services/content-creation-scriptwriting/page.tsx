"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";



interface ScriptPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface HookTechnique {
  title: string;
  timing: string;
  exampleHook: string;
  scientificReason: string;
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
  amateurWriting: string;
  adsAgencyPro: string;
  businessBenefit: string;
}

interface ContentPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  scriptsCount: string;
  postsCount: string;
  features: string[];
  whatsappText: string;
}

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}


const SCRIPT_PILLARS: ScriptPillar[] = [
  {
    id: "hook-architecture",
    title: "هندسة الخطافات الذكية وثواني الانتباه الأولى (Hook Architecture)",
    subtitle: "إيقاف إبهام المستخدم في أول 3 ثوانٍ بحرارة وإثارة عقلية",
    description:
      "أكبر مشكلة تواجه صناع المحتوى هي أن المشاهد يمرر الفيديو خلال ثوانٍ معدودة. نحن في وكالة ADS نخصص الخبراء لصياغة أقوى الخطافات البصرية والصوتية (Hooks) التي تضرب على أوتار الفضول، الخوف من الفوات، الرغبة في التطور، أو طرح سؤال صادم يجبر المشاهد على التوقف ومتابعة الفيديو للنهاية.",
    deliverables: [
      "صياغة 3 خيارات للخطاف (Hook Options) لكل فيديو لضمان نجاحه",
      "تصميم بداية بصرية مثيرة تتطابق مع نبرة الخطاب والسوق المستهدف",
      "تجنب المقدمات المملة والترحيب الطويل والدخول في صلب القيمة فوراً",
      "اختبار مدى فاعلية الخطاف بناءً على خوارزميات تيك توك وإنستجرام وسناب شات",
    ],
    kpiImpact: "رفع معدل الاحتفاظ بالمشاهد (Retention Rate) في أول 5 ثوانٍ بنسبة 320%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "storytelling-body",
    title: "حبكة السرد القصصي وتصاعد الأهمية (Storytelling & Body Flow)",
    subtitle: "حكاية ممتعة تقود العميل خطوة بخطوة نحو الاقتناع التام",
    description:
      "بعد جذب انتباه المشاهد بالخطاف، يأتي دور السرد القصصي الممتع (Storytelling). نحن نترجم خدماتك ومنتجاتك إلى قصص واقعية يعيشها العميل؛ نعرض مشكلته المؤلمة، كيف يشعر حيالها، ثم نقدم منتجك كحل سحري وعملي ينهي معاناته، مع ترتيب السكريبت بقالب إيقاعي يمنع أي شعور بالملل.",
    deliverables: [
      "بناء حبكة درامية أو تسويقية متسلسلة (المشكلة، الصراع، الحل)",
      "تنسيق إيقاع الكلمات والوقفات (Pacing) لضمان سلاسة الإلقاء أمام الكاميرا",
      "تضمين الأدلة الاجتماعية والشهادات الحية داخل قلب السكريبت",
      "صياغة لغة جسد وتوجيهات بصرية للمصور والمونتير (Visual Cues)",
    ],
    kpiImpact: "زيادة مدة المشاهدة المتوسطة للفيديو ومضاعفة ثقة العميل بالعلامة.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "call-to-action",
    title: "هندسة أزرار اتخاذ القرار وتحويل المشاهد (CTA Engineering)",
    subtitle: "تحويل الإعجاب والمشاهدة إلى طلب حقيقي ومشتريات فورية",
    description:
      "الفيديو الناجح هو الذي يدفع المشاهد لاتخاذ إجراء فوري بعد انتهائه. نحن نصيغ بعناية فائقة نداءات اتخاذ القرار (Call to Action)؛ سواء كان المطلوب التعليق بكلمة للحصول على عرض، زيارة المتجر، أو الضغط على رابط الواتساب لشراء المنتج.",
    deliverables: [
      "صياغة حوافز بيعية فورية ترافق الـ CTA (مثل: خصم محدود، استشارة مجانية)",
      "توجيه المشاهد بخطوات واضحة وبسيطة لا تحتمل التردد",
      "ربط الـ CTA بهدف الحملة الإعلانية أو قمع المبيعات المباشر",
    ],
    kpiImpact: "مضاعفة معدل النقر والتحويل (Conversion Rate) من المشاهدين إلى عملاء.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    id: "blog-seo-articles",
    title: "صناعة مقالات المدونات المحسنة لمحركات البحث (SEO Article Copywriting)",
    subtitle: "ظهور مستمر ودائم في صدارة نتائج بحث جوجل مجاناً",
    description:
      "إلى جانب الفيديوهات، نكتب مقالات احترافية طويلة ومفصلة لمدونة موقعك الإلكتروني، تستهدف الكلمات البحثية التي يبحث عنها عملاؤك المحتملون يومياً في جوجل، مما يجذب زيارات مجانية مستدامة (Organic Traffic) ترفع من سلطة موقعك وموثوقيته.",
    deliverables: [
      "بحث واختيار الكلمات المفتاحية عالية البحث وقليلة المنافسة",
      "كتابة مقالات متوافقة 100% مع خوارزميات السيو (SEO-Optimized)",
      "هيكلة المقال بعناوين رئيسية وفرعية (H1, H2, H3) وإنفوجرافيك نصي",
      "ربط المقالات بصفحات خدماتك ومتاجركم لزيادة المبيعات المباشرة",
    ],
    kpiImpact: "جذب آلاف الزيارات الشهرية المستهدفة مجاناً وبشكل مستدام.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    id: "brand-voice",
    title: "توحيد نبرة صوت العلامة التجارية (Brand Voice & Tone Guidelines)",
    subtitle: "كيف تتحدث شركتك مع جمهورها؟ هل بلغة ودودة، رسمية، أم حماسية؟",
    description:
      "الكلمات هي مرآة شخصية شركتك. نضع دليلاً صارماً لنبرة الصوت (Brand Voice Guide) يضمن أن كل منشور، رسالة واتساب، أو سكريبت فيديو يكتبه أي شخص في شركتك يحمل نفس الروح، الشخصية، والشعور، مما يعزز التعرف الفوري على البراند.",
    deliverables: [
      "تحديد شخصية البراند الإجمالية (صديق، خبير، ملهم، مرشد)",
      "قائمة بالكلمات المفضلة والكلمات الممنوع استخدامها نهائياً",
      "أمثلة تطبيقية لصياغة الردود والمحتوى بمختلف المواقف",
    ],
    kpiImpact: "بناء شخصية فريدة لا تنسى وتعزيز الارتباط العاطفي مع العملاء.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const HOOK_TECHNIQUES: HookTechnique[] = [
  {
    title: "تقنية السؤال الصادم أو كسر المعتقد",
    timing: "الثواني (0 - 3)",
    exampleHook: "هل تعلم أن 90% من ميزانيتك الإعلانية تذهب هباءً لهذا السبب الصادم؟",
    scientificReason: "يثير فضول الدماغ البشري لرغعته الفورية في معرفة الحقيقة وتصحيح المعلومات المغلوطة.",
  },
  {
    title: "تقنية إبراز الخسارة المؤلمة (Loss Aversion)",
    timing: "الثواني (0 - 3)",
    exampleHook: "توقف عن نشر الفيديوهات بهذه الطريقة إذا كنت تريد تدمير حسابك بيدي!",
    scientificReason: "علم النفس يؤكد أن الخوف من خسارة شيء ما أقوى مرتين كحافز مقارنة برغبة تحقيق مكسب.",
  },
  {
    title: "تقنية النتيجة المباشرة الصاعقة",
    timing: "الثواني (0 - 3)",
    exampleHook: "كيف ضاعفنا مبيعات هذا المتجر 4 أضعاف في 14 يوماً فقط بدون زيادة ميزانية الإعلانات؟",
    scientificReason: "يقدم وعداً فورياً وقيمة عليا تجبر المشاهد على البقاء لمعرفة تفاصيل الطريقة.",
  },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "جلسة الاستكشاف وتحليل الجمهور",
    timing: "اليوم الأول",
    description: "ندرس منتجاتك، نقاط قوة منافسيك، وأبرز المشاكل التي يعاني منها عملاؤك.",
    deliverable: "تحديد الزوايا التسويقية الأقوى للإطلاق.",
  },
  {
    stepNumber: "02",
    title: "صياغة الهياكل والسكريبتات الأولية",
    timing: "خلال 3 أيام",
    description: "يكتب فريقنا المتخصص السكريبتات والخطافات بعناية فائقة وإيقاع تنافسي.",
    deliverable: "مسودة السكريبتات كاملة للاطلاع والمراجعة.",
  },
  {
    stepNumber: "03",
    title: "التعديل والاعتماد النهائي",
    timing: "خلال يومين",
    description: "نستقبل ملاحظاتك وتعديلاتك لنصل بالسكريبتات إلى درجة الكمال البيعي.",
    deliverable: "النسخة النهائية المعتمدة جاهزة للتصوير أو النشر.",
  },
  {
    stepNumber: "04",
    title: "التسليم والدعم الفني للتنفيذ",
    timing: "مستمر",
    description: "نسلمك الملفات مع توجيهات بصرية للمصور والمونتير لضمان خروج الفيديو بأفضل صورة.",
    deliverable: "دعم فني ومتابعة أثناء التصوير والانتاج.",
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    aspect: "طريقة كتابة النصوص",
    amateurWriting: "كتابة تقليدية تبدأ بـ (مرحباً بكم اليوم نقدم لكم...) وتعتبر مملة للمشاهد.",
    adsAgencyPro: "هندسة خطافات صاعقة تبدأ بالمشكلة أو النتيجة وتجبر المشاهد على المتابعة.",
    businessBenefit: "مضاعفة معدل الاحتفاظ بالمشاهد وتحويله إلى عميل.",
  },
  {
    aspect: "الهدف من المحتوى",
    amateurWriting: "مجرد ملء الحسابات بمنشورات روتينية لعدم التوقف عن النشر.",
    adsAgencyPro: "كل سكريبت له هدف محدد؛ إما بناء ثقة، أو علاج اعتراض بيعي، أو دفع للشراء.",
    businessBenefit: "تحويل المحتوى إلى رجال مبيعات يعملون على مدار الساعة.",
  },
  {
    aspect: "فهم سيكولوجية السوق المحلي",
    amateurWriting: "استخدام صيغ لغوية فصحى جامدة أو عامية غير مفهومة في السوق المستهدف.",
    adsAgencyPro: "صياغة بلغة قريبة لقلوب وعقول الجمهور في السعودية والخليج ومصر.",
    businessBenefit: "خلق ألفة فورية ومصداقية عالية لدى العملاء المحتملين.",
  },
];

const CONTENT_PACKAGES: ContentPackage[] = [
  {
    name: "باقة سكريبتات الانطلاق (Starter Scripts)",
    tagline: "انطلاقة قوية لفيديوهات الريلز والتيك توك للمشاريع الناشئة",
    targetAudience: "مثالية لأصحاب المتاجر وصناع المحتوى الجدد",
    isFeatured: false,
    scriptsCount: "10 سكريبتات فيديوهات قصيرة (Reels/TikTok)",
    postsCount: "5 مقالات أو منشورات مدونة",
    features: [
      "صياغة خطافات جذابة (Hooks) لكل سكريبت",
      "توجيهات بصرية للمصور والمونتير (Visual Cues)",
      "تحديد الهاشتاقات المستهدفة لكل منصة",
      "تعديل واحد مجاني لكل سكريبت",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في طلب (باقة سكريبتات الانطلاق لصناعة المحتوى).",
  },
  {
    name: "باقة المحتوى والسيطرة الاحترافية (Pro Content Hub)",
    tagline: "المنظومة الكاملة لكتابة السكريبتات والمحتوى للشركات الطموحة",
    targetAudience: "الأكثر طلباً للشركات، العيادات، والمتاجر الكبرى",
    isFeatured: true,
    scriptsCount: "20 سكريبت فيديو تسويقي وتثقيفي",
    postsCount: "12 منشور تفاعلي وكروسيل",
    features: [
      "بناء استراتيجية نبرة الصوت (Brand Voice Guide)",
      "كتابة سكريبتات ريلز احترافية مع أزرار اتخاذ قرار (CTA)",
      "إعداد خطة ومحاور المحتوى الشهري المتكامل",
      "توجيهات دقيقة لإدارة التعليقات وتوليد المبيعات",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في طلب (باقة المحتوى والسيطرة الاحترافية).",
  },
  {
    name: "باقة الإمبراطورية الإعلامية (Enterprise Content Elite)",
    tagline: "مكتبة محتوى ضخمة ومستمرة للعلامات التجارية الكبرى",
    targetAudience: "للشركات الكبرى، المؤسسات، والعلامات الإقليمية",
    isFeatured: false,
    scriptsCount: "35 سكريبت فيديو (ريلز، يوتيوب، وموشن)",
    postsCount: "20 منشور + 4 مقالات SEO طويلة",
    features: [
      "فريق كتابة تخصصي (Copywriters & Scriptwriters)",
      "مراجعة دورية لأداء المحتوى وتطوير الأفكار الرائجة",
      "كتابة نصوص الحملات الإعلانية المدفوعة (Ad Copies)",
      "إشراف مباشر وجلسات عصف ذهني شهرية",
    ],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار عن (باقة الإمبراطورية الإعلامية لصناعة المحتوى).",
  },
];

const FAQ_CONTENT: FAQItem[] = [
  {
    category: "آلية صياغة السكريبتات",
    question: "كيف تضمنون أن السكريبت سيبدو طبيعياً وغير مصطنع عند إلقائه أمام الكاميرا؟",
    answer:
      "نحن نكتب السكريبتات بلغة التحدث الطبيعية وليس بلغة الكتب المعقدة (Conversational Copywriting). نراعي إيقاع الجمل، نضع علامات التوقف المناسبة (Pacing)، ونزودك بتوجيهات لحركات الجسد ونبرة الصوت، بحيث تلقي السكريبت بسلاسة وكأنك تتحدث بطبيعتك تماماً.",
  },
  {
    category: "التخصص والخبرة",
    question: "هل لديكم القدرة على كتابة محتوى في مجالات دقيقة مثل الطبية، العقارية، أو التقنية؟",
    answer:
      "بكل تأكيد. يضم فريقنا كتاب محتوى محترفين قادرين على البحث العميق وتبسيط أثقل المصطلحات الفنية والطبية أو العقارية إلى لغة سهلة وممتعة يفهمها الجمهور العام دون إخلال بالمعلومات العلمية أو المهنية.",
  },
  {
    category: "حقوق الملكية",
    question: "هل نملك حقوق الملكية الكاملة للسكريبتات والمقالات بعد تسليمها؟",
    answer:
      "نعم 100%. فور تسليم السكريبتات والمقالات واعتمادها، تصبح ملكيتك الفكرية بالكامل، ولك مطلق الحرية في تعديلها، تصويرها، أو نشرها بالطريقة التي تناسبك دون أي قيود.",
  },
];



export default function ContentCreationScriptwritingPage() {
  const [activeTab, setActiveTab] = useState<string>(SCRIPT_PILLARS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePillar =
    SCRIPT_PILLARS.find((item) => item.id === activeTab) || SCRIPT_PILLARS[0];

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
          <source src="/scriptwriting.mp4" type="video/mp4" />
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
          <source src="/scriptwriting.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>


        <div className="absolute inset-0 bg-gradient-to-l from-[#070b14]/95 via-[#070b14]/80 to-[#0b132b]/65 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070b14_100%)] opacity-70 z-[1]" />

        {/* محتوى الهيرو فوق الفيديو الكامل */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-7" dir="rtl">
          
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#070b14]/80 border border-[#00e5ff]/60 shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-[#00e5ff] text-xs md:text-sm font-black tracking-wider uppercase">
              صناعة المحتوى وكتابة السكريبتات الإبداعية
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            صناعة المحتوى{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              والسكريبتات
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            نصنع محتوى إبداعياً وسكريبتات جذابة تأسر أطراف عقول متابعيك وتدفعهم لاتخاذ القرار.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">⚡</span>
              <span className="text-white text-sm md:text-base font-bold">خطافات صاعقة في أول 3 ثوانٍ</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">📖</span>
              <span className="text-white text-sm md:text-base font-bold">سرد قصصي ممتع ومؤثر</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🎯</span>
              <span className="text-white text-sm md:text-base font-bold">أزرار اتخاذ قرار محولة للبيع</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B5%D9%86%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D9%88%D9%8A%20%D9%88%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A%D8%A8%D8%AA%D8%A7%D8%AA."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>اطلب سكريبتاتك الإبداعية الآن عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#content-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات صناعة المحتوى
            </a>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "3 ثوانٍ",
              label: "سرعة خطف الانتباه",
              desc: "هندسة خطافات عقلية تمنع المشاهد من تجاوز الفيديو وتجبره على البقاء.",
            },
            {
              number: "+320%",
              label: "نمو في نسبة الاحتفاظ بالمشاهد",
              desc: "إيقاع سردي مدروس يزيل الملل ويحافظ على حماس المشاهد حتى نهاية الفيديو.",
            },
            {
              number: "+1,200",
              label: "سكريبت فيديو ناجح",
              desc: "قمنا بتأليفها وكتابتها لعملاء حققوا مشاهدات ومبيعات استثنائية في السوق السعودي والخليجي.",
            },
            {
              number: "100%",
              label: "لغة طبيعية ومقنعة",
              desc: "كتابة تفاعلية تخاطب العاطفة والمنطق دون تكلف أو لغة أكاديمية جافة.",
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
            ركائز الخدمة الاحترافية
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا تتضمن خدمة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              صناعة المحتوى والسكريبتات؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            نغطي كل زاوية يحتاجها براندك ليظهر بقوة وثقة أمام الجمهور. انقر على كل محور لاستعراض تفاصيله:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* أزرار المحاور الخمسة */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {SCRIPT_PILLARS.map((pillar) => {
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
                  تفاصيل المحور والمخرجات
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
                <span>📝</span>
                <span>المخرجات التفصيلية التي تحصل عليها:</span>
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
                  `مرحباً وكالة ADS، أود الاستفسار عن خدمة (${activePillar.title}) ضمن قسم صناعة المحتوى والسكريبتات.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                اطلب هذه الخدمة الآن ↗
              </a>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/65 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.12)] relative overflow-hidden">
          
          {/* استخدام الفيديو الثاني (scriptwritingg.mp4) كخلفية جمالية دمشقية */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/scriptwritingg.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
                سيكولوجية جذب الانتباه
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                كيف نصنع خطافات فيديو تجبر المشاهد{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
                  على عدم التمرير؟
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                نعتمد في كتابة السكريبتات على نظريات علم الأعصاب وتحفيز الفضول الفوري:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOOK_TECHNIQUES.map((hook, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/90 p-8 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                        {hook.timing}
                      </span>
                      <span className="text-xl font-black text-[#00e5ff]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white">{hook.title}</h3>
                    
                    <div className="p-4 rounded-2xl bg-[#0b132b] border border-[#00e5ff]/30 text-sm text-[#00e5ff] font-semibold italic">
                      &quot;{hook.exampleHook}&quot;
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed pt-2">
                      <strong className="text-white block mb-1">السبب النفسي والعصبي:</strong>
                      {hook.scientificReason}
                    </p>
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
            رحلة العمل والإنتاج
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            خطوات كتابة وتسليم سكريبتاتك في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              4 مراحل مدروسة
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نظام عمل دقيق ومريح يضمن لك استلام سكريبتات احترافية وجاهزة للتصوير بأعلى جودة:
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
              الفرق بين الكتابة العادية والسكريبتات الاحترافية في{" "}
              <span className="text-[#00e5ff]">وكالة ADS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا تحدث سكريبتاتنا فرقاً هائلاً في مشاهدات وتفاعل الفيديوهات؟
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
                    الكتابة العادية أو التقليدية
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    منهجية وكالة ADS الاحترافية
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
                      {row.amateurWriting}
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


      <section id="content-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات السكريبتات والمحتوى
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة صناعة المحتوى{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              المناسبة لطموحك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            باقات مرنة ومصممة لتمنحك سكريبتات إبداعية ومحتوى متسق يرفع مبيعاتك فوراً:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {CONTENT_PACKAGES.map((pkg, idx) => (
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
                    <span className="text-gray-300">عدد السكريبتات:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.scriptsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-300">المنشورات والمقالات:</span>
                    <span className="text-[#00e5ff] font-bold">{pkg.postsCount}</span>
                  </div>
                </div>

                <h4 className="text-white font-bold text-sm mb-4">
                  المميزات المشمولة:
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
                  اطلب الباقة الآن عبر واتساب ↗
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
            الأسئلة الشائعة حول صناعة المحتوى والسكريبتات
          </h2>
          <p className="text-gray-300 text-base">
            كل ما تريد معرفته حول طبيعة الكتابة، طريقة الإلقاء، وحقوق الملكية:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_CONTENT.map((faq, index) => {
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
            اجعل كل كلمة تكتبها لشركتك تحصد آلاف المشاهدات والمبيعات
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لتطوير محتواك بسكريبتات تسحر عقول{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              متابعيك وتدفعهم للشراء؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع كتاب السكريبت والمحتوى في وكالة ADS عبر الواتساب، ودعنا نبني لك مكتبة محتوى إبداعية تفوق توقعاتك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B5%D9%86%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D9%88%D9%8A%20%D9%88%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A%D8%A8%D8%AA%D8%A7%D8%AA%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
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