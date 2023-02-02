import styled from "styled-components";

import { motion } from "framer-motion";

export const ContainerGridProjects = styled(motion.div)`
   width: 90%;
   padding: 0 5%;
   min-height:100vh;
   background-color: #e9e9e9;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const ContainerTabs = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   padding-top:10vh;
   gap: 1rem;
`;

export const StyledTab = styled(motion.span)`
   cursor: pointer;
   border: 1px solid #333;
   user-select:none;
   width: 200px;
   padding: 1rem 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ContainerProjects = styled(motion.div)`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
gap:1rem;
margin:5vh;
width:100%;

`