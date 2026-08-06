function GoogleMap() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Find Us
        </h2>

        <p className="mb-6 text-gray-600">
          Maa Pitambara Medical Store, HGX5+P7G, Gormi Main Road, Gormi, 
          Siloli, Madhya Pradesh 477660, India
        </p>

        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            title="Maa Pitambara Medical Store Location"
            src="https://www.google.com/maps?q=Maa+Pitambara+Medical+Store,+HGX5%2BP7G,+Gormi+Main+Road,+Gormi,+Siloli,+Madhya+Pradesh+477660,+India&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default GoogleMap;