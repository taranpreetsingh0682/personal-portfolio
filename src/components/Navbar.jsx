
import { useState } from 'react'
import { Menu, X, Send } from 'lucide-react'


const Navbar = () => {

      const [isMenuOpen, setIsMenuOpen] = useState(false)
       const [activeSection, setActiveSection] = useState('home')
      const navLinks =[
        {name: 'Home' , href:'#home'},
        {name: 'About', href: '#about'},
        {name: 'Skills' , href: '#skills'},
        {name: 'Projects', href:'#projects'},
        {name: 'Experience',href:'#experience'},
        {name:'Certificates',href: '#certificate'},
        


      ]

  
  return (
    <header className='py-1 my-2 mx-3 bg-white'>
      <nav className='py-2 px-5 my-0 border-b border-gray-200 '>
        
<div className='flex justify-between'>
        <div className=' flex items-center py-2 my-5'>
          <a href='#home' className='text-[30px] font-bold tracking-tight text-black'>
          Taranpreet Singh
        </a>
        </div>
        <div className='hidden lg:flex py-2 my-2  items-center gap-6 text-[20px]'>
         {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
                onClick={() => setActiveSection(link.href.substring(1))}              className={`relative py-2 px-3   text-black   ${
                index === 0
                  ? ' '
                  : ' hover:text-black'
              }`}
            >
              {link.name}

              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-violet-900 " />
              )}
            </a>
          ))}


          {/* contact */}

          <a href='#contact' className=' flex gap-3 item-center rounded-lg  bg-violet-500 text-white px-3 py-2'>

            <Send size={18} className='my-2 '/>
            Contact Me
          </a>

          {/* Mobile Menu Button */}
         
        </div>
            <button type='button' onClick={()=> setIsMenuOpen(!isMenuOpen)}
            className='text-black rounded-lg p-2 lg:hidden'>

              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>  }
            </button>
        </div>
       

            {isMenuOpen && (
          <div className="mt-4 border-t border-violet-300 pt-4 lg:hidden">

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {setIsMenuOpen(false)
                    setActiveSection(link.href.substring(1))
                  }}
                  className="rounded-lg px-4 py-3 text-black hover:bg-violet-100 "
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Contact */}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-violet-500 px-4 py-3 text-white"
              >
                <Send size={18} />
                Contact Me
              </a>

            </div>

          </div>
        )}
      </nav>


    </header>
    
  )
}
export default Navbar