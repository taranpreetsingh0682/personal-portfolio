import React from 'react'

const TimeLineCard = ({title , location ,time, description}) => {
  return (
    <div className='bg-white border border-gray-500 rounded-xl overflow-hidden hover:border-violet-300 my-6 transition-colors px-12  duration-300' >
      <div className='bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-2   '>
       
          <p className='font-semibold text-base my-2  '>{title}</p>
           <p className='rounded-xl bg-indigo-300 text-indigo-600  w-fit py-2 px-2  '>{time}</p>
          </div>
          <div className=''>
          <p className='text-sm font-bold text-gray-500 mt-0 mb-0 '>{location}</p>
          </div>
         
          <ul className='list-disc pl-4 my-2 text-sm text-gray-500'>
            <span className='h-3 w-3 shrink-0 rounded-full bg-gray-500'></span>
            {description.map((point,i)=>
            <li key={i}>{point}</li>)}
          </ul>
        </div>
      
      
    
  )
}

export default TimeLineCard