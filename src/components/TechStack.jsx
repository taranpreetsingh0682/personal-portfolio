import React from 'react'

const TechStack = ({ skills }) => {
  return (
    <div className='gap-2 mb-4'>
      {skills.map((skill, index) => (
        <span
          key={index}
          className='bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 '
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default TechStack