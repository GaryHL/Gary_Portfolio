import styled from "styled-components";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledContainerCard = styled(motion.div)`
  min-width: 250px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  &:hover {
    background: white;
    color: black;
    transition: ease-in-out 0.3s;
  }
`;
