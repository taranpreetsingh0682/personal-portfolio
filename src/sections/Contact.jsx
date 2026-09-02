import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        'service_53pqqsu',
        'template_laq5dos',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'DHmYeUr4CMzy25GHi'
      )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }

  return (
    <section id="contact" className='px-6 sm:px-12 py-16 bg-white text-center'>
      <h2 className='text-center text-3xl font-bold'>Contact Me</h2>
      <p className='text-center font-base text-base my-2 text-indigo-600'>Let's build something together</p>
      <p className='text-center font-base text-gray-400'>Open to internships and collaboration-feel free to reach out anytime</p>

      <div className='mt-4 flex justify-center flex-wrap gap-3'>
        <a href='mailto:taranpreetsingh62006@gmail.com' className='flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300'>
          <Mail size={16} />Email me
        </a>

        <a href='https://github.com/taranpreetsingh0682' rel='noreferrer' target='_blank' className='flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-300'>
          <FaGithub size={16} />Github
        </a>

        <a href='https://www.linkedin.com/in/taranpreet-singh-331108296' rel='noreferrer' target='_blank' className='gap-2 flex items-center border border-gray-200 rounded-lg px-6 py-3 hover:bg-indigo-100 bg-indigo-200 text-sm font-semibold'>
          <FaLinkedin size={16} />LinkedIn
        </a>
      </div>

      <form onSubmit={handleSubmit} className='mt-10 max-w-md mx-auto text-left bg-white border border-gray-200 rounded-2xl p-6 shadow-sm'>
        <div className='mb-4'>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Your name'
            className='w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='you@example.com'
            className='w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500'
          />
        </div>

        <div className='mb-5'>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>Message</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder='Write your message...'
            className='w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500 resize-none'
          />
        </div>

        <button
          type='submit'
          disabled={status === 'sending'}
          className='w-full bg-indigo-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-60'
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className='text-green-600 text-sm text-center mt-3'>Message sent! Check your inbox for a confirmation.</p>
        )}
        {status === 'error' && (
          <p className='text-red-600 text-sm text-center mt-3'>Something went wrong. Please try emailing me directly.</p>
        )}
      </form>
    </section>
  )
}

export default Contact