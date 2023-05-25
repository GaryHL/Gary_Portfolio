import React, { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';

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

const SectionHome = ({ active, withButton, children, dataSection, rowReverse, setFormActive, escene}) => {

   const urlsSpline = {
      cube: "https://prod.spline.design/OmmIgfZAP1CRCLhO/scene.splinecode",
      projects:"https://prod.spline.design/9uk0aqEXnpHSt79V/scene.splinecode",
      about:"https://prod.spline.design/H2hNRbSeoCNYpfhE/scene.splinecode",
      contact:"https://prod.spline.design/x-BWFFjCHOkM69s7/scene.splinecode",
   }

   const esceneSpline = urlsSpline[escene];

   return (
      <StyledSection rowReverse={rowReverse}>
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
                  onClick={setFormActive ? () => setFormActive(true) : dataSection.cta}
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
         >
            <ContainerImage
            // initial={{ x: 0, scale: 0.95 }}
            // transition={{ type: "tween", duration: 1.2 }}
            >
               {children}
               {/* <StyledSpan
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
               ></StyledSpan> */}

               <SytledImg>
                  <Spline scene={esceneSpline} />
               </SytledImg>
            </ContainerImage>
         </StyledPicture>
      </StyledSection>
   );
};

export default SectionHome;
