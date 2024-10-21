import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Katalog from "./components/Katalog";
import Kontak from "./components/Kontak";
import Benefit from "./components/Benefit";
import TshirtMarquee from "./components/TshirtMarquee";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import PriceList from "./components/Pricelist";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefit/>
      <Katalog />
      {/* <TshirtMarquee/> */}
      {/* <Kontak /> */}
      <PriceList/>
      <WhatsappButton/>
      <Footer/>
    </div>
  );
};

export default App;
