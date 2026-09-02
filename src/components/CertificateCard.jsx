import React from 'react'

const CertificateCard = ({ title, issuer, image }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 my-6 transition-colors duration-300'>
      <div className='h-36 w-full overflow-hidden bg-gray-100'>
        <img src={image} alt={title} className='w-full h-full object-cover object-top' />
      </div>
      <div className='p-4'>
        <p className='font-medium text-sm mb-0.5'>{title}</p>
        <p className='text-xs text-gray-500'>{issuer}</p>
      </div>
    </div>
  )
}

export default CertificateCard