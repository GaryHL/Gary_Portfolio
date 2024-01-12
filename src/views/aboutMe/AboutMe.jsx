import React, { useEffect, useRef, useState } from "react";
import SectionHome from "../../components/sectionHome/SectionHome";
import { BrilliantColours } from "../../utilities/BrillinantColoursList";
import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import {
   SiJavascript,
   SiLaravel,
   SiReact,
   SiStyledcomponents,
   SiPhp,
   SiMysql,
   SiTypescript,
   SiSass,
   SiTailwindcss,
   SiGit,
   SiNextdotjs,
   SiNodedotjs 
} from "react-icons/si";
import {
   ContainerAboutMe,
   StyledContainerInfo,
   StyledGridSkills,
   StyledTitle,
} from "./StyledAboutMe";
import SkillBar from "../../components/skillBar/SkillBar";
import {
   ContainerImage,
   StyledSpan,
   SytledImg,
} from "../../components/sectionHome/styledSectionHome";
import Footer from "../../components/footer/Footer";
import aboutCover from '../../assets/about-cover.png'
import gary_profile from '../../assets/gary-image.jpeg'
import hoverEffect from "hover-effect";
import ScrollToTop from "../../components/scrolltop/ScrollTop";

const AboutMe = () => {

   const dataAbout = {
      title: "Sobre mí",
      subtitle: "⬇ DESLIZA PARA ABAJO ⬇",
      ctaText: "Conoceme!",
      cta: () => {
         navigate("/about");
      },
      picture: aboutCover,
      pictureName: "Image name",
      image1: "https://i.imgur.com/EMWKwIX.jpg",
      image2: "https://i.imgur.com/wADj1Nv.jpg",
   };

   const divRef1 = useRef(null);
   const divRef2 = useRef(null);

   const [aboutMe, setAboutMe] = useState(false);

   const [skills, setSkills] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               if (entry.target.id === "aboutme") {
                  setAboutMe(true);
               }
               if (entry.target.id === "skills") {
                  setSkills(true);
                  console.log(skills);
               }
            }
         });
      });
      observer.observe(divRef1.current);
      observer.observe(divRef2.current);

      const myElementContainer = myElementRef.current;
      const image = new hoverEffect({
         parent: myElementContainer,
         intensity: 0.5,
         image1: "https://cdn.pixabay.com/photo/2015/09/09/20/17/work-933061_1280.jpg",
         image2: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         displacementImage: 'https://images.unsplash.com/photo-1606662995669-4545c4459623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      })
   }, []);

   function deleteSpacesMin(texto) {
      const textoSinEspacios = texto.replace(/\s/g, '');
      const textoEnMinusculas = textoSinEspacios.toLowerCase();
      return textoEnMinusculas.slice(0, 3);
   }
   const myElementRef = useRef(null);

   return (

      <>
         <SectionHome active={true} dataSection={dataAbout}
            escene="about"
         >
            <div></div>
         </SectionHome>
         <ContainerAboutMe>
            <div style={{ overflow: "hidden" }}>
               <StyledTitle
                  initial={{ x: -300 }}
                  transition={{ duration: 0.7 }}
                  animate={
                     aboutMe
                        ? { x: 0, scale: 1 }
                        : { x: -300, scale: 0.96 }
                  }
               >
                  ¿Quién soy yo?
               </StyledTitle>
            </div>
            <StyledContainerInfo style={{ marginTop: "2.5rem" }}>
               <motion.div className="containerProfileImage" ref={myElementRef} initial={{ scale: 0.9, rotate: 3.5, opacity: 0. }}
                  animate={aboutMe
                     ? { scale: 1, rotate: 0, opacity: 1 }
                     : { scale: 0.8, rotate: 3.5, opacity: 0. }}
                  transition={{ type: "spring", duration: 1.5 }}></motion.div>

               <div className="containerDetails">
                  <motion.p initial={{ x: -300 }}
                     transition={{ duration: 0.5 }}
                     animate={
                        aboutMe
                           ? { x: 0, scale: 1 }
                           : { x: -300, scale: 0.96 }
                     }>
                     ¡Hola! Soy Gary, un apasionado desarrollador web Fullstack. Hace dos años, mi interés por el marketing me llevó a sumergirme en la venta de productos como afiliado, creando anuncios en Facebook y Google. Descubrí el valor de la optimización de sitios web y la importancia de brindar una excelente experiencia de usuario.</motion.p>

                  <motion.p initial={{ x: -300 }}
                     transition={{ duration: 0.8 }}
                     animate={
                        aboutMe
                           ? { x: 0, scale: 1 }
                           : { x: -300, scale: 0.96 }
                     }>

                     Admiraba profundamente a los programadores y su capacidad para hacerlo todo, lo cual me inspiró a aprender a programar. Ingresé a Factoría F5 y descubrí una pasión dentro de mí que desconocía.
                  </motion.p>

                  <motion.p initial={{ x: -300 }}
                     transition={{ duration: 1 }}
                     animate={
                        aboutMe
                           ? { x: 0, scale: 1 }
                           : { x: -300, scale: 0.96 }
                     }>

                     Desde entonces, no puedo pasar ni dos días sin sumergirme en el código. Resolver problemas y crear soluciones es mi combustible diario.
                  </motion.p>

                  <motion.p initial={{ x: -300 }}
                     transition={{ duration: 1.2 }}
                     animate={
                        aboutMe
                           ? { x: 0, scale: 1 }
                           : { x: -300, scale: 0.96 }
                     }>

                     Si buscas a alguien apasionado, comprometido y con un hambre insaciable por programar, no dudes en contactarme. Estoy emocionado por enfrentar nuevos desafíos y contribuir con mi entusiasmo y habilidades a proyectos emocionantes.

                     ¡Creemos algo increíble juntos!
                  </motion.p>

                  <div
                     style={{
                        position: "absolute",
                        height: "0.1%",
                     }}
                     ref={divRef1}
                     id="aboutme"
                  ></div>
               </div>
            </StyledContainerInfo>
         </ContainerAboutMe>
         <ContainerAboutMe>
            <div style={{ overflow: "hidden" }}>
               <StyledTitle
                  initial={{ x: -300 }}
                  transition={{ duration: 0.7 }}
                  animate={
                     skills
                        ? { x: 0, scale: 1 }
                        : { x: -300, scale: 0.96 }
                  }
               >
                  Tecnologías
               </StyledTitle>
            </div>
            <StyledGridSkills>
               <SkillBar
                  skillName="Javascript"
                  Icon={SiJavascript}
                  percent={75}
                  projects={35}
                  animate={skills}
                  color={BrilliantColours.amarillo}
               >
                  <div
                     style={{
                        position: "absolute",
                        height: "0.1%",
                     }}
                     ref={divRef2}
                     id="skills"
                  ></div>
               </SkillBar>
               <SkillBar
                  skillName="React JS"
                  Icon={SiReact}
                  percent={70}
                  projects={20}
                  animate={skills}
                  color={BrilliantColours.azul}
               />
               <SkillBar
                  skillName="NodeJS"
                  Icon={SiNodedotjs}
                  percent={65}
                  projects={6}
                  animate={skills}
                  color={BrilliantColours.jade}
               />
               <SkillBar
                  skillName="Nextjs"
                  Icon={SiNextdotjs }
                  percent={90}
                  projects={13}
                  animate={skills}
                  color={BrilliantColours.perla}
               />
               <SkillBar
                  skillName="Laravel"
                  Icon={SiLaravel}
                  percent={60}
                  projects={8}
                  animate={skills}
                  color={BrilliantColours.carmesí}
               />
               <SkillBar
                  skillName="Php"
                  Icon={SiPhp}
                  percent={45}
                  projects={10}
                  animate={skills}
                  color={BrilliantColours.zafiro}
               />
               <SkillBar
                  skillName="Tailwind"
                  Icon={SiTailwindcss}
                  percent={85}
                  projects={8}
                  animate={skills}
                  color={BrilliantColours.aguamarina}
               />
               <SkillBar
                  skillName="Typescript"
                  Icon={SiTypescript}
                  percent={69}
                  projects={7}
                  animate={skills}
                  color={BrilliantColours.celeste}
               />
               <SkillBar
                  skillName="Git"
                  Icon={SiGit}
                  percent={80}
                  projects={40}
                  animate={skills}
                  color={BrilliantColours.mandarina}
               />
            </StyledGridSkills>
            <Footer />
         </ContainerAboutMe>
         <ScrollToTop />
      </>



   );
};

export default AboutMe;
