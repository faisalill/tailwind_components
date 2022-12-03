
import './App.css'
import Accordion from './components/Accordion'
import IconBar from './components/IconBar'
import NavBar from './components/NavBar'
function App() {


  return (
  <div className= ' bg-indigo-600 h-screen w-screen p-3'>
    <div className='  top-2 left-2'>
    <IconBar />
    </div>
    <div className=' mt-5'>
      <Accordion />
    </div>
    <div className='mt-4'>
      <NavBar />
    </div>
  </div>
  
  )
}

export default App
