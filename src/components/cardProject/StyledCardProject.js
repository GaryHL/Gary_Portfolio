import styled from "styled-components";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledContainerCard = styled(motion.div)`
   border: 1px solid #333;
   min-width: 250px;
   max-width: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   &:hover {
      > img {
         animation: flash 0.3s;
         filter: brightness(var(--value, 5));
         --value: 0.5;
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
   cursor:pointer;
   border-bottom: 1px black solid ;
`;

export const StyledDetailsCard = styled(motion.span)`
   padding: 1rem;
   min-height: 3rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.5rem;
`;

export const StyledCardButtons = styled(motion.div)`
padding:0.5rem;
width:100%;
display:flex;
justify-content:center;
gap:1rem;

`

export const ButtonCard = styled(Link)`
width:100px;
background-color:#e9e9e9;
border:none;
outline:none;
border:1px solid  #333;
cursor:pointer;
padding:0.5rem;
text-decoration:none;
color:black;
display: flex;
align-items:center;
justify-content:center;
&:hover{
    background: black;
    color:#e9e9e9;
    transition:ease-in-out 0.3s;
}
`