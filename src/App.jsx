import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Katalog from "./components/Katalog";
import Kontak from "./components/Kontak";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Katalog />
      <Kontak />
    </div>
  );
};

export default App;
