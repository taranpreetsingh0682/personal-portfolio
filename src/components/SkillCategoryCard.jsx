import React from 'react'

const SkillCategoryCard = ({icon , title , skills }) => {
 
  return (
    <div className='bg-white border border-gray-200 rounded-xl p-5 '>
      <div className='flex items-center gap-2 mb-4 '>
        {icon}
        <p className='font-medium text-base '>{title}</p>
      </div>
      <div className='flex flex-wrap gap-2'>
      {skills.map((skill, index) => (
          <span key={index} className='bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-md'>
            {skill}
          </span>
        ))}
      </div>

    </div>
  )
}

export default SkillCategoryCard