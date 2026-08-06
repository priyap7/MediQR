import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function Services() {
  const lang = getLanguage();

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-8">
          {translations[lang].servicesTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              {translations[lang].service1}
            </h3>
            <p className="mt-3 text-gray-600">
              {translations[lang].service1Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              {translations[lang].service2}
            </h3>
            <p className="mt-3 text-gray-600">
              {translations[lang].service2Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
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