import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Katalog from "./components/Katalog";
import Kontak from "./components/Kontak";
import SlideInDivs from "./components/Slide";
import TshirtMarquee from "./components/TshirtMarquee";
import WhatsappButton from "./components/WhatsappButton";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Katalog />
      <TshirtMarquee/>
      <Kontak />
      <SlideInDivs/>
      <WhatsappButton/>
    </div>
  );
};

export default App;
