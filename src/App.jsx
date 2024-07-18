import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Logica from './components/Logica'

function App() {
  const [count, setCount] = useState(0)

  return (
    <article className='bg-black w-screen px-6 md:px-12 lg:px-16'>
      <Navbar />
      <Logica />
    </article>
  )
}

export default App
