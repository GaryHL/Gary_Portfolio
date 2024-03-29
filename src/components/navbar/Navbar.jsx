import React, { useContext, useState } from "react";
import { StyledNav, ContainerMenu, StyledOptions, LinkToHome, ContianerLinksMenu, LInkMenu } from "./styledNavbar";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(false);

   const openWindow = (url) => {
      window.open(url, '_blank');
   };

   const { setIsHover } = useContext(AppContext)

   return (
      <>
         <ContainerMenu
            initial={{ marginTop: "-120vh" }}
            transition={{ type: "tween", duration: 0.5 }}
            animate={
               openMenu ? { marginTop: "-20vh" } : { marginTop: "-120vh" }
            }
         >
            <ContianerLinksMenu>
               <span onClick={() => setOpenMenu(false)}
                  onMouseOver={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
               >
                  <LInkMenu to='/home' whileHover={{ scale: 1 }} initial={{ scale: 0.8 }}
                     animate={
                        openMenu ? { y: 0 } : { y: '3rem' }
                     }
                  >Inicio</LInkMenu>
               </span>
               <span onClick={() => setOpenMenu(false)} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                  <LInkMenu to='/projects' whileHover={{ scale: 1 }} initial={{ scale: 0.8 }}
                     animate={
                        openMenu ? { y: 0 } : { y: '3rem' }
                     }
                  >Proyectos</LInkMenu>
               </span>
               <span onClick={() => setOpenMenu(false)} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                  <LInkMenu to='/about' whileHover={{ scale: 1 }} initial={{ scale: 0.8 }}
                     animate={
                        openMenu ? { y: 0 } : { y: '3rem' }
                     }
                  >Sobre mí</LInkMenu>
               </span>
               <span onClick={() => setOpenMenu(false)} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                  <LInkMenu to='/home/contact' whileHover={{ scale: 1 }} initial={{ scale: 0.8 }}
                     animate={
                        openMenu ? { y: 0 } : { y: '3rem' }
                     }
                  >Contacto</LInkMenu>
               </span>
            </ContianerLinksMenu>
         </ContainerMenu>
         <StyledNav openMenu={openMenu}>
            <LinkToHome to="home" onMouseOver={() => setIsHover(true)}
               onMouseLeave={() => setIsHover(false)}>Gary</LinkToHome>
            <StyledOptions openMenu={openMenu}>
               <AiFillGithub onClick={() => openWindow("https://github.com/GaryHL")} onMouseOver={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)} />
               <AiFillLinkedin onClick={() => openWindow("https://www.linkedin.com/in/gary-hl/")} onMouseOver={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)} />
               <AiOutlineMenu onClick={() => setOpenMenu(!openMenu)} onMouseOver={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)} />
            </StyledOptions>
         </StyledNav>
      </>
   );
};

export default Navbar;
