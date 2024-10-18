// BgSplash.jsx
import { motion } from "framer-motion";
import greenSplash from "../assets/green.png";
import blueSplash from "../assets/blue.png";
import pinkSplash from "../assets/pink.png";
import purpleSplash from "../assets/purple.png";
import orangeSplash from "../assets/orange.png"; // Tambahkan orange splash

const BgSplash = ({ children }) => {
  const splashes = [
    greenSplash,
    blueSplash,
    pinkSplash,
    purpleSplash,
    orangeSplash,
  ];

  // Animation variants for airbrush spots
  const spotVariants = {
    initial: { opacity: 0, scale: 0.5, x: 0, y: 0 },
    animate: {
      opacity: [0.3, 0.6, 0.9],
      scale: [1, 1.3, 1],
      x: [-30, 30], // Gerakan horizontal
      y: [-30, 30], // Gerakan vertikal
      transition: { 
        duration: 5, 
        repeat: Infinity, 
        repeatType: "mirror", 
        ease: "easeInOut" 
      },
    },
  };

  // Generate random positions for splash images
  const positions = Array.from({ length: 24 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <div className="relative overflow-hidden bg-neutral-900">
      {/* Splash Background */}
      {positions.map((position, index) => (
        <motion.img
          key={index}
          src={splashes[index % splashes.length]}
          className="absolute object-cover w-96 h-96 backdrop-blur-sm"
          style={{
            top: position.top,
            left: position.left,
            margin: "10px",
          }}
          variants={spotVariants}
          initial="initial"
          animate="animate"
        />
      ))}

      {/* Children Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BgSplash;
