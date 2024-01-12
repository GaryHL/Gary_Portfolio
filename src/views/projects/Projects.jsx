import React from "react";
import SectionHome from "../../components/sectionHome/SectionHome";
import ReactFullpage from "@fullpage/react-fullpage";
import GridProjects from "../../components/gridProjects/GridProjects";
import projectCover from '../../assets/Projects-cover.png'
import ScrollToTop from "../../components/scrolltop/ScrollTop";


const Projects = () => {
   
   const dataProjects = {
      title: "Proyectos",
      subtitle: "⬇ DESLIZA PARA ABAJO ⬇",
      ctaText: "⬇ DESLIZA PARA ABAJO ⬇",
      cta: () => {
      
      },
      picture: "",
      pictureName: "Image name",
      image1: "https://i.imgur.com/O3jdTxy.jpg",
      image2: "https://i.imgur.com/VKeIbTG.jpg",
   };

   return (
      <ReactFullpage
         scrollingSpeed={1000}
         render={({ state, fullpageApi }) => {
            return (
               <>
                  <ReactFullpage.Wrapper>
                     <div className="section">
                        <SectionHome active={true} dataSection={dataProjects}
                           escene="projects"
                        >
                           <div></div>
                        </SectionHome>
                     </div>
                     <div className="section">
                        <GridProjects />
                     </div>
                  </ReactFullpage.Wrapper>
                  <ScrollToTop/>
               </>
            );
         }}
      />
   );
};

export default Projects;
