import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout classname="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      <div className="faq-line"></div>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
