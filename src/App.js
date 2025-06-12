import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import KitchenGallery from './pages/KitchenGallery'
import Projects from './pages/Projects'
import BathroomGallery from './pages/BathroomGallery'
import BedroomGallery from './pages/BedroomGallery'
import LivingroomGallery from './pages/LivingroomGallery'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path='/kitchenGallery' element={<KitchenGallery />} />
        <Route path='/bathroomGallery' element={<BathroomGallery />} />
        <Route path='/bedroomGallery' element={<BedroomGallery />} />
        <Route path='/livingroomGallery' element={<LivingroomGallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/about' element={<About />} />
      </Routes>
      
    </BrowserRouter>  
  )
}

export default App

