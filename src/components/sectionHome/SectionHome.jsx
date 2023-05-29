import React, { useContext, useEffect, useRef, useState } from "react";
import {motion} from 'framer-motion'
import hoverEffect from 'hover-effect';
import {
   StyledInfo,
   StyledSection,
   StyledPicture,
   StyledLine,
   StyledTitle,
   StyledButton,
   StyledSubtitle,
   SytledImg,
   ContainerImage,
} from "./styledSectionHome";
import AppContext from "../../context/AppContext";

const SectionHome = ({ active, withButton, children, dataSection, rowReverse, setFormActive, tip }) => {

   const { setIsHover } = useContext(AppContext)

   function deleteSpacesMin(texto) {
      const textoSinEspacios = texto.replace(/\s/g, '');
      const textoEnMinusculas = textoSinEspacios.toLowerCase();
      return textoEnMinusculas.slice(0, 3);
   }
   const myElementRef = useRef(null);

   useEffect(() => {

      const myElementContainer = myElementRef.current;
      const image = new hoverEffect({
         parent: myElementContainer,
         intensity: 0.5,
         image1: dataSection.image1,
         image2: dataSection.image2,
         displacementImage: 'https://images.unsplash.com/photo-1606662995669-4545c4459623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      })
   }, [])






   return (
      <StyledSection rowReverse={rowReverse}>
         <StyledInfo>
            <StyledTitle
               initial={{ x: "-100%" }}
               transition={{ type: "spring", duration: 1.1 }}
               animate={active ? { x: 0 } : { x: "-100%" }}
            >
               {dataSection.title}
            </StyledTitle>
            <StyledLine
               initial={{ x: -100 }}
               transition={{ type: "spring", duration: 1.2 }}
               animate={active ? { x: 0 } : { x: -100 }}
            ></StyledLine>
            <StyledLine
               initial={{ x: -100 }}
               transition={{ type: "spring", duration: 1.5 }}
               animate={active ? { x: 50 } : { x: -100 }}
            />
            <StyledSubtitle
               initial={{ x: "-300px" }}
               transition={{ type: "spring", duration: 1.2 }}
               animate={active ? { x: 0 } : { x: "-300px" }}
            >
               {dataSection.subtitle}
            </StyledSubtitle>
            {withButton ? (
               <StyledButton
                  onHoverStart={() => setIsHover(true)}
                  onHoverEnd={() => setIsHover(false)}
                  onClick={() => {
                     if (setFormActive) {
                        setFormActive(true);
                     } else {
                        dataSection.cta();
                     }
                     setIsHover(false);
                  }}
                  whileHover={{
                     scale: 1.03,
                     x: 5,
                     transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ x: "-300px" }}
                  animate={
                     active
                        ? { x: 0, transition: { type: "spring", duration: 1.5 } }
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

               <SytledImg ref={myElementRef}

                  initial={{ scale: 0.9, rotate: 3.5, opacity: 0. }}
                  animate={active
                     ? { scale: 1, rotate: 0, opacity: 1 }
                     : { scale: 0.8, rotate: 3.5, opacity: 0. }}
                  transition={{ type: "spring", duration: 1.5 }}
               >
                  <motion.div className="tip" animate={tip ? { display: "none" } : {}}>clickme</motion.div>
                  {/* <Spline scene={esceneSpline} /> */}
                  {/* <Spline scene="https://prod.spline.design/9uk0aqEXnpHSt79V/scene.splinecode" /> */}
               </SytledImg>
            </ContainerImage>
         </StyledPicture>
      </StyledSection>
   );
};

export default SectionHome;
