import { color, positions } from '@mui/system';
import React, { PureComponent, useState } from 'react'
import '../css/style.css'
export class Cardcarousel extends PureComponent {
  Data =  [{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"]
},
{
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free,Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg"]
},
{
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/3/1.jpg"]
},
{
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/7/1.jpg",
        "https://dummyjson.com/image/i/products/7/2.jpg",
        "https://dummyjson.com/image/i/products/7/3.jpg",
        "https://dummyjson.com/image/i/products/7/thumbnail.jpg"]
},
{
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 1499,
    "discountPercentage": 10.23,
    "rating": 4.43,
    "stock": 68,
    "brand": "Microsoft Surface",
    "category": "laptops",
    "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/8/1.jpg",
        "https://dummyjson.com/image/i/products/8/2.jpg",
        "https://dummyjson.com/image/i/products/8/3.jpg",
        "https://dummyjson.com/image/i/products/8/4.jpg",
        "https://dummyjson.com/image/i/products/8/thumbnail.jpg"]
},
{
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/9/1.jpg",
        "https://dummyjson.com/image/i/products/9/2.png",
        "https://dummyjson.com/image/i/products/9/3.png",
        "https://dummyjson.com/image/i/products/9/4.jpg",
        "https://dummyjson.com/image/i/products/9/thumbnail.jpg"]
},

{
    "id": 11,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": 65,
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/11/1.jpg",
        "https://dummyjson.com/image/i/products/11/2.jpg",
        "https://dummyjson.com/image/i/products/11/3.jpg",
        "https://dummyjson.com/image/i/products/11/thumbnail.jpg"]
},
{
    "id": 12,
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "price": 40,
    "discountPercentage": 15.66,
    "rating": 4,
    "stock": 52,
    "brand": "Royal_Mirage",
    "category": "fragrances",
    "thumbnail": "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/12/1.jpg",
        "https://dummyjson.com/image/i/products/12/2.jpg",
        "https://dummyjson.com/image/i/products/12/3.png",
        "https://dummyjson.com/image/i/products/12/4.jpg",
        "https://dummyjson.com/image/i/products/12/thumbnail.jpg"]
},
{
    "id": 13,
    "title": "Fog Scent Xpressio Perfume",
    "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    "price": 13,
    "discountPercentage": 8.14,
    "rating": 4.59,
    "stock": 61,
    "brand": "Fog Scent Xpressio",
    "category": "fragrances",
    "thumbnail": "https://dummyjson.com/image/i/products/13/thumbnail.webp",
    "images": ["https://dummyjson.com/image/i/products/13/1.jpg",
        "https://dummyjson.com/image/i/products/13/2.png",
        "https://dummyjson.com/image/i/products/13/3.jpg",
        "https://dummyjson.com/image/i/products/13/4.jpg",
        "https://dummyjson.com/image/i/products/13/thumbnail.webp"]
},
{
    "id": 16,
    "title": "Hyaluronic Acid Serum",
    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    "price": 19,
    "discountPercentage": 13.31,
    "rating": 4.83,
    "stock": 110,
    "brand": "L'Oreal Paris",
    "category": "skincare",
    "thumbnail": "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/16/1.png",
        "https://dummyjson.com/image/i/products/16/2.webp",
        "https://dummyjson.com/image/i/products/16/3.jpg",
        "https://dummyjson.com/image/i/products/16/4.jpg",
        "https://dummyjson.com/image/i/products/16/thumbnail.jpg"]
},
{
    "id": 17,
    "title": "Tree Oil 30ml",
    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria.",
    "price": 12,
    "discountPercentage": 4.09,
    "rating": 4.52,
    "stock": 78,
    "brand": "Hemani Tea",
    "category": "skincare",
    "thumbnail": "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/17/1.jpg",
        "https://dummyjson.com/image/i/products/17/2.jpg",
        "https://dummyjson.com/image/i/products/17/3.jpg",
        "https://dummyjson.com/image/i/products/17/thumbnail.jpg"]
},
{
    "id": 18,
    "title": "Oil Free Moisturizer 100ml",
    "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    "price": 40,
    "discountPercentage": 13.1,
    "rating": 4.56,
    "stock": 88,
    "brand": "Dermive",
    "category": "skincare",
    "thumbnail": "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/18/1.jpg",
        "https://dummyjson.com/image/i/products/18/2.jpg",
        "https://dummyjson.com/image/i/products/18/3.jpg",
        "https://dummyjson.com/image/i/products/18/4.jpg",
        "https://dummyjson.com/image/i/products/18/thumbnail.jpg"]
},
{
    "id": 21,
    "title": "- Daal Masoor 500 grams",
    "description": "Fine quality Branded Product Keep in a cool and dry place",
    "price": 20,
    "discountPercentage": 4.81,
    "rating": 4.44,
    "stock": 133,
    "brand": "Saaf & Khaas",
    "category": "groceries",
    "thumbnail": "https://dummyjson.com/image/i/products/21/thumbnail.png",
    "images": ["https://dummyjson.com/image/i/products/21/1.png",
        "https://dummyjson.com/image/i/products/21/2.jpg",
        "https://dummyjson.com/image/i/products/21/3.jpg"]
},
{
    "id": 22,
    "title": "Elbow Macaroni - 400 gm",
    "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    "price": 14,
    "discountPercentage": 15.58,
    "rating": 4.57,
    "stock": 146,
    "brand": "Bake Parlor Big",
    "category": "groceries",
    "thumbnail": "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/22/1.jpg",
        "https://dummyjson.com/image/i/products/22/2.jpg",
        "https://dummyjson.com/image/i/products/22/3.jpg"]
},
{
    "id": 23,
    "title": "Orange Essence Food Flavou",
    "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    "price": 14,
    "discountPercentage": 8.04,
    "rating": 4.85,
    "stock": 26,
    "brand": "Baking Food Items",
    "category": "groceries",
    "thumbnail": "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/23/1.jpg",
        "https://dummyjson.com/image/i/products/23/2.jpg",
        "https://dummyjson.com/image/i/products/23/3.jpg",
        "https://dummyjson.com/image/i/products/23/4.jpg",
        "https://dummyjson.com/image/i/products/23/thumbnail.jpg"]
},
{
    "id": 26,
    "title": "Plant Hanger For Home",
    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "price": 41,
    "discountPercentage": 17.86,
    "rating": 4.08,
    "stock": 131,
    "brand": "Boho Decor",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/26/1.jpg",
        "https://dummyjson.com/image/i/products/26/2.jpg",
        "https://dummyjson.com/image/i/products/26/3.jpg",
        "https://dummyjson.com/image/i/products/26/4.jpg",
        "https://dummyjson.com/image/i/products/26/5.jpg",
        "https://dummyjson.com/image/i/products/26/thumbnail.jpg"]
},
{
    "id": 27,
    "title": "Flying Wooden Bird",
    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "price": 51,
    "discountPercentage": 15.58,
    "rating": 4.41,
    "stock": 17,
    "brand": "Flying Wooden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/27/thumbnail.webp",
    "images": ["https://dummyjson.com/image/i/products/27/1.jpg",
        "https://dummyjson.com/image/i/products/27/2.jpg",
        "https://dummyjson.com/image/i/products/27/3.jpg",
        "https://dummyjson.com/image/i/products/27/4.jpg",
        "https://dummyjson.com/image/i/products/27/thumbnail.webp"]
},
{
    "id": 28,
    "title": "3D Embellishment Art Lamp",
    "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    "price": 20,
    "discountPercentage": 16.49,
    "rating": 4.82,
    "stock": 54,
    "brand": "LED Lights",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
    "images": ["https://dummyjson.com/image/i/products/28/1.jpg",
        "https://dummyjson.com/image/i/products/28/2.jpg",
        "https://dummyjson.com/image/i/products/28/3.png",
        "https://dummyjson.com/image/i/products/28/4.jpg",
        "https://dummyjson.com/image/i/products/28/thumbnail.jpg"]
}
];
  constructor() {
    super();
    this.state = {
      catdata: this.Data
    }
    this.sort = {
      catdata: this.Data
    }
  }
  filter=()=>{
    // document.getElementById("search").value==="" && document.getElementById("fakesort").style.display("none");
    // document.getElementById("search").value!="" && document.getElementById("fakesort")
  }
  render() {
    return (
      <>
       <div className="input-group search container mt-5" >
            <input type="search" id='search' className="form-control rounded mb-3 " placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={this.filter}/>
            <button className="btn btn-outline-primary" style={{ height: "10%" }}>Search</button>
        </div>
        
<div className="container mt-3 mb-3 ">
<div className="row">

{
  this.sort.catdata.map((elem)=>{
    return elem.category==="skincare" && <div className="card col-md-4">
    <img className="card-img-top" src={elem.images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[0].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  })
}
</div>
</div>
        <div  id='fakesort'>

      <div className="container mt-3 mb-3 ">
        <h2>Electronic devices</h2>
      <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[0].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[0].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[6].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[6].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[8].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[8].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>

      <div className="container mt-5 mb-3" >
        <h2>Fragrance</h2>
      <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[0].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[0].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[6].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[6].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[8].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[8].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>

      <div className="container mt-5 mb-3" >
        <h2>Decoration</h2>
      <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[0].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[0].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[6].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[6].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={this.state.catdata[8].images[0]} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.state.catdata[8].title}</h5>
      <p className="card-text">{this.state.catdata[6].description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>
</div>
      </>
    )
  }
}

export default Cardcarousel