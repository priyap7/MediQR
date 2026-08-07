import { getLanguage } from "../utils/language";
import translations from "../locales/translations";

function About() {
  const lang = getLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-green-700 mb-6">
          {translations[lang].aboutTitle}
        </h2>

        <p className="text-gray-600 text-lg leading-8">
          {translations[lang].aboutDescription}
        </p>

      </div>
    </section>
  );
}

export default About;