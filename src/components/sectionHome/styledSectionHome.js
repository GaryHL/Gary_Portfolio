import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSection = styled.div`
background-color:#e9e9e9;
   width: 90%;
   height: 100vh;
   padding: 0 5%;
   display: flex;
   align-items:center;
   position:relative;
   @media (max-width: 900px) {
      flex-direction:column-reverse;
      height:90vh;
      padding-top:10vh;
   }
`;

export const StyledTitle = styled(motion.h2)`
   font-size: 6rem;
   @media (max-width: 900px) {
      font-size: 3.5rem;
   }
`;

export const StyledSubtitle = styled(motion.p)`
   font-weight: 600;
`;

export const StyledLine = styled(motion.div)`
   width: 100px;
   height: 3px;
   background: #333;
`;

export const StyledButton = styled(motion.button)`
   max-width: 200px;
   cursor: pointer;
   border: none;
   outline: none;
   padding: 0.5rem 1rem;
   border:1.1px solid #333;
   background-color:transparent;
   &:hover{
      background-color:black;
      color:#e9e9e9;
      transition: ease-in-out 0.3s;
   }
`;

export const StyledInfo = styled(motion.div)`
   width:100%;
   max-width:60%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-right: 2rem;
   overflow: scroll;
   overflow: hidden;
   z-index:10;
   gap: 1.5rem;
   @media (max-width: 900px) {
      padding: 0%;
      max-width:100%;
   }
`;

export const StyledPicture = styled(StyledInfo)`
   padding-left: 2rem;
   padding-right: 0rem;
   position:absolute;
   position:relative;
   z-index:2;
   right:0;
`;
export const ContainerImage = styled(motion.div)`
   overflow: scroll;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items:center;
   position: relative;
   box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const SytledImg = styled(motion.img)`
   aspect-ratio: 3/1;
   object-fit:cover;
   user-select: none;
   @media (max-width: 900px) {
      aspect-ratio: 1/1;
      width:100%;
   }
  
`;
export const StyledSpan = styled(motion.span)`
   width: 100%;
   height: 100%;
   position: absolute;
`;
