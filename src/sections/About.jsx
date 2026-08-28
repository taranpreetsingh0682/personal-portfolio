import React from 'react'
import { FaCheck } from 'react-icons/fa'
const About = () => {
  return (
    <section className=' px-12 py-12 bg-white sm:px-6 mx-32 my-12  lg:px-8'>
      <div className='mx-auto max-w-6xl bg-white '>
        <p className='text-3xl font-bold text-center sm:text-4xl'>
          About Me
        </p>
        <h3 className='text-center font-bold  text-orange-700 my-3 text-2xl sm:text-3xl '>
          Get to know me better 
        </h3>
      <p className='mt-3 mx-auto text-center  max-w-2xl text-grey-600 '>
        A little about who I am, What I build , and the technologies I enjoy working with.
      </p>

      {/* Main About Content  */}

      <div className='mt-4 grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
      {/* Developer snapshot */}

      <div className='mx-auto w-full max-w-md'>
        <div className='rounded-xl bg-gray-900 my-8 p-6 shadow-xl'>
          {/* Terminal Header  */}
          
          <div className='mb-6  flex items-center justify-between gap-2'>
            <span className='h-3 w-3 rounded-full bg-red-500 '></span>
            <span className='h-3 w-3 rounded-full bg-yellow-500'></span>
            <span className='h-3 w-3 rounded-full bg-green-500'></span>

            <span className='justify-between text-sm font-mono text-gray-400'>
              developer.js
            </span>
          </div>
          {/* Terminal Content  */}
          <div className='font-mono text-sm leading-7 sm:text-base'>
            <p className='mt-4 text-emerald-400 font-mono '>
              <span className='text-emerald-400 font-mono  '>$</span>whoami
            </p>
            <p className=' font-bold text-red-500'>
              Taranpreet Singh
            </p>

            <p className='text-emerald-400 font-mono mt-6'>
            <span className='text-green-400'>$</span>role
            </p>
          <p className='font-bold text-red-500'>Full Stack Developer </p>

          <p className='text-emerald-400 font-mono mt-6'>
            <span className='text-green-400'>$</span>education

          </p>
          <p className='font-bold text-red-500'>Btech-AI/ML</p>

          <p className='text-emerald-400 font-mono mt-6'>
            <span className='text-green-400'>$</span>Focus
          </p>
          <p className='font-bold text-red-500'>React.js * Node.js * Python
            
            </p>
            <p className='text-emerald-400 font-mono mt-6'>
              <span className='text-green-400'>$</span>mindset
            </p>
            <p className='font-bold text-red-500'>
            build * learn * improve
            </p>

            {/* Status */}
            <div className='mt-6  rounded-lg border border-gray-700 bs-gray-800 px-4 py-3  '>
              <p className='text-red-500 font-bold flex items-center gap-2 text-gray-400'>
            <FaCheck className="text-green-400" />Always Learning
              </p>
            </div>
          </div>
          {/* Right content */}
          
        </div>
        
      </div>
      <div className='bg-red-200 px-2 py-3 items-center  w-full   '>
        <p className='text-sm font-semibold uppercase tracking-tight text-violet-600'>
          Who I Am
        </p>
      </div>
      </div>

      
      </div>
    </section>
  )
}

export default About