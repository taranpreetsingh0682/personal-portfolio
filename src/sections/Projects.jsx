import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { FaLayerGroup, FaShieldAlt } from 'react-icons/fa'
import lifeV from '../assets/Life-v.png'
import portfolioP from '../assets/portfolio-P.png'

const project=[
  {
  image: portfolioP,
  title:'Portfolio',
  description:'Personal portfolio website showcasing projects, skills, and experience with a component-driven architecture.',
  tech:['REACT.JS',  'TAILWIND', 'LUCIDE','EMAILJS' ],
  githubUrl:'https://github.com/taranpreetsingh0682',
  liveUrl:'',
  },

  {
image: lifeV,
title:'LifeVault',
description: 'Secure digital document vault with user authentication, upload, and management, backed by a responsive UI.',
tech:['Html', 'Css' , 'Javascript' , 'CodeIgniter' , 'MySQL' , 'Docker'],
githubUrl:'https://github.com/taranpreetsingh0682',
liveUrl:'',
  },

]
const Projects = () => {
  return (
    <section id="projects" className='px-12 py-12  bg-white'>
      <h2 className='text-3xl font-bold  flex justify-center '>Projects</h2>
      <p className='text-center text-indigo-500 text-lg my-2'>Things I've built</p>
      <p className='text-center  text-gray-900 text-sm max-w-xl mx-auto mb-10 '>
         A selection of projects where I turned ideas into working products.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto'>
        {project.map((p,i)=><ProjectCard key={i} {...p}/>)}
      </div>
    </section>
  )
}

export default Projects