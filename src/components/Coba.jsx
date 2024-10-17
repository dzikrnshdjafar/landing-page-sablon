import { motion } from "framer-motion";

const TshirtMarquee = ({ images }) => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000], // Adjust this based on how wide the marquee should scroll
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Adjust speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex space-x-6"
        variants={marqueeVariants}
        animate="animate"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Tshirt ${index + 1}`}
            className="object-cover w-40 h-40 rounded-xl"
          />
        ))}
        {/* Duplicate images to ensure seamless loop */}
        {images.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image}
            alt={`Tshirt ${index + 1}`}
            className="object-cover w-40 h-40 rounded-xl"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TshirtMarquee;
