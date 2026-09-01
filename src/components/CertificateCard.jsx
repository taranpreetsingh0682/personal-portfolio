import React from 'react'
import { FaCertificate } from 'react-icons/fa'

const CertificateCard = ({title , issuer,pdf}) => {
  return (
    <div className='bg-white border border-gray-500 rounded-xl overflow-hidden hover:border-violet-300 my-6 transition-colors px-12 duration-300'>
    <div className='h-36  bg-indigo-50 rounded-xl flex items-center justify-center '>
      <FaCertificate className='text-3xl  text-indigo-200'/>
    </div>
    <div className='p-2'>
     <p className='font-medium text-sm mb-0.5'>{title}</p>
     <p className='text-xs text-gray-500'>{issuer}</p>
     <p className=''>{pdf}</p>
    </div>
    </div>
  )
}

export default CertificateCard