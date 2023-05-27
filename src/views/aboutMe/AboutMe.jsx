import React, { useEffect, useRef, useState } from "react";
import SectionHome from "../../components/sectionHome/SectionHome";
import ReactFullpage from "@fullpage/react-fullpage";
import {
   SiJavascript,
   SiLaravel,
   SiReact,
   SiStyledcomponents,
   SiPhp,
   SiMysql,
   SiTypescript,
   SiSass

} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
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

const AboutMe = () => {
   const dataProjects = {
      title: "Sobre mí",
      subtitle: "⬇ Desliza para abajo ⬇",
      ctaText: "Ver más",
      picture:
         aboutCover,
      pictureName: "Image name",
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
   }, []);

   return (
      <ReactFullpage
         scrollingSpeed={1000}
         render={({ state, fullpageApi }) => {
            return (
               <>
                  <ReactFullpage.Wrapper>
                     <div className="section">
                        <SectionHome active={true} dataSection={dataProjects}
                           escene="about"
                        >
                           <div></div>
                        </SectionHome>
                     </div>
                     <div className="section">
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
                              <div className="containerProfileImage"></div>
                              <div className="containerDetails">
                                 <p>
                                    Soy un desarrollador web fullstack junior,
                                    he completado dos bootcamps que me dieron ya
                                    más de 1300 horas de practica y permitiendome trabajar en muchos proyectos,<br></br> <br></br>
                                    incluyendo tres hackathones de los cuales
                                    llegué a ser finalista en dos de ellos y ganador en la hackathon f5.<br></br>
                                    <br></br> Mi pasión por la tecnología y el
                                    desarrollo web me motiva a estar en
                                    constante evolución y aprendizaje en esta
                                    industria.<br></br>
                                    <br></br>
                                    Con un enfoque empático y perseverante,
                                    estoy listo para trabajar en un equipo
                                    dinámico y colaborativo para alcanzar
                                    objetivos ambiciosos.
                                 </p>

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
                     </div>
                     <div className="section">
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
                              />
                              <SkillBar
                                 skillName="Styled Components"
                                 Icon={SiStyledcomponents}
                                 percent={65}
                                 projects={10}
                                 animate={skills}
                              />
                              <SkillBar
                                 skillName="Sass"
                                 Icon={SiSass}
                                 percent={70}
                                 projects={13}
                                 animate={skills}
                              />
                              <SkillBar
                                 skillName="Laravel"
                                 Icon={SiLaravel}
                                 percent={60}
                                 projects={8}
                                 animate={skills}
                              />
                              <SkillBar
                                 skillName="Php"
                                 Icon={SiPhp}
                                 percent={45}
                                 projects={10}
                                 animate={skills}
                              />
                           </StyledGridSkills>
                           <Footer />
                        </ContainerAboutMe>
                     </div>
                  </ReactFullpage.Wrapper>
               </>
            );
         }}
      />
   );
};

export default AboutMe;
