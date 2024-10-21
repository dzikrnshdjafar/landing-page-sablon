import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import bgImage1 from "../assets/bgimage1.png";
import bgImage2 from "../assets/bgimage2.jpeg";
import bgImage3 from "../assets/bgimage3.jpeg";
import bgImage4 from "../assets/bgimage4.jpg";

import Cat from "../assets/cat.svg"


const bgImages = [bgImage1, bgImage2, bgImage3, bgImage4];

const Hero = () => {

  const whatsappNumber = "628123456789"; // Ganti dengan nomor WhatsApp Anda
    const message = "Halo, saya ingin bertanya tentang produk Anda!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "Lorem Ipsum";

  // State untuk track image index
  const [currentImage, setCurrentImage] = useState(0);

  // Mengubah image setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length);
    }, 5000); // Ubah gambar setiap 5 detik
    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);

  const typingEffect = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    }),
  };

  return (
    <>
      <section
        ref={ref}
        id="home"
        className="relative flex items-center justify-center w-full text-slate-100 bg-primary desktop:py-64 hp:py-20 laptop:px-12"
      >
        {/* Background Image Container */}
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImages[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Content Container */}
        <div className="flex flex-col items-start justify-start z-10 space-y-6 pt-12">
          {/* Animated H1 */}
          <motion.h1
            className="text-5xl hp:text-3xl tablet:text-6xl laptop:text-8xl font-bold"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={typingEffect}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* H3 Description */}
          <motion.h3
            className="text-lg hp:w-[20rem] tablet:w-[40rem] laptop:w-[50rem]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            cupiditate! Iste non temporibus molestias aperiam repellendus illum.
          </motion.h3>

          {/* Button */}
          <motion.a
            className="px-4 py-2 tablet:px-6 tablet:py-3 bg-secondary text-primary text-sm tablet:text-lg font-semibold rounded-md hover:bg-sechov transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            href={whatsappLink}
          >
            Shop Now
          </motion.a>
        </div>
      </section>

      <img src={Cat} alt="Benefit" className="absolute desktop:mt-0 laptop:mt-0 tablet:mt-1 hp:mt-5"/>
      <div className="bg-secondary text-center py-2 relative">
        <h1 className="font-bold text-lg tablet:text-2xl laptop:text-3xl">
          UP TO 30% OFF EVERY TIME
        </h1>
      </div>
    </>
  );
};

export default Hero;
