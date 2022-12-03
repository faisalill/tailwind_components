
import './App.css'
import Accordion from './components/Accordion'
import IconBar from './components/IconBar'
import Modal from './components/Modal'
import NavBar from './components/NavBar'
function App() {


  return (
  <div className= ' bg-indigo-600 h-screen w-screen p-3 z-0'>
    <div className='  top-2 left-2'>
    <IconBar />
    </div>
    <div className=' mt-5'>
      <Accordion />
    </div>
    <div className='mt-4'>
      <NavBar />
    </div>
    <div className='mt-4'>
      <Modal />
    </div>
  </div>
  
  )
}

export default App
