import React from 'react'
import { FaReact,  FaAngular, FaVuejs } from 'react-icons/fa'
import {SiSvelte, SiJavascript} from 'react-icons/si'
const IconBar = () => {
  return (
    <div className=' flex flex-row gap-2 bg-black w-min'>
      <a><FaReact size='46px' className='sidebar-icon' /></a>
      <a><FaAngular size='46px' className='sidebar-icon' /></a>
      <a><FaVuejs size='46px' className='sidebar-icon'  /></a>
      <a><SiSvelte size='46px'  className='sidebar-icon' /></a>
      <a><SiJavascript size='46px' className='sidebar-icon' /></a>
    </div>
  )
}

export default IconBar
