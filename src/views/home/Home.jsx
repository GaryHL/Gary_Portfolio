import React, { useState, useRef, useEffect } from "react";
import SectionHome from "../../components/sectionHome/SectionHome";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link, useNavigate, useParams } from "react-router-dom";
import homeCover from '../../assets/home-cover.png'
import projectsCover from '../../assets/Projects-cover.png'
import aboutCover from '../../assets/about-cover.png'
import contactCover from '../../assets/contact-cover.png'

const Home = () => {
   let { page } = useParams();

   const [pageInit, setPageInit] = useState(null);



   useEffect(() => {
         setPageInit(page);
   }, [page]);

   const navigate = useNavigate();
   //estados iniciales de cada vista
   const [section1, setSection1] = useState(false);
   const [section2, setSection2] = useState(false);
   const [section3, setSection3] = useState(false);
   const [section4, setSection4] = useState(false);

   //función que obtiene el id y te lleva ahí
   const [sectionActive, setSectionActive] = useState("#projects");

   //estado constante, que se activa cada vez que el useState cambia
   useEffect(() => {
      switch (sectionActive) {
         case "#home":
            setSection1(true);
            setSection2(false);
            setSection3(false);
            setSection4(false);
            break;
         case "#projects":
            setSection1(false);
            setSection2(true);
            setSection3(false);
            setSection4(false);
            break;
         case "#about":
            setSection1(false);
            setSection2(false);
            setSection3(true);
            setSection4(false);
            break;
         case "#contact":
            setSection1(false);
            setSection2(false);
            setSection3(false);
            setSection4(true);
            break;
         default:
            setSection1(true);
            setSection2(false);
            setSection3(false);
            setSection4(false);
            break;
      }
   }, [sectionActive]);

   //estado que contiene el div que está en pantalla
   const [inScreen, setInScreen] = useState(null);

   const divRef1 = useRef(null);
   const divRef2 = useRef(null);
   const divRef3 = useRef(null);
   const divRef4 = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setInScreen(entry.target.id);
               if (entry.target.id !== sectionActive) {
                  setSectionActive(entry.target.id);
               }
            }
         });
      });
      observer.observe(divRef1.current);
      observer.observe(divRef2.current);
      observer.observe(divRef3.current);
      observer.observe(divRef4.current);
   }, [sectionActive]);

   //data de las secciones

   const dataHome = {
      title: "Hola, soy Gary",
      subtitle: "Bienvenid@ a mi portfolio!",
      ctaText: "click me",
      cta: () => {
         alert("You clicked");
      },
      picture:
         homeCover,
      pictureName: "Image name",
   };

   const dataProjects = {
      title: "Proyectos",
      subtitle: "Aquí puedes ver lo que soy capaz de hacer",
      ctaText: "Ver proyectos",
      cta: () => {
         navigate("/projects");
      },
      picture: projectsCover,
      pictureName: "Image name",
   };

   const dataAbout = {
      title: "Sobre mí",
      subtitle: "Dejame contarte un poco sobre mi ...",
      ctaText: "Conoceme!",
      cta: () => {
         navigate("/about");
      },
      picture:aboutCover,
      pictureName: "Image name",
   };

   const dataContact = {
      title: "Contacto",
      subtitle: "¿Quieres hablar conmigo?",
      ctaText: "Contactame",
      cta: () => {
         alert("You clicked");
      },
      picture:contactCover,
      pictureName: "Image name",
   };

   return (
      <ReactFullpage
         scrollingSpeed={1000}
         render={({ state, fullpageApi }) => {
            if (pageInit === "contact") {
               fullpageApi.moveSectionDown();
               fullpageApi.moveSectionDown();
               fullpageApi.moveSectionDown();
               setPageInit("listo");
               console.log(pageInit)
            }

            return (
               <>
                  <ReactFullpage.Wrapper>
                     <div className="section" id="#sectionhome">
                        <div id="home">
                           <SectionHome
                              active={section1}
                              dataSection={dataHome}
                           >
                              <div
                                 style={{
                                    position: "absolute",
                                    height: "0.1%",
                                 }}
                                 ref={divRef1}
                                 id="#home"
                              ></div>
                           </SectionHome>
                        </div>
                     </div>
                     <div className="section">
                        <div id="projects">
                           <SectionHome
                              rowReverse={true}
                              active={section2}
                              dataSection={dataProjects}
                              withButton={true}
                           >
                              <div
                                 style={{
                                    position: "absolute",
                                    height: "0.1%",
                                 }}
                                 ref={divRef2}
                                 id="#projects"
                              ></div>
                           </SectionHome>
                        </div>
                     </div>
                     <div className="section">
                        <div id="about">
                           <SectionHome
                              active={section3}
                              dataSection={dataAbout}
                              withButton={true}
                           >
                              <div
                                 style={{
                                    position: "absolute",
                                    height: "0.1%",
                                 }}
                                 ref={divRef3}
                                 id="#about"
                              ></div>
                           </SectionHome>
                        </div>
                     </div>
                     <div className="section" id="contacto">
                        <div id="contact">
                           <SectionHome
                              active={section4}
                              dataSection={dataContact}
                              withButton={true}
                           >
                              <div
                                 style={{
                                    position: "absolute",
                                    height: "0.1%",
                                 }}
                                 ref={divRef4}
                                 id="#contact"
                              ></div>
                           </SectionHome>
                           {/* <button onClick={() => fullpageApi.moveSectionUp()}>
                              Move up
                           </button> */}
                        </div>
                     </div>
                  </ReactFullpage.Wrapper>
               </>
            );
         }}
      />
   );
};
export default Home;
