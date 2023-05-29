import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';

const PageEffect = styled(motion.div)`
  position: fixed;
  height: 100vh;
  z-index: 999;
  width: 100%;
  background-color: black;
  border-bottom: 2px solid white;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;

  `;

function ChangePageEffect() {
  const { loadFirstPage, setLoadFirstPage } = useContext(AppContext);
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadFirstPage(true);
      setInitialAnimation(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setLoadFirstPage]);

  return (
    <>
      <PageEffect
        initial={initialAnimation ? { marginTop: "0" } : { marginTop: 0 }}
        animate={loadFirstPage ? { marginTop: "-105vh" } : { marginTop: 0 }}
        transition={{ duration: 1, type:'spring' }}
      >LOADING...</PageEffect>
    </>
  );
}

export default ChangePageEffect;
