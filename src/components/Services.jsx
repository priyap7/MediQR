import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function Services() {
  const lang = getLanguage();

  return (
    <section
      id="services"
      className="scroll-mt-24 py-16 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-green-700 mb-10">
          {translations[lang].servicesTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700">
              {translations[lang].service1}
            </h3>

            <p className="mt-3 text-gray-600">
              {translations[lang].service1Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700">
              {translations[lang].service2}
            </h3>

            <p className="mt-3 text-gray-600">
              {translations[lang].service2Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700">
              {translations[lang].service3}
            </h3>

            <p className="mt-3 text-gray-600">
              {translations[lang].service3Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;