import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function OpeningHours() {
  const lang = getLanguage();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-green-700 mb-8">
          {translations[lang].hoursTitle}
        </h2>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">

          <p className="text-xl font-medium text-gray-800">
            {translations[lang].timing}
          </p>

          <p className="mt-4 text-lg font-semibold text-green-700">
            {translations[lang].sunday}
          </p>

        </div>

      </div>
    </section>
  );
}

export default OpeningHours;