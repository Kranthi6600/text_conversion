import { useState } from 'react'
import './App.css'
import About from './About'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('dark')

  return (
    <Router>
      <Navbar mode={mode}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
