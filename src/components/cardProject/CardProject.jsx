import React, { useContext, useEffect, useState } from "react";
import {
   ButtonCard,
   StyledCardButtons,
   StyledContainerCard,
   StyledDetailsCard,
   StyledImgCard,
} from "./StyledCardProject";
import { Link } from "react-router-dom";
import { StyledButton } from "../sectionHome/styledSectionHome";
import AppContext from "../../context/AppContext";

const CardProject = ({ project }) => {

   const { setIsHover } = useContext(AppContext)

   const [cardHover, setCardHover] = useState(false);

   const openWindow = (url) => {
      window.open(url, '_blank');
   };

   return (
      <StyledContainerCard
         onMouseEnter={() => setCardHover(true)}
         onMouseLeave={() => setCardHover(false)}
         layout
         initial={{ opacity: 0 }}
         whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
      >
         <StyledImgCard src={project.image_path}
            onClick={() => openWindow(project.link)}
         />
         <StyledDetailsCard>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{project.title}</h4>
            <p>{project.description}</p>
            <StyledCardButtons>
               <ButtonCard
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                  to=""
                  onClick={() => openWindow(project.link_repository)}
               >
                  Repositorio
               </ButtonCard>
               <ButtonCard
                  to=""
                  onClick={() => openWindow(project.link)}
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
               >
                  Despliege
               </ButtonCard>
            </StyledCardButtons>
         </StyledDetailsCard>
      </StyledContainerCard>
   );
};

export default CardProject;
