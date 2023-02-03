import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerSkillBar = styled(motion.div)`
   display: grid;
   width: 80%;
   grid-template-columns: 1fr 11fr;
   grid-template-rows: auto;
   @media(max-width:900px){
       width: 100%;
    }
   gap:1rem;
   >svg{
    aspect-ratio:1/1;
    font-size:2.5rem;
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
   height: 1rem;
   background-color: #d9d9d9;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
   
export const StyledSpanProgress = styled(motion.span)`
   height: 100%;
   width: 1%;
   display:block;
   background-color: #222;
   z-index:3
`;
