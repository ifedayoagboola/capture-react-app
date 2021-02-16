import React from "react";
import home1 from "../img/home1.png";

//Framer motion
import { motion } from "framer-motion";
import { titleAnime, photoAnime } from "../pages/animation";

import { About, Description, Hide } from "../Style";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnime}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>
              Your <span>dreams </span> come through
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={titleAnime}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with aamazing skills.
        </motion.p>
        <motion.button variants={titleAnime}>Contact Us</motion.button>
      </Description>
      <motion.Image variants={photoAnime}>
        <img src={home1} alt="Guy holding camera" />
      </motion.Image>
    </About>
  );
};

export default AboutSection;
