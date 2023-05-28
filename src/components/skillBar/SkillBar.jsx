import React from "react";
import {
   Bar,
   ContainerSkillBar,
   StyledSkillBar,
   StyledSpanProgress,
} from "./StyledSkillbar";

const SkillBar = ({ skillName, Icon, percent, projects, animate, children, color }) => {
   let percentString = percent + "%";


console.log(Icon)
   return (
      <>
         <div style={{ flexDirection: "column" }}>
            <ContainerSkillBar>
               <Icon  style={{color:color}}></Icon>
               <StyledSkillBar>
                  <h4>{skillName}</h4>
                  <Bar>
                     <StyledSpanProgress
                        initial={{ width: 0 }}
                        transition={{ duration: 1.7, type:"spring"}}
                        animate={animate ? {
                           width: percentString, background: color, boxShadow: `0rem 0rem 1.5rem ${color}
                        ` } : { width: 0 }}
                     />
                  </Bar>
               </StyledSkillBar>
            </ContainerSkillBar>
            <p style={{ paddingTop: "1.3rem" }}>{projects} proyectos realizados con {skillName}</p>
            {children}
         </div>
      </>
   );
};

export default SkillBar;
