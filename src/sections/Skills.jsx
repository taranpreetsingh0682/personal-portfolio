import React from 'react'
import SkillCategoryCard from '../components/SkillCategoryCard'
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'


const skillCategories =[
  {icon:<FaCode className='text-indigo-300 '/> ,title:'Programming Languages ',skills:['C','C++','Python']},
  { icon: <FaLaptopCode className='text-indigo-600' />, title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind'] },
  { icon: <FaServer className='text-indigo-600' />, title: 'Backend', skills: ['Node.js', 'Django', 'CodeIgniter'] },
  { icon: <FaDatabase className='text-indigo-600' />, title: 'Database and Cloud', skills: ['MySQL', 'MongoDB', 'AWS'] },
  { icon: <FaTools className='text-indigo-600' />, title: 'Tools and Platforms', skills: ['VS Code', 'Git', 'GitHub', 'Claude AI', 'ChatGPT'] },
]
const Skills = () => {
  return (
     <section className='px-12 py-16 bg-gray-100'>
      <h2 className='text-3xl font-bold text-center'>Skills</h2>
      <p className='text-center text-indigo-600 text-lg my-2'>What I work with</p>
      <p className='text-center text-gray-600 text-sm max-w-xl mx-auto mb-10'>
        A breakdown of the languages, frameworks, and tools I use to build.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto'>
        {skillCategories.map((cat, index) => (
          <SkillCategoryCard key={index} icon={cat.icon} title={cat.title} skills={cat.skills} />
        ))}
      </div>
    </section>
  )
}

export default Skills