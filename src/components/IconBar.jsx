import React from 'react'
import { FaReact,  FaAngular, FaVuejs } from 'react-icons/fa'
import {SiSvelte, SiJavascript} from 'react-icons/si'
const IconBar = () => {
  return (
    <>
    <div className='p-1'>Icon Bar</div>
    <div className=' flex flex-row gap-2 bg-black w-min'>
      <a href='https://reactjs.org/' target='_blank'><FaReact size='46px' className='sidebar-icon hover:text-blue-900' /></a>
      <a href='https://angular.io/' target='_blank'><FaAngular size='46px' className='sidebar-icon hover:text-red-700' /></a>
      <a href='https://vuejs.org/' target='_blank'><FaVuejs size='46px' className='sidebar-icon hover:text-green-900'  /></a>
      <a href='https://svelte.dev/' target='_blank'><SiSvelte size='46px'  className='sidebar-icon hover:text-orange-700' /></a>
      <a href='https://www.javascript.com/' target='_blank'><SiJavascript size='46px' className='sidebar-icon hover:text-yellow-600' /></a>
    </div>
    </>
  )
}

export default IconBar
