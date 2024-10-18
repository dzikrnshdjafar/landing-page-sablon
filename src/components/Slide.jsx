import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import div1 from "../assets/benefit/div1.png";
import div2 from "../assets/benefit/div2.png";
import div3 from "../assets/benefit/div3.png";
import div4 from "../assets/benefit/div4.png";

const SlideInDivs = () => {
  // Menggunakan referensi terpisah untuk tiap div
  const refDivOne = useRef(null);
  const refDivTwo = useRef(null);
  const refDivThree = useRef(null);
  const refDivFour = useRef(null);

  // Setiap elemen memiliki `useInView` terpisah
  const isInViewDivOne = useInView(refDivOne, { once: true, threshold: 0, rootMargin: "-50px" });
  const isInViewDivTwo = useInView(refDivTwo, { once: true, threshold: 0, rootMargin: "-50px" });
  const isInViewDivThree = useInView(refDivThree, { once: true, threshold: 0, rootMargin: "-50px" });
  const isInViewDivFour = useInView(refDivFour, { once: true, threshold: 0, rootMargin: "-50px" });


  const divOne = {
    hidden: { 
      x: "-60vw", 
      opacity: 0,       // Elemen tersembunyi (transparan)
      visibility: "hidden"  // Elemen tidak terlihat sebelum animasi
    },
    visible: {
      x: 0, 
      opacity: 1,       // Elemen terlihat saat animasi dimulai
      visibility: "visible", // Elemen terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0 },
    },
  };
  
  const divTwo = {
    hidden: { 
      x: "60vw", 
      opacity: 0,        // Elemen tersembunyi (transparan)
      visibility: "hidden"  // Elemen tidak terlihat sebelum animasi
    },
    visible: {
      x: 0, 
      opacity: 1,       // Elemen terlihat saat animasi dimulai
      visibility: "visible",  // Elemen terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0 },
    },
  };
  
  const divThree = {
    hidden: { 
      x: "-60vw", 
      opacity: 0,        // Elemen tersembunyi (transparan)
      visibility: "hidden"  // Elemen tidak terlihat sebelum animasi
    },
    visible: {
      x: 0, 
      opacity: 1,       // Elemen terlihat saat animasi dimulai
      visibility: "visible",  // Elemen terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0 },
    },
  };
  
  const divFour = {
    hidden: { 
      x: "60vw", 
      opacity: 0,        // Elemen tersembunyi (transparan)
      visibility: "hidden"  // Elemen tidak terlihat sebelum animasi
    },
    visible: {
      x: 0, 
      opacity: 1,       // Elemen terlihat saat animasi dimulai
      visibility: "visible",  // Elemen terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0 },
    },
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center h-min-screen space-y-6 tablet:space-y-10 bg-neutral-900 text-slate-100">
      {/* Card Satu: Gambar di kiri, teks di kanan */}
      <motion.div
        ref={refDivOne}
        className="hp:w-full tablet:w-1/2 laptop:w-1/3 ultrawide:w-1/4 h-64 flex flex-row "
        variants={divOne}
        initial="hidden"
        animate={isInViewDivOne ? "visible" : "hidden"}
      >
        <img src={div1} alt="Gambar Card Satu" className="w-1/2 h-full object-cover" />
        <div className="w-1/2 py-20 flex flex-col justify-center">
          <h3 className="text-lg font-bold">Card Satu</h3>
          <p>Ini adalah deskripsi untuk card di atas.</p>
        </div>
      </motion.div>

      {/* Card Dua: Gambar di kanan, teks di kiri */}
      <motion.div
        ref={refDivTwo}
        className="hp:w-full tablet:w-1/2 laptop:w-1/3 ultrawide:w-1/4 h-64 flex flex-row-reverse"
        variants={divTwo}
        initial="hidden"
        animate={isInViewDivTwo ? "visible" : "hidden"} // Hanya mulai ketika divTwo terlihat
      >
        <img src={div2} alt="Gambar Card Dua" className="w-1/2 h-full object-cover" />
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-bold">Card Dua</h3>
          <p>Ini adalah deskripsi untuk card di bawah.</p>
        </div>
      </motion.div>

      {/* Card Tiga: Gambar di kiri, teks di kanan */}
      <motion.div
        ref={refDivThree}
        className="hp:w-full tablet:w-1/2 laptop:w-1/3 ultrawide:w-1/4 h-64  flex flex-row"
        variants={divThree}
        initial="hidden"
        animate={isInViewDivThree ? "visible" : "hidden"} // Hanya mulai ketika divThree terlihat
      >
        <img src={div3} alt="Gambar Card Tiga" className="w-1/2 h-full object-cover" />
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-bold">Card Tiga</h3>
          <p>Ini adalah deskripsi untuk card di bawah.</p>
        </div>
      </motion.div>

      {/* Card Empat: Gambar di kanan, teks di kiri */}
      <motion.div
        ref={refDivFour}
        className="hp:w-full tablet:w-1/2 laptop:w-1/3 ultrawide:w-1/4 h-64 flex flex-row-reverse"
        variants={divFour}
        initial="hidden"
        animate={isInViewDivFour ? "visible" : "hidden"} // Hanya mulai ketika divFour terlihat
      >
        <img src={div4} alt="Gambar Card Empat" className="w-1/2 h-full object-cover" />
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-bold">Card Empat</h3>
          <p>Ini adalah deskripsi untuk card di bawah.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideInDivs;
