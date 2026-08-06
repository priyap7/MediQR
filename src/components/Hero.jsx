import logo from "../assets/logo.png";
import { getGreeting, getStoreStatus } from "../utils/storeStatus";
import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function Hero() {
  const greeting = getGreeting();
  const isOpen = getStoreStatus();

  const language = getLanguage();
  const t = translations[language];

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">

        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Maa Pitambara Medical Store Logo"
            className="w-32 h-32 object-contain"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-700">
          {greeting}
        </h2>

        <h1 className="text-3xl font-bold text-emerald-700 mt-3">
          Maa Pitambara Medical Store
        </h1>

        <p className="text-gray-600 mt-3">
          {t.heroSubtitle}
        </p>

        {isOpen ? (
          <div className="mt-6 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            🟢 {language === "hi" ? "अभी खुला है" : "Open Now"}
          </div>
        ) : (
          <div className="mt-6 inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
            🔴 {language === "hi" ? "अभी बंद है" : "Closed Now"}
          </div>
        )}

      </div>
    </section>
  );
}

export default Hero;