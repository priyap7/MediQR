import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function Contact() {
  const lang = getLanguage();
  const t = translations[lang];

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl bold text-green-700 mb-8">
          {t.contactTitle}
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Maa Pitambara Medical Store
          </h3>

          <p className="text-lg text-green-700 font-semibold mb-6">
            Dr. Romee Singh
          </p>


          <div className="space-y-5 text-lg">

            <div>
              <strong>{t.addressLabel}</strong>
              <br />
              <span className="text-green-700">
                {t.address}
              </span>
            </div>


            <div>
              <strong>{t.phoneLabel}</strong>
              <br />
              <a
                href="tel:+919713909461"
                className="text-green-700 hover:underline"
              >
                +91 97139 09461
              </a>
            </div>


            <div>
              <strong>{t.emailLabel}</strong>
              <br />
              <a
                href="mailto:romeesin@gmail.com"
                className="text-green-700 hover:underline"
              >
                romeesin@gmail.com
              </a>
            </div>


            <div>
              <strong>{t.instagramLabel}</strong>
              <br />
              <a
                href="https://www.instagram.com/maa_pitambra_medical_gormi12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline break-all"
              >
                @maa_pitambra_medical_gormi12
              </a>
            </div>


          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;