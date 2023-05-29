import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';

const MouseContainer = styled(motion.div)`
  position: fixed;
  z-index: 900;
  width: ${(props) => (props.isHover ? '3rem' : '2rem')};
  height: ${(props) => (props.isHover ? '3rem' : '2rem')};
  border: 2px solid white;
  border-radius: 99rem;
  display: flex;
  align-items: center;
  justify-content: center;
  translateX: ${(props) => (props.isHover ? '-1.5rem' : '-1rem')};
  translateY: ${(props) => (props.isHover ? '-1.5rem' : '-1rem')};

  @media (max-width: 768px) {
    display:none !important;
  }
`;

const MouseDot = styled(motion.div)`
  width: ${(props) => (props.isHover ? '2.5rem' : '0.5rem')};
  height: ${(props) => (props.isHover ? '2.5rem' : '0.5rem')};
  border-radius: 99rem;
  background: white;
`;

function MouseAnimated() {
  const [coordinates, setCoordinates] = useState({ x: window.clientX, y: window.clientY });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCoordinates({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coordinates]);

  const { isHover } = useContext(AppContext);

  console.log('IS HOVERED', isHover);

  return (
    <>
      <MouseContainer
        isHover={isHover}
        initial={{
          x: coordinates.x,
          y: coordinates.y,
          pointerEvents: 'none'
        }}
        animate={{
          x: coordinates.x,
          y: coordinates.y,
          translateX: isHover ? '-1.5rem' : '-1rem',
          translateY: isHover ? '-1.5rem' : '-1rem',
          width: isHover ? '3rem' : '2rem',
          height: isHover ? '3rem' : '2rem',
          border: '2px solid white',
          borderRadius: '99rem'
        }}
      >
        <MouseDot
          isHover={isHover}
          animate={{
            x: coordinates.x - coordinates.x,
            y: coordinates.y - coordinates.y,
            zIndex: 900,
            width: isHover ? '2.5rem' : '0.5rem',
            height: isHover ? '2.5rem' : '0.5rem',
            borderRadius: '99rem',
            background: 'white'
          }}
        ></MouseDot>
      </MouseContainer>
    </>
  );
}

export default MouseAnimated;
