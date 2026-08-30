import React from 'react'



     const colorStyles ={
      blue: 'bg-blue-200  border-indigo-200 hover:bg-indigo-300',
      green: 'bg-green-100   hover:bg-green-200 ',
      yellow: 'bg-yellow-100  border-indigo-200 hover:bg-yellow-100'
    }

    const StatCards =({value,label ,color='blue'})=>{
return (
  <div className={`rounded-2xl px-12 py-7  text-center transition-all duration-300 hover:translate-y-1   cursor-default ${colorStyles[color]}`}>

    <p className='font-bold text-2xl text-red-900 '>{value}</p>
    <p className='font-bold text-sm text-gray-600 mt-1  '>{label}</p>
  
  </div>
)
    }
 
  


export default StatCards