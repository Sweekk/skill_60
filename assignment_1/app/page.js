"use client";
import Stuff from "./Stuff"; 
import {useState} from 'react';
export default function Home(){
   const [cart, setCart]= useState([]);
   const products = [
    {
      brand: "Acer's New Swift Go and Aspire Vero 16 Laptops",
      price: "₹55,990",
      img: "https://cdn.uc.assets.prezly.com/cc1e3f98-2fc8-4410-8dde-76f813c9691c/-/format/auto/Swift-Go-16-02.jpg"
    },
    {
       brand : "Lenovo Smartchoice LOQ 12th Gen Intel Core i5-12450HX 15.6",
        price: "₹66,990",
        img: "https://m.media-amazon.com/images/I/51+U6oOCx4L._SY300_SX300_.jpg",
       
    },
    
     
   ];
  return <div>
     
    <center style = {{
      fontFamily: 'cursive',
      fontSize: '40px',}}>
      Products
    </center>
    <div>Cart items</div>
    {
      cart.map((element)=> {
         return <Stuff 
         key={element.price}
        brand={element.brand}
        price={element.price}
        img={element.img}
          onBorrowClick={(e)=>{
            cart.push(element);
            setCart(cart.filter(products => products !== element))
        }}
     />
      })
    }
    <div>Store items</div>
    {
      products.map((element)=> {
         return <Stuff 
         key={element.price}
        brand={element.brand}
        price={element.price}
        img={element.img}
          onBorrowClick={(e)=>{
            
            setCart([...cart,element])
            console.log(`Cart Items : ${cart}`)
        }}
     />
      })
    }
    
    <CatogaryTitle title = {"Laptops "} description = {">> All the Laptops that you need"}/>
    <Stuff
      
       brand = {"Acer's New Swift Go and Aspire Vero 16 Laptops"}
        img ={"https://cdn.uc.assets.prezly.com/cc1e3f98-2fc8-4410-8dde-76f813c9691c/-/format/auto/Swift-Go-16-02.jpg" }
        price = {"₹55,990"}
       
    />
    <Stuff
       brand = {"Lenovo Smartchoice LOQ 12th Gen Intel Core i5-12450HX 15.6"}
        img ={"https://m.media-amazon.com/images/I/51+U6oOCx4L._SY300_SX300_.jpg" }
        price = {"₹66,990"}
       
    />
     <CatogaryTitle title = {"Phones"}/>
        <Stuff
      
       brand = {"iPhone 16 Pro Max 256 GB: 5G Mobile"}
        img ={"https://m.media-amazon.com/images/I/619oqSJVY5L._SX679_.jpg" }
        price = {"₹1,30,9000"}
               

    />
    <Stuff
       brand = {"Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI "}
        img ={"https://m.media-amazon.com/images/I/71Nwtop9jtL._AC_UY327_FMwebp_QL65_.jpg" }
        price = {"₹66,990"}

        
    />
     
      

</div>
}
function CatogaryTitle({title, description}){
  return <div style = {{
    fontFamily: 'cursive',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
    textAlign: 'left',
    paddingTop: '20px',
    paddingBottom: '20px'
    }}>
      {title}<br></br>
      <br></br>
      {description}
      
  </div>
  
  

}