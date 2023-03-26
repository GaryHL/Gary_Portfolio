import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerFooter = styled.div`
   width: 100%;
   padding: 1rem 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ButtonContact = styled(Link)`
   
   width: 250px;
   padding: 1rem 0;
   border: 1px solid #333;
   text-decoration: none;
   color: black;
   position: relative;
   overflow: hidden;
   display: inline-block;
   font-size: 15px;
   line-height: 15px;
   padding: 18px 18px 17px;
   text-decoration: none;
   cursor: pointer;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   display: flex;
   align-items: center;
   justify-content: center;
   > span:first-child {
      position: relative;
      transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 10;
   }

   > span:last-child {
      color: white;
      display: block;
      position: absolute;
      bottom: 0;
      transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 100;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translateY(225%) translateX(-50%);
      height: 14px;
      line-height: 13px;
   }

   &:after {
      content: "";
      position: absolute;
      bottom: -50%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #222;
      transform-origin: bottom center;
      transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
      transform: skewY(9.3deg) scaleY(0);
      z-index: 50;
   }

   &:hover:after {
      transform-origin: bottom center;
      transform: skewY(9.3deg) scaleY(2.3);
   }

   &:hover span:last-child {
      transform: translateX(-40%) translateY(-40%);
      opacity: 1;
      transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
   }

`;

const Footer = () => {
   return (
      <ContainerFooter>
         <ButtonContact to="/home/contact">
            <span class="text">Contactame</span>
            <span>Contactame</span>
         </ButtonContact>
      </ContainerFooter>
   );
};

export default Footer;
