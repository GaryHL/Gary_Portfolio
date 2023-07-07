import React, { useState, useEffect, useContext } from "react";
import {
   ContainerGridProjects,
   ContainerProjects,
   ContainerTabs,
   StyledTab,
} from "./StyledGridProjects";
import { AnimatePresence } from "framer-motion";
import CardProject from "../cardProject/CardProject";
import Footer from "../footer/Footer";
import imgYoutube from '../../assets/youtube-logo.png'
import rarebooks from '../../assets/rarebooks.png'
import movieapp from '../../assets/movieapp.png'
import portfolio from '../../assets/imagesSections/portfolio.jpg'
import AppContext from "../../context/AppContext";
import extia from '../../assets/imagesSections/extia_hub.jpg'

const GridProjects = () => {

   const { setIsHover } = useContext(AppContext)
   const [array, setArray] = useState([
      {
         "title": "Extia Events Hub",
         "image_path":extia,
         "link": "https://extia-events-hub-client-nine.vercel.app/",
         "description": "Plataforma multilingue de eventos sostenibles para que las personas que vienen fuera de barcelona puedan hacer sus primeros contactos",
         "link_repository": "https://github.com/Extia-Events-Hub",
         "type": "fullStack",
         "finalist":"true"
      },
      {
         "title": "Youtube Clone",
         "image_path": imgYoutube,
         "link": "https://youtube-clone-garyhl.vercel.app/",
         "description": "Un clon funcional de Youtube consumiendo una api",
         "link_repository": "https://github.com/GaryHL/Youtube-Clone.git",
         "type": "frontEnd"
      },
      {
         "title": "RareBooks",
         "image_path": rarebooks,
         "link": "https://github.com/GaryHL/front-end-hackathon-f5.git",
         "description": "Marketplace de libros exclusivos y proyecto ganador de la Hackathon F5 mentorizado por Caixa Bank Tech.",
         "link_repository": "https://github.com/GaryHL/front-end-hackathon-f5.git",
         "type": "fullstack"
      },
      {
         "title": "Movie App",
         "image_path": movieapp,
         "link": "https://appmoviemdb.vercel.app/",
         "description": "Aplicación consumiendo una API pública, tiene la funcionalidad de filtrado.",
         "link_repository": "https://github.com/GaryHL/MovieAppMDB.git",
         "type": "frontEnd"
      },
      {
         "title": "Portfolio",
         "image_path": portfolio,
         "link": "https://gary-portfolio.vercel.app/",
         "description": "Mi portfolio personal, contiene información sobre mí y mis proyectos.",
         "link_repository": "https://github.com/GaryHL/Gary_Portfolio.git",
         "type": "frontEnd"
      }
      
   ]);
   const [filterProject, setFilterProject] = useState("all");

   useEffect(() => {
      if (filterProject === "all") {
         setFiltered(array);
      } else {
         setFiltered(array.filter((item) => item.type.toLowerCase() === filterProject.toLowerCase()));
      }
   }, [filterProject]);

   const [filtered, setFiltered] = useState([]);

   return (
      <>
         <ContainerGridProjects>
            <ContainerTabs>
               <StyledTab
                  style={
                     filterProject === "all"
                     ? { backgroundColor: "white", color: "black", transition: "0.3s ease-in-out" }
                     : { backgroundColor: "transparent" }
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilterProject("all")}
               >
                  Todos
               </StyledTab>
               <StyledTab
               onHoverStart={() => setIsHover(true)}
               onHoverEnd={() => setIsHover(false)}
               
                  style={
                     filterProject === "frontEnd"
                        ? { backgroundColor: "white", color: "black", transition: "0.3s ease-in-out" }
                        : { backgroundColor: "transparent" }
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilterProject("frontEnd")}
               >
                  Frontend
               </StyledTab>
               <StyledTab
               onHoverStart={() => setIsHover(true)}
               onHoverEnd={() => setIsHover(false)}
                  style={
                     filterProject === "fullStack"
                     ? { backgroundColor: "white", color: "black", transition: "0.3s ease-in-out" }
                     : { backgroundColor: "transparent" }
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilterProject("fullStack")}
               >
                  Fullstack
               </StyledTab>
            </ContainerTabs>
            <ContainerProjects layout>
               <AnimatePresence>
                  {filtered.map((project, index) => {
                     return <CardProject key={index} project={project} />;
                  })}
               </AnimatePresence>
            </ContainerProjects>
            <Footer style={{ position: "absolute", bottom: "0" }}></Footer>
         </ContainerGridProjects>
      </>
   );
};

export default GridProjects;
