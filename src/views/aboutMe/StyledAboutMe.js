import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerAboutMe = styled(motion.div)`
   width: 90%;
   padding: 0 5%;
   min-height: 100vh;
   overflow: scroll;
   overflow: hidden;
   background-color:#e9e9e9;

`;

export const StyledTitle = styled(motion.h1)`
   margin: 15vh 0 5vh 0 ;
   font-size:3rem;
   @media(max-width:900px){
      margin: 9vh 0 2vh 0 ;
       
    }
`;

export const StyledContainerInfo = styled(motion.div)`
    display:grid;
    grid-template-columns:50% 50%;
    >img{
       aspect-ratio:16/9;
       width: 100%;
       box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      }
      @media(max-width:900px){
       grid-template-columns:100%;

    }
   .containerDetails {
      display: flex;
      flex-direction: column;
      gap:1rem;
      >p{
         font-size:1.3rem;
      }
      padding-left:2rem;
      @media(max-width:900px){
         padding-left:0rem;
         padding-top:2rem ;
       
    }
   }
`;

export const StyledGridSkills = styled(motion.div)`
    display:grid;
    grid-template-columns:auto auto;
    row-gap:4rem;
    grid-gap:3rem;

    @media(max-width:900px){
       grid-template-columns:100%;
    }

`