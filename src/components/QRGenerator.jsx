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
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Maa Pitambara Medical Store QR
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Scan this QR code to instantly open the official digital profile of{" "}
          <span className="font-semibold">
            Maa Pitambara Medical Store
          </span>.
        </p>

        <div
          ref={qrRef}
          className="bg-white p-6 rounded-2xl shadow-xl"
        >
          <QRCodeCanvas
            value={websiteURL}
            size={220}
          />
        </div>

        <button
          onClick={downloadQR}
          className="mt-8 px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition duration-300"
        >
          Download QR Code
        </button>

      </div>
    </section>
  );
}

export default QRGenerator;