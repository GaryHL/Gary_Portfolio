import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerAboutMe = styled(motion.div)`
  width: 90%;
  padding: 0 5%;
  padding-top: 5vh;
  min-height: 80vh;
  /* background-color: #e9e9e9; */
`;

export const StyledTitle = styled(motion.h1)`
  font-size: 3rem;
  height: 3.2rem;
  @media (max-width: 900px) {
    grid-template-columns: 100%;
    font-size: 2.5rem;
  }
`;

export const StyledContainerInfo = styled(motion.div)`
  display: grid;
  grid-template-columns: 50% 50%;
  /* > img {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  } */
  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }
  .containerProfileImage{
    border-radius: 1rem;
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    @media (max-width:700px) {
      display: none;
    }
  }
  .containerDetails {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 200;
    line-height: 1.5rem;
    > p {
      font-size: 1.2rem;
    }
    padding-left: 2rem;
    @media (max-width: 900px) {
      padding-left: 0rem;
      /* padding-top: 2rem; */

      > p {
        font-size: 1rem;
      }
    }
  }
`;

export const StyledGridSkills = styled(motion.div)`
  display: grid;
  grid-template-columns: auto auto auto;
  
  row-gap: 4rem;
  grid-gap: 3rem;
  margin-top: 2rem;
  @media (max-width: 900px) {
    overflow-y: scroll;
    grid-template-columns: 100%;
    height: 60vh;
    &::-webkit-scrollbar {
      width: 0.3em; /* Ancho de la barra de desplazamiento */
    }

    &::-webkit-scrollbar-track {
      background-color: transparent ; /* Color del fondo de la barra de desplazamiento */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888; /* Color de la barra de desplazamiento */
      border-radius: 2em; /* Radio de la barra de desplazamiento */
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Color de la barra de desplazamiento al pasar el cursor sobre ella */
    }
  }
`;
