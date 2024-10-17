import { motion } from "framer-motion";
import bgImage from "../assets/bgImage.png"; // ganti dengan path gambar yang benar

const Home = () => {
  const text = "SABLON KAOS";
  const typingEffect = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1, // Delay setiap huruf
      },
    }),
  };

  return (
    <>
      <section
        id="home"
        className="relative lg:h-[50rem] hp:h-[30rem] flex items-center justify-center text-slate-100"
      >
        {/* Image Background */}
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay to darken the image for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Content */}
        <motion.h1 className="relative z-10 text-7xl font-bold flex space-x-1">
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
      </section>

      <div className="bg-orange-400 text-center py-2">
        <h1 className="font-bold lg:text-3xl hp:text-lg">
          UP TO 30% OFF EVERY TIME
        </h1>
      </div>
    </>
  );
};

export default Home;
