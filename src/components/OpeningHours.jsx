import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function OpeningHours() {
  const lang = getLanguage();

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          {translations[lang].hoursTitle}
        </h2>

        <div className="bg-white p-6 rounded-xl shadow">

          <p className="text-lg">
            🕒 {translations[lang].timing}
          </p>

          <p className="text-lg mt-3">
            📅 {translations[lang].sunday}
          </p>

        </div>

      </div>
    </section>
  );
}

export default OpeningHours;