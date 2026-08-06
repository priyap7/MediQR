import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

function QRGenerator() {

  const qrRef = useRef();

  const websiteURL = window.location.origin;

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "Maa-Pitambara-Medical-Store-QR.png";
    link.click();
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          MediQR Store QR Code
        </h2>

        <p className="text-gray-600 mb-6">
          Scan this QR code to visit Maa Pitambara Medical Store website.
        </p>

        <div ref={qrRef} className="flex justify-center mb-6">
          <QRCodeCanvas
            value={websiteURL}
            size={220}
          />
        </div>

        <button
          onClick={downloadQR}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Download QR Code
        </button>

      </div>
    </section>
  );
}

export default QRGenerator;