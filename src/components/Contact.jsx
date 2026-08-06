import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function Contact() {
  const lang = getLanguage();

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          {translations[lang].contactTitle}
        </h2>

        <div className="bg-white p-6 rounded-xl shadow">

          <p className="text-lg">
            📍 {translations[lang].address}
          </p>

          <p className="text-lg mt-3">
            📞 {translations[lang].phone}
          </p>

          <p className="text-lg mt-3">
            ✉️ {translations[lang].email}
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;