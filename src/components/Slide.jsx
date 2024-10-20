import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import div1 from "../assets/benefit/div1.png";
import div2 from "../assets/benefit/div2.png";
import div3 from "../assets/benefit/div3.png";
import div4 from "../assets/benefit/div4.png";

const SlideInDivs = () => {
  // Menggunakan array untuk referensi dan gambar div
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const images = [div1, div2, div3, div4];
  const isInView = refs.map((ref) => useInView(ref, { once: true, threshold: 0, rootMargin: "-50px" }));

  // Fungsi untuk menghasilkan objek animasi
  const createAnimation = (direction) => ({
    hidden: { 
      x: direction === "left" ? "-60vw" : "60vw", 
      opacity: 0, 
      visibility: "hidden"
    },
    visible: { 
      x: 0, 
      opacity: 1, 
      visibility: "visible", 
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0 }
    },
  });

  // Data card untuk loop dinamis
  const cardData = [
    { id: 1, title: "Card Satu", description: "Ini adalah deskripsi untuk card di atas.", direction: "left" },
    { id: 2, title: "Card Dua", description: "Ini adalah deskripsi untuk card di bawah.", direction: "right" },
    { id: 3, title: "Card Tiga", description: "Ini adalah deskripsi untuk card di bawah.", direction: "left" },
    { id: 4, title: "Card Empat", description: "Ini adalah deskripsi untuk card di bawah.", direction: "right" },
  ];

  return (
    <section id="benefit">
      <div className="flex flex-col items-center justify-center h-min-screen space-y-6 tablet:space-y-10 bg-neutral-900 text-slate-100 overflow-x-hidden">
        <h2 className="text-4xl mt-10 text-center font-semibold text-slate-200 z-20">Benefit</h2>

        {cardData.map((card, index) => (
          <motion.div
          key={card.id}
          ref={refs[index]}
          className={`hp:w-full tablet:w-1/2 laptop:w-1/3 ultrawide:w-1/2 h-full flex ${card.direction === "left" ? "flex-row ultrawide:mr-96" : "flex-row-reverse ultrawide:ml-96"} -py-40 `}
          variants={createAnimation(card.direction)}
          initial="hidden"
          animate={isInView[index] ? "visible" : "hidden"}
        >
          <img src={images[index]} alt={`Gambar ${card.title}`} className="w-1/2 h-full object-cover" />
          
          {/* Konten teks */}
          <div className={`w-1/2 p-4 flex flex-col justify-center ${card.direction === "right" ? "text-right items-end" : ""}`}>
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </motion.div>
        
        
        ))}
      </div>
    </section>
  );
};

export default SlideInDivs;
