import React from 'react'
import Carousel from './Carousel';
import Category from './Category';
import '../css/style.css'
import '../js/script'
// import { Link } from "react-router-dom";
import Cardcarousel from './Cardcarousel';
export default function Homepage() {
  return (
    <>
        <Carousel/>
        <Category/>
        <Cardcarousel/>
    </>
  )
}
