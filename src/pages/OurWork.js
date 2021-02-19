import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//images import
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//framer motion
import { motion } from "framer-motion";
import { lineAnime, pageAnimation, slider } from "./animation";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Movie>
        <h2>The Athlete</h2>
        <motion.div className="line" variants={lineAnime}></motion.div>
        <Link to="work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <motion.div className="line" variants={lineAnime}></motion.div>
        <Link to="work/the-racer">
          <img src={theracer} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <motion.div className="line" variants={lineAnime}></motion.div>
        <Link to="work/good-times">
          <img src={goodtimes} alt="athlete" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 1rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 8rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export const Frame1 = styled(motion.div)`
  background: #ff8ebf;
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 10%;
  left: 0;
`;
export const Frame2 = styled(Frame1)`
  background: #fffebf;
`;
export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

export default OurWork;
