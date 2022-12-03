import React, {useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Modal = () => {
    const [showModal, setshowModal] = useState(false)
  return (
    <>
    <div>
        <div>Modal</div>
        <button className='bg-black text-white p-2 rounded-lg text-md hover:bg-white hover:text-black' onClick={()=>{setshowModal(!showModal)}}>Open Modal</button>
    </div>
    { showModal &&
    <div className=' z-1  bg-overlay-bg fixed top-0 left-0 h-full w-full  align-bottom flex justify-center ' onClick={()=>{setshowModal(false)}} >
     <div className='bg-white w-72 h-72 fixed top-28 rounded-xl p-3  ' onClick={(e)=>{e.stopPropagation()}}>
        <button className=' absolute top-3 right-3 bg-white rounded-lg hover:text-red-400' onClick={()=>{setshowModal(false)}}><AiOutlineCloseCircle size='28px' /></button>
        <h1 className=' absolute left-28 top-28 '>Content...</h1>
        <div className=' absolute left-8 top-52'>
            <button className='mx-8 bg-blue-500 text-white p-2 rounded-lg hover:bg-gray-300 hover:text-blue-500 ' onClick={()=>{setshowModal(false)}}>Close</button>
            <button className='bg-blue-500 text-white p-2 rounded-lg hover:bg-gray-300 hover:text-blue-500' onClick={()=>{setshowModal(false)}}>Continue</button>
        </div>
     </div>
    </div> }
    </>
  )
}

export default Modal