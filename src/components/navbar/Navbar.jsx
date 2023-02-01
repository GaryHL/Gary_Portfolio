import React, { useState } from "react";
import { StyledNav, ContainerMenu, StyledOptions } from "./styledNavbar";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <>
         <ContainerMenu
            initial={{ marginTop: "-120vh" }}
            transition={{ type: "tween", duration: 0.5 }}
            animate={
               openMenu ? { marginTop: "-20vh" } : { marginTop: "-120vh" }
            }
         />
         <StyledNav openMenu={openMenu}>
            <h3>Gary Lima</h3>
            <StyledOptions>
               <AiFillGithub />
               <AiFillLinkedin />
               <AiOutlineMenu onClick={() => setOpenMenu(!openMenu)} />
            </StyledOptions>
         </StyledNav>
      </>
   );
};

export default Navbar;
