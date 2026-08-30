import React from 'react'
import { FaCheck } from 'react-icons/fa'
import StatCards from '../components/StatCards'
import TechStack from '../components/TechStack'
const About = () => {
  return (
    <section className=' px-12 py-12 bg-white sm:px-6 mx-32 my-12  lg:px-8'>
      <div className='mx-auto max-w-6xl bg-white '>
        <p className='text-3xl font-bold text-center sm:text-4xl'>
          About Me
        </p>
        <h3 className='text-center font-bold  text-indigo-600 my-3 text-2xl sm:text-3xl '>
          Get to know me better 
        </h3>
      <p className='mt-3 mx-auto text-center  max-w-2xl text-grey-600 '>
        A little about who I am, What I build , and the technologies I enjoy working with.
      </p>

      {/* Main About Content  */}
    <div className='row'>
      <div className='mt-4 grid grid-cols-1  gap-12 lg:grid-cols-2'>
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
          
          
        </div>
        
      </div>
      {/* Right Content */}

      <div className=''>
        <p className='mt-12 my-4 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-md px-3 py-2  w-26 '>
          <span className='mx-2'>Who I am</span>
        </p>

        <p className=''>A B.Tech AI/ML student who enjoys turning ideas into working products, from UI to solid backend logic.</p>
        <span className=' text-xs text-gray-400 '>Currently building :- An LIFEVAULT A secure sorted and AI-analyzer</span>
<div className='mt-3 flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 w-fit'>
  <span className='h-2 w-2 rounded-full bg-green-500'></span>
  <span className='text-sm text-green-700 font-medium'>Open to internships</span>
</div>
{/* StatCards */}
  <div className='flex justify-around mt-8'>
    <StatCards value="4+"  label="Projects" color="blue"/>
    <StatCards  value="5+" label="Certificates" color="green"/>
    <StatCards value="3mo" label="Experience" color="yellow"/>
  </div>
{/* TechStack */}
<div className='mt-6 '>
<p className='text-xs text-gray-600 uppercase tracking-wide mb-2 mx-2'>Tech Stack
</p>
<div className='flex mt-5 justify-around'>
<TechStack skills={['HTML']}/>
<TechStack skills={['CSS']}/>
<TechStack skills={['JAVASCRIPT']}/>
<TechStack skills={['REACT.JS']}/>
<TechStack skills={['TAILWIND']}/>
<TechStack skills={['NODE.JS']}/>

</div>
{/* Download Resume */}

</div>
      </div>
      </div>
      </div>

      
      </div>
    </section>
  )
}

export default About