import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { number: "+15", label: "سنوات من الخبرة الريادية" },
    { number: "+500", label: "مشروع ناجح ومكتمل" },
    { number: "+300", label: "عميل دائم حول العالم" },
    { number: "24/7", label: "دعم فني واستجابة فورية" },
  ];

  const coreValues = [
    {
      title: "الإبداع والابتكار المطلق",
      desc: "لا نؤمن بالحلول التقليدية، بل نبتكر استراتيجيات وتصميمات فريدة تضع علامتك في قمة المنافسة وتخطف الأنظار.",
      icon: "✨",
    },
    {
      title: "الاحترافية والالتزام بالأداء",
      desc: "نلتزم بأعلى معايير الجودة العالمية في كل تفصيلة، لضمان تقديم نتائج حقيقية وملموسة ترفع مبيعاتك وأرباحك.",
      icon: "🎯",
    },
    {
      title: "الشفافية وبناء الشراكات",
      desc: "نحن لسنا مجرد مزود خدمة، بل شركاء نجاحك الحقيقيون؛ نطلعك على كافة التفاصيل والتقارير بشفافية تامة ومستمرة.",
      icon: "🤝",
    },
    {
      title: "السرعة والتطور المستمر",
      desc: "نواكب أحدث تقنيات العصر وأدوات الذكاء الاصطناعي وخوارزميات محركات البحث لنبقيك دائماً في الصدارة.",
      icon: "⚡",
    },
  ];

  const timeline = [
    {
      year: "2011",
      title: "الانطلاقة الأولى وتأسيس الشغف",
      desc: "بدأت رحلتنا برؤية طموحة في عالم الويب والتصميم، لنضع اللبنة الأولى لما سصبح فيما بعد واحدة من أبرز الوكالات الرقمية.",
    },
    {
      year: "2016",
      title: "التوسع الإقليمي واختراق الأسواق",
      desc: "توسعنا في تقديم خدماتنا لتشمل الأسواق الخليجية والعربية الكبرى، ونفذنا مئات المشاريع بنجاح باهر وثقة مطلقة من عملائنا.",
    },
    {
      year: "2021",
      title: "ثورة الحلول المتكاملة والذكاء الرقمي",
      desc: "أطلقنا حزمة حلول متطورة تضم التسويق الشامل، وتطوير المتاجر الإلكترونية الكبرى، وحملات الإعلانات الممولة المتقدمة.",
    },
    {
      year: "2026 وما بعدها",
      title: "الريادة المطلقة والمستقبل الرقمي",
      desc: "نواصل قيادة السوق بأكثر من 15 عاماً من الخبرة، مبتكرين أحدث التقنيات لنصنع لعملائنا نجاحات لا توقفها حدود.",
    },
  ];

  const teamExpertise = [
    {
      role: "خبراء الاستراتيجيات والتخطيط التسويقي",
      desc: "نخبة من ألمع العقول التسويقية لتحليل السوق وبناء مسارات نمو تضمن أعلى عائد على الاستثمار.",
    },
    {
      role: "مهندسو ومطورو الويب والمتاجر",
      desc: "مطورون محترفون يبنون مواقع فائقة السرعة، متجاوبة، ومؤمنة بأحدث التقنيات العالمية.",
    },
    {
      role: "فريق الإبداع البصري وصناعة المحتوى",
      desc: "مبدعون يصيغون الكلمات وينتجون الفيديوهات والهويات البصرية التي تحول الزوار إلى عملاء دائمين.",
    },
    {
      role: "متخصصو محركات البحث والإعلانات (SEO & Ads)",
      desc: "خبراء يتصدرون بك مواقعك في نتائج جوجل ويديرون ميزانياتك الإعلانية بأعلى كفاءة ممكنة.",
    },
  ];

  return (
    <div className="w-full min-h-screen text-white p-3 md:p-6 flex flex-col font-sans gap-16 relative overflow-hidden">
      
      {/* خلفية الفيديو الثابتة لكل الصفحة */}
      <div className="fixed inset-0 overflow-hidden z-[-1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source src="/hero.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="absolute inset-0 bg-[#070b14]/85" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 py-12 flex flex-col gap-24">
        
        {/* 1. الترويسة الكبرى لصفحة من نحن */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.3em] uppercase px-6 py-2.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            ريادة تلامس الأفق • خبرة 15 عاماً وأكثر
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            نحن أكبر شركة رائدة في <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">التسويق الرقمي وتطوير الويب</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            منذ أكثر من 15 عاماً، ونحن نقود مسيرة الابتكار الرقمي، نصنع الهويات الكبرى، ونبني حلولاً تسويقية وتقنية متكاملة رفعت مبيعات مئات الشركات وجعلتها في صدارة قطاعاتها.
          </p>
        </div>

        {/* 2. قسم الإحصائيات والأرقام القياسية الضخمة */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/70 backdrop-blur-xl p-8 text-center flex flex-col items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-all duration-300 hover:border-[#00e5ff] hover:scale-105"
            >
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6] drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                {stat.number}
              </span>
              <span className="text-gray-300 text-sm md:text-base font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3. قصة نجاحنا وكيف أصبحنا الأكبر والأكثر خبرة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/60 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.15)] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-6 relative z-10" dir="rtl">
            <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 w-fit">
              قصة نجاح متواصلة
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-snug">
              نصنع التحول الرقمي الحقيقي بحرفية لا تقبل المنافسة
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              لم تصل وكالتنا لتكون الخيار الأول والأكبر عبثاً، بل بناءً على عقود من العمل المستمر، والتطوير الشامل لخوارزميات التسويق وأساليب البرمجة الحديثة. نحن نؤمن بأن كل علامة تجارية تحمل قصة فريدة تستحق أن تُروى بأفضل طريقة ممكنة أمام ملايين العملاء المستهدفين.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              من خلال فريق يضم نخبة من الخبراء والمبدعين، قمنا بتنفيذ مئات المشاريع الكبرى في السعودية ومصر ومختلف الدول العربية، محققين نتائج قياسية في نمو العلامات التجارية وزيادة العائد على الاستثمار.
            </p>
          </div>

          <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-[#00e5ff]/40 shadow-[0_0_30px_rgba(0,229,255,0.25)]">
            <Image
              src="/marketing strategies plans.webp"
              alt="قصة نجاحنا"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* 4. قيمنا الأساسية */}
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4 shadow-lg">
              ركائز التميز
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              قيم نلتزم بها لنصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">الفارق الحقيقي</span>
            </h2>
            <p className="text-gray-300 text-base">
              هذه المبادئ هي بوصلتنا اليومية في كل مشروع نقوم بتنفيذه لصالح عملائنا الكرام.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/60 backdrop-blur-xl p-8 flex flex-col gap-4 shadow-[0_0_25px_rgba(0,229,255,0.1)] hover:border-[#00e5ff] hover:shadow-[0_0_35px_rgba(0,229,255,0.3)] transition-all duration-300 group"
              >
                <div className="text-4xl mb-2 p-3 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 w-fit group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-white font-black text-xl group-hover:text-[#00e5ff] transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. رحلة التطور عبر السنين (Timeline) */}
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4 shadow-lg">
              مسيرة العطاء والريادة
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              محطات مضيئة صنعت <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">تاريخنا العريق</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-3xl border border-[#00e5ff]/30 bg-[#0b132b]/70 backdrop-blur-xl p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-[#00e5ff] transition-all duration-300"
              >
                <div className="text-3xl font-black text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                  {item.year}
                </div>
                <h3 className="text-white font-bold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. فرق الخبرة التخصصية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[2.5rem] border border-[#00e5ff]/30 bg-[#0b132b]/60 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,229,255,0.15)]">
          <div className="flex flex-col gap-6" dir="rtl">
            <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 w-fit">
              الكوادر البشرية الاحترافية
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-snug">
              عقول مبدعة وخبرات عالمية تعمل لأجل نجاحك
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              وراء كل مشروع ناجح نقم بتنفيذه، فريق متكامل من الخبراء والمبرمجين والمصممين الذين لا يرضون سوى بالمركز الأول. نحن نجمع بين الشغف الإبداعي والدقة التحليلية لنقدم لك نتائج تفوق توقعاتك بكثير.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {teamExpertise.map((team, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] flex items-center justify-center text-[#00e5ff] text-xs font-bold mt-1 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">{team.role}</h4>
                    <p className="text-gray-300 text-xs md:text-sm mt-0.5">{team.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-[#00e5ff]/40 shadow-[0_0_30px_rgba(0,229,255,0.25)]">
            <Image
              src="/creative designs visual identity.webp"
              alt="فريق العمل"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* 7. قسم دعوة للعمل الفخم (CTA) */}
        <div className="rounded-[2.5rem] border border-[#00e5ff]/40 bg-gradient-to-r from-[#0b132b] via-[#070b14] to-[#0b132b] p-10 md:p-16 text-center flex flex-col items-center gap-8 shadow-[0_0_60px_rgba(0,229,255,0.25)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#00e5ff]/5 pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            هل أنت مستعد لنقل علامتك التجارية إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">المستوى التالي؟</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            انضم إلى قائمة عملائنا الناجحين ودعنا نصنع لك قصة نجاح استثنائية تبدأ اليوم. تواصل معنا مباشرة عبر الواتساب.
          </p>

          <a
            href="https://wa.me/201151033384"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0077b6] text-[#070b14] font-black text-lg md:text-xl shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.9)] hover:scale-105 transition-all duration-300 group"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>ابدأ استشارتك المجانية عبر الواتساب الآن</span>
          </a>

          <div className="mt-4">
            <Link
              href="/"
              className="text-[#00e5ff] hover:underline font-semibold text-sm"
            >
              ← العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}