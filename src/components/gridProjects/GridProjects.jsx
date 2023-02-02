import React, { useState, useEffect } from "react";
import {
   ContainerGridProjects,
   ContainerProjects,
   ContainerTabs,
   StyledTab,
} from "./StyledGridProjects";
import { AnimatePresence } from "framer-motion";
import CardProject from "../cardProject/CardProject";

const GridProjects = () => {
   const [array, setArray] = useState([
      {"title":"Check App",
      "image_path":"https://imgs.search.brave.com/08Hzi9HtAd_tm2qDhW7mEfDTApajBx5fL-PkBUxVeds/rs:fit:639:1136:1/g:ce/aHR0cDovL2ljbGFy/aWZpZWQuY29tL2lt/YWdlcy9uZXdzLzQ2/ODA0LzIxNTcxMy8y/MTU3MTMuanBn",
      "link":"https://chat.openai.com/chat/b9ba41dc-62ad-4727-a147-9f49f90469ff",
      "description":"esta es una App muy bonita",
      "link_repository":"https://github.com",
      "type":"fullstack"
   },
   {"title":"Vercel",
      "image_path":"https://mouredev.com/wp-content/uploads/2018/11/factorlink.jpg",
      "link":"https://chat.openai.com/chat/b9ba41dc-62ad-4727-a147-9f49f90469ff",
      "description":"esta es una App muy bonita",
      "link_repository":"https://github.com",
      "type":"fullstack"
   },
   {"title":"Check",
      "image_path":"https://mouredev.com/wp-content/uploads/2018/11/factorlink.jpg",
      "link":"https://chat.openai.com/chat/b9ba41dc-62ad-4727-a147-9f49f90469ff",
      "description":"esta es una App muy bonita",
      "link_repository":"https://github.com",
      "type":"frontEnd"
   }
   ]);
   const [filterProject, setFilterProject] = useState("fullStack");

   useEffect(() => {
      if (filterProject === "all") {
         setFiltered(array);
      } else {
         setFiltered(array.filter((item) => item.type.toLowerCase() === filterProject.toLowerCase()));
      }
      console.log(filterProject);
   }, [filterProject]);

   const [filtered, setFiltered] = useState([]);

   return (
      <>
         <ContainerGridProjects>
            <ContainerTabs>
               <StyledTab
                  style={
                     filterProject === "all"
                        ? { backgroundColor: "#222", color: "#e9e9e9" ,transition:"0.3s ease-in-out" }
                        : { backgroundColor: "#e9e9e9" }
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilterProject("all")}
               >
                  All
               </StyledTab>
               <StyledTab
                  style={
                     filterProject === "frontEnd"
                        ? { backgroundColor: "#222", color: "#e9e9e9" ,transition:"0.3s ease-in-out" }
                        : { backgroundColor: "#e9e9e9" }
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilterProject("frontEnd")}
               >
                  Front - End
               </StyledTab>
               <StyledTab
                  style={
                     filterProject === "fullStack"
                        ? { backgroundColor: "#222", color: "#e9e9e9" ,transition:"0.3s ease-in-out" }
                        : { backgroundColor: "#e9e9e9" }
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilterProject("fullStack")}
               >
                  Full - stack
               </StyledTab>
            </ContainerTabs>
            <ContainerProjects layout>
               <AnimatePresence>
                  {filtered.map((project, index) => {
                     return <CardProject key={index} project={project} />;
                  })}
               </AnimatePresence>
            </ContainerProjects>
         </ContainerGridProjects>
      </>
   );
};

export default GridProjects;
