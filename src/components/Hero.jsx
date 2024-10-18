import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgImage from "../assets/bgImage.png";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animasi hanya dipicu sekali saat masuk viewport
  const text = "Lorem Ipsum";

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
        className="relative flex items-center justify-center w-full text-slate-100 bg-neutral-900 desktop:py-64 hp:py-20 laptop:px-12 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Content Container */}
        <div className="flex flex-col items-start justify-start z-10 space-y-6 pt-12">
          {/* Animated H1 */}
          <motion.h1
            className="text-5xl hp:text-3xl tablet:text-6xl laptop:text-8xl font-bold"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animasi dipicu saat in-view
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
            animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Animasi dipicu saat in-view
            transition={{ delay: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, cupiditate! Iste non temporibus molestias aperiam repellendus illum eius earum molestiae doloribus vel at pariatur.
          </motion.h3>

          {/* Button */}
          <motion.button
            className="px-4 py-2 tablet:px-6 tablet:py-3 bg-orange-500 text-white text-sm tablet:text-lg font-semibold rounded-md hover:bg-orange-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animasi dipicu saat in-view
            transition={{ delay: 1 }}
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      <div className="bg-orange-400 text-center py-2">
        <h1 className="font-bold text-lg tablet:text-2xl laptop:text-3xl">
          UP TO 30% OFF EVERY TIME
        </h1>
      </div>
    </>
  );
};

export default Hero;
