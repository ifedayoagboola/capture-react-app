import React from "react";
import styled from "styled-components";

//framer motion
import { motion } from "framer-motion";
import { pageAnimation, titleAnime } from "./animation";

const ContactUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnime}>OUR CONTACT</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Socials variants={titleAnime}>
          <Circle />
          <h2>Send us a message</h2>
        </Socials>
      </Hide>
      <Hide>
        <Socials variants={titleAnime}>
          <Circle />
          <h2>Send us a message</h2>
        </Socials>
      </Hide>
      <Hide>
        <Socials variants={titleAnime}>
          <Circle />
          <h2>Send us a message</h2>
        </Socials>
      </Hide>
    </Contact>
  );
};

export const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
  }
`;
export const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
export const Circle = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background: #353535;
`;
export const Socials = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 0.8rem;
  }
`;

export default ContactUs;
