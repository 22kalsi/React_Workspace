import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import post1 from "../images/post-1.jpg";
import post2 from "../images/post-2.jpg";
import post3 from "../images/post-3.jpg";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import truck from "../images/truck.svg";
import bag from "../images/bag.svg";
import cross from "../images/cross.svg";
import support from "../images/support.svg";
import Return from "../images/return.svg";
import choose from "../images/why-choose-us-img.jpg";
import imggrid1 from "../images/img-grid-1.jpg";
import imggrid2 from "../images/img-grid-2.jpg";
import imggrid3 from "../images/img-grid-3.jpg";
import Testimonial from "../Elements/Testimonial";
import { CartProvider, useCart } from "react-use-cart";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import { useCallback, useEffect, useRef } from "react";

const Home = () => {
  const { addItem } = useCart();
  const Head = {
    first: "Home",
    second: ["Modern Interior", <span className="d-block">Design Studio</span>],
    buttons: true,
    img: 2,
  };
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

  return (
    <div>
      <Header change={Head} />

      {/* <!-- Start Product Section --> */}
      <div class="product-section">
        <div class="container">
          <div class="row">
            {/* <!-- Start Column 1 --> */}
            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 class="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p class="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <a href="shop.html" class="btn">
                  Explore
                </a>
              </p>
            </div>
            {/* <!-- End Column 1 --> */}
            {products.map((p) => (
              <CartProvider>
                <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={p.id}>
                  <a class="product-item" id={p.id}>
                    <img
                      src={p.image}
                      class="img-fluid product-thumbnail"
                      alt="product"
                    />
                    <h3 class="product-title">{p.name}</h3>
                    <strong class="product-price">{p.price} $</strong>
                    <span class="icon-cross" >
                      <img
                        src={cross}
                        class="img-fluid"
                        onClick={() => addItem(p)}
                        alt="button"
                      />

                    </span>
                  </a>
                </div>
              </CartProvider>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- End Product Section --> */}

      {/* <!-- Start Why Choose Us Section --> */}
      <div class="why-choose-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6">
              <h2 class="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div class="row my-5">
                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={truck} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={bag} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={support} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={Return} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="img-wrap">
                <img src={choose} alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}

      {/* <!-- Start We Help Section --> */}
      <div class="we-help-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="imgs-grid">
                <div class="grid grid-1">
                  <img src={imggrid1} alt="Untree.co" />
                </div>
                <div class="grid grid-2">
                  <img src={imggrid2} alt="Untree.co" />
                </div>
                <div class="grid grid-3">
                  <img src={imggrid3} alt="Untree.co" />
                </div>
              </div>
            </div>
            <div class="col-lg-5 ps-lg-5">
              <h2 class="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>

              <ul class="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p>
                <a herf="#" class="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End We Help Section --> */}

      {/* <!-- Start Popular Product --> */}

      <div class="popular-product">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img src={product1} alt="Image" class="img-fluid" />
                </div>
                <div class="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img src={product2} alt="Image" class="img-fluid" />
                </div>
                <div class="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img src={product3} alt="Image" class="img-fluid" />
                </div>
                <div class="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Popular Product --> */}

      <Testimonial />

      {/* <!-- Start Blog Section --> */}
      <div class="blog-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6">
              <h2 class="section-title">Recent Blog</h2>
            </div>
            <div class="col-md-6 text-start text-md-end">
              <a href="#" class="more">
                View All Posts
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  <img src={post1} alt="Image" class="img-fluid" />
                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 19, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  <img src={post2} alt="Image" class="img-fluid" />
                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  <img src={post3} alt="Image" class="img-fluid" />
                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Blog Section -->	 */}
      <Footer />
    </div>
  );
};

export default Home;

