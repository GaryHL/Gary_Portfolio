import React, { useState } from "react";
import { motion } from "framer-motion";
import {
   StyledInfo,
   StyledSection,
   StyledPicture,
   StyledLine,
   StyledTitle,
   StyledButton,
   StyledSubtitle,
   SytledImg,
   StyledSpan,
   ContainerImage,
} from "./styledSectionHome";

const SectionHome = ({ active, withButton, children, dataSection }) => {
   //Data test

   return (
      <StyledSection>
         <StyledInfo>
            <StyledTitle
               initial={{ x: "-100%" }}
               transition={{ type: "tween", duration: 0.8 }}
               animate={active ? { x: 0 } : { x: "-100%" }}
            >
               {dataSection.title}
            </StyledTitle>
            <StyledLine
               initial={{ x: -100 }}
               transition={{ type: "tween", duration: 0.9 }}
               animate={active ? { x: 0 } : { x: -100 }}
            ></StyledLine>
            <StyledLine
               initial={{ x: -100 }}
               transition={{ type: "tween", duration: 1.2 }}
               animate={active ? { x: 50 } : { x: -100 }}
            />
            <StyledSubtitle
               initial={{ x: "-300px" }}
               transition={{ type: "tween", duration: 1 }}
               animate={active ? { x: 0 } : { x: "-300px" }}
            >
               {dataSection.subtitle}
            </StyledSubtitle>
            {withButton ? (
               <StyledButton
                  onClick={dataSection.cta}
                  whileHover={{
                     scale: 1.03,
                     x: 5,
                     transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ x: "-300px" }}
                  animate={
                     active
                        ? { x: 0, transition: { type: "tween", duration: 1.2 } }
                        : { x: "-300px" }
                  }
               >
                  {dataSection.ctaText}
               </StyledButton>
            ) : null}
         </StyledInfo>
         <StyledPicture
            initial={{ x: 0, scale: 0.95 }}
            transition={{ type: "tween", duration: 1.2 }}
            animate={active ? { scale: 1, x: "-5%" } : { scale: 0.95 }}
         >
            <ContainerImage
               initial={{ x: 0, scale: 0.95 }}
               transition={{ type: "tween", duration: 1.2 }}
               animate={active ? { scale: 1 } : { scale: 0.95 }}
            >
               {children}
               <StyledSpan
                  style={{ backgroundColor: "#e9e9e9" }}
                  initial={{ x: 0 }}
                  transition={{ type: "tween", duration: 1.2 }}
                  animate={active ? { x: "100%" } : { x: 0 }}
               ></StyledSpan>
               <StyledSpan
                  style={{ backgroundColor: "black" }}
                  initial={{ x: 0 }}
                  transition={{ type: "tween", duration: 0.8 }}
                  animate={active ? { x: "100%" } : { x: 0 }}
               ></StyledSpan>

               <SytledImg
                  src={dataSection.picture}
                  alt={dataSection.pictureName}
               />
            </ContainerImage>
         </StyledPicture>
      </StyledSection>
   );
};

export default SectionHome;
