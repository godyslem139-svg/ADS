"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto my-4 rounded-[2rem] border border-[#00e5ff]/30 shadow-[0_0_40px_rgba(0,229,255,0.12)] bg-[#0b132b]/60 backdrop-blur-md relative overflow-hidden z-50">
      <header className="relative flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
        
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-3.5">
          <span className="font-extrabold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077b6] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
            ADS
          </span>
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00e5ff]/50 shadow-[0_0_15px_rgba(0,229,255,0.5)]">
            <Image 
              src="/logo.webp" 
              alt="ADS Logo" 
              fill 
              className="object-cover"
            />
          </div>
        </Link>

        {/* الروابط للشاشات الكبيرة (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-[#00e5ff] font-semibold border-b-2 border-[#00e5ff] pb-1">الرئيسية</Link>
          <Link href="/about" className="text-gray-300 hover:text-[#00e5ff] transition-colors">من نحن</Link>
          <div className="relative group cursor-pointer text-gray-300 hover:text-[#00e5ff] flex items-center gap-1 transition-colors">
            <span>خدمات الشركة</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <Link href="/projects" className="text-gray-300 hover:text-[#00e5ff] transition-colors">اعمالنا وعملاتنا</Link>
          <Link href="/packages" className="text-gray-300 hover:text-[#00e5ff] transition-colors">باقات السعودية</Link>
          <Link href="/contact" className="text-gray-300 hover:text-[#00e5ff] transition-colors">اتصل بنا</Link>
        </nav>

        {/* أيقونات السوشيال ميديا + الواتساب + زر القائمة للموبايل */}
        <div className="flex items-center gap-2.5">
          
          {/* أيقونة الواتساب */}
          <a 
            href="https://wa.me/201151033384" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          {/* أيقونة انستجرام */}
          <a 
            href="https://www.instagram.com/ads.agency4u?mdxt=MWFzY3hrOG8zYmt0YQ==" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* أيقونة سناب شات */}
          <a 
            href="https://www.snapchat.com/add/adsagencyksa?share_id=AIvEC4xrjhU&locale=en-MM" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snapchat"
            className="w-9 h-9 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.015 1.9c-2.585 0-4.914 1.558-5.597 3.992-.311 1.107-.123 2.274.526 3.167-.282.355-.494.774-.606 1.237-.128.536-.039 1.096.25 1.554-.265.342-.455.753-.541 1.205-.12.625.062 1.272.503 1.737-.156.248-.255.531-.284.826-.063.639.23 1.258.775 1.597-.101.218-.152.457-.15.698 0 1.155 1.05 2.1 2.342 2.1.219 0 .439-.028.653-.083.568.423 1.275.666 2.02.695-.008.118-.013.237-.013.357 0 1.127.876 2.042 1.956 2.042 1.08 0 1.956-.915 1.956-2.042 0-.12-.005-.239-.013-.357.745-.029 1.452-.272 2.02-.695.214.055.434.083.653.083 1.292 0 2.342-.945 2.342-2.1 0-.241-.051-.48-.15-.698.545-.339.838-.958.775-1.597-.029-.295-.128-.578-.284-.826.441-.465.623-1.112.503-1.737-.086-.452-.276-.863-.541-1.205.289-.458.378-1.018.25-1.554-.112-.463-.324-.882-.606-1.237.649-.893.837-2.06.526-3.167C16.929 3.458 14.6 1.9 12.015 1.9z"/>
            </svg>
          </a>

          {/* أيقونة تيك توك */}
          <a 
            href="https://www.tiktok.com/@ads.agency4?_r=1&_t=ZS-9AsHPs5Lhyv" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-9 h-9 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.242V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.144-4.53v-3.48a6.344 6.344 0 0 0-6.155 6.447 6.345 6.345 0 0 0 6.91 6.315 6.346 6.346 0 0 0 5.727-6.315V9.435a8.196 8.196 0 0 0 4.792 1.503V7.472a4.81 4.81 0 0 1-1.09-.786z"/>
            </svg>
          </a>

          {/* أيقونة فيسبوك */}
          <a 
            href="https://www.facebook.com/share/1DgZ2q9X9N/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* أيقونة الهمبرجر للموبايل */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="lg:hidden w-10 h-10 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#070b14] transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>

        {/* قائمة الموبايل المنسدلة */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#070b14]/95 backdrop-blur-xl border-b border-[#00e5ff]/30 shadow-2xl py-6 px-6 flex flex-col gap-4 lg:hidden transition-all duration-300 z-50">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#00e5ff] font-medium py-2 border-b border-white/5 transition-colors"
            >
              الرئيسية
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#00e5ff] font-medium py-2 border-b border-white/5 transition-colors"
            >
              من نحن
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#00e5ff] font-medium py-2 border-b border-white/5 transition-colors"
            >
              خدمات الشركة
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#00e5ff] font-medium py-2 border-b border-white/5 transition-calls"
            >
              اعمالنا وعملاتنا
            </Link>
            <Link 
              href="/packages" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#00e5ff] font-medium py-2 border-b border-white/5 transition-colors"
            >
              باقات السعودية
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#00e5ff] font-medium py-2 transition-colors"
            >
              اتصل بنا
            </Link>
          </div>
        )}

      </header>
    </div>
  );
}