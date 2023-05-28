import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerForm = styled(motion.div)`
  position: fixed;
  z-index: 999;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  background: rgba(0, 0, 0, 0.808);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border: 0px;
`;

export const Form = styled(motion.form)`
  > h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  min-width: 280px;
  background-color: transparent;
  position: relative;
  border: 3px solid white;
  border-radius: 1rem;
  > input {
    border: none;
    border-bottom: 2px solid white;
    font-size: 1.1rem;
    width: calc(100% - 2rem);
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: white;
    &::placeholder {
      color: white;
      font-family: "poppins";
      opacity: 0.8;
    }
  }
  > textarea {
    border: none;
    border: 2px solid white;
    font-size: 1.1rem;
    width: calc(100% - 2rem);
    min-height: 5rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: white;
    &::placeholder {
      color: white;
      font-family: "poppins";
      opacity: 0.8;
    }
    border-radius:0.5rem;
  }
  .closeButton {
    position: absolute;
    right: 0;
    top: 0;
    margin: 1rem;
    cursor: pointer;
  }
  .glow-on-hover {
    width: 100%;
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
    font-size: 1.1rem;
    font-weight: 400;
  }

  .glow-on-hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .glow-on-hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  @media (min-width: 700px) {
    min-width: 450px;
  }
`;
