import React from "react";
import styled from "styled-components";

//framer motion
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

const ContactUs = () => {
  return (
    <Contact variants={pageAnimation}>
      <h1>OUR CONTACT</h1>
    </Contact>
  );
};

export const Contact = styled(motion.div)`
  background: #fff;
  color: #fff;
`;

export default ContactUs;
