import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerSkillBar = styled(motion.div)`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 11fr;
  grid-template-rows: auto;
  @media (max-width: 900px) {
    width: 100%;
  }
  gap: 1rem;
  > svg {
    aspect-ratio: 1/1;
    font-size: 2.5rem;
    height: 100%;
  }
`;

export const StyledSkillBar = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > h4 {
    font-size: 1.5rem;
  }
`;
export const Bar = styled(motion.div)`
  width: 100%;
  height: 0.6rem;
  border: 1px solid gray;
  /* background-color: #d9d9d9; */
`;

export const StyledSpanProgress = styled(motion.span)`
  box-shadow: 0rem 0rem 1.5rem white;
  height: 100%;
  width: 1%;
  display: block;
  /* background-color: #222; */
  background-color: white;
  z-index: 3;
`;
