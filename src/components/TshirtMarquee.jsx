import React from "react";
import { motion } from "framer-motion";

import baju1 from "../assets/baju/baju1.png";
import baju2 from "../assets/baju/baju2.png";
import baju3 from "../assets/baju/baju3.png";
import baju4 from "../assets/baju/baju4.png";
import baju5 from "../assets/baju/baju5.png";
import baju6 from "../assets/baju/baju6.png";
import baju7 from "../assets/baju/baju7.png";

const images = [baju1, baju2, baju3, baju4, baju5, baju6, baju7 ];

const from = 0;
const to = "-100%"

const TshirtMarquee = () => {
  return (
    <div className="mt-10 max-w-8xl h-[30rem] mx-auto bg-slate-200 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            T-Shirt Marquee
          </h3>
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}`  }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
        >
        {images.map((image, index) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
        >
        {images.map((image, index) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>
    </div>
        </div>
      </div>
  );
};

export default TshirtMarquee;