import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 90%;
  position: fixed;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 100;
  transition: 0.5s ease-in-out;
  /* color: ${(props) => (props.openMenu ? "#e9e9e9" : "black")};
   a{
      color: ${(props) => (props.openMenu ? "#e9e9e9" : "black")};
      transition: 1.5s ease-in-out;
   } */
  user-select: none;
  color: white;
`;

export const LinkToHome = styled(Link)`
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  text-decoration: none;
  color: white;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }
`;

export const StyledOptions = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  gap: 1rem;
  > svg {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    height: 80%;
    aspect-ratio: 1/1;
    width: 1.5rem;
    &:hover {
      transform: scale(1.5);
      transition: 0.5s ease-in-out;
    }
  }
`;

export const ContainerMenu = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
  background-color: #333;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.47);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border:0px;
  border-bottom: 1px;

`;

export const ContianerLinksMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  > span {
    /* height: 2.5rem; */
    cursor: pointer;
    /* overflow: scroll;
      overflow: hidden; */
  }
`;

export const LInkMenu = styled(Link)`
  font-size: 3rem;
  color: white;
  outline: none;
  text-decoration: none;
`;
