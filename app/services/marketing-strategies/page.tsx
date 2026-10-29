"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


interface StrategyPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpiImpact: string;
  icon: React.ReactNode;
}

interface GlobalFramework {
  code: string;
  name: string;
  arabicTitle: string;
  scientificExplanation: string;
  howWeApplyIt: string;
  expectedOutcome: string;
  badgeText: string;
}

interface RoadmapPhase {
  phaseNumber: string;
  timeframe: string;
  phaseTitle: string;
  focusArea: string;
  actionItems: string[];
  milestoneDeliverable: string;
}

interface ComparisonRow {
  criterion: string;
  randomMarketing: string;
  strategicPlanning: string;
  financialImpact: string;
}

interface StrategyPackage {
  name: string;
  tagline: string;
  targetStage: string;
  isPopular: boolean;
  features: string[];
  includedDocuments: string[];
  whatsappMessage: string;
}

interface FAQEntry {
  category: string;
  question: string;
  answer: string;
}

interface BusinessStageScenario {
  stageKey: string;
  stageLabel: string;
  headline: string;
  coreChallenge: string;
  strategicSolution: string;
  recommendedChannels: string[];
  budgetAllocation: { label: string; percentage: string }[];
  primaryKPI: string;
}


const STRATEGY_PILLARS: StrategyPillar[] = [
  {
    id: "market-intelligence",
    title: "أبحاث السوق ودراسة المنافسين (Market & Competitor Intelligence)",
    subtitle: "نكشف لك خريطة السوق وأسرار منافسيك قبل إنفاق ريال أو جنيه واحد",
    description:
      "التسويق بدون بيانات هو مجرد مقامرة. نقوم بإجراء مسح شامل ودقيق للقطاع الذي تعمل به، ونحلل حجم الطلب الفعلي، المواسم الشرائية، ونفكك استراتيجيات أقوى 10 منافسين مباشرين وغير مباشرين لك. ندرس نقاط قوتهم، الثغرات في عروضهم التسويقية، مصادر زياراتهم، والرسائل الإعلانية التي يستخدمونها لنبني لك ميزة تنافسية ساحقة يصعب تقليدها.",
    deliverables: [
      "تقرير تحليل السوق وحجم الطلب والاتجاهات الصاعدة (Market Trends Report)",
      "مصفوفة تحليل المنافسين الشاملة (الأسعار، العروض، القنوات، نقاط الضعف)",
      "تحليل SWOT الرباعي العميق (نقاط القوة، الضعف، الفرص، والتهديدات)",
      "تحليل PESTEL للعوامل الاقتصادية والتقنية والاجتماعية المؤثرة في قطاعك",
      "خريطة الفجوات السوقية والفرص غير المستغلة (Blue Ocean Opportunities)",
    ],
    kpiImpact: "تقليل نسبة المخاطرة في إطلاق الحملات والمنتجات الجديدة بنسبة 75%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "buyer-persona",
    title: "هندسة شرائح العملاء والشخصيات الشرائية (Buyer Personas & Segmentation)",
    subtitle: "نعرف عميلك المثالي أكثر مما يعرف نفسه",
    description:
      "الخطأ الأكبر الذي يقع فيه المسوقون هو محاولة البيع للجميع، والنتيجة هي عدم البيع لأحد! نحن نقوم بتشريح جمهورك المستهدف إلى شرائح دقيقة، ونبني نماذج تفصيلية للشخصية الشرائية (Buyer Persona) تشمل: الدوافع النفسية العميقة، المخاوف التي تمنعهم من الشراء، القدرة المالية، المنصات التي يقضون عليها أوقاتهم، والكلمات المفتاحية التي تثير انتباههم.",
    deliverables: [
      "ملفات تفصيلية لـ 3 إلى 5 شخصيات شرائية رئيسية وثانوية (Detailed Personas)",
      "خريطة التعاطف النفسي للعميل (Customer Empathy Map: ماذا يفكر، يشعر، ويسمع؟)",
      "تحديد نقاط الألم الحقيقية (Pain Points) والمحفزات العاطفية والمنطقية للشراء",
      "تقسيم الجمهور حسب القدرة الشرائية والولاء والنطاق الجغرافي",
      "دليل الاعتراضات البيعية الشائعة لدى كل شريحة وكيفية الرد عليها تسويقياً",
    ],
    kpiImpact: "رفع معدل استجابة الجمهور للإعلانات والمحتوى بنسبة تصل إلى 210%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "value-proposition",
    title: "صياغة القيمة التنافسية والتموضع السوقي (Positioning & UVP)",
    subtitle: "لماذا يجب أن يشتري العميل منك أنت ويترك جميع المنافسين؟",
    description:
      "في سوق مزدحم بالعروض المتشابهة، نصمم لعلامتك التجارية تموضعاً ذهنياً فريداً (Brand Positioning) وعرض قيمة لا يُقاوم (Unique Value Proposition). نحن نساعدك على الخروج من حرب الأسعار وحرق الهوامش الربحية، من خلال بناء عروض ذكية وحزم خدمات ومنتجات تجعل العميل يدرك القيمة العليا التي تقدمها ويدفع مقابلها بكل قناعة.",
    deliverables: [
      "صياغة الوعد التسويقي الرئيسي وعرض القيمة الفريد (Core UVP Statement)",
      "هندسة العروض البيعية التي لا تُرفض (Irresistible Offers & Bundles)",
      "استراتيجية التسعير النفسي والتنافسي لرفع متوسط سلة المشتريات (AOV)",
      "تحديد الرسائل التسويقية الأساسية لكل خدمة أو منتج (Messaging Matrix)",
      "صياغة القصة التسويقية للعلامة التجارية (Brand Storytelling Framework)",
    ],
    kpiImpact: "زيادة متوسط قيمة الطلب الواحد (AOV) ورفع هامش الربح الصافي.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "conversion-funnel",
    title: "بناء قمع المبيعات ورحلة العميل (Sales Funnel & Customer Journey)",
    subtitle: "مسار محكم يحول الغرباء إلى عملاء مشتركين ثم إلى سفراء لعلامتك",
    description:
      "العميل لا يشتري بمجرد رؤية إعلان واحد في أغلب الأحيان. لذلك نقوم برسم رحلة العميل الكاملة (Customer Journey Mapping) عبر كافة مراحل الوعي، الاهتمام، المفاضلة، اتخاذ قرار الشراء، وما بعد البيع. نحدد بدقة ماذا يجب أن يرى العميل في كل مرحلة، وكيف نلتقط بياناته (Lead Magnet)، وكيف نعيد استهدافه (Retargeting) حتى إتمام البيع.",
    deliverables: [
      "مخطط هيكلي كامل لقمع التسويق والمبيعات (Full-Funnel Blueprint: TOFU, MOFU, BOFU)",
      "تصميم استراتيجيات جذب العملاء المحتملين (Lead Generation & Magnet Systems)",
      "خطة أتمتة المتابعة عبر الواتساب والبريد الإلكتروني لإنقاذ السلات المتروكة",
      "سيناريوهات إعادة الاستهداف الإعلاني المتدرج (Sequential Retargeting)",
      "برنامج رفع القيمة الدائمة للعميل وإعادة الشراء (Retention & Loyalty Strategy)",
    ],
    kpiImpact: "مضاعفة معدل التحويل (Conversion Rate) وتقليص دورة إغلاق المبيعات.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    id: "media-budgeting",
    title: "تخطيط القنوات وتوزيع الميزانيات الإعلانية (Media Planning & Budgeting)",
    subtitle: "توجيه كل ريال وجنيه نحو القناة التي تحقق أعلى عائد استثماري (ROAS)",
    description:
      "هل الأفضل لمشروعك الإعلان على سناب شات أم تيك توك أم محرك بحث جوجل أم انستجرام؟ في هذا القسم نضع خطة الميديا الرقمية الدقيقة (Media Buying Plan)، ونوزع ميزانيتك التسويقية بنسب رياضية مدروسة على القنوات الأكثر ربحية لقطاعك، مع وضع توقعات رقمية للوصول، النقرات، العملاء المحتملين، وتكلفة الاستحواذ المتوقعة (CAC).",
    deliverables: [
      "جدول توزيع الميزانية التسويقية الشهري والربع سنوي (Budget Allocation Sheet)",
      "اختيار المزيج الإعلاني الأمثل للمنصات (Meta, TikTok, Snapchat, Google, X, LinkedIn)",
      "تقديرات العائد المتوقع على الإنفاق الإعلاني (Projected ROAS & ROI Models)",
      "خطة الحملات الموسمية والمناسبات الكبرى (رمضان، اليوم الوطني، الجمعة البيضاء)",
      "سياسة اختبار الإعلانات وتوسيع الحملات الرابحة (A/B Testing & Scaling Protocol)",
    ],
    kpiImpact: "خفض تكلفة الاستحواذ على العميل (CAC) بنسبة تصل إلى 45%.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "content-kpi-roadmap",
    title: "استراتيجية المحتوى ومؤشرات قياس الأداء (Content Strategy & KPIs)",
    subtitle: "خطة محتوى تقنع العقول ولوحة مؤشرات تضبط البوصلة نحو الأهداف",
    description:
      "نترجم الاستراتيجية العامة إلى خطة محتوى تنفيذية تحدد المحاور الرئيسية (Content Pillars)، أنواع الفيديوهات والمنشورات، ونبرة الصوت، بالتوازي مع وضع منظومة قياس أداء صارمة (KPIs Framework) تمكنك من متابعة تقدم الشركة أسبوعياً وشهرياً بالأرقام الحقيقية بعيداً عن أرقام التفاعل الوهمية غير المربحة.",
    deliverables: [
      "بناء محاور المحتوى الاستراتيجية (التعليمي، البيعي، التفاعلي، قصص النجاح، UGC)",
      "خطة النشر والتوزيع الزمني عبر المنصات (Omnichannel Content Calendar Blueprint)",
      "تحديد مؤشرات الأداء الرئيسية لكل قسم (ROAS, CPA, CTR, LTV, Conversion Rate)",
      "وضع خطة عمل تنفيذية مفصلة بالأسابيع لمدة 90 يوماً (90-Day Action Plan)",
      "نموذج مراجعة وتطوير الخطة الدوري لمواكبة متغيرات السوق",
    ],
    kpiImpact: "وضوح تام في الرؤية الإدارية وتحويل التسويق إلى مركز ربح قابل للقياس.",
    icon: (
      <svg className="w-8 h-8 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const GLOBAL_FRAMEWORKS: GlobalFramework[] = [
  {
    code: "SOSTAC®",
    name: "منهجية SOSTAC العالمية للتخطيط",
    arabicTitle: "النظام الأشهر عالمياً لبناء الخطط المتكاملة",
    scientificExplanation:
      "إطار عمل استراتيجي معتمد من معهد تشارترد للتسويق (CIM)، يقسم التخطيط إلى 6 مراحل متسلسلة: تحليل الوضع الحالي (Situation)، الأهداف (Objectives)، الاستراتيجية (Strategy)، التكتيكات (Tactics)، التنفيذ (Action)، والرقابة (Control).",
    howWeApplyIt:
      "نستخدمه في وكالة ADS كعمود فقري لكل خطة تسويقية، لكي نضمن عدم وجود أي فجوة بين الأهداف الطموحة للإدارة العليا وبين المهام اليومية التي ينفذها فريق التسويق والمبيعات.",
    expectedOutcome: "خطة مترابطة 100% قابلة للتنفيذ الفوري على أرض الواقع.",
    badgeText: "المعيار الذهبي للتخطيط",
  },
  {
    code: "AARRR",
    name: "إطار قراصنة النمو (Pirate Metrics)",
    arabicTitle: "منهجية النمو السريع للمتاجر والشركات الرقمية",
    scientificExplanation:
      "نموذج عالمي يركز على المراحل الخمس الحاسمة لنمو أي بيزنس: الاستحواذ (Acquisition)، التفعيل (Activation)، الاحتفاظ بالعميل (Retention)، الإحالة والتوصية (Referral)، وتعظيم الإيرادات (Revenue).",
    howWeApplyIt:
      "نطبقه بدقة لمعرفة أين يتسرب العملاء في مشروعك؛ هل المشكلة في قلة الزوار؟ أم في عدم شرائهم من الموقع؟ أم في عدم عودتهم للشراء مرة ثانية؟ ثم نضع الحلول الجذرية لكل مرحلة.",
    expectedOutcome: "مضاعفة القيمة الدائمة للعميل (LTV) ونمو تراكمي مستدام.",
    badgeText: "مضاعف الأرباح والنمو",
  },
  {
    code: "SMART & OKRs",
    name: "هندسة الأهداف والنتائج الرئيسية",
    arabicTitle: "تحويل الأحلام التسويقية إلى أرقام محددة بزمن",
    scientificExplanation:
      "منهجية إدارية ترفض الأهداف الضبابية مثل (نريد زيادة المبيعات)، وتحولها إلى أهداف محددة، قابلة للقياس، قابلة للتحقيق، مرتبطة بالربحية، ومحددة بإطار زمني صارم.",
    howWeApplyIt:
      "نصيغ لك أهدافاً ربع سنوية واضحة مثل: (الوصول إلى 1,500 طلب شهري بمتوسط سلة 350 ريال وتكلفة استحواذ لا تتجاوز 45 ريال خلال الربع الثالث من العام).",
    expectedOutcome: "قدرة كاملة على محاسبة الفرق الإعلانية وقياس نسبة الإنجاز بدقة.",
    badgeText: "حوكمة الأداء التسويقي",
  },
];

const NINETY_DAY_ROADMAP: RoadmapPhase[] = [
  {
    phaseNumber: "المرحلة 01",
    timeframe: "الأيام 1 - 30 (الشهر الأول)",
    phaseTitle: "التشخيص، تأسيس البنية التحتية، وإطلاق الاختبارات",
    focusArea: "إغلاق الثقوب التسويقية وبناء أساس التحويل",
    actionItems: [
      "تدقيق شامل للحسابات الإعلانية السابقة والموقع الإلكتروني ومنصات التواصل",
      "ضبط أكواد التتبع والبيكسل (Meta Pixel, Snap Pixel, TikTok, Google Analytics 4)",
      "تهيئة صفحات الهبوط والمتجر لرفع معدل التحويل (CRO Optimization)",
      "إطلاق حملات الاختبار الأولية للرسائل الإعلانية والشرائح الجمهور (Testing Phase)",
    ],
    milestoneDeliverable: "بنية تسويقية جاهزة للتحويل + بيانات دقيقة لأفضل الشرائح استجابة",
  },
  {
    phaseNumber: "المرحلة 02",
    timeframe: "الأيام 31 - 60 (الشهر الثاني)",
    phaseTitle: "التحسين، بناء قمع إعادة الاستهداف، وتثبيت العائد",
    focusArea: "تحويل الزيارات إلى مبيعات مستمرة وخفض التكلفة",
    actionItems: [
      "إيقاف الإعلانات ضعيفة الأداء وتركيز الميزانية على الإعلانات الرابحة (Winners)",
      "تفعيل حملات إعادة الاستهداف الذكية (Retargeting) لزوار الموقع والمتفاعلين",
      "إطلاق عروض رفع متوسط سلة الشراء (Upselling & Cross-selling Bundles)",
      "تفعيل مسارات المتابعة الآلية عبر الواتساب والرسائل الترويجية",
    ],
    milestoneDeliverable: "استقرار تدفق المبيعات اليومي وانخفاض واضح في تكلفة العميل (CAC)",
  },
  {
    phaseNumber: "المرحلة 03",
    timeframe: "الأيام 61 - 90 (الشهر الثالث)",
    phaseTitle: "التوسع الرأسي والأفقي ومضاعفة الأرباح (Scaling)",
    focusArea: "السيطرة على الحصة السوقية وتعظيم ولاء العملاء",
    actionItems: [
      "مضاعفة الميزانيات الإعلانية تدريجياً في القنوات الرابحة مع الحفاظ على الـ ROAS",
      "التوسع في شرائح جمهور مشابهة للعملاء المشترين (Lookalike Audiences)",
      "إطلاق برامج الولاء وإعادة الشراء للعملاء السابقين لرفع صافي الربح",
      "تقييم أداء الربع الأول وبناء خطة التوسع للربع التالي",
    ],
    milestoneDeliverable: "تحقيق مستهدفات المبيعات الربعية وبناء ماكينة تسويق ذاتية النمو",
  },
];

const COMPARISON_TABLE: ComparisonRow[] = [
  {
    criterion: "طريقة إنفاق الميزانية الإعلانية",
    randomMarketing: "إنفاق عشوائي عبر زر (ترويج المنشور) بدون أهداف تحويل أو دراسة مسبقة للجمهور.",
    strategicPlanning: "توزيع مدروس للميزانية على مراحل القمع التسويقي بناءً على حسابات تكلفة الاستحواذ والعائد.",
    financialImpact: "حماية ما يصل إلى 60% من الميزانية من الهدر الإعلاني غير المجدي.",
  },
  {
    criterion: "الرسالة التسويقية والمحتوى",
    randomMarketing: "نشر تصميمات وعبارات تقليدية مقلدة من المنافسين لا تحرك مشاعر العميل ولا تقنعه.",
    strategicPlanning: "رسائل بيعية مصممة خصيصاً لمخاطبة نقاط الألم والدوافع النفسية لكل شريحة عملاء.",
    financialImpact: "مضاعفة نسبة النقر والطلب المباشر من نفس عدد المشاهدات.",
  },
  {
    criterion: "التعامل مع المنافسة في السوق",
    randomMarketing: "الدخول في حرب حرق أسعار مستمرة تؤدي إلى تآكل الأرباح وضعف جودة الخدمة.",
    strategicPlanning: "بناء تموضع تنافسي فريد وعروض قيمة مضافة تجعل العميل يختارك لجودتك وتميزك.",
    financialImpact: "البيع بأسعار عادلة ومربحة مع الحفاظ على ولاء العملاء.",
  },
  {
    criterion: "قياس النجاح والتقارير",
    randomMarketing: "الاعتماد على اللايكات والمشاهدات الوهمية التي لا تدفع فواتير الشركة ولا رواتب الموظفين.",
    strategicPlanning: "التركيز الصارم على مؤشرات البيزنس الحقيقية: المبيعات، العائد (ROAS)، وصافي الربح.",
    financialImpact: "رؤية مالية واضحة وقدرة على التنبؤ بمبيعات الشهور القادمة.",
  },
];

const STRATEGY_PACKAGES: StrategyPackage[] = [
  {
    name: "باقة خطة الانطلاق والتركيز (Launch & Focus Plan)",
    tagline: "البوصلة الاستراتيجية المثالية للمشاريع الجديدة والمتاجر الناشئة",
    targetStage: "مخصصة للمشاريع في مرحلة التأسيس أو الإطلاق الأول",
    isPopular: false,
    features: [
      "دراسة السوق المستهدف وتحليل أبرز 5 منافسين مباشرين",
      "بناء ملفات تفصيلية لـ 3 شخصيات شرائية (Buyer Personas)",
      "صياغة عرض القيمة الفريد (UVP) والرسائل التسويقية الأساسية",
      "تحديد أفضل منصتين إعلانيتين للانطلاق وتوزيع الميزانية المقترحة",
      "تصميم رحلة العميل الأساسية وقمع المبيعات الأولي (Sales Funnel)",
      "خطة محتوى استراتيجية ومحاور نشر لمدة 30 يوماً",
      "تحديد مؤشرات الأداء الرئيسية (KPIs) ومستهدفات المرحلة الأولى",
    ],
    includedDocuments: ["PDF Strategy Book", "Budget Sheet (Excel)", "30-Day Action Plan"],
    whatsappMessage:
      "مرحباً وكالة ADS، أرغب في طلب (باقة خطة الانطلاق والتركيز - Launch & Focus Plan) لمشروعي.",
  },
  {
    name: "باقة استراتيجية النمو الشاملة (360° Growth Blueprint)",
    tagline: "الخطة التسويقية المتكاملة لمضاعفة المبيعات والسيطرة على السوق",
    targetStage: "الأكثر طلباً للشركات القائمة والمتاجر الباحثة عن التوسع",
    isPopular: true,
    features: [
      "مسح سوقي معمق وتحليل شامل لأقوى 10 منافسين مع مصفوفة SWOT & PESTEL",
      "هندسة الشرائح الشرائية وخريطة التعاطف النفسي ومسارات الإقناع البيعي",
      "إعادة هيكلة العروض التسويقية والتسعير النفسي لرفع متوسط السلة (AOV)",
      "بناء قمع مبيعات متعدد القنوات (Omnichannel Funnel) مع خطة Retargeting",
      "خطة الميديا وتوزيع الميزانيات الإعلانية التفصيلية لمدة 90 يوماً (ربع سنة)",
      "استراتيجية المحتوى الشاملة + سيناريوهات الحملة الإعلانية الرئيسية",
      "خطة تحسين معدل التحويل للموقع أو المتجر (CRO Audit & Recommendations)",
      "جلسة عرض ومناقشة استراتيجية مباشرة مع الإدارة لتسليم وشرح الخطة",
    ],
    includedDocuments: [
      "Master Strategy Deck",
      "90-Day Roadmap",
      "Media Buying Calculator",
      "CRO Checklist",
    ],
    whatsappMessage:
      "مرحباً وكالة ADS، أرغب في طلب (باقة استراتيجية النمو الشاملة - 360 Growth Blueprint) لشركتي.",
  },
  {
    name: "باقة الاستشارات والقيادة التسويقية (Enterprise & CMO Advisory)",
    tagline: "تخطيط سنوي وإشراف استراتيجي مباشر للمؤسسات الكبرى والعلامات الرائدة",
    targetStage: "للشركات الكبرى والمصانع والتوسع الإقليمي (السعودية والخليج ومصر)",
    isPopular: false,
    features: [
      "بناء الاستراتيجية التسويقية السنوية الكاملة (Full-Year Marketing Masterplan)",
      "دراسات جدوى تسويقية للتوسع في أسواق جغرافية أو دول جديدة",
      "هندسة منظومة المبيعات المؤسسية (B2B & B2C) والربط مع أنظمة الـ CRM",
      "تخطيط الحملات الإعلانية الكبرى والمواسم السنوية بميزانيات ضخمة",
      "بناء هيكل قسم التسويق الداخلي وتحديد المهام ومؤشرات التقييم (OKRs)",
      "استراتيجيات الاحتفاظ بالعملاء وبرامج الولاء وتعظيم القيمة الدائمة (LTV)",
      "اجتماعات متابعة وتوجيه استراتيجي دورية (كمدير تسويق تنفيذي خارجي Fractional CMO)",
      "تقارير تحليل أداء متقدمة وتحديث مستمر للخطة حسب متغيرات السوق",
    ],
    includedDocuments: [
      "Annual Masterplan",
      "Financial & ROAS Projections",
      "CRM & Funnel Architecture",
      "Monthly Executive Audits",
    ],
    whatsappMessage:
      "مرحباً وكالة ADS، أرغب في الاستفسار عن (باقة الاستشارات والقيادة التسويقية السنوية - Enterprise Strategy).",
  },
];

const FAQ_LIST: FAQEntry[] = [
  {
    category: "جدوى الخطة التسويقية",
    question: "لماذا أحتاج إلى خطة تسويقية مكتوبة بدلاً من البدء في تمويل الإعلانات فوراً؟",
    answer:
      "البدء في الإعلانات الممولة بدون خطة استراتيجية يشبه بناء برج سكني بدون رسومات هندسية؛ قد تنفق آلاف الريالات أو الجنيهات في استهداف جمهور خاطئ أو برسالة بيعية غير مقنعة. الخطة التسويقية تختصر عليك شهوراً من التجارب الخاسرة، وتحدد لك بدقة لمن تبيع، وبأي سعر وعرض، وفي أي منصة، مما يجعل كل ريال تضعه في الإعلانات يعود عليك بأضعافه.",
  },
  {
    category: "التنفيذ والتطبيق",
    question: "هل الخطة التي أستلمها تكون نظرية أم خطة عملية قابلة للتنفيذ الفوري؟",
    answer:
      "نحن في وكالة ADS نرفض الحشو النظري والأكاديمي غير المفيد. الخطة التي تستلمها هي دليل عمل تنفيذي (Actionable Playbook) مصمم خصيصاً لبيانات مشروعك وأرقامك؛ تحتوي على جداول زمنية بالأسابيع، تقسيم واضح للميزانيات بالأرقام، أمثلة عملية للرسائل الإعلانية، ومهام محددة يمكن لفريقك الداخلي تنفيذها فوراً، أو يمكنك تكليف فريقنا بتنفيذها بالكامل.",
  },
  {
    category: "الأسواق المستهدفة",
    question: "هل لديكم خبرة في بناء خطط تسويقية مخصصة للسوق السعودي والخليجي والمصري؟",
    answer:
      "نعم بكل فخر، تمتد خبرتنا لأكثر من 15 عاماً في دراسة سلوك المستهلك السعودي والخليجي والمصري. نحن ندرك الفروقات الثقافية والبيعية الدقيقة بين كل سوق؛ فما ينجح في الرياض أو جدة من حيث المنصات (مثل سناب شات وتيك توك) وأسلوب الخطاب يختلف عما ينجح في القاهرة أو دبي، ونبني خطتك لتتوافق 100% مع طبيعة السوق المستهدف.",
  },
  {
    category: "المتابعة والتنفيذ",
    question: "هل يمكن لوكالة ADS تولي تنفيذ الخطة التسويقية وإدارة الحملات بعد إعدادها؟",
    answer:
      "بكل تأكيد! باعتبارنا وكالة تسويق رقمي متكاملة الخدمات (Full-Service Agency)، فإن أفضل النتائج تتحقق عندما يقوم نفس العقل الذي رسم الاستراتيجية بالإشراف على تنفيذها؛ حيث تتكامل لدينا أقسام صناعة المحتوى، التصميم، إنتاج الفيديوهات، إدارة الإعلانات الممولة، والـ SEO لتحويل الخطة إلى مبيعات حقيقية على أرض الواقع.",
  },
  {
    category: "المدة والتسليم",
    question: "كم يستغرق إعداد الخطة التسويقية الكاملة؟ وكيف يتم تسليمها؟",
    answer:
      "تستغرق عملية البحث والتحليل وبناء الخطة الاستراتيجية من 7 إلى 12 يوم عمل حسب حجم المشروع وتعقيد السوق. يتم تسليم الخطة في ملفات احترافية منظمة (عروض تقديمية PDF وجداول Excel تفاعلية للميزانيات والخطط الزمنية)، مع عقد اجتماع أونلاين مخصص لشرح كافة تفاصيل الخطة والإجابة عن جميع استفساراتك.",
  },
];

const STAGE_SCENARIOS: Record<string, BusinessStageScenario> = {
  launch: {
    stageKey: "launch",
    stageLabel: "🚀 مشروع جديد قيد الإطلاق",
    headline: "استراتيجية الاختراق السريع وبناء الثقة الأولية",
    coreChallenge: "عدم معرفة الجمهور بالعلامة التجارية وغياب التجارب السابقة للعملاء.",
    strategicSolution:
      "التركيز على عرض تأسيسي قوي منخفض المخاطرة (Risk-Free Offer) مع محتوى مكثف يبرز جودة المنتج (UGC)، واستهداف شرائح محددة جداً ذات احتياج عاجل لتحقيق أول 100 عميل بأقل تكلفة.",
    recommendedChannels: ["إعلانات تيك توك وسناب شات التفاعلية", "فيديوهات UGC قصيرة", "عروض الافتتاح المحدودة بوقت"],
    budgetAllocation: [
      { label: "إعلانات الجذب والوعي البيعي", percentage: "50%" },
      { label: "إنتاج محتوى مقنع وعينات تجربة", percentage: "30%" },
      { label: "إعادة الاستهداف وإغلاق المبيعات", percentage: "20%" },
    ],
    primaryKPI: "تكلفة اكتساب أول عميل (First-Time CAC) ومعدل التحويل الأولي.",
  },
  stagnant: {
    stageKey: "stagnant",
    stageLabel: "📉 شركة قائمة تعاني من ثبات المبيعات",
    headline: "استراتيجية كسر الجمود وتعظيم كفاءة قمع التحويل",
    coreChallenge: "ارتفاع تكلفة الإعلانات مع ثبات أو تراجع العائد على الإنفاق (ROAS).",
    strategicSolution:
      "إجراء فحص شامل لرحلة العميل لكشف مناطق التسرب، إعادة صياغة العروض التسويقية لرفع متوسط قيمة الطلب (AOV)، وتنشيط قاعدة بيانات العملاء القدامى للشراء المتكرر بدون تكلفة إعلانية.",
    recommendedChannels: ["تحسين معدل التحويل (CRO)", "حملات Retargeting المتدرجة", "التسويق عبر واتساب للعملاء السابقين"],
    budgetAllocation: [
      { label: "حملات التحويل المباشر والعروض المدمجة", percentage: "45%" },
      { label: "إعادة الاستهداف واسترجاع السلات المتروكة", percentage: "35%" },
      { label: "تنشيط العملاء الحاليين وبرامج الولاء", percentage: "20%" },
    ],
    primaryKPI: "العائد على الإنفاق الإعلاني (ROAS) ومتوسط قيمة السلة (AOV).",
  },
  scaling: {
    stageKey: "scaling",
    stageLabel: "📈 علامة ناجحة تهدف للتوسع والسيطرة",
    headline: "استراتيجية التوسع الإقليمي ومضاعفة الحصة السوقية (Scaling)",
    coreChallenge: "الرغبة في مضاعفة الميزانيات الإعلانية وفتح أسواق جديدة دون انهيار الربحية.",
    strategicSolution:
      "بناء منظومة تسويق متعددة القنوات (Omnichannel) تجمع بين الإعلانات المدفوعة القوية، السيطرة على محركات البحث (SEO)، وتعزيز قوة البراند ليكون الخيار التلقائي الأول في ذهن المستهلك.",
    recommendedChannels: ["توسيع حملات Meta & Google & Snap", "تحسين محركات البحث SEO", "شراكات المؤثرين والـ PR"],
    budgetAllocation: [
      { label: "توسيع الحملات الرابحة (Horizontal & Vertical Scaling)", percentage: "60%" },
      { label: "بناء الأصول المستدامة (SEO & Brand Authority)", percentage: "25%" },
      { label: "ابتكار واختبار قنوات وزوايا إعلانية جديدة", percentage: "15%" },
    ],
    primaryKPI: "الحصة السوقية، القيمة الدائمة للعميل (LTV)، وصافي الربح الكلي (MER).",
  },
};


export default function MarketingStrategiesPage() {
  const [activePillarId, setActivePillarId] = useState<string>(STRATEGY_PILLARS[0].id);
  const [selectedStage, setSelectedStage] = useState<string>("stagnant");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activePillar =
    STRATEGY_PILLARS.find((item) => item.id === activePillarId) || STRATEGY_PILLARS[0];
  const currentStageData = STAGE_SCENARIOS[selectedStage];

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
          <source src="/marketing plans.mp4" type="video/mp4" />
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
          <source src="/marketing plans.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>


        <div className="absolute inset-0 bg-gradient-to-l from-[#070b14]/95 via-[#070b14]/80 to-[#0b132b]/65 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070b14_100%)] opacity-70 z-[1]" />


        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-7" dir="rtl">
          

          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#070b14]/80 border border-[#00e5ff]/60 shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-[#00e5ff] text-xs md:text-sm font-black tracking-wider uppercase">
              التخطيط الاستراتيجي وهندسة النمو الرقمي
            </span>
          </div>

          {/* العنوان الرئيسي الضخم */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            الاستراتيجيات{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0077b6] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              والخطط التسويقية
            </span>
          </h1>

          {/* الوصف الأساسي المطلوب */}
          <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] bg-[#070b14]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            نبتكر لك خططاً تسويقية مدروسة بعناية تستهدف جمهورك بدقة وتضمن أعلى عائد على الاستثمار.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-2">
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🎯</span>
              <span className="text-white text-sm md:text-base font-bold">استهداف دقيق للشرائح الشرائية</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">📊</span>
              <span className="text-white text-sm md:text-base font-bold">توزيع ذكي للميزانيات الإعلانية</span>
            </div>
            <div className="bg-[#070b14]/80 backdrop-blur-md border border-[#00e5ff]/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="text-[#00e5ff] text-xl font-black">🚀</span>
              <span className="text-white text-sm md:text-base font-bold">تعظيم العائد على الاستثمار ROI</span>
            </div>
          </div>

          {/* أزرار اتخاذ القرار (CTA) */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 w-full">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%88%D8%AE%D8%B7%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9%20%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84%D8%A9%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-base md:text-xl shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_55px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>احصل على خطتك التسويقية عبر واتساب</span>
              <span>↗</span>
            </a>

            <a
              href="#strategy-packages"
              className="px-8 py-5 rounded-2xl border-2 border-[#00e5ff] bg-[#070b14]/85 text-[#00e5ff] font-black text-base md:text-lg backdrop-blur-md hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300"
            >
              استعرض باقات الخطط التسويقية
            </a>
          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "356%",
              label: "فرصة أكبر لتحقيق الأهداف",
              desc: "الشركات التي تعمل وفق خطة تسويقية مكتوبة وموثقة تضاعف فرص نجاحها مقارنة بالتسويق العشوائي.",
            },
            {
              number: "-45%",
              label: "وفر في الميزانيات الإعلانية",
              desc: "التحديد المسبق للشرائح الشرائية والقنوات الرابحة يمنع هدر الميزانية في اختبارات غير مدروسة.",
            },
            {
              number: "3.8x",
              label: "مضاعفة العائد على الاستثمار",
              desc: "ربط القمع التسويقي برحلة العميل المتكاملة يرفع معدل التحويل النهائي ويعظم الأرباح الصافية.",
            },
            {
              number: "+15 عاماً",
              label: "خبرة استراتيجية ميدانية",
              desc: "خبرة متراكمة في قيادة وتخطيط المئات من الحملات والمشاريع الناجحة في السعودية ومصر والخليج.",
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
            مكونات الخطة الاستراتيجية الشاملة
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ماذا تتضمن{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              وثيقة الخطة التسويقية
            </span>{" "}
            التي نبتكرها لك؟
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            نحن نبني لك دستوراً تسويقياً متكاملاً يغطي 6 محاور رئيسية لا غنى عنها لأي مشروع يطمح للصدارة. انقر على كل محور لاستكشاف المخرجات التفصيلية:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          

          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {STRATEGY_PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
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
                  المحور الاستراتيجي والتسليمات
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
                <span>📑</span>
                <span>التقارير والنماذج التي تستلمها في هذا المحور:</span>
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
                <span>📈 العائد المباشر:</span>
                <span className="text-white">{activePillar.kpiImpact}</span>
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، أود الاستفسار عن محور (${activePillar.title}) ضمن الخطة التسويقية.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#00e5ff] text-[#070b14] font-black text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                اطلب استشارة في هذا المحور ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/65 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.12)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 w-fit">
                منهجيات تخطيط عالمية معتمدة
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-snug">
                نخطط لنجاحك بأقوى{" "}
                <span className="text-[#00e5ff]">النماذج العلمية العالمية</span>{" "}
                في إدارة التسويق
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                في وكالة ADS، لا نعتمد على التخمين أو التجارب العشوائية في أموال عملائنا. نحن نصيغ خطتك التسويقية بالدمج بين أرقى النظريات الإدارية العالمية وبين خبرتنا الميدانية العميقة في أسواق الشرق الأوسط، لنضمن لك خطة محكمة لا تترك مجالاً للصدفة.
              </p>
            </div>


            <div className="lg:col-span-5 relative h-[320px] md:h-[380px] w-full">
              <Image
                src="/marketing strategies plans.webp"
                alt="الاستراتيجيات والخطط التسويقية"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,229,255,0.35)]"
              />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GLOBAL_FRAMEWORKS.map((fw, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/85 p-7 flex flex-col justify-between gap-6 hover:border-[#00e5ff] transition-all duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3 py-1 rounded-full border border-[#00e5ff]/30">
                      {fw.badgeText}
                    </span>
                    <span className="text-2xl font-black text-[#00e5ff] font-mono">
                      {fw.code}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mt-2">{fw.name}</h3>
                  <span className="text-xs text-[#00e5ff] font-semibold">{fw.arabicTitle}</span>
                  
                  <p className="text-gray-300 text-sm leading-relaxed border-b border-white/10 pb-4 mt-2">
                    <strong className="text-white block mb-1">المفهوم العلمي:</strong>
                    {fw.scientificExplanation}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed pt-1">
                    <strong className="text-[#00e5ff] block mb-1">تطبيقنا العملي له:</strong>
                    {fw.howWeApplyIt}
                  </p>
                </div>

                <div className="text-xs text-gray-300 bg-[#0b132b] px-4 py-3 rounded-xl border border-[#00e5ff]/20 text-center font-bold">
                  النتيجة: {fw.expectedOutcome}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/40 bg-gradient-to-b from-[#0b132b]/90 to-[#070b14]/95 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.15)]">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#00e5ff] text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-3">
              محاكي التخطيط الذكي
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              في أي مرحلة يمر مشروعك الآن؟
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              تختلف الاستراتيجية التسويقية وتوزيع الميزانيات باختلاف المرحلة العمرية لمشروعك. اختر وضعك الحالي لترى الروشتة الاستراتيجية التي نوصي بها:
            </p>
          </div>

          {/* أزرار اختيار مرحلة المشروع */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {Object.values(STAGE_SCENARIOS).map((st) => (
              <button
                key={st.stageKey}
                onClick={() => setSelectedStage(st.stageKey)}
                className={`px-6 py-3.5 rounded-full font-bold text-sm md:text-base transition-all cursor-pointer ${
                  selectedStage === st.stageKey
                    ? "bg-[#00e5ff] text-[#070b14] shadow-[0_0_25px_rgba(0,229,255,0.6)] scale-105"
                    : "bg-[#070b14] text-gray-300 border border-[#00e5ff]/30 hover:border-[#00e5ff]"
                }`}
              >
                {st.stageLabel}
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-[#00e5ff]/30 bg-[#070b14]/90 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#00e5ff] uppercase">
                التوجه الاستراتيجي الموصى به:
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white">
                {currentStageData.headline}
              </h3>

              <div className="p-4 rounded-2xl bg-[#0b132b]/80 border border-white/10 mt-1">
                <span className="text-xs text-[#00e5ff] font-bold block mb-1">
                  ⚠️ التحدي الرئيسي في هذه المرحلة:
                </span>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {currentStageData.coreChallenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30">
                <span className="text-xs text-[#00e5ff] font-bold block mb-1">
                  💡 الحل الاستراتيجي في وكالة ADS:
                </span>
                <p className="text-sm text-white leading-relaxed font-medium">
                  {currentStageData.strategicSolution}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-xs text-gray-400 font-bold ml-2">القنوات ذات الأولوية:</span>
                {currentStageData.recommendedChannels.map((ch, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#0b132b] text-[#00e5ff] px-3 py-1.5 rounded-xl border border-[#00e5ff]/30 font-semibold"
                  >
                    • {ch}
                  </span>
                ))}
              </div>
            </div>


            <div className="lg:col-span-5 flex flex-col gap-5 p-6 rounded-2xl bg-[#0b132b] border border-[#00e5ff]/25">
              <h4 className="text-white font-black text-base text-center border-b border-white/10 pb-3">
                النموذج المثالي لتوزيع الميزانية في مرحلتك
              </h4>

              <div className="flex flex-col gap-4">
                {currentStageData.budgetAllocation.map((alloc, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-gray-200 font-semibold">{alloc.label}</span>
                      <span className="text-[#00e5ff] font-black">{alloc.percentage}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#070b14] overflow-hidden border border-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#00e5ff] to-[#0077b6] rounded-full"
                        style={{ width: alloc.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-[#070b14] border border-white/5 text-xs text-gray-300 text-center">
                <strong className="text-[#00e5ff] block mb-0.5">البوصلة الرقمية (KPI):</strong>
                {currentStageData.primaryKPI}
              </div>

              <a
                href={`https://wa.me/201151033384?text=${encodeURIComponent(
                  `مرحباً وكالة ADS، مشروعي حالياً في مرحلة (${currentStageData.stageLabel}) وأرغب في بناء خطة تسويقية مخصصة.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-4 rounded-xl bg-[#00e5ff] text-[#070b14] text-sm font-black hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all"
              >
                اطلب خطة مخصصة لمرحلة مشروعك ↗
              </a>
            </div>

          </div>

        </div>
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            الجدول الزمني للتطبيق
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            خارطة الطريق لتحويل الخطة إلى{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              نتائج ملموسة في 90 يوماً
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            كيف نقسم العمل الاستراتيجي والتنفيذي خلال الأشهر الثلاثة الأولى لضمان الانطلاق السريع والنمو المستقر:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {NINETY_DAY_ROADMAP.map((phase, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-8 flex flex-col justify-between gap-6 relative overflow-hidden group hover:border-[#00e5ff] hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                    {phase.phaseNumber}
                  </span>
                  <span className="text-xs font-bold text-gray-200 bg-[#070b14] px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30">
                    🗓 {phase.timeframe}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                  {phase.phaseTitle}
                </h3>

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

              <div className="border-t border-white/10 pt-4 bg-[#070b14]/60 -mx-8 -mb-8 p-6">
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
      </section>


      <section className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/75 backdrop-blur-xl p-6 md:p-12 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              الفرق بين التسويق بالمحاولة والخطأ وبين{" "}
              <span className="text-[#00e5ff]">التخطيط الاستراتيجي</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              كيف تحمي استثماراتك وتضاعف عوائدك من خلال العمل وفق خطة مدروسة:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-[#00e5ff]/30 bg-[#070b14]/80">
                  <th className="p-4 md:p-5 text-[#00e5ff] font-black text-sm md:text-base rounded-tr-2xl">
                    وجه المقارنة
                  </th>
                  <th className="p-4 md:p-5 text-gray-400 font-bold text-sm md:text-base">
                    التسويق العشوائي غير المخطط
                  </th>
                  <th className="p-4 md:p-5 text-white font-black text-sm md:text-base bg-[#00e5ff]/10">
                    التخطيط الاستراتيجي في وكالة ADS
                  </th>
                  <th className="p-4 md:p-5 text-[#00e5ff] font-black text-sm md:text-base rounded-tl-2xl">
                    الأثر المالي على شركتك
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm md:text-base">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 md:p-5 font-black text-white whitespace-nowrap">
                      {row.criterion}
                    </td>
                    <td className="p-4 md:p-5 text-gray-400 leading-relaxed">
                      {row.randomMarketing}
                    </td>
                    <td className="p-4 md:p-5 text-gray-100 font-medium bg-[#00e5ff]/5 leading-relaxed border-x border-[#00e5ff]/20">
                      ✓ {row.strategicPlanning}
                    </td>
                    <td className="p-4 md:p-5 text-[#00e5ff] font-semibold leading-relaxed">
                      {row.financialImpact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>


      <section id="strategy-packages" className="w-full max-w-[1400px] mx-auto px-2" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            باقات التخطيط الاستراتيجي
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            اختر باقة الخطة التسويقية{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              المناسبة لأهدافك
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            نقدم لك خططاً مفصلة على مقاس مشروعك، مدعومة بالأرقام والأبحاث الجاهزة للتطبيق المباشر:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {STRATEGY_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 relative ${
                pkg.isPopular
                  ? "border-2 border-[#00e5ff] bg-[#0b132b]/95 shadow-[0_0_50px_rgba(0,229,255,0.3)] lg:-translate-y-4"
                  : "border border-[#00e5ff]/30 bg-[#0b132b]/65 hover:border-[#00e5ff]"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] text-xs font-black px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.6)] uppercase tracking-wider whitespace-nowrap">
                  الخيار الأكثر طلباً للشركات والمتاجر ⭐
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/30 inline-block mb-4">
                  {pkg.targetStage}
                </span>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {pkg.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 pb-6 border-b border-white/10">
                  {pkg.tagline}
                </p>

                <h4 className="text-white font-bold text-sm mb-4">
                  تشمل الباقة إعداد وتسليم العناصر التالية:
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

              <div className="flex flex-col gap-5 pt-6 border-t border-white/10">
                <div>
                  <span className="text-xs text-gray-400 block mb-2">الوثائق والملفات المسلمة:</span>
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {pkg.includedDocuments.map((doc, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] font-mono font-bold bg-[#070b14] text-[#00e5ff] px-2.5 py-1 rounded-md border border-[#00e5ff]/30"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/201151033384?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-black text-center text-base transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)]"
                      : "bg-[#070b14] text-[#00e5ff] border border-[#00e5ff]/60 hover:bg-[#00e5ff] hover:text-[#070b14]"
                  }`}
                >
                  اطلب الخطة الآن عبر واتساب ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1000px] mx-auto px-2" dir="rtl">
        <div className="text-center mb-12">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4">
            إجابات استشارية واضحة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            الأسئلة الشائعة حول الاستراتيجيات والخطط التسويقية
          </h2>
          <p className="text-gray-300 text-base">
            كل ما تحتاج إلى معرفته قبل البدء في بناء خطة النمو الخاصة بمشروعك:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaq === index;
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
                  onClick={() => setOpenFaq(isOpen ? null : index)}
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
            توقف عن التجارب العشوائية وابدأ التخطيط المدروس
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لمضاعفة مبيعاتك بخطة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">
              تضمن أعلى عائد على الاستثمار؟
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع خبراء التخطيط الاستراتيجي في وكالة ADS عبر الواتساب، ودعنا نحلل وضع مشروعك ونبني لك خارطة طريق تقودك إلى صدارة سوقك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://wa.me/201151033384?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20ADS%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%81%D9%8A%20%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%B7%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%84%D8%B4%D8%B1%D9%83%D8%AA%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-lg shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300"
            >
              <span>احجز جلستك الاستراتيجية عبر واتساب</span>
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