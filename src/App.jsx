import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import OpeningHours from "./components/OpeningHours";
import GoogleMap from "./components/GoogleMap";
import QRGenerator from "./components/QRGenerator";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <OpeningHours />
      <GoogleMap />
      <QRGenerator />
    </>
  );
}

export default App;