import React from 'react'
import { motion } from 'motion/react'

import { FaCheck, FaMapMarkerAlt } from 'react-icons/fa'

import StatCards from '../components/StatCards'
import TechStack from '../components/TechStack'
import ParticleBackground from '../components/ParticleBackground'

const About = () => {

  return (

    <section id="about" className='mx-4 my-12 bg-white px-4 py-12  sm:mx-6 sm:px-6 lg:mx-12 lg:px-8'
    >
      

      <div className='mx-auto max-w-6xl bg-white'>

        {/* About Heading */}
        <motion.p
         initial={{ opacity: 0, y: -20, scale:0.8 }}
         animate={{ opacity: 1, y: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
        
        
        className='text-center text-3xl font-bold sm:text-4xl'>
          About Me
        </motion.p>

        <h3 className='my-3 text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
          Get to know me better
        </h3>

        <p className='mx-auto mt-3 max-w-2xl text-center text-gray-600'>
          A little about who I am, what I build, and the technologies I enjoy working with.
        </p>


        {/* Main About Content */}
        <div className='mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12'>


          {/* ================= Developer Snapshot ================= */}
          <div className='mx-auto w-full max-w-md'>

            <div className='rounded-xl bg-gray-900 p-4 shadow-xl sm:p-6'>

              {/* Terminal Header */}
              <div className='mb-6 flex items-center gap-3'>

                <span className='h-3 w-3 shrink-0 rounded-full bg-red-500'></span>

                <span className='h-3 w-3 shrink-0 rounded-full bg-yellow-500'></span>

                <span className='h-3 w-3 shrink-0 rounded-full bg-green-500'></span>

                <span className='ml-auto text-sm font-mono text-gray-400'>
                  developer.js
                </span>

              </div>


              {/* Terminal Content */}
              <div className='break-words font-mono text-sm leading-7 sm:text-base'>

                <p className='mt-4 font-mono text-emerald-400'>
                  <span>$</span>whoami
                </p>

                <p className='font-bold text-red-500'>
                  Taranpreet Singh
                </p>


                <p className='mt-6 font-mono text-emerald-400'>
                  <span>$</span>role
                </p>

                <p className='font-bold text-red-500'>
                  Full Stack Developer
                </p>


                <p className='mt-6 font-mono text-emerald-400'>
                  <span>$</span>education
                </p>

                <p className='font-bold text-red-500'>
                  Btech-AI/ML
                </p>


                <p className='mt-6 font-mono text-emerald-400'>
                  <span>$</span>Focus
                </p>

                <p className='font-bold text-red-500'>
                  React.js * Node.js * Python
                </p>


                <p className='mt-6 font-mono text-emerald-400'>
                  <span>$</span>mindset
                </p>

                <p className='font-bold text-red-500'>
                  build * learn * improve
                </p>


                {/* Status */}
                <div className='mt-6 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3'>

                  <p className='flex items-center gap-2 font-bold text-gray-400'>
                    <FaCheck className='text-green-400' />
                    Always Learning
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ================= Right Content ================= */}
          <div className='self-start'>

            {/* Who I Am */}
            <p className='mb-4 inline-block rounded-md bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700'>
              Who I am
            </p>

            <p className='text-base leading-7 text-gray-800 sm:text-lg'>
              A B.Tech AI/ML student who enjoys turning ideas into working
              products, from UI to solid backend logic.
            </p>


            {/* Current Project */}
            <p className='mt-3 text-xs text-gray-400 sm:text-sm'>
              Currently building: An LIFEVAULT, a secure, sorted and AI-analyzed
              personal storage platform.
            </p>


            {/* Internship Status */}
            <div className='mt-3 flex w-fit items-center gap-2 rounded-full bg-green-100 px-4 py-2'>

              <span className='h-2 w-2 rounded-full bg-green-500'></span>

              <span className='text-sm font-medium text-green-700'>
                Open to internships
              </span>

            </div>


            {/* ================= Stats ================= */}
            <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>

              <StatCards
                value='4+'
                label='Projects'
                color='blue'
              />

              <StatCards
                value='5+'
                label='Certificates'
                color='green'
              />

              <StatCards
                value='3mo'
                label='Experience'
                color='yellow'
              />

            </div>


            {/* ================= Tech Stack ================= */}
            <div className='mt-8'>

              <p className='mx-2 mb-2 text-xs uppercase tracking-wide text-gray-600'>
                Tech Stack
              </p>

              <div className='mt-4 flex flex-wrap  gap-2 sm:gap-3'>

                <TechStack skills={['HTML']} />
                <TechStack skills={['CSS']} />
                <TechStack skills={['JAVASCRIPT']} />
                <TechStack skills={['REACT.JS']} />
                <TechStack skills={['TAILWIND']} />
                <TechStack skills={['NODE.JS']} />

              </div>

            </div>


            {/* ================= Resume + Location ================= */}
            <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8'>

              {/* Download Resume */}
              <div className='w-fit rounded-xl border border-red-100 bg-orange-200 px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300'>

                <a href='/resume.pdf' download>
                  Download Resume
                </a>

              </div>


              {/* Location */}
              <div className='mx-3 flex items-center gap-2'>

                <FaMapMarkerAlt className='text-gray-400' />

                <p className='text-sm text-gray-500'>
                  Ambala, India
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About