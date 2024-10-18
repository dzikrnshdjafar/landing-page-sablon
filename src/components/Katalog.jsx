import Splash from "../assets/splash.png";
import test1 from "../assets/katalog/test1.png";
import test2 from "../assets/katalog/test2.png";
import test3 from "../assets/katalog/test3.png";
import test4 from "../assets/katalog/test4.png";
import test5 from "../assets/katalog/test5.png";
import test6 from "../assets/katalog/test6.png";
import test7 from "../assets/katalog/test7.png";

const Katalog = () => {
  const katalogs = [test1, test2, test3, test4, test5, test6, test7];

  return (
    <section id="katalog" className="relative px-4 md:px-10 lg:px-20 py-10 bg-neutral-900 overflow-hidden">
  {/* Gambar Splash */}
  <img
    src={Splash}
    alt="Splash"
    className="absolute -top-10 -right-10 w-40 h-auto md:w-60 lg:w-80 max-w-full object-contain"
    style={{ maxWidth: "100vw" }} // Mencegah melebar ke kanan
  />
  
  <h2 className="text-4xl text-center font-semibold text-slate-200 z-20">
    Katalog Produk
  </h2>

  <div className="flex flex-wrap justify-center gap-6 mt-10">
    {katalogs.map((katalog, index) => (
      <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4" key={index}>
        <img
          src={katalog}
          alt={`Produk ${index + 1}`}
          className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
        />
      </div>
    ))}
  </div>
</section>

  );
};

export default Katalog;
