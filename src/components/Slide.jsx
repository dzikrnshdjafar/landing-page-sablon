import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const SlideInDivs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animasi hanya dipicu sekali

  const topDivVariant = {
    hidden: { x: "-100vw" }, // Muncul dari kiri
    visible: {
      x: isInView ? -50 : "-100vw", // Hanya bergerak ketika div terlihat
      transition: { type: "spring", stiffness: 50, duration: 1.5 },
    },
  };

  const bottomDivVariant = {
    hidden: { x: "100vw" }, // Muncul dari kanan
    visible: {
      x: isInView ? 50 : "100vw", // Hanya bergerak ketika div terlihat
      transition: { type: "spring", stiffness: 50, duration: 1.5, delay: 0.5 }, // Delay 0.5 detik
    },
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-screen space-y-10">
      {/* Div atas muncul dari kiri dengan Card */}
      <motion.div
        className="w-3/4 h-48"
        variants={topDivVariant}
        initial="hidden"
        animate="visible"
      >
        <Card
          title="Card Atas"
          description="Ini adalah deskripsi untuk card di atas."
        />
      </motion.div>

      {/* Div bawah muncul dari kanan dengan Card dan delay */}
      <motion.div
        className="w-3/4 h-48"
        variants={bottomDivVariant}
        initial="hidden"
        animate="visible"
      >
        <Card
          title="Card Bawah"
          description="Ini adalah deskripsi untuk card di bawah."
        />
      </motion.div>
    </div>
  );
};

export default SlideInDivs;
