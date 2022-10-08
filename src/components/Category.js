import '../css/style.css';
import '../js/script.js';

import React, { PureComponent, useState } from 'react'
import { Link } from 'react-router-dom'
export class Category extends PureComponent {
    category =  [
        {
            "id": 1,
            "title": "All Categories",
            "desc": "Last updated 5 mins ago",
            "images": "./images/12.jpg",
            "link":"/category-All"
        },
        {
            "id": 2,
            "title": "Mobiles",
            "desc": "Last updated 3 mins ago",
            "images": "./images/4.jpg",
            "link":"/category-Mobiles"
        },
        {
            "id": 3,
            "title": "Laptops",
            "desc": "Last updated 5 mins ago",
            "images": "./images/5.jpg",
            "link":"/category-Laptops"
        },
        {
            "id": 4,
            "title": "Skincare",
            "desc": "Last updated 5 mins ago",
            "images": "./images/6.jpg",
            "link":"/category-Skincare"
        },
        {
            "id": 5,
            "title": "Furnitures",
            "desc": "Last updated 3 mins ago",
            "images": "./images/8.jpg",
            "link":"/category-All"
        },
        {
            "id": 6,
            "title": "Decoration",
            "desc": "Last updated 5 mins ago",
            "images": "./images/7.jpg",
            "link":"/category-All"
        },
        {
            "id": 7,
            "title": "Electronic devices",
            "desc": "Last updated 2 mins ago",
            "images": "./images/9.jpg",
            "link":"/category-All"
        },
        {
            "id": 8,
            "title": "Furnitures",
            "desc": "Last updated 1 min ago",
            "images": "./images/8.jpg",
            "link":"/category-All"
        },
    ];
   constructor() {
      super();
      
      this.state = {
          catData: this.category
        }
        this.SortedData={
          Data :this.state.catData
        }
      
    }
    render() {
    return (
        <>
<hr />
<div className="row m-0">
        <h2 className='text-center mt-3'>What are you looking for?</h2>
<ul className="nav options justify-content-center bg-muted " >
    {
        this.SortedData.Data.map((elem)=>{
            return <>
            <li className="nav-item">
            <Link to={elem.link}>
            <img src={elem.images} width="100px" className="rounded-circle ml-3 mr-3 mt-3" alt="Cinque Terre"></img>
                    <h6 className="text-center" style={{textDecoration:"none"}}>{elem.title}</h6>
            </Link>
            </li>  
            </>
        })
    }

     </ul>
    
</div>
<hr />
       
      
    </>
    )
  }
}

export default Category