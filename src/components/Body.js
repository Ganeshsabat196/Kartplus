import React from 'react'
import '../css/style.css'
import '../js/script'
import Homepage from './Homepage';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Api from './Api';
import Aboutpage from './Aboutpage';
import Mobiles from './Sortedcat/Mobiles';
import Laptops from './Sortedcat/Laptops';
import Decoration from './Sortedcat/Decoration';
import Skincare from './Sortedcat/Skincare';
import '../js/carousel.js'

export default function Body() {
  
  return (
    <>
    
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<Aboutpage/>} />
          <Route path="/Category-Mobiles" element={<Mobiles/>} />
          <Route path="/Category-All" element={<Api/>} />
          <Route path="/Category-Laptops" element={<Laptops/>} />
          <Route path="/Category-Decoration" element={<Decoration/>} />
          <Route path="/Category-Skincare" element={<Skincare/>} />
      </Routes>
    
    
    </>
  )
}
