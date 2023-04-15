import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerForm = styled(motion.div)`
  position: fixed;
  z-index: 999;
  background-color: #21212121;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  min-width: 300px;
  position: relative;
  border: 1px solid black;
  background-color: rgb(233, 233, 233);
  .closeButton {
    position: absolute;
    right: 0;
    top: 0;
    margin: 1rem;
    cursor: pointer;
  }
  > button {
    width: 100px;
    background-color: #e9e9e9;
    border: none;
    outline: none;
    border: 1px solid #333;
    cursor: pointer;
    padding: 0.5rem;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: black;
      color: #e9e9e9;
      transition: ease-in-out 0.3s;
    }
  }
`;
