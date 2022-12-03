import React, {useState} from 'react'
import {FaDev} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

const NavBar = () => {
     const [show, setshow] = useState(false)
  return (
    <>
    <div className='p-2'>NavBar</div>
    <div className='bg-black w-full p-3 flex items-center justify-start'>
        <FaDev className='text-blue-500 inline-block' id='devicon' size='39'/>
        <p className='text-white inline-block ml-6 font-bold'>React Developer</p>
    <div className='text-white ml-auto mr-7 md:flex md:flex-row md:gap-6  sm:hidden '>
        <a className='hover:text-gray-400 '>Home</a>
        <a className='hover:text-gray-400 '>About</a>
        <a className='hover:text-gray-400 '>Contact</a>
        <a className='hover:text-gray-400 '>Portfolio</a>
    </div>
    <div className='ml-auto mr-4 group md:hidden sm:visible'>
        <GiHamburgerMenu className='text-white hover:text-gray-600'
        onClick={()=>{setshow(!show)}}
        size='27'/>
    </div>
    </div>
    <div className={show ? 'text-white ml-auto mr-7 bg-black flex flex-col gap-3 p-4 w-full'  : 'text-white ml-auto mr-7 bg-black flex flex-col gap-3 p-4 w-full hidden'}>
        <a className='hover:text-gray-400 '>Home</a>
        <a className='hover:text-gray-400 '>About</a>
        <a className='hover:text-gray-400 '>Contact</a>
        <a className='hover:text-gray-400 '>Portfolio</a>
    </div>
    </>
  )
}

export default NavBar