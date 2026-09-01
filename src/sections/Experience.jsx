import React from 'react'
import TimeLineCard from '../components/TimeLineCard'


const experience =[
  {
    title:'Training Internship',
    location:'e-Karigar Technologies . Ambala (On-Site)',
    time:'3 months',
    description:[
     
      'Gained hands-on experience working with CodeIgniter , React.js and Node.js ',
      'Worked on Real-World development tasks , strengthening practical full-stack skills',
    ]
  }
]
const Experience = () => {
  return (
    <section id="experience" className='bg-white px-12 py-12 '>
    <h2 className='font-bold text-3xl  text-center '>Experience</h2>
    <p className='font-semibold text-sm text-center my-2 text-indigo-500 '>Where I've Worked</p>
    <p className='text-center text-gray-500'>Hands-on experience applying what I've learned to real projects </p>

    <div className=' max-w-2xl text-sm text-gray-500 mx-auto'>
{experience.map((exp,i)=>
<TimeLineCard key={i}{...exp}/>
)}
    </div>
    </section>
  )
}

export default Experience