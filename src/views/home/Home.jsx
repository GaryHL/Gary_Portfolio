import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import SectionHome from "../../components/sectionHome/SectionHome";

const Home = () => {
   const divRef = useRef(null);

   function scrollToHome() {
      const element = document.querySelector("#home");
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
   }

   function scrollToProjects() {
      const element = document.querySelector("#projects");
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
   }

   function scrollToAbout() {
      const element = document.querySelector("#about");
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
   }

   function scrollToContact() {
      const element = document.querySelector("#contact");
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
   }

   const [section1, setSection1] = useState(false);
   const [section2, setSection2] = useState(false);
   const [section3, setSection3] = useState(false);
   const [section4, setSection4] = useState(false);

   const [sectionActive, setSectionActive] = useState("#home");

   useEffect(() => {
      switch (sectionActive) {
         case "#home":
            scrollToHome();
            setSection1(true);
            setSection2(false);
            setSection3(false);
            setSection4(false);
            console.log("estás en home");
            break;
         case "#projects":
            scrollToProjects();
            setSection1(false);
            setSection2(true);
            setSection3(false);
            setSection4(false);
            console.log("estás en projects");
            break;
         case "#about":
            scrollToAbout();
            setSection1(false);
            setSection2(false);
            setSection3(true);
            setSection4(false);
            console.log("estás en About");
            break;
         case "#contact":
            scrollToContact();
            setSection1(false);
            setSection2(false);
            setSection3(false);
            setSection4(true);
            console.log("estás en Contat");
            break;
         default:
            scrollToHome();
            setSection1(true);
            setSection2(false);
            setSection3(false);
            setSection4(false);
            console.log("estás en home");
            break;
      }
   }, [sectionActive]);

   return (
      <>
         <Navbar />
         <SectionHome active={section1} idSection="home" />
         <SectionHome active={section2} idSection="projects" />
         <SectionHome active={section3} idSection="about" />
         <SectionHome active={section4} idSection="contact" />
      </>
   );
};

export default Home;
