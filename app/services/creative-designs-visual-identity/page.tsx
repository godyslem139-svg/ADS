"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SubService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  importance: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  stepNumber: string;
  phaseTitle: string;
  duration: string;
  details: string;
  outputs: string[];
}

interface BrandElement {
  category: string;
  title: string;
  scientificBasis: string;
  agencyApproach: string;
  impactPercentage: string;
  metricsLabel: string;
}

interface ComparisonPoint {
  aspect: string;
  amateurApproach: string;
  adsAgencyApproach: string;
  businessImpact: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface IdentityPackage {
  name: string;
  tagline: string;
  targetAudience: string;
  isFeatured: boolean;
  items: string[];
  fileFormats: string[];
  whatsappText: string;
}


const SUB_SERVICES_DATA: SubService[] = [
  {
    id: "logo-architecture",
    title: "هندسة وتصميم الشعارات الاستراتيجية (Logo Architecture)",
    subtitle: "أكثر من مجرد رمز.. نبني توقيعاً بصرياً خالداً",
    description:
      "نقوم بابتكار شعارات مبنية على أسس الهندسة الذهبية (Golden Ratio) وفلسفة الاختزال البصري. الشعار لدينا ليس رسمة عشوائية، بل هو تكثيف لقصة علامتك التجارية وقيمها في رمز واحد يسهل تذكره، ويعمل بكفاءة مطلقة سواء طُبع على قلم صغير أو عُرض على لوحة إعلانية عملاقة في الطرق السريعة.",
    deliverables: [
      "3 نماذج أولية مبتكرة ومختلفة الفلسفة البصرية",
      "بناء الشعار على الشبكة الهندسية الدقيقة (Grid System)",
      "نسخ الشعار بكافة الأوضاع (الأفقي، الرأسي، الأيقونة المختصرة Favicon)",
      "إصدارات الألوان الكاملة، الأبيض والأسود، والـ Monochrome",
      "شهادة أصالة التصميم لضمان القابلية للتسجيل التجاري الرسمي",
    ],
    importance: "يرفع معدل تذكر العلامة التجارية بنسبة 80% منذ النظرة الأولى.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    id: "brand-guidelines",
    title: "الدليل الإرشادي الشامل للهوية (Brand Guidelines Book)",
    subtitle: "دستور علامتك التجارية لضمان الاتساق عبر السنين",
    description:
      "نصمم لك كتاباً مرجعياً مفصلاً (Brand Book) يضع القواعد الصارمة لكيفية استخدام هويتك البصرية في كافة المواقف. هذا الدليل يضمن أنه حتى لو تعاملت مع 10 مطابع أو وكالات مختلفة في المستقبل، ستظهر علامتك التجارية دائماً بنفس الروح، ونفس درجات الألوان الدقيقة، وبنفس الهيبة الاحترافية.",
    deliverables: [
      "قواعد المساحات الآمنة حول الشعار والحد الأدنى للأحجام",
      "الاستخدامات الصحيحة والممنوعة للشعار في الخلفيات المختلفة",
      "أكواد الألوان الدقيقة بجميع الأنظمة (HEX, RGB, CMYK, Pantone)",
      "نظام الخطوط المعتمد (العناوين، النصوص الفرعية، المتن) بالعربية والإنجليزية",
      "توجيهات أسلوب التصوير الفوتوغرافي والفلاتر اللونية المعتمدة للبراند",
    ],
    importance: "يحافظ على ثبات الصورة الذهنية للشركة ويزيد من قيمتها السوقية.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "corporate-stationery",
    title: "المطبوعات الورقية والمكتبية الفاخرة (Corporate Stationery)",
    subtitle: "ملمس الفخامة في كل اجتماع ومراسلة رسمية",
    description:
      "نحول هويتك البصرية إلى واقع ملموس ينبض بالرقي داخل مكاتب شركتك وفي أيدي عملائك. نصمم كافة المطبوعات المكتبية مع مراعاة تقنيات الطباعة الحديثة مثل البصمة الحرارية (Foil Stamping)، والحفر البارز (Embossing)، والقصات الخاصة (Die-Cut) التي تجعل كارت العمل أو الفولدر الخاص بك تحفة فنية يحتفظ بها العميل.",
    deliverables: [
      "تصميم بطاقات العمل الشخصية (Business Cards) للأفراد والإدارة العليا",
      "ورق المراسلات الرسمي (Letterhead) وسندات القبض والصرف والفواتير",
      "ملفات الحفظ والعروض التقديمية (Presentation Folders)",
      "الأظرف بجميع مقاساتها القياسية (DL, C4, C5) وأكياس الهدايا",
      "بطاقات تعريف الموظفين (ID Cards) وأشرطة التعليق (Lanyards) والأختام",
    ],
    importance: "يعزز الثقة الفورية في الاجتماعات المباشرة والصفقات التجارية الكبرى.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "packaging-design",
    title: "تصميم العبوات والتغليف الإبداعي (Packaging & Unboxing)",
    subtitle: "اجعل منتجك يبيع نفسه على الرف وفي فيديوهات الـ Unboxing",
    description:
      "في عصر التجارة الإلكترونية والسوشيال ميديا، أصبح التغليف هو البائع الصامت الأول لمنتجك. نصمم عبوات وأكياس وصناديق شحن تخلق تجربة فتح صندوق (Unboxing Experience) لا تُنسى، مما يدفع عملاءك لتصوير منتجك ومشاركته تلقائياً مع أصدقائهم، مع الالتزام الكامل باشتراطات خطوط القص والمواصفات القياسية للمصانع.",
    deliverables: [
      "تصميم المخططات الهندسية للعبوات (Die-Lines) جاهزة للمصانع مباشرة",
      "تصميم الملصقات (Labels) والعبوات الزجاجية والبلاستيكية والكرتونية",
      "تصميم صناديق الشحن للتجارة الإلكترونية وأوراق التغليف الداخلية (Tissue Paper)",
      "تصميم أكياس التسوق الفاخرة (Shopping Bags) وشرائط الإغلاق المطبوعة",
      "نماذج محاكاة ثلاثية الأبعاد (3D Mockups) فائقة الواقعية قبل الطباعة",
    ],
    importance: "يؤثر في قرار الشراء اللحظي بنسبة 72% ويرفع القيمة السعرية للمنتج.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "social-media-branding",
    title: "التصميمات الإبداعية للسوشيال ميديا والحملات الإعلانية",
    subtitle: "سيطرة بصرية توقف إبهام المتصفح في أجزاء من الثانية",
    description:
      "الهوية القوية تحتاج إلى ترجمة يومية مبهرة على منصات التواصل الاجتماعي. نبتكر قوالب وتصميمات إعلانية فائقة الاحترافية تعتمد على الدمج البصري المتقدم (Photo Manipulation)، والتايبوجرافي الجذاب، وتوزيع العناصر المدروس الذي يقود عين المشاهد مباشرة نحو هدف الإعلان وزر اتخاذ القرار (CTA).",
    deliverables: [
      "تصميم أغلفة الحسابات وصور البروفايل الموحدة لجميع المنصات",
      "ابتكار القوالب الثابتة والمتغيرة للمنشورات اليومية (Grid & Carousel Templates)",
      "تصميم أغلفة الـ Highlights والقصص التفاعلية (Stories) وأغلفة الريلز",
      "تصميم البنرات الإعلانية للحملات الممولة بمقاسات سناب شات، انستجرام، وتيك توك",
      "تصميم واجهات وبنرات المتاجر الإلكترونية (سلة، زد، شوبيفاي، ووكومرس)",
    ],
    importance: "يضاعف نسبة النقر على الإعلانات (CTR) ويقلل تكلفة الاستحواذ على العميل.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "company-profiles",
    title: "البروفايلات التعريفية والعروض التقديمية (Company Profiles & Decks)",
    subtitle: "واجهتك الاحترافية لاقتناص المناقصات وعقود الـ B2B",
    description:
      "عندما تتقدم شركتك لمناقصة كبرى أو تعرض خدماتها على مستثمرين وشركات أخرى، فإن البروفايل التعريفي هو سفيرك الأول. نصمم بروفايلات شركات وعروضاً تقديمية (Pitch Decks) تجمع بين الإنفوجرافيك المبسط، والتنسيق الطباعي الفخم، والسرد القصصي البصري الذي يعكس ضخامة مؤسستك وخبرتها.",
    deliverables: [
      "تخطيط وتصميم بروفايل الشركة التفاعلي والجاهز للطباعة (من 8 إلى 40 صفحة)",
      "تصميم الكتالوجات والمنيوهات الرقمية والمطبوعة للمنتجات والخدمات",
      "تصميم قوالب العروض التقديمية الاحترافية (PowerPoint & Keynote Templates)",
      "تصميم التقارير السنوية والربعية وتقارير الإنجازات بالإنفوجرافيك",
      "تصميم البروشورات الثلاثية والثنائية (Bi-Fold & Tri-Fold Brochures) والفلايرات",
    ],
    importance: "يرفع نسبة إغلاق الصفقات المؤسسية (B2B) ويعزز الموثوقية أمام صناع القرار.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const SCIENTIFIC_PILLARS: BrandElement[] = [
  {
    category: "سيكولوجية الألوان",
    title: "التأثير اللاواعي للأطياف اللونية",
    scientificBasis:
      "تثبت الدراسات العصبية التسويقية أن الدماغ البشري يعالج الألوان قبل الكلمات والأشكال بـ 60 ألف مرة، وأن 85% من المستهلكين يقررون شراء منتج معين بناءً على الانطباع اللوني الأول.",
    agencyApproach:
      "في وكالة ADS، لا نختار الألوان حسب الذوق الشخصي، بل ندرس طبيعة القطاع، الفئة العمرية، والثقافة المحلية (في السوق السعودي والمصري والخليجي) لنبني باليتة ألوان تحفز المشاعر المطلوبة (كالفخامة، الجوع، الأمان، أو الحداثة التقنية).",
    impactPercentage: "85%",
    metricsLabel: "تأثير مباشر على قرار الشراء الأولي",
  },
  {
    category: "هندسة التايبوجرافي",
    title: "نبرة الصوت المرئية للخطوط",
    scientificBasis:
      "الخط المستخدم في كتابة اسم علامتك وعناوينك الإعلانية يحمل شخصية مستقلة؛ فالخطوط الحادة تعكس القوة والصلابة الهندسية، بينما الخطوط الانسيابية تعكس الود والرفاهية والجمال.",
    agencyApproach:
      "نعتني باختيار وتطوير خطوط عربية وإنجليزية متناغمة تماماً في الأوزان والمسافات البينية (Kerning & Leading)، لضمان سهولة القراءة الفورية على شاشات الهواتف الذكية وفي اللوحات الطرقية على حد سواء.",
    impactPercentage: "92%",
    metricsLabel: "تحسن في وضوح الرسالة وسرعة استيعابها",
  },
  {
    category: "النمط البصري (Pattern)",
    title: "البصمة التكرارية المميزة للبراند",
    scientificBasis:
      "الذاكرة البصرية للإنسان ترتبط بالأنماط الهندسية المتكررة؛ حيث يستطيع العميل التعرف على العلامات التجارية الكبرى من خلال الـ Pattern الخاص بها حتى لو تم إخفاء الشعار تماماً.",
    agencyApproach:
      "نشتق من روح شعارك عناصر زخرفية وهندسية (Brand Patterns & Icons) تُستخدم بذكاء في خلفيات التصميمات، أوراق التغليف، والديكورات الداخلية للمقر لتخلق عالماً بصرياً متكاملاً يحيط بالعميل.",
    impactPercentage: "3.5x",
    metricsLabel: "مضاعفة سرعة التعرف على الإعلانات بدون قراءة الاسم",
  },
];

const WORKFLOW_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    phaseTitle: "الاستكشاف والتحليل الاستراتيجي (Discovery & Audit)",
    duration: "اليوم 1 - 2",
    details:
      "نجلس معك لنفهم أعماق مشروعك: ما هي قصتك؟ من هم عملاؤك المثاليون؟ من هم أبرز منافسيك في السوق؟ وما هي الميزة التنافسية التي تجعلك مختلفاً عنهم؟ نقوم بتحليل الهويات البصرية لأقوى 10 منافسين في مجالك لتحديد الفجوات البصرية التي سنستغلها لتميزك.",
    outputs: ["وثيقة استراتيجية العلامة (Brand Brief)", "تحليل بصري للمنافسين", "تحديد شخصية البراند (Brand Archetype)"],
  },
  {
    stepNumber: "02",
    phaseTitle: "بناء لوحات الإلهام والتوجه الفني (Moodboarding & Direction)",
    duration: "اليوم 3 - 4",
    details:
      "قبل البدء في رسم أي خط، نقوم بتجميع لوحات إلهام بصرية (Moodboards) تحدد الاتجاه الفني المقترح: هل سنتجه نحو الكلاسيكية الفاخرة؟ أم الحداثة التقنية الجريئة؟ أم البساطة المينيمال؟ نشاركك هذه اللوحات لضمان تطابق رؤيتنا الفنية مع طموحاتك.",
    outputs: ["لوحة التوجه اللوني المبدئي", "نماذج أسلوب الخطوط والأيقونات", "تحديد الروح العامة للتصوير والتصميم"],
  },
  {
    stepNumber: "03",
    phaseTitle: "الاسكتشات اليدوية والابتكار المفاهيمي (Sketching & Concepting)",
    duration: "اليوم 5 - 8",
    details:
      "يبدأ فريق المديرين الفنيين والمصممين بتحويل الأفكار إلى عشرات الاسكتشات اليدوية على الورق بعيداً عن القوالب الجاهزة. ندمج الرموز الدلالية مع الحروف المبتكرة لنخرج بأقوى 3 مفاهيم تصميمية أصيلة تحمل كل منها فلسفة وقصة عميقة.",
    outputs: ["عشرات الاسكتشات الأولية", "تصفية واختيار أقوى 3 أفكار مبتكرة", "تحويل الاسكتشات إلى رسم فيكتور رقمي متقن"],
  },
  {
    stepNumber: "04",
    phaseTitle: "العرض الفني والمحاكاة الواقعية (Presentation & 3D Mockups)",
    duration: "اليوم 9 - 10",
    details:
      "لا نعرض عليك الشعار على خلفية بيضاء صماء فحسب، بل نقدم لك عرضاً تقديمياً متكاملاً يشرح فلسفة كل خط ولون، مع تركيب الشعار والهوية على نماذج محاكاة واقعية (واجهات مباني، عبوات، سيارات، تطبيقات جوال، مطبوعات) لتعيش تجربة علامتك في الواقع.",
    outputs: ["ملف عرض فلسفة الشعارات (Concept Presentation)", "محاكاة ثلاثية الأبعاد للمخرجات", "جلسة نقاش وتعديلات مرنة حتى الرضا التام"],
  },
  {
    stepNumber: "05",
    phaseTitle: "تطوير الهوية المتكاملة ودليل الاستخدام (System Rollout)",
    duration: "اليوم 11 - 13",
    details:
      "بعد اعتمادك النهائي للشعار، ننطلق في بناء المنظومة البصرية الكاملة: تصميم كافة المطبوعات، العبوات، قوالب السوشيال ميديا، وتأليف كتاب الإرشادات الصارم (Brand Guidelines) الذي يضبط كافة تفاصيل الهوية.",
    outputs: ["تصميم كافة عناصر الباقة المختارة", "إعداد كتاب الهوية الإرشادي الكامل", "ضبط التوافق اللوني للطباعة والشاشات"],
  },
  {
    stepNumber: "06",
    phaseTitle: "التسليم النهائي للأصول المفتوحة والدعم (Final Delivery & Handoff)",
    duration: "اليوم 14",
    details:
      "نسلمك حقيبة رقمية منظمة ومفهرسة بأعلى دقة تحتوي على كافة الملفات المصدرية المفتوحة القابلة للتعديل، وملفات الطباعة المباشرة، مع تقديم دعم فني متواصل للإشراف على أولى عمليات الطباعة أو التنفيذ الرقمي لضمان خروج كل شيء كما خُطط له.",
    outputs: ["ملفات الفيكتور المفتوحة (AI, EPS, PDF, SVG)", "ملفات الشاشات عالية الدقة (PNG, WEBP, JPG)", "مجلد الخطوط المرخصة والأكواد اللونية"],
  },
];

const COMPARISON_DATA: ComparisonPoint[] = [
  {
    aspect: "منهجية بناء الشعار",
    amateurApproach: "الاعتماد على قوالب جاهزة ومستهلكة من مواقع الإنترنت قد يتشابه فيها شعارك مع مئات المحلات الأخرى.",
    adsAgencyApproach: "رسم حر ومبتكر من الصفر على شبكة هندسية دقيقة يعكس تفرد علامتك ويضمن عدم تشابهه مع أي كيان آخر.",
    businessImpact: "حماية قانونية كاملة وقابلية لتسجيل العلامة التجارية رسمياً.",
  },
  {
    aspect: "تناسق الألوان في الطباعة",
    amateurApproach: "اختيار ألوان عشوائية على الشاشة تتغير وتبهت تماماً عند طباعتها على الورق أو العبوات الكرتونية.",
    adsAgencyApproach: "معايرة دقيقة للألوان بأنظمة Pantone و CMYK للطباعة، مع أنظمة RGB و HEX للشاشات الرقمية.",
    businessImpact: "توفير آلاف الريالات والجنيهات التي قد تضيع في مطبوعات تالفة أو باهتة.",
  },
  {
    aspect: "قابلية التوسع المستقبلي",
    amateurApproach: "تسليم صورة صغيرة الحجم تفقد جودتها وتصبح مشوشة (Pixelated) عند تكبيرها على يافطة أو واجهة معرض.",
    adsAgencyApproach: "تسليم ملفات Vector رياضية تقبل التكبير إلى ما لا نهاية (حتى حجم ناطحة سحاب) بنفس النقاء الحاد.",
    businessImpact: "جاهزية تامة للتوسع وفتح الفروع والمعارض الكبرى دون الحاجة لإعادة التصميم.",
  },
  {
    aspect: "التوجيه التسويقي للتصميم",
    amateurApproach: "التركيز على الشكل الجمالي السطحي فقط دون فهم سيكولوجية العميل المستهدف أو طبيعة المنافسة.",
    adsAgencyApproach: "دمج خبرة 15 عاماً في التسويق الرقمي داخل كل تفصيلة بصرية لخدمة أهداف البيع والتحويل (Conversion).",
    businessImpact: "هوية بصرية تعمل كأداة تسويقية ترفع القيمة السوقية لمنتجاتك وخدماتك.",
  },
];

const PACKAGES_DATA: IdentityPackage[] = [
  {
    name: "باقة الهوية التأسيسية (Startup Identity)",
    tagline: "انطلاقة احترافية قوية للمشاريع الناشئة والمتاجر الجديدة",
    targetAudience: "مثالية لرواد الأعمال والمتاجر الإلكترونية في مرحلة التأسيس",
    isFeatured: false,
    items: [
      "تصميم شعار احترافي مبتكر (عرض 2 نموذج مختلف للاختيار)",
      "تحديد الباليتة اللونية الأساسية والثانوية للبراند",
      "اختيار الخطوط العربية والإنجليزية المعتمدة للهوية",
      "تصميم نمط بصري مميز (Brand Pattern) خاص بالعلامة",
      "تصميم بطاقة العمل الشخصية (Business Card) وجهين",
      "تصميم ورق المراسلات الرسمي (Letterhead) وختم الشركة",
      "تصميم بروفايل وأغلفة منصات التواصل الاجتماعي (4 منصات)",
      "دليل إرشادي مختصر لاستخدام الشعار والألوان (Mini Brand Guide)",
    ],
    fileFormats: ["AI", "PDF", "PNG", "SVG", "JPG"],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار وطلب (باقة الهوية التأسيسية - Startup Identity).",
  },
  {
    name: "باقة الهوية المتكاملة (Corporate Pro Identity)",
    tagline: "المنظومة البصرية الشاملة للشركات الطموحة والباحثة عن السيطرة",
    targetAudience: "الأكثر طلباً للشركات، العيادات، المطاعم، والبراندات التجارية",
    isFeatured: true,
    items: [
      "هندسة شعار استراتيجي فريد (عرض 3 نماذج مبتكرة بالشبكة الهندسية)",
      "الكتاب الإرشادي الشامل للهوية البصرية (Full Brand Guidelines Book)",
      "حزمة المطبوعات المكتبية الكاملة (كارت، ورق رسمي، فولدر، أظرف، سندات، ID)",
      "تصميم حزمة التغليف أو الأكياس (كيس تسوق، بوكس منتج، أو كوب واستيكر)",
      "تصميم هوية السوشيال ميديا الكاملة (أغلفة، 6 قوالب منشورات، قوالب ستوري)",
      "تصميم توقيع البريد الإلكتروني الرسمي للموظفين والمديرين",
      "تصميم الزي الموحد لفريق العمل (Uniform Branding) وهدايا الـ VIP",
      "نماذج محاكاة ثلاثية الأبعاد (3D Mockups) فائقة الجودة لكافة العناصر",
    ],
    fileFormats: ["AI", "EPS", "PDF Print", "SVG", "PNG", "PSD", "Font Files"],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار وطلب (باقة الهوية المتكاملة - Corporate Pro Identity).",
  },
  {
    name: "باقة التحول المؤسسي والامتياز (Enterprise & Franchise)",
    tagline: "حلول إمبراطورية للشركات الكبرى، المصانع، ومانحي الفرنشايز",
    targetAudience: "مصممة للكيانات الكبرى وإعادة بناء الهويات (Rebranding)",
    isFeatured: false,
    items: [
      "بحث سوقي واستراتيجي شامل مع بناء شخصية ونبرة صوت العلامة (Brand Voice)",
      "تطوير أو إعادة هندسة الشعار (Rebranding) مع 4 توجهات فنية شاملة",
      "دستور الهوية الموسع للفرنشايز والفروع (Master Brand & Sub-Brands Manual)",
      "تصميم كافة المطبوعات الإدارية والتسويقية (شاملة بروشور وبروفايل شركة 16 صفحة)",
      "تصميم منظومة التغليف الكاملة لخطوط الإنتاج (حتى 5 منتجات بالـ Die-Lines)",
      "تصميم الهوية المكانية والخارجية (واجهات الفروع، اللوحات الإرشادية، branding السيارات)",
      "تصميم قوالب العروض التقديمية للمستثمرين (PowerPoint Pitch Deck)",
      "إشراف فني واستشاري مباشر مع المطابع وشركات التنفيذ لمدة 30 يوماً",
    ],
    fileFormats: ["All Open Source Files", "CAD/Die-Lines", "Print-Ready CMYK/Pantone", "Digital Assets Kit"],
    whatsappText: "مرحباً وكالة ADS، أرغب في الاستفسار وطلب (باقة التحول المؤسسي - Enterprise Identity).",
  },
];

const FAQ_DATA: FAQItem[] = [
  {
    category: "حقوق الملكية والملفات",
    question: "هل أحصل على الملفات المفتوحة (المصدرية) وحقوق الملكية الكاملة للشعار والهوية؟",
    answer:
      "بكل تأكيد! فور انتهاء المشروع واعتمادك النهائي، تنتقل ملكية كافة التصميمات إليك بنسبة 100%. نسلمك جميع الملفات المفتوحة الأصلية بصيغ (Adobe Illustrator AI, EPS, PDF, PSD) بالإضافة إلى صيغ الاستخدام الفوري عالية الدقة (PNG بخلفية شفافة، SVG للويب، وJPG)، مما يمنحك حرية كاملة في الطباعة والتعديل مستقبلاً دون أي قيود.",
  },
  {
    category: "التعديلات والضمان",
    question: "ماذا لو لم تعجبني النماذج الأولية المعروضة للشعار؟ وكيف تتم عملية التعديل؟",
    answer:
      "لأننا نبدأ العمل بجلسة تحليل استراتيجي ولوحات إلهام (Moodboards) نعتمدها معك مسبقاً، فإن نسبة الإعجاب بالنماذج من المرة الأولى تتجاوز 95%. ومع ذلك، نحن نكفل لك مرونة كاملة في التعديلات وتطوير الأفكار، وفي حال رغبتك في تغيير التوجه الفني بالكامل، يقوم فريقنا بابتكار مسار تصميمي جديد حتى نصل إلى النتيجة التي تبهرك وتعكس طموحك تماماً.",
  },
  {
    category: "إعادة بناء الهوية (Rebranding)",
    question: "لدينا شركة قائمة بالفعل ولكن هويتنا قديمة، هل تقدمون خدمة تحديث الهوية دون فقدان عملائنا؟",
    answer:
      "نعم، نحن متخصصون في عمليات الـ Rebranding الذكية. نقوم بدراسة العناصر البصرية العالقة في أذهان عملائك الحاليين، ونطورها بأسلوب عصري يواكب عام 2026 ويفتح لك أسواقاً وشرائح عملاء جديدة ذات قدرة شرائية أعلى، مع الحفاظ على الخيط البصري الأصيل الذي يربط عملاءك القدامى بعلامتك.",
  },
  {
    category: "الطباعة والتنفيذ",
    question: "هل الملفات التي أستلمها تكون جاهزة لدخول المطبعة مباشرة؟",
    answer:
      "نعم بنسبة 100%. نحن نجهز ملفات خاصة للطباعة (Print-Ready PDFs) مضبوطة بنظام ألوان CMYK و Pantone، مع إضافة هوامش القص الآمنة (Bleed & Crop Marks) وتحديد خطوط التكسير (Die-Cut) للعبوات والفولدرات، بحيث تسلم الملف لأي مطبعة في العالم وتطبع فوراً بأعلى جودة دون أي أخطاء فنية.",
  },
  {
    category: "المدة الزمنية",
    question: "كم يستغرق بناء الهوية البصرية الكاملة من البداية وحتى التسليم النهائي؟",
    answer:
      "تتراوح مدة التنفيذ القياسية بين 7 إلى 14 يوم عمل حسب حجم الباقة المختارة وتفاصيل المخرجات (مثل عدد العبوات أو صفحات بروفايل الشركة). نحن نوازن بدقة بين السرعة المطلوبة لإطلاق مشروعك وبين العمق الفني اللازم لإخراج عمل إبداعي متقن يعيش لسنوات طويلة.",
  },
];



export default function CreativeDesignsVisualIdentityPage() {
  const [activeTab, setActiveTab] = useState<string>(SUB_SERVICES_DATA[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("tech");

  const industryRecommendations: Record<
    string,
    { title: string; colorVibe: string; fontStyle: string; keyFocus: string; palette: string[] }
  > = {
    tech: {
      title: "قطاع التقنية والبرمجيات والتطبيقات",
      colorVibe: "أطياف السيان النيون، الأزرق العميق، والبنفسجي الرقمي",
      fontStyle: "خطوط هندسية مجردة (Geometric Sans-Serif) ذات حواف عصرية",
      keyFocus: "قابلية ظهور الأيقونة بوضوح فائق في شاشات الجوال (App Icon) والوضع الليلي (Dark Mode).",
      palette: ["#00e5ff", "#0077b6", "#0b132b", "#f8fafc"],
    },
    luxury: {
      title: "قطاع العطور، الأزياء، والمجوهرات الفاخرة",
      colorVibe: "الأسود الملكي، الذهبي المطفي، البيج الدافئ، والأخضر الزمردي",
      fontStyle: "خطوط كلاسيكية رفيعة ذات تباين عالٍ وتفاصيل فنية أنيقة",
      keyFocus: "تصميم التغليف الفاخر (Packaging) وتفاصيل البصمة الذهبية والملمس البارز على العلب.",
      palette: ["#d4af37", "#1a1a1a", "#f5f5dc", "#0f2922"],
    },
    food: {
      title: "قطاع المطاعم، الكافيهات، والمنتجات الغذائية",
      colorVibe: "البرتقالي الحيوي، الأصفر الدافئ، البني المحمص، والأخضر الطبيعي",
      fontStyle: "خطوط عضوية ودودة ومرنة تفتح الشهية وتبعث على الألفة",
      keyFocus: "تصميم أكواب وتغليف يخطف الأنظار في تصوير السوشيال ميديا والـ Unboxing التلقائي.",
      palette: ["#f59e0b", "#78350f", "#10b981", "#fffbeb"],
    },
    corporate: {
      title: "قطاع المقاولات، العقارات، والاستشارات والمؤسسات",
      colorVibe: "الكحلي المؤسسي، الفضي المعدني، التركواز المتزن، والرمادي الصخري",
      fontStyle: "خطوط كوفية أو نسخية حديثة صلبة ومستقرة تعكس الهيبة والثقة",
      keyFocus: "بروفايل الشركة التعريفي، المطبوعات الرسمية، واللوحات الخارجية للمواقع والمشاريع.",
      palette: ["#0284c7", "#334155", "#94a3b8", "#0f172a"],
    },
  };

  const currentTabContent =
    SUB_SERVICES_DATA.find((item) => item.id === activeTab) || SUB_SERVICES_DATA[0];

  return (
    <div className="w-full min-h-screen text-white p-3 md:p-6 flex flex-col font-sans gap-20 relative overflow-x-hidden">
      

      <div className="fixed inset-0 overflow-hidden z-[-1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source src="/identity design.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-[#070b14]/85 backdrop-blur-[2px]" />
      </div>

      {/* 1. قسم الهيرو الملحمي مع الفيديو المباشر */}
      <section className="w-full max-w-[1400px] mx-auto rounded-[2.5rem] border border-[#00e5ff]/40 shadow-[0_0_60px_rgba(0,229,255,0.2)] bg-[#0b132b]/70 backdrop-blur-xl relative overflow-hidden p-6 md:p-14 lg:p-20 mt-4">
        
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00e5ff]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0077b6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 flex flex-col items-start text-right gap-6" dir="rtl">
            
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/40 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
              <span className="text-[#00e5ff] text-xs md:text-sm font-bold tracking-wider uppercase">
                خدمة التصميمات الإبداعية والهوية البصرية
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] drop-shadow-lg">
              التصميمات الإبداعية{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                والهوية البصرية
              </span>
            </h1>

            <p className="text-gray-200 text-base md:text-xl leading-relaxed font-normal max-w-2xl">
              نحن لا نرسم مجرد شعارات عابرة، بل نهندس منظومات بصرية متكاملة تحفر اسم علامتك التجارية في ذاكرة عملائك، وترفع قيمتك السوقية، وتحول كل نقطة تواصل بصري إلى أداة بيع فائقة التأثير.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-2">
              <div className="flex items-center gap-3 bg-[#070b14]/60 border border-[#00e5ff]/20 rounded-2xl p-3.5">
                <span className="w-8 h-8 rounded-xl bg-[#00e5ff]/15 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff] font-black shrink-0">
                  ✓
                </span>
                <span className="text-sm md:text-base text-gray-200 font-semibold">
                  تصميمات أصيلة 100% قابلة للتسجيل التجاري
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#070b14]/60 border border-[#00e5ff]/20 rounded-2xl p-3.5">
                <span className="w-8 h-8 rounded-xl bg-[#00e5ff]/15 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff] font-black shrink-0">
                  ✓
                </span>
                <span className="text-sm md:text-base text-gray-200 font-semibold">
                  تسليم كافة الملفات المفتوحة والأدلة الإرشادية
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#070b14]/60 border border-[#00e5ff]/20 rounded-2xl p-3.5">
                <span className="w-8 h-8 rounded-xl bg-[#00e5ff]/15 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff] font-black shrink-0">
                  ✓
                </span>
                <span className="text-sm md:text-base text-gray-200 font-semibold">
                  دمج سيكولوجية البيع والتسويق في كل تصميم
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#070b14]/60 border border-[#00e5ff]/20 rounded-2xl p-3.5">
                <span className="w-8 h-8 rounded-xl bg-[#00e5ff]/15 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff] font-black shrink-0">
                  ✓
                </span>
                <span className="text-sm md:text-base text-gray-200 font-semibold">
                  خبرة +15 عاماً في الأسواق السعودية والعربية
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4 w-full sm:w-auto">
              <a
                href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A8%D9%86%D8%A7%D8%A1%20%D9%87%D9%88%D9%8A%D8%A9%20%D8%A8%D8%B5%D8%B1%D9%8A%D8%A9%20%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85%D8%A7%D8%AA%20%D8%A5%D8%A8%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-lg shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.8)] hover:scale-105 transition-all duration-300"
              >
                <span>اطلب تصميم هويتك الآن عبر واتساب</span>
                <span>↗</span>
              </a>

              <a
                href="#packages-section"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-[#00e5ff]/50 bg-[#070b14]/80 text-[#00e5ff] font-bold text-base md:text-lg hover:bg-[#00e5ff]/10 transition-all duration-300"
              >
                <span>استعرض باقات الهوية</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[360px] sm:h-[440px] rounded-[2rem] overflow-hidden border-2 border-[#00e5ff]/60 shadow-[0_0_50px_rgba(0,229,255,0.35)] bg-[#070b14] group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/identity design.mp4" type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070b14]/85 backdrop-blur-md border border-[#00e5ff]/30 flex items-center justify-between">
                <div className="flex flex-col text-right" dir="rtl">
                  <span className="text-[#00e5ff] text-xs font-bold">إبداع بصري بمعايير عالمية</span>
                  <span className="text-white text-sm font-black">هويات بصرية تصنع قادة السوق</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] flex items-center justify-center text-[#00e5ff]">
                  ✦
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              stat: "0.05 ثانية",
              title: "زمن تكوين الانطباع الأول",
              desc: "هي المدة التي يستغرقها العميل ليحكم على مدى احترافية وموثوقية شركتك بمجرد رؤية شعارك وتصميماتك.",
            },
            {
              stat: "+33%",
              title: "زيادة في الإيرادات والأرباح",
              desc: "الشركات التي تمتلك هوية بصرية متسقة وموحدة عبر جميع المنصات تحقق نمواً أعلى في المبيعات.",
            },
            {
              stat: "+450",
              title: "هوية بصرية ناجحة",
              desc: "قمنا ببنائها وتطويرها لشركات ومؤسسات ومتاجر في المملكة العربية السعودية ومصر والخليج.",
            },
            {
              stat: "100%",
              title: "ملفات مفتوحة وفيكتور",
              desc: "جاهزية مطلقة للطباعة بجميع الأحجام والامتدادات دون أدنى فقدان في الدقة أو الجودة اللونية.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/70 backdrop-blur-xl p-7 flex flex-col gap-3 shadow-[0_0_25px_rgba(0,229,255,0.1)] hover:border-[#00e5ff] hover:-translate-y-1 transition-all duration-300"
              dir="rtl"
            >
              <span className="text-3xl md:text-4xl font-black text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                {item.stat}
              </span>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            منظومة خدماتنا الإبداعية
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا نقدم لك في خدمة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              التصميمات والهوية البصرية؟
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            نغطي كافة الاحتياجات البصرية لعلامتك التجارية من الفكرة التأسيسية للشعار وحتى أدق تفاصيل التغليف وحملات السوشيال ميديا. اختر القسم لاستعراض تفاصيله ومخرجاته:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SUB_SERVICES_DATA.map((service) => {
              const isSelected = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-right p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-[#00e5ff]/15 border-[#00e5ff] shadow-[0_0_25px_rgba(0,229,255,0.25)]"
                      : "bg-[#0b132b]/60 border-[#00e5ff]/20 hover:border-[#00e5ff]/50 hover:bg-[#0b132b]"
                  }`}
                >
                  <div className="p-3 rounded-xl bg-[#070b14] border border-[#00e5ff]/30 shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`font-black text-base md:text-lg ${
                        isSelected ? "text-[#00e5ff]" : "text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <span className="text-xs text-gray-300 line-clamp-1">
                      {service.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 rounded-[2rem] border border-[#00e5ff]/40 bg-[#0b132b]/80 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,229,255,0.15)] flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-[#00e5ff] text-xs font-bold uppercase tracking-wider">
                  تفاصيل الخدمة والمخرجات المعتمدة
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-1">
                  {currentTabContent.title}
                </h3>
              </div>
              <div className="hidden sm:flex p-4 rounded-2xl bg-[#070b14] border border-[#00e5ff]/40 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                {currentTabContent.icon}
              </div>
            </div>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              {currentTabContent.description}
            </p>

            <div className="bg-[#070b14]/70 rounded-2xl p-6 border border-[#00e5ff]/20">
              <h4 className="text-[#00e5ff] font-bold text-base mb-4 flex items-center gap-2">
                <span>📦</span>
                <span>المخرجات والمستلمات التي تحصل عليها في هذا القسم:</span>
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {currentTabContent.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm md:text-base">
                    <span className="w-5 h-5 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] text-[#00e5ff] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#00e5ff] font-semibold bg-[#00e5ff]/10 px-4 py-2.5 rounded-xl border border-[#00e5ff]/30 w-full sm:w-auto">
                <span>💡 الأثر التسويقي:</span>
                <span className="text-white">{currentTabContent.importance}</span>
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود الاستفسار عن خدمة: ${currentTabContent.title}`
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
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/60 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.12)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 w-fit">
                علم النفس البصري والهندسة التسويقية
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-snug">
                لماذا تنجح الهويات البصرية التي نصممها في{" "}
                <span className="text-[#00e5ff]">مضاعفة المبيعات؟</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                التصميم الإبداعي في وكالة ADS لا يعتمد على الصدفة؛ بل يستند إلى قواعد علم الأعصاب التسويقي (Neuromarketing) وهندسة الإدراك البصري. نحن نصمم كل زاوية ولون وخط ليخاطب العقل الباطن لعميلك المستهدف ويبني جسراً فورياً من الثقة والولاء.
              </p>
            </div>

            <div className="lg:col-span-5 relative h-[320px] md:h-[380px] w-full">
              <Image
                src="/creative designs visual identity.webp"
                alt="التصميمات الإبداعية والهوية البصرية"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,229,255,0.35)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SCIENTIFIC_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/80 p-7 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3 py-1 rounded-full border border-[#00e5ff]/30">
                      {pillar.category}
                    </span>
                    <span className="text-2xl font-black text-[#00e5ff]">
                      {pillar.impactPercentage}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mt-2">{pillar.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed border-b border-white/10 pb-4">
                    <strong className="text-white block mb-1">الأساس العلمي:</strong>
                    {pillar.scientificBasis}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed pt-1">
                    <strong className="text-[#00e5ff] block mb-1">كيف نطبقه في ADS؟</strong>
                    {pillar.agencyApproach}
                  </p>
                </div>

                <div className="text-xs text-gray-400 bg-[#0b132b] px-4 py-2.5 rounded-xl border border-white/5 text-center font-semibold">
                  مؤشر الأداء: {pillar.metricsLabel}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/40 bg-gradient-to-b from-[#0b132b]/90 to-[#070b14]/90 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.15)]">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#00e5ff] text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-3">
              أداة تفاعلية ذكية
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              اكتشف التوجه البصري المثالي لقطاع مشروعك
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              اختر مجال عملك لترى كيف يخطط خبراؤنا لهندسة هويتك البصرية واختيار الألوان والخطوط الأنسب لجمهورك:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {[
              { key: "tech", label: "💻 التقنية والتطبيقات" },
              { key: "luxury", label: "💎 العطور والأزياء الفاخرة" },
              { key: "food", label: "☕ المطاعم والكافيهات" },
              { key: "corporate", label: "🏢 العقارات والمقاولات والشركات" },
            ].map((ind) => (
              <button
                key={ind.key}
                onClick={() => setSelectedIndustry(ind.key)}
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all cursor-pointer ${
                  selectedIndustry === ind.key
                    ? "bg-[#00e5ff] text-[#070b14] shadow-[0_0_25px_rgba(0,229,255,0.6)] scale-105"
                    : "bg-[#070b14] text-gray-300 border border-[#00e5ff]/30 hover:border-[#00e5ff]"
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/90 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="text-2xl font-black text-[#00e5ff]">
                {industryRecommendations[selectedIndustry].title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-2xl bg-[#0b132b]/70 border border-white/10">
                  <span className="text-xs text-[#00e5ff] font-bold block mb-1">
                    🎨 السيكولوجية اللونية الموصى بها:
                  </span>
                  <span className="text-sm text-gray-200 font-medium">
                    {industryRecommendations[selectedIndustry].colorVibe}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#0b132b]/70 border border-white/10">
                  <span className="text-xs text-[#00e5ff] font-bold block mb-1">
                    ✒️ مدرسة الخطوط والتايبوجرافي:
                  </span>
                  <span className="text-sm text-gray-200 font-medium">
                    {industryRecommendations[selectedIndustry].fontStyle}
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 mt-1">
                <span className="text-xs text-[#00e5ff] font-bold block mb-1">
                  🎯 نقطة التركيز الاستراتيجية الأهم:
                </span>
                <span className="text-sm text-white font-medium">
                  {industryRecommendations[selectedIndustry].keyFocus}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-[#0b132b] border border-[#00e5ff]/20">
              <span className="text-xs font-bold text-gray-300">نموذج تناغم الأطياف اللونية للقطاع</span>
              <div className="flex items-center gap-3">
                {industryRecommendations[selectedIndustry].palette.map((hex, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-12 h-12 rounded-2xl border border-white/20 shadow-lg"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-[11px] text-gray-400 font-mono" dir="ltr">
                      {hex}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود تصميم هوية بصرية مخصصة لمشروعي في (${industryRecommendations[selectedIndustry].title})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl bg-[#00e5ff]/15 border border-[#00e5ff] text-[#00e5ff] text-xs font-bold hover:bg-[#00e5ff] hover:text-[#070b14] transition-all mt-2"
              >
                احصل على استشارة مجانية لقطاعك ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            منهجية العمل المعتمدة
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            رحلة صناعة هويتك البصرية في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              6 خطوات مدروسة
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نظام عمل احترافي يضمن لك الشفافية الكاملة والمشاركة في كل مرحلة من مراحل البناء الفني:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/70 backdrop-blur-xl p-8 flex flex-col justify-between gap-6 relative overflow-hidden group hover:border-[#00e5ff] hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-bold text-gray-300 bg-[#070b14] px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                    ⏱ {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00e5ff] transition-colors">
                  {step.phaseTitle}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {step.details}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-xs font-bold text-[#00e5ff] block mb-2">
                  مخرجات المرحلة:
                </span>
                <div className="flex flex-wrap gap-2">
                  {step.outputs.map((out, oIdx) => (
                    <span
                      key={oIdx}
                      className="text-xs bg-[#070b14] text-gray-200 px-3 py-1 rounded-lg border border-white/10"
                    >
                      • {out}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. جدول المقارنة الحاسم */}
      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/70 backdrop-blur-xl p-6 md:p-12 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              الفرق بين التصميم العشوائي وهندسة الهوية في{" "}
              <span className="text-[#00e5ff]">وكالة ADS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              لماذا تستثمر الشركات الناجحة في بناء هوية بصرية احترافية متكاملة؟
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
                    التصميمات التقليدية أو الجاهزة
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    منهجية وكالة ADS الاحترافية
                  </th>
                  <th className="p-4 md:p-5 text-[#00e5ff] font-black text-sm md:text-base rounded-tl-2xl">
                    العائد على مشروعك
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm md:text-base">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 md:p-5 font-black text-white whitespace-nowrap">
                      {row.aspect}
                    </td>
                    <td className="p-4 md:p-5 text-gray-400 leading-relaxed">
                      {row.amateurApproach}
                    </td>
                    <td className="p-4 md:p-5 text-gray-100 font-medium bg-[#00e5ff]/5 leading-relaxed border-x border-[#00e5ff]/20">
                      ✓ {row.adsAgencyApproach}
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

 
      <section id="packages-section" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات مرنة ومفصلة
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة الهوية البصرية المناسبة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              لحجم طموحك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            سواء كنت تطلق مشروعك الأول أو تدير مؤسسة كبرى تبحث عن التوسع، صممنا لك باقات شاملة تغطي كافة احتياجاتك:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {PACKAGES_DATA.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 relative ${
                pkg.isFeatured
                  ? "border-2 border-[#00e5ff] bg-[#0b132b]/90 shadow-[0_0_50px_rgba(0,229,255,0.3)] lg:-translate-y-4"
                  : "border border-[#00e5ff]/30 bg-[#0b132b]/60 hover:border-[#00e5ff]"
              }`}
            >
              {pkg.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] text-xs font-black px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.6)] uppercase tracking-wider whitespace-nowrap">
                  الباقة الأكثر طلباً للشركات ⭐
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

                <h4 className="text-white font-bold text-sm mb-4">
                  تشمل الباقة تنفيذ وتسليم العناصر التالية:
                </h4>

                <ul className="flex flex-col gap-3.5 mb-8">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] text-[#00e5ff] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5 pt-6 border-t border-white/10">
                <div>
                  <span className="text-xs text-gray-400 block mb-2">صيغ الملفات المسلمة:</span>
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {pkg.fileFormats.map((fmt, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[11px] font-mono font-bold bg-[#070b14] text-[#00e5ff] px-2.5 py-1 rounded-md border border-[#00e5ff]/30"
                      >
                        .{fmt}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/201151033384?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-black text-center text-base transition-all duration-300 ${
                    pkg.isFeatured
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)]"
                      : "bg-[#070b14] text-[#00e5ff] border border-[#00e5ff]/60 hover:bg-[#00e5ff] hover:text-[#070b14]"
                  }`}
                >
                  اطلب عرض سعر الباقة عبر واتساب ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full max-w-[1000px] mx-auto px-2" dir="rtl">
        <div className="text-center mb-12">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            إجابات وافية وشفافة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            الأسئلة الشائعة حول تصميم الهوية البصرية
          </h2>
          <p className="text-gray-300 text-base">
            كل ما يدور في ذهنك حول حقوق الملكية، صيغ الملفات، والتعديلات:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((faq, index) => {
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
            هل أنت مستعد لصناعة علامة تجارية لا تُنسى؟
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            دعنا نحول رؤيتك إلى{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              تحفة بصرية تقود السوق
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع مديرينا الفنيين في وكالة ADS للحصول على استشارة بصرية مجانية لمشروعك، واستعرض أحدث أعمالنا في قطاعك مباشرة عبر الواتساب.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D9%87%D9%88%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B5%D8%B1%D9%8A%D8%A9%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-lg shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300"
            >
              <span>ابدأ تصميم هويتك الآن عبر واتساب</span>
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