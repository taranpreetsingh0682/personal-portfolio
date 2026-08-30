import React from 'react'
import pr from '../assets/pr.jpg.jpeg'
import { FaGithub } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Mail } from 'lucide-react'

 const Hero = () => {
  return(
    <section id="home" className=' px-3 py-0 bg-gray-50'>

      <div className='mx-auto grid max-w-7xl items-center gap-12  bg-gray-50  py-2  lg:grid-cols-2'>
{/* left content */}
        <div>
          <p className='mb-0 my-0 mx-3 text-2xl   text-base text-indigo-600 '>
            Hi,I'm
          </p>

          <h2 className='text-5xl   px-1 my-2 font-bold text-gray-900 sm:text-4xl lg:text-5xl'>
            Taranpreet singh
          </h2>
        
          

          <h3 className='mt-3 mx-2 w-70 text-2xl font-semibold text-indigo-600 sm:text-2xl lg:text-3xl'>
            Full Stack Developer 
          </h3>

          <p className='mt-4 mx-3 max-w-2xl text-lg leading-7 text-gray-600 sm:text-lg   '>
            I Build modern web applications using technologies like HTML , CSS , Tailwind  React.js , Node.js
          </p>
        
          <div className='mt-6 mx-3 my-4 gap-3 flex  flex wrap sm:gap-4  '>
            <a href='#projects' className='rounded-lg border-violet-600 px-4 py-3 text-sm font-semibold text-white  transition 
            hover:bg-indigo-700 sm:px-6 sm:text-base bg-indigo-600  '>
              View Project 
            </a>
      
          <a href='#contact'
          className='rounded-lg border border-indigo-600 px-4 py-3 text-sm  font-semibold text-indigo-600 transition bg-white  hover:bg-indigo-50 sm:px-6 xm:text '>
            Contact Me 
          </a>
          
          </div>
          {/* Social Account Links */}
          <div className='mx-3 mt-8 flex items-center gap-2 '>
            
            <a href='https://github.com/taranpreetsingh0682' target='_blank' rel='noreferrer' className='font-bold text-gray-700 rounded-lg border border-gray-300 py-3 px-4 transition hover:border-indigo-500  hover:text-indigo-600 bg-white   '>
                <FaGithub size={17}/>
              <span>Github</span>
              </a> 
              
            <a href='https://www.linkedin.com/in/taranpreet-singh-331108296' target='_blank' rel='noreferrer' className='font-bold text-gray-700 border border-gray-300 py-3 px-4 transition hover:border-indigo-500 hover:text-indigo-600 bg-white rounded-lg '>
             <FaLinkedin size={17}/>
              <span>LinkedIn</span>
            </a>
          
          <a href='mailto:taranpreetsingh62006@gmail.com' target='_blank' rel='noreferrer' className='font-bold text-gray-700 border border-gray-300 py-3 px-4 transition hover:border-indigo-500 hover:text-indigo-600 bg-white rounded-lg '>
            <Mail size={17}/>
            <span>Gmail</span>
          </a>
          </div>
          </div>
          {/* Right content */}
        <div className='flex justify-end '>
          <img src={pr} alt='Taranpreet Singh ' className='w-80 h-80 bg-indigo-100 text-indigo-700 rounded-full object-cover border-4 border-indigo-300 shadow-x1 sm:h-72 sm:w-72 lg:h-80 lg:w-80'/>
        </div>

        
       
      </div>
    </section>
  )
}
export default Hero