import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const ContainerFooter = styled.div`
   width: 80%;
   padding:  4rem 5%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   bottom:0;
   
.glow-on-hover {
    width: 400px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:hover:before {
   opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`;

const ButtonContact = styled(Link)`
`;

const Footer = () => {
    const { setIsHover } = useContext(AppContext)

   return (
      <ContainerFooter>
         <Link onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="glow-on-hover" to="/home/contact">
            Contáctame
         </Link>
      </ContainerFooter>
   );
};

export default Footer;
