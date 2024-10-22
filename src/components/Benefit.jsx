import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import div1 from "../assets/benefit/div1.png";
import div2 from "../assets/benefit/div2.png";
import div3 from "../assets/benefit/div3.png";
import div4 from "../assets/benefit/div4.png";

const Benefit = () => {
  // Menggunakan array untuk referensi dan gambar div
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const images = [div1, div2, div3, div4];
  const isInView = refs.map((ref) => useInView(ref, { once: true, threshold: 0, rootMargin: "-50px" }));

  // Fungsi untuk menghasilkan objek animasi
  const createAnimation = (direction) => ({
    hidden: { 
      x: direction === "left" ? "-20vw" : "20vw", 
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
    { id: 1, title: "Hello Card ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", direction: "left" },
    { id: 2, title: "Hello Card ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", direction: "right" },
    { id: 3, title: "Hello Card ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", direction: "left" },
    { id: 4, title: "Hello Card ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", direction: "right" },
  ];

  return (

      <section id="benefit" className="lg:py-40 hp:py-20 flex flex-col items-center justify-center h-min-screen bg-primary text-slate overflow-x-hidden">
        <h2 className="lg:text-7xl hp:text-4xl text-center font-semibold text-slate z-20">Benefit</h2>

        {cardData.map((card, index) => (
          <motion.div
          key={card.id}
          ref={refs[index]}
          className={`hp:w-full tablet:w-full laptop:w-1/2 ultrawide:w-1/2 h-full flex ${card.direction === "left" ? "flex-row ultrawide:mr-[70vh] laptop:mr-[50vh]" : "flex-row-reverse ultrawide:ml-[70vh] laptop:ml-[50vh]"} -py-40 `}
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
      </section>
  );
};

export default Benefit;
