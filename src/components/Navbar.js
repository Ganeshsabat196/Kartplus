import React, { useState } from 'react'
import '../js/script'
import '../css/style.css'
// import { ReactDOM } from 'react';
import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  Link
} from "react-router-dom";

export default function Navbar() {
  const [mode,setMode]=useState("white");

  const switchst=()=>{
      if(mode==="dark"){
        setMode("white");
        document.body.style.color="black"
      }
      else{
        setMode("dark")
      }
  }
  return (
    <>
    <nav className={'navbar navbar-expand-lg navbar-'+mode+' bg-'+mode} >
  <Link className="navbar-brand ml-3" to="/"><i className="fa-solid fa-shop mr-2"></i>KartPlus</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/about">About</Link>
      </li>

      <li className="nav-item dropdown">
        <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">Action</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
    </ul>
    <div className="form-check form-switch">
  {/* <label className="form-check-label" id="switch" for="flexSwitchCheckDefault">Darkmode</label> */}
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={switchst}/>
  <label className="form-check-label mr-3" htmlFor="flexSwitchCheckDefault"><i className="fa-solid fa-moon fa-lg"></i></label>
</div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  <button className="btn btn-outline-secondary ml-2"><i className="fa-solid fa-cart-shopping"></i> My Cart</button>
  </div>
  
</nav>
</>
  )
}

