import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const SlideInDivs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animasi hanya dipicu sekali

  const delayAll= 0.2

  const divOne = {
    hidden: { x: "-100vw" }, // Muncul dari kiri
    visible: {
      x: isInView ? -500 : "-100vw", // Hanya bergerak ketika div terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0   + delayAll},
    },
  };
  
  const divTwo = {
    hidden: { x: "100vw" }, // Muncul dari kanan
    visible: {
      x: isInView ? 500 : "100vw", // Hanya bergerak ketika div terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0.3 + delayAll }, // Delay 0.5 detik
    },
  };
  
  const divTree = {
    hidden: { x: "-100vw" }, // Muncul dari kiri
    visible: {
      x: isInView ? -500 : "-100vw", // Hanya bergerak ketika div terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay:0.6  + delayAll},
    },
  };

  const divFour = {
    hidden: { x: "100vw" }, // Muncul dari kanan
    visible: {
      x: isInView ? 500 : "100vw", // Hanya bergerak ketika div terlihat
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0.9 + delayAll }, // Delay 0.5 detik
    },
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-screen space-y-10">
      {/* Div atas muncul dari kiri dengan Card */}
      <motion.div
        className="w-1/4 h-48"
        variants={divOne}
        initial="hidden"
        animate="visible"
      >
        <Card
          title="Card Satu"
          description="Ini adalah deskripsi untuk card di atas."
        />
      </motion.div>

      {/* Div bawah muncul dari kanan dengan Card dan delay */}
      <motion.div
        className="w-1/4 h-48"
        variants={divTwo}
        initial="hidden"
        animate="visible"
      >
        <Card
          title="Card Dua"
          description="Ini adalah deskripsi untuk card di bawah."
        />
      </motion.div>
      <motion.div
        className="w-1/4 h-48"
        variants={divTree}
        initial="hidden"
        animate="visible"
      >
        <Card
          title="Card Tiga"
          description="Ini adalah deskripsi untuk card di bawah."
        />
      </motion.div>
      <motion.div
        className="w-1/4 h-48"
        variants={divFour}
        initial="hidden"
        animate="visible"
      >
        <Card
          title="Card Empat"
          description="Ini adalah deskripsi untuk card di bawah."
        />
      </motion.div>
    </div>
  );
};

export default SlideInDivs;
