import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { name: "مكتب السالم للترجمة المعتمدة", img: "/alsalemtranslation-jeddah.com.webp", url: "https://alsalemtranslation-jeddah.com/" },
    { name: "مؤسسة ظل الرياض", img: "/zilriyadh.com.webp", url: "https://zilriyadh.com/" },
    { name: "زهار", img: "/zhar.shop.webp", url: "https://zhar.shop/" },
    { name: "زاد المعتمر للعمرة", img: "/zadalmutamir.com.webp", url: "https://zadalmutamir.com/" },
    { name: "ترجمة أرينا", img: "/translationarena.net.webp", url: "https://translationarena.net/" },
    { name: " شركة ركن الهرم للصيانة", img: "/rukn-alharam.com.webp", url: "https://rukn-alharam.com/" },
    { name: "رحاب القرآن", img: "/rihabalquran.com.webp", url: "https://rihabalquran.com/" },
    { name: "رونق للديكور", img: "/rawnaqpaint.com.webp", url: "https://rawnaqpaint.com/" },
    { name: " ليموزين مطار القاهرة", img: "/raw-limousine.webp", url: "https://raw-limousine.com/" },
    { name: "متجر ريل ستارس", img: "/railstars.shopping.webp", url: "https://railstars.shopping/" },
    { name: "متجر ريل النجوم ", img: "/railstars.co.webp", url: "https://railstars.co/" },
    { name: "متجر بيور كيت", img: "/purekit.sa.webp", url: "https://purekit.sa/" },
    { name: "مدرار للصيانة والتشغيل", img: "/mudarar.com.webp", url: "https://mudarar.com/" },
    { name: "مٌلم للتسويق", img: "/molmmarketing.com.webp", url: "https://molmmarketing.com/" },
    { name: "روو ليموزين", img: "/limousine.webp", url: "https://rawlimo.com/" },
    { name: "مجمع كرزما الطبي", img: "/krisma.sa.webp", url: "https://krisma.sa/" },
    { name: "د. هالة نجيب", img: "/halaselim.com.webp", url: "https://www.halaselim.com/" },
    { name: "جرين سيرفيس", img: "/greenservicejeddah.com.webp", url: "https://greenservicejeddah.com/" },
    { name: "المركز البيولوجي لمكافحة الحشرات", img: "/germanbiopest.com.webp", url: "https://germanbiopest.com/" },
    { name: "الشركة الوطنية الملكية للتجارة العامة والمقاولات", img: "/fanisahy.com.webp", url: "https://fanisahy.com/" },
    { name: "EMMRCEM", img: "/emmrcem.com.webp", url: "https://emmrcem.com/" },
    { name: "دروب", img: "/doruob.com.webp", url: "https://doruoub.com/" },
    { name: "دكتور هوم", img: "/doctor-home.org.webp", url: "https://doctor-home.org/" },
    { name: "السالم للترجمة المعتمدة", img: "/alsalemtranslation.sa.webp", url: "https://alsalemtranslation.sa/" },
    { name: "ليموزين اسكندرية", img: "/alexlimousine-eg.com.webp", url: "https://alexlimousine-eg.com/" },
    { name: "مجمع صالح العلوي الطبي", img: "/alawimedical.com.webp", url: "https://alawimedical.com/" },
    { name: " شركة ليموزين المطار", img: "/airport-limousine.com.webp", url: "https://airport-limousine.com/" },
    { name: "أفتنا اطلق", img: "/aftinatalaq.com.webp", url: "https://aftinatalaq.com/" },
    { name: "1A Clean", img: "/1aclean-nrw.de.webp", url: "https://1aclean-nrw.de/" },
  ];

  return (
    <div className="w-full min-h-screen text-white p-3 md:p-6 flex flex-col font-sans gap-8 relative">
      
      {/* خلفية ثابتة للصفحة */}
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

      {/* الهيدر العلوي */}
      <div className="w-full max-w-[1400px] mx-auto rounded-[2rem] border border-[#00e5ff]/30 shadow-[0_0_40px_rgba(0,229,255,0.12)] bg-[#0b132b]/60 backdrop-blur-md relative flex flex-col overflow-hidden">
        <Navbar />
      </div>

      {/* محتوى صفحة المشاريع */}
      <main className="w-full max-w-[1400px] mx-auto px-4 py-12">
        
        {/* عنوان الصفحة الترويجي */}
        <div className="text-center mb-20">
          <span className="text-[#00e5ff] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 inline-block mb-4 shadow-lg">
            معرض الأعمال الشامل
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            استعرض كافة مشاريعنا وأعمالنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6]">الاحترافية</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            مكتبة متكاملة تضم أكثر من 30 عملاً رقمياً وموقعاً الكترونياً نفذناها لعملائنا بكل إتقان. انقر على أي مشروع لزيارته مباشرة.
          </p>
          
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#00e5ff]/40 bg-[#0b132b]/80 text-[#00e5ff] font-semibold hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-300 text-sm"
            >
              ← العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>

        {/* شبكة المشاريع مع حركة التمايل الواضحة للعين */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 justify-items-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[480px] flex flex-col items-center gap-6 group cursor-pointer"
            >
              {/* صورة المشروع بحجم مضاعف ومعها تأثير التمايل (animate-wind) */}
              <div 
                className="relative w-full h-[440px] animate-wind transition-transform duration-500 group-hover:scale-105"
                style={{ animationDelay: `${(index % 5) * 0.4}s` }}
              >
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,229,255,0.4)]"
                />
              </div>

              {/* تفاصيل المشروع واسمه وزر الزيارة */}
              <div className="flex flex-col items-center gap-3 text-center w-full">
                <span className="text-white font-black text-xl md:text-2xl group-hover:text-[#00e5ff] transition-colors drop-shadow-md" dir="rtl">
                  {project.name}
                </span>
                <span className="text-sm md:text-base text-[#00e5ff] font-bold tracking-wider uppercase px-8 py-2.5 rounded-full bg-[#0b132b]/95 border border-[#00e5ff]/40 shadow-xl backdrop-blur-md group-hover:bg-[#00e5ff] group-hover:text-[#070b14] transition-all duration-300">
                  زيارة الموقع ↗
                </span>
              </div>
            </a>
          ))}
        </div>

      </main>
    </div>
  );
}