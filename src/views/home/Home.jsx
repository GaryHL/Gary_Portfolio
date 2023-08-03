import React, { useState, useRef, useEffect } from "react";
import SectionHome from "../../components/sectionHome/SectionHome";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link, useNavigate, useParams } from "react-router-dom";
import homeCover from '../../assets/home-cover.png'
import projectsCover from '../../assets/Projects-cover.png'
import aboutCover from '../../assets/about-cover.png'
import contactCover from '../../assets/contact-cover.png'
import ContactForm from "../../components/contactForm/ContactForm";
import welcome from '../../assets/imagesSections/welcome.png'

const Home = ({ setFormActive }) => {
   let { page } = useParams();

   const [pageInit, setPageInit] = useState(null);

   async function postViews() {
      console.log("post ")
      const currentDate = new Date();
      
      const url = "https://648041e5f061e6ec4d48e9f6.mockapi.io/api/Views";
      const requestData = {
         "view":"Nueva visita",
         "date":currentDate,
         "id":"1"
      };
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestData)
        });
        if (!response.ok) {
          throw new Error("Error en la solicitud POST");
        }
        const data = await response.json();
    
      } catch (error) {
      }
    }

   useEffect(() => {
      setPageInit(page);
   }, [page]);

   useEffect(() =>{
      postViews()
   },[])

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
      image1: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      image2: welcome,
      // image2: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
      image1: "https://th.bing.com/th/id/OIG.ebsHfSdmGPaxGDyQexrQ?pid=ImgGn",
      image2: "https://th.bing.com/th/id/OIG.BI61L0PA0.w8.0U3tH.j?pid=ImgGn",
   };

   const dataAbout = {
      title: "Sobre mí",
      subtitle: "Dejame contarte un poco sobre mi ...",
      ctaText: "Conoceme!",
      cta: () => {
         navigate("/about");
      },
      picture: aboutCover,
      pictureName: "Image name",
      image1: "https://th.bing.com/th/id/OIG.46NUjcLzBMgVze4IF_dB?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      image2: "https://th.bing.com/th/id/OIG.irri7qeUXUP6uD4uLGzE?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
   };

   const dataContact = {
      title: "Contacto",
      subtitle: "¿Quieres hablar conmigo?",
      ctaText: "Contactame",
      cta: () => {
      },
      picture: contactCover,
      pictureName: "Image name",
      image1: "https://th.bing.com/th/id/OIG.yCHSGncupHN12S4k1QyT?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      image2: "https://th.bing.com/th/id/OIG.naUXb_jFE7uPxzD4RO18?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
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
            }

            return (
               <>
                  <ReactFullpage.Wrapper>
                     <div className="section" id="#sectionhome">
                        <div id="home">
                           <SectionHome
                              active={section1}
                              dataSection={dataHome}
                              escene={"cube"}
                              // tip
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
                              escene={"projects"}
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
                              escene="about"
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
                              rowReverse={true}
                              active={section4}
                              dataSection={dataContact}
                              withButton={true}
                              setFormActive={setFormActive}
                              escene="contact"

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
