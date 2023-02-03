import React from "react";
import {
   Bar,
   ContainerSkillBar,
   StyledSkillBar,
   StyledSpanProgress,
} from "./StyledSkillbar";

const SkillBar = ({ skillName, Icon, percent, projects , animate, children}) => {
   let percentString = percent + "%";
   return (
      <>
         <div style={{ flexDirection: "column"}}>
            <ContainerSkillBar>
               <Icon></Icon>
               <StyledSkillBar>
                  <h4>{skillName}</h4>
                  <Bar>
                     <StyledSpanProgress
                        initial={{ width: 0 }}
                        transition={{ duration: 1.5 }}
                        animate={animate ? { width: percentString } : {width:0}}
                     />
                  </Bar>
               </StyledSkillBar>
            </ContainerSkillBar>
            <p style={{paddingTop:"1.3rem"}}>{projects} proyectos realizados con {skillName }</p>
            {children}
         </div>
      </>
   );
};

export default SkillBar;
