import React, { useState } from "react";
import { StyledNav, ContainerMenu, StyledOptions, LinkToHome } from "./styledNavbar";
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
            <LinkToHome to="home">Gary Lima</LinkToHome>
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
