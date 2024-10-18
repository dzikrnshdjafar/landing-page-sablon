import { motion } from "framer-motion";
import bgImage from "../assets/bgImage.png"; // ganti dengan path gambar yang benar
import BgSplash from "./BgSplash";

const Hero = () => {
  const text = "Lorem Ipsum";
  const typingEffect = {
    hidden: { opacity: 0, y: 100 }, // Mulai dari bawah (y: 100)
    visible: (i) => ({
      opacity: 1,
      y: 0, // Animasi ke posisi normal
      transition: {
        delay: i * 0.1, // Delay untuk setiap huruf
        type: "spring",
        stiffness: 60, // Efek spring lebih smooth
        damping: 15, // Efek bouncing
      },
    }),
  };

  return (
    <>
      <section
        id="home"
        className="relative flex flex-row items-center justify-center w-full space-x-8 text-slate-100 bg-neutral-900"
        style={{ height: "50rem" }} // Atur tinggi section
        >

        {/* Content Container */}
        <div className="flex flex-col items-center justify-center space-y-4 z-10">
          <motion.div className="space-x-4">
            {/* Animated H1 */}
            <motion.h1 className="text-8xl font-bold ">
              {text.split("").map((letter, index) => (
                <motion.span
                key={index}
                custom={index}
                variants={typingEffect}
                initial="hidden"
                animate="visible"
                className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* H3 Description */}
            <motion.h3
              className="text-2xl w-[50rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }} // Delay untuk animasi h3
              >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, cupiditate! Iste non temporibus molestias aperiam repellendus illum eius earum molestiae doloribus vel at pariatur.
            </motion.h3>

            {/* Button */}
            <motion.button
              className="mt-4 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-md hover:bg-orange-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }} // Delay untuk animasi button
              >
              Shop Now
            </motion.button>
          </motion.div>
        </div>

        {/* Background Image Container */}
        <div
          className="relative bg-cover bg-center mx-auto rounded-3xl -mt-20 w-1/3 h-1/2"
          style={{
            backgroundImage: `url(${bgImage})`, // Menggunakan background image
          }}
          >
          {/* Overlay to darken the image for better text contrast */}
          <div className="absolute inset-0 bg-black opacity-75 rounded-3xl"></div>
        
        </div>
      </section>

      <div className="bg-orange-400 text-center py-2">
        <h1 className="font-bold lg:text-3xl hp:text-lg">
          UP TO 30% OFF EVERY TIME
        </h1>
      </div>
    </>
  );
};

export default Hero;
