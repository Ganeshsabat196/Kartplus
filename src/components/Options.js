import React from "react";
import { useState } from "react";
import "../js/script.js";

export default function Options() {
 
  return (
    <>
      <ul className="nav options justify-content-center bg-primary " >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          Retail
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          Fashion
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> 
            Electronics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          Footwear
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Grocery store
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Consumer electronics
          </a>
        </li>
      </ul>
    </>
  );
}
