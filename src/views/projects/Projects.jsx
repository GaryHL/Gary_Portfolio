import React from "react";
import SectionHome from "../../components/sectionHome/SectionHome";
import ReactFullpage from "@fullpage/react-fullpage";
import GridProjects from "../../components/gridProjects/GridProjects";
import projectCover from '../../assets/Projects-cover.png'


const Projects = () => {
   const dataProjects = {
      title: "Proyectos",
      subtitle: "⬇ Desliza para abajo ⬇",
      ctaText: "click me",
      cta: () => {
         alert("You clicked");
      },
      picture:
         projectCover,
      pictureName: "Image name",
   };

   return (
      <ReactFullpage
         scrollingSpeed={1000}
         render={({ state, fullpageApi }) => {
            return (
               <>
                  <ReactFullpage.Wrapper>
                     <div className="section">
                        <SectionHome active={true} dataSection={dataProjects}>
                           <div></div>
                        </SectionHome>
                     </div>
                     <div className="section">
                        <GridProjects />
                     </div>
                  </ReactFullpage.Wrapper>
               </>
            );
         }}
      />
   );
};

export default Projects;
