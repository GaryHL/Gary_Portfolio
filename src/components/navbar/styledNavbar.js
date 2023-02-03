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
   transition: 0.5s;
   color: ${(props) => (props.openMenu ? "#e9e9e9" : "black")};
   user-select: none;
`;

export const LinkToHome = styled(Link)`
   font-size: 1.5rem;
   cursor: pointer;
   transition: transform 0.3s ease-in-out;
   text-decoration:none;
   color:black;
   &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
   }
`;

export const StyledOptions = styled.div`
   height: 80%;
   display: flex;
   align-items: center;
   gap: 1rem;
   > svg {
      cursor: pointer;
      transition: 0.3s;
      height: 80%;
      aspect-ratio: 1/1;
      width: 1.5rem;
      &:hover {
         transform: scale(1.5);
         transition: transform 0.3s ease-in-out;
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
`;
