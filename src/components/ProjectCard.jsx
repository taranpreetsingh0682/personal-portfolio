import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({icon: Icon ,title,description , tech ,githubUrl , liveUrl , image}) => {
  return (
  <div className='bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 mb-4  transition-colors duration-300 '>
 <div className='h-36 bg-indigo-100 flex items-center justify-center '>
  <Icon className='text-4xl text-indigo-600'/>
  </div>
  <div className='p-5'>
    <p className='font-semibold text-base mb-1.5  '>{title }</p>
    <p className='text-sm font-bold text-gray-600 leading-relaxed mb-4 '>{description}</p>
    <div className='flex flex-wrap gap-2 mb-4  '>
       {tech.map((t, i) => (
            <span key={i} className='bg-indigo-100 text-indigo-700 text-xs px-2.5 py-1  rounded-md'>{t}</span>
          ))}

    </div>
    <div className='flex gap-4  border-t border-gray-200 pt-3 '>
      <a href={githubUrl } target='_blank ' rel='noreferrer ' className='flex items-center text-xs text-gray-800 hover:text-violet-300 '>
        <FaGithub className='mx-2 '/>Code
      </a>
      {liveUrl && (
        <a href={liveUrl} target='_blank' rel='noreferrer' className='flex items-center text-xs target-gray-800 hover:text-violet-200'>
          <FaExternalLinkAlt/>Live
        </a>
        
      )}
      </div>
  </div>
  </div>
  )
}

export default ProjectCard