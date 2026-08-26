import React from 'react'
import pr from '../assets/pr.jpg.jpeg'
import { FaGithub } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Mail } from 'lucide-react'

 const Hero = () => {
  return(
    <section className='min-h-screen px-3 py-0 '>

      <div className='mx-auto grid max-w-7xl items-center gap-12  bg-red-100 py-2  lg:grid-cols-2'>
{/* left content */}
        <div>
          <p className='mb-0 my-0 mx-3 text-2xl   font-large text-violet-900 '>
            Hi,I'm
          </p>

          <h2 className='text-3xl   px-3 my-2 font-bold text-black sm:text-4xl lg:text-5xl'>
            Taranpreet singh
          </h2>
        
          

          <h3 className='mt-3 mx-3 w-70 text-xl font-semibold text-green-400 sm:text-2xl lg:text-3xl'>
            Full Stack Developer 
          </h3>

          <p className='mt-4 mx-3 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg   '>
            I Build modern web applications using technologies like HTML , CSS , Tailwind  React.js , Node.js
          </p>
        
          <div className='mt-6 mx-3 my-4 gap-3 flex  flex wrap sm:gap-4  '>
            <a href='#projects' className='rounded-lg border-violet-600 px-4 py-3 text-sm font-semibold text-white  transition 
            hover:bg-violet-700 sm:px-6 sm:text-base bg-black '>
              View Project 
            </a>
      
          <a href='#contact'
          className='rounded-lg border-violet-600 px-4 py-3 text-sm  font-semibold text-white transition hover:bg-violet-700 sm:px-6 xm:text bg-black'>
            Contact Me 
          </a>
          
          </div>
          {/* Social Account Links */}
          <div className='mx-3 mt-8 flex items-center gap-2 '>
            
            <a href='https://github.com/taranpreetsingh0682' target='_blank' rel='noreferrer' className='font-bold text-red-700 rounded-lg border-violet-600 py-3 px-4 transition hover:text-violet-600 bg-green-200  '>
                <FaGithub size={17}/>
              <span>Github</span>
              </a> 
              
            <a href='https://www.linkedin.com/in/taranpreet-singh-331108296' target='_blank' rel='noreferrer' className='font-bold text-red-700 rounded-lg border-violet-600 py-3 px-4 transition hover:text-violet-600 bg-green-200 '>
             <FaLinkedin size={17}/>
              <span>LinkedIn</span>
            </a>
          
          <a href='mailto:taranpreetsingh62006@gmail.com' target='_blank' rel='noreferrer' className='font-bold text-red-700 rounded-lg border-violet-600 py-3 px-4 transition hover:text-violet-600 bg-green-200'>
            <Mail size={17}/>
            <span>Gmail</span>
          </a>
          </div>
          </div>
          {/* Right content */}
        <div className='flex justify-center '>
          <img src={pr} alt='Taranpreet Singh ' className='w-80 h-80  rounded-full object-cover border-4 border-violet-300 shadow-x1 sm:h-72 sm:w-72 lg:h-80 lg:w-80'/>
        </div>

        
       
      </div>
    </section>
  )
}
export default Hero