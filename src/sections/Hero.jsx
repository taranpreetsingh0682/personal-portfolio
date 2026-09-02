import React from 'react'
import pr from '../assets/pr.jpg.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'

const Hero = () => {
  return (
    <section id='home' className='relative overflow-hidden px-3 py-16 bg-gray-50'>
      <ParticleBackground />

      <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-6xl mx-auto'>

        {/* Left content */}
        <div>
          <p className='mb-0 my-0 mx-3 text-3xl text-indigo-600'>
            Hi, I'm
          </p>

          <h2 className='text-5xl px-1 my-2 font-bold text-gray-900 sm:text-4xl lg:text-5xl'>
            Taranpreet Singh
          </h2>

          <h3 className='mt-3 mx-2 w-70 text-2xl font-semibold text-indigo-600 sm:text-2xl lg:text-3xl'>
            Full Stack Developer
          </h3>

          <p className='mt-4 mx-3 max-w-2xl text-lg leading-7 text-gray-600 sm:text-lg'>
            I Build modern web applications using technologies like HTML, CSS, Tailwind, React.js, Node.js
          </p>

          <div className='mt-6 mx-3 my-4 gap-3 flex flex-wrap sm:gap-4'>
            <a href='#projects' className='rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:px-6 sm:text-base bg-indigo-600'>
              View Project
            </a>
            <a href='#contact' className='rounded-lg border border-indigo-600 px-4 py-3 text-sm font-semibold text-indigo-600 transition bg-white hover:bg-indigo-50 sm:px-6'>
              Contact Me
            </a>
          </div>

          {/* Social Account Links */}
          <div className='mx-3 mt-8 flex items-center gap-2 flex-wrap'>
            <a href='https://github.com/taranpreetsingh0682' target='_blank' rel='noreferrer' className='flex items-center gap-2 font-bold text-gray-700 rounded-lg border border-gray-300 py-3 px-4 transition hover:border-indigo-500 hover:text-indigo-600 bg-white'>
              <FaGithub size={17} />
              <span>Github</span>
            </a>
            <a href='https://www.linkedin.com/in/taranpreet-singh-331108296' target='_blank' rel='noreferrer' className='flex items-center gap-2 font-bold text-gray-700 border border-gray-300 py-3 px-4 transition hover:border-indigo-500 hover:text-indigo-600 bg-white rounded-lg'>
              <FaLinkedin size={17} />
              <span>LinkedIn</span>
            </a>
            <a href='mailto:taranpreetsingh62006@gmail.com' target='_blank' rel='noreferrer' className='flex items-center gap-2 font-bold text-gray-700 border border-gray-300 py-3 px-4 transition hover:border-indigo-500 hover:text-indigo-600 bg-white rounded-lg'>
              <Mail size={17} />
              <span>Gmail</span>
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className='flex justify-center lg:justify-end'>
          <img
            src={pr}
            alt='Taranpreet Singh'
            className='w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-indigo-100 text-indigo-700 rounded-full object-cover border-4 border-indigo-300 shadow-xl'
          />
        </div>

      </div>
    </section>
  )
}

export default Hero