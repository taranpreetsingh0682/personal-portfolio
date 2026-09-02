import React from 'react'
import CertificateCard from '../components/CertificateCard'
import certWeb from '../assets/Cert-web.png'
import certCloud from '../assets/Cert-cloud.png'
import certC from '../assets/Cert-c.png'
import certData from '../assets/Cert-data.png'

const certificates =[
  {
    title: 'Full-Stack Web Development with AI',
    issuer: 'Internshala Trainings . Score 66%',
    image: certWeb

  },
  {
 title: 'Cloud-Computing (AWS)',
 issuer:'Internshala Trainings .Score 73%',
 image:certCloud

  },
  {
    title:'C++ Programming (Advanced)',
    issuer:'Infosys Springboard',
    image: certC
  },
  {
    title: 'Database and SQL ',
    issuer:'Infosys Springboard',
    image: certData

  },
]
const Certificates = () => {
  return (
    <section id="certificate" className='bg-white mb-3 '>
      <h2 className='text-center text-3xl font-bold'>Certificates</h2>
      <p className='font-semibold text-sm text-center text-indigo-500 my-2'>Recognized  Learning</p>
      <p className='text-center text-gray-500'>Certifications that back up what I've learned.</p>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-5  max-w-2xl mx-auto'>
  {certificates.map((cert,i)=>
  <CertificateCard key={i} {...cert}/>)}
</div>

    </section>
  )
}

export default Certificates