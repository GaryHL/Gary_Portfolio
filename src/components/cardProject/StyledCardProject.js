import styled, {keyframes} from "styled-components";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledContainerCard = styled(motion.div)`
  min-width: 250px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: #111;
  user-select: none;
  >img{
   border-radius: 0.5rem;

  }
  &:hover {
    > img {
      /* animation: flash 0.3s; */
      /* filter: brightness(var(--value, 5));
      --value: 0.5; */
      @keyframes flash {
        0% {
          filter: brightness(var(--value, 5));
          --value: 2;
        }
        100% {
          filter: brightness(var(--value, 5));
          --value: 0.5;
        }
      }
    }
  }
`;

export const StyledImgCard = styled(motion.img)`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  cursor: pointer;
  border-bottom: 1px black solid;
`;

export const StyledDetailsCard = styled(motion.span)`
  padding: 1.5rem;
  min-height: 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  line-height: 1.2rem;
  gap: 1rem;
  > p {
  }
`;

export const StyledCardButtons = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ButtonCard = styled(Link)`
  width: 100px;
  /* background-color:#e9e9e9; */
  color: white;
  border: none;
  outline: none;
  border: 2px solid white;
  border-radius: 10rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: ease-in-out 0.3s;
  &:hover {
    scale: 1.03;
    transition: ease-in-out 0.3s;
  }
`;
const rotateAnimation = keyframes`
  0% {
    border-color: #547E76;
  }
  50% {
    border-color: #a3b2c7;
  }
  100% {
    border-color: #4E84D5;
  }
`;

export const Price = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  padding:0.8rem 0.8rem;
  right: 0;
  font-weight: bold;
  border-radius:0 8px 0px 10px ;
  /* border: 3px solid; */
  /* background: linear-gradient(45deg, #547e762b, #a3b2c737, #4e84d541); */
  background: linear-gradient(45deg, #2c3e50,#abb7c0);
  background-size: 200% 200%;
  animation: ${rotateAnimation} 6s linear infinite;
  backdrop-filter: blur(8px);
`;

