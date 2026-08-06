import React from "react";
import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function Navbar() {
  const lang = getLanguage();
  const t = translations[lang];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-green-700">
        MediQR
      </div>

      <div className="flex gap-8 text-gray-700 font-medium">
        <a href="#home">{t.nav.home}</a>
        <a href="#services">{t.nav.services}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#contact">{t.nav.contact}</a>
      </div>

      <button className="px-5 py-2 rounded-lg bg-green-700 text-white">
        {t.nav.login}
      </button>
    </nav>
  );
}

export default Navbar;