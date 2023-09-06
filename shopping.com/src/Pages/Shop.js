import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import Home from "./Home";
import cross from "../images/cross.svg";
import Product from "./Product";
import { CartProvider, useCart } from "react-use-cart";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import Confetti from '../Elements/Confetti';
import { useState } from 'react';

const Shop = () => {


    const { addItem } = useCart();
    const products = [
      {
        id: 1,
        name: "Nordic Chair",
        price: 50,
        quantity: 1,
        stock: 10,
        image: product1,
      },
      {
        id: 2,
        name: "Kruzo Aero Chair",
        price: 78,
        quantity: 5,
        stock: 10,
        image: product2,
      },
      {
        id: 3,
        name: "Ergonomic Chair",
        price: 43,
        quantity: 1,
        stock: 10,
        image: product3,
      },
    ];
const head = 
{
"first" : "Shop",
"second" : ["Crafted with excellent material. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."],
"buttons" : true
}
return(

<div>

<Header change={head}/>

     {/* <!-- Start Product Section --> */}
     <div class="product-section">
        <div class="container">
          <div class="row">

			{products.map((p) => (
				<CartProvider>
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={p.id}>
              <a class="product-item">
                <img src={p.image} class="img-fluid product-thumbnail" alt="product" />
                <h3 class="product-title">{p.name}</h3>
                <strong class="product-price">{p.price} $</strong>

                <span class="icon-cross" >
                  <img src={cross} class="img-fluid" onClick={() => addItem(p)} alt="button" />
                </span>
              </a>
            </div></CartProvider>
      ))}



          </div>
        </div>
      </div>
      {/* <!-- End Product Section --> */}

<Footer/>

</div>

)

}

export default Shop