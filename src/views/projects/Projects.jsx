import React from "react";
import SectionHome from "../../components/sectionHome/SectionHome";
import ReactFullpage from "@fullpage/react-fullpage";
import GridProjects from "../../components/gridProjects/GridProjects";

const Projects = () => {
   const dataProjects = {
      title: "Proyectos",
      subtitle: "This is a subtitle",
      ctaText: "click me",
      cta: () => {
         alert("You clicked");
      },
      picture:
         "https://imgs.search.brave.com/tkMjyNJx9iq01utpQKcUnrnIrqOA5EosNJ16_wqCTYU/rs:fit:1024:410:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEzLzFk/L2ZjLzEzMWRmYzg5/ZjMwYTllODRlOGJm/Njc2YTc1MzY1MTgw/LmpwZw",
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
