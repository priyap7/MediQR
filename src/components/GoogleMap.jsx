function GoogleMap() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Find Us
        </h2>

        <p className="mb-6 text-gray-600">
          Maa Pitambara Medical Store <br />
          HGX5+P7G, Gormi Main Road,<br />
          Gormi, Siloli, Madhya Pradesh 477660
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Maa Pitambara Medical Store Location"
            src="https://www.google.com/maps?q=HGX5%2BP7G,+Gormi,+Siloli,+Madhya+Pradesh+477660&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <a
          href="https://maps.app.goo.gl/ena4Ejkg6g4FZkwUA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Open in Google Maps
        </a>

      </div>
    </section>
  );
}

export default GoogleMap;