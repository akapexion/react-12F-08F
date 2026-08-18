import React from 'react'
import Demo from './Demo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <>
      
        <BrowserRouter>
              <Navbar/>
              <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
              </Routes>
              <Footer/>
        </BrowserRouter>
      
    </>
  )
}

export default App
