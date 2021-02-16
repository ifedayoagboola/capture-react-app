import React from "react";
import styled from "styled-components";
import { About } from "../Style";
import { animateSharedLayout } from "framer-motion";

import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <animateSharedLayout>
        <Toggle title="how do I start?">
          <div className="answer">
            <p>
              0 Lorem ipsum dolor sit amet 0 Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit, dolorum.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              1 Lorem ipsum dolor sit amet. 1 Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit, dolorum.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods">
          <div className="answer">
            <p>
              2 Lorem ipsum dolor sit amet.2 Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit, dolorum.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer">
          <div className="answer">
            <p>
              3 Lorem ipsum dolor sit amet. 3 Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit, dolorum.
            </p>
          </div>
        </Toggle>
      </animateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1.5rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.15rem;
    margin: 1.3rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1.5rem 0rem;
    p {
      padding: 0.5rem 0rem;
    }
  }
`;

export default FaqSection;
