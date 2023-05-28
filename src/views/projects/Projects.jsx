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
      image1: "https://th.bing.com/th/id/OIG.BI61L0PA0.w8.0U3tH.j?pid=ImgGn",
      image2: "https://th.bing.com/th/id/OIG.ebsHfSdmGPaxGDyQexrQ?pid=ImgGn",
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
