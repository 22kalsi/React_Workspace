import React from "react";
import "../src/App.css";
// import Dashboard from "./Dashboard/Dashboard";
import { CartProvider, useCart } from "react-use-cart";
import Header from "../src/Dashboard/Header"
const App = () => {

    return (
      
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );

 
}

function Page() {

  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];

  return (
    <div>
<svg id="svg-background" class="position-absolute" viewBox="0 0 1920 880">
    <g>
        <linearGradient id="svg-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop stop-color="hsl(217, 88%, 33.7%)" offset="0"></stop>
            <stop stop-color="hsl(217, 88%, 75.1%)" offset="1"></stop>
        </linearGradient>
        <path d="" fill="url(#svg-gradient)" opacity="0.4">
            <animate attributeName="d" dur="33s" repeatCount="indefinite"
                values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z">
            </animate>
        </path>
        <path d="" fill="url(#svg-gradient)" opacity="0.4">
            <animate attributeName="d" dur="33s" repeatCount="indefinite"
                values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z">
            </animate>
        </path>
        <path d="" fill="url(#svg-gradient)" opacity="0.4">
            <animate attributeName="d" dur="33s" repeatCount="indefinite"
                values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z">
            </animate>
        </path>
        <path d="" fill="url(#svg-gradient)" opacity="0.4">
            <animate attributeName="d" dur="33s" repeatCount="indefinite"
                values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z">
            </animate>
        </path>
        <path d="" fill="url(#svg-gradient)" opacity="0.4">
            <animate attributeName="d" dur="33s" repeatCount="indefinite"
                values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z">
            </animate>
        </path>
    </g>
</svg>

<div class="container">
  <div class="row gx-lg-5">
    <div class="col-lg-7 pt-custom-1 fade fade-delay-15">
      <h1
          class="display-1 mb-4 opacity-90"
          style={{color: "hsl(217, 88%, 95%)"}}
          >
        Exlusive offer
      </h1>

      <h5 class="mb-4 opacity-80 " style={{color: "hsl(217, 88%, 90%)"}}>
        Lorem ipsum dolor sit amet consectetur.
      </h5>

      <p class="mb-4 opacity-70" style={{color: "hsl(217, 88%, 85%)"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus, expedita iusto veniam atque, magni tempora mollitia
        dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
        ipsum nisi dolorem modi. Quos?
      </p>

      <a
         class="btn btn-white btn-rounded btn-lg me-3 opacity-80"
         href="#"
         role="button"
         data-ripple-color="hsl(218, 41%, 45%)"
         >Buy now</a
        >
      <a
         class="btn btn-outline-white btn-rounded btn-lg opacity-80"
         href="#"
         role="button"
         >Learn more</a
        >
    </div>

    <div class="col-lg-4 pt-custom-2  fade fade-delay-30">
      <img
           src="https://mdbootstrap.com/img/new/ecommerce/vertical/0044434523444444444.jpg"
           class="w-100 rounded-6 shadow-5-strong opacity-80 d-none d-lg-block"
           alt=""
           id="card-custom"
           />

      <img
           src="https://mdbootstrap.com/img/new/ecommerce/vertical/0234231234325304.jpg"
           class="w-100 rounded-6 shadow-5-strong d-block d-lg-none"
           alt=""
           />
    </div>
  </div>
</div>
      <h1>{ products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>{p.name}</button>
        </div>
      )) }</h1> 
    </div>
  );
};

export default App;

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  
  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

