import React from "react";
import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function Navbar() {
  const lang = getLanguage();
  const t = translations[lang];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-2xl font-bold text-green-700">
            Maa Pitambara Medical Store
          </h1>
          <p className="text-xs text-gray-500">
            Digital Pharmacy Profile
          </p>
        </div>

        <div className="flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-green-700 transition">
            {t.nav.home}
          </a>

          <a href="#services" className="hover:text-green-700 transition">
            {t.nav.services}
          </a>

          <a href="#about" className="hover:text-green-700 transition">
            {t.nav.about}
          </a>

          <a href="#contact" className="hover:text-green-700 transition">
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;