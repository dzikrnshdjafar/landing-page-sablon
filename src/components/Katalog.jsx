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

import TshirtMarquee from "./TshirtMarquee";
import Coba from "./Coba";

const Katalog = () => {

  const katalogs = [test1, test2, test3, test4, test5, test6, test7 ];
  const images = [baju1, baju2, baju3, baju4, baju5, baju6, baju7 ];

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
        {katalogs.map((katalog, index) => (
        <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4" key={index}>
          <img
            src={katalog}
            alt="Produk 1"
            className="object-cover w-full h-auto hp:max-h-20 lg:max-h-80 max-w-xs rounded-xl"
          />
        </div>
        )) }
      </div>

     <div className="mt-10 max-w-8xl h-[30rem] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            T-Shirt Marquee
          </h3>
          <TshirtMarquee images={images} from={0} to={"-100%"} />
          {/* <Coba images={images} from={0} to={"-100%"} /> */}
        </div>
      </div>

    </section>
  );
};

export default Katalog;
