import test1 from "../assets/test1.png"; 
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";
import test5 from "../assets/test5.png";
import test6 from "../assets/test6.png";
import test7 from "../assets/test7.png";

import baju1 from "../assets/baju1.png";
import baju2 from "../assets/baju2.png";
import baju3 from "../assets/baju3.png";
import baju4 from "../assets/baju4.png";
import baju5 from "../assets/baju5.png";
import baju6 from "../assets/baju6.png";
import baju7 from "../assets/baju7.png";

import TShirtMarqueeCard from "./TshirtMarqueeCard";

const Katalog = () => {
  const images = [baju1, baju2, baju3, baju4, baju5, baju6, baju7];

  return (
    <section
      id="katalog"
      className="min-h-screen bg-amber-50 px-4 md:px-10 lg:px-20 py-20"
    >
      <h2 className="text-4xl text-center font-semibold text-gray-800">
        Katalog Produk
      </h2>

      {/* Flexbox container for the images */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4">
          <img
            src={test1}
            alt="Produk 1"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4">
          <img
            src={test2}
            alt="Produk 2"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4">
          <img
            src={test3}
            alt="Produk 3"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4">
          <img
            src={test4}
            alt="Produk 4"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4">
          <img
            src={test5}
            alt="Produk 5"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4">
          <img
            src={test6}
            alt="Produk 6"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4">
          <img
            src={test7}
            alt="Produk 7"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-center py-8 px-4">
        <TShirtMarqueeCard
          images={images}
          title="High Quality Print T-shirts"
          subtitle="Now Available"
          buttonText="Shop Now"
        />
      </div>
    </section>
  );
};

export default Katalog;
