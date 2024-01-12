import React, { useState, useEffect, useContext } from 'react'
import {
  ContainerGridProjects,
  ContainerProjects,
  ContainerTabs,
  StyledTab,
} from './StyledGridProjects'
import { AnimatePresence } from 'framer-motion'
import CardProject from '../cardProject/CardProject'
import Footer from '../footer/Footer'
import imgYoutube from '../../assets/youtube-logo.png'
import rarebooks from '../../assets/rarebooks.png'
import movieapp from '../../assets/movieapp.png'
import portfolio from '../../assets/portfolio.png'
import lexiq from '../../assets/lexiq-logo.png'
import brainyMentors from '../../assets/brainy-mentors-logo.png'
import AppContext from '../../context/AppContext'
import extia from '../../assets/extia-hub.jpg'

const GridProjects = () => {
  const { setIsHover } = useContext(AppContext)
  const [array, setArray] = useState([
    {
      title: 'Brainy Mentors',
      image_path: brainyMentors,
      link: 'https://play.google.com/store/apps/details?id=com.garyhl321.brainymentorsmobile',
      description: 'Aplicacíón móvil de mentores virtuales.',
      link_repository: 'https://github.com/Brainy-Mentors?view_as=public',
      type: 'fullstack',
      inProduction: true,
    },
    {
      title: 'LexIq',
      image_path: lexiq,
      link: 'https://mylexiq.com/',
      description: 'Plataforma de automatización de empresas con IA',
      link_repository: '',
      type: 'frontEnd',
      inProduction: true,
    },
    {
      title: 'Extia Events Hub',
      image_path: extia,
      link: 'https://extiaevents.garylima.online/',
      description: 'Plataforma de eventos sostenibles para Extia.',
      link_repository: 'https://github.com/Extia-Events-Hub',
      type: 'frontEnd',
    },

    {
      title: 'Movie App',
      image_path: movieapp,
      link: 'https://appmoviemdb.vercel.app/',
      description:
        'Aplicación consumiendo una API pública, tiene la funcionalidad de filtrado.',
      link_repository: 'https://github.com/GaryHL/MovieAppMDB.git',
      type: 'frontEnd',
    },
  ])

  const [filterProject, setFilterProject] = useState('todos')

  useEffect(() => {
    if (filterProject === 'todos') {
      setFiltered(array)
    } else if (filterProject === 'En producción') {
      setFiltered(array.filter((item) => item.inProduction))
    } else {
      setFiltered(
        array.filter(
          (item) => item.type.toLowerCase() === filterProject.toLowerCase(),
        ),
      )
    }
  }, [filterProject, array])

  const [filtered, setFiltered] = useState([])

  return (
    <>
      <ContainerGridProjects>
        <ContainerTabs>
          <StyledTab
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            style={
              filterProject === 'todos'
                ? {
                    backgroundColor: 'white',
                    color: 'black',
                    transition: '0.3s ease-in-out',
                  }
                : { backgroundColor: 'transparent' }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilterProject('todos')}
          >
            Todos
          </StyledTab>
          {/* <StyledTab
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            style={
              filterProject === "frontEnd"
                ? { backgroundColor: "white", color: "black", transition: "0.3s ease-in-out" }
                : { backgroundColor: "transparent" }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilterProject("frontEnd")}
          >
            Front - End
          </StyledTab> */}
          {/* <StyledTab
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            style={
              filterProject === "fullStack"
                ? { backgroundColor: "white", color: "black", transition: "0.3s ease-in-out" }
                : { backgroundColor: "transparent" }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilterProject("fullStack")}
          >
            Full - stack
          </StyledTab> */}
          <StyledTab
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            style={
              filterProject === 'En producción'
                ? {
                    backgroundColor: 'white',
                    color: 'black',
                    transition: '0.3s ease-in-out',
                  }
                : { backgroundColor: 'transparent' }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilterProject('En producción')}
          >
            En producción
          </StyledTab>
        </ContainerTabs>
        <ContainerProjects layout>
          <AnimatePresence>
            {filtered.map((project, index) => {
              return <CardProject key={index} project={project} />
            })}
          </AnimatePresence>
        </ContainerProjects>
        <Footer style={{ position: 'absolute', bottom: '0' }}></Footer>
      </ContainerGridProjects>
    </>
  )
}

export default GridProjects
