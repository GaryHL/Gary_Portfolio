import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const StyledSection = styled.div`
  /* background-color: #e9e9e9; */
  width: 90%;
  height: 100vh;
  padding: 0 5%;
  display: flex;
  ${(props) =>
    props.rowReverse ? "flex-direction:row-reverse;" : "flex-direction:row;"}
  align-items:center;
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: 80vh;
    padding-top: 10vh;
  }
`;

export const StyledTitle = styled(motion.h2)`
  font-size: 6rem;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;
export const SpanTitle = styled(motion.span)`
  font-size: 6rem;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;

export const StyledSubtitle = styled(motion.p)`
  font-weight: light;
`;

export const StyledLine = styled(motion.div)`
  width: 100px;
  height: 3px;
  border-radius: 0.2rem;
  /* background: #333; */
  background-color: white;
`;

export const StyledButton = styled(motion.button)`
  max-width: 200px;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  /* border: 1.1px solid #333; */
  /* background-color: white; */
  border-radius: 2rem;
  border: 3px solid white;
  font-size: 1rem;
  background-color: transparent;
  color: white;
`;

export const StyledInfo = styled(motion.div)`
  width: 100%;
  max-width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-right: 2rem; */
  overflow: scroll;
  overflow: hidden;
  z-index: 10;
  gap: 1.5rem;
  @media (max-width: 900px) {
    max-width: 100%;
    padding: 0 5%;
  }
`;

export const StyledPicture = styled(StyledInfo)`
  /* padding-left: 2rem; */
  /* padding-right: 0rem; */
  width: calc(100% - 10%);
  position: absolute;
  position: relative;
  z-index: 2;
`;
export const ContainerImage = styled(motion.div)`
  /* overflow: scroll;
  overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1/1;
  height: 100%;
`;

const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  55%{opacity:0}
  60%{opacity:1}
  90%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SytledImg = styled(motion.div)`
  /* height: 100%; */
  overflow: hidden;
  aspect-ratio: 1/1;
  filter: brightness(0.6);
  filter: contrast(1.3);
  position: relative;
  background-url: url(http://api.thumbr.it/whitenoise-361x370.png?);

  .tip {
    position: absolute;
    margin: 50% 50%;
    margin-top: 80%;
    opacity: 0;
    animation: ${fadeIn} 5s ease-in;
    /* animation-delay: 5s; */
  }
  @media (min-width: 900px) {
    width: 100%;
    max-width: 550px;
    .tip {
      display: none;
    }
  }
  @media (max-width: 900px) {
    height: 100%;
    
  }
`;
export const StyledSpan = styled(motion.span)`
  width: 100%;
  height: 100%;
  position: absolute;
`;
