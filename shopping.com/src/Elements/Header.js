import React from "react";
import couch from "../images/couch.png";
import user from "../images/user.svg";
import { useCart } from "react-use-cart";
import { HashRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = ({change}) => {
  const link = "index.html";

   //assigning location variable
   const location = useLocation();

   //destructuring pathname from location
   const { pathname } = location;

   //Javascript split method to get the name of the path in array
   const splitLocation = pathname.split("/");

  return (
    <div>

      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            shopping.com<span>.</span>
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item" classNameName={splitLocation[1] === "" ? "active" : ""}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li classNameName={splitLocation[1] === "shop" ? "active" : ""}>
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li classNameName={splitLocation[1] === "about" ? "active" : ""}>
              <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li classNameName={splitLocation[1] === "services" ? "active" : ""}>
              <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li classNameName={splitLocation[1] === "blogs" ? "active" : ""}>
              <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li classNameName={splitLocation[1] === "contact" ? "active" : ""}>
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link">
                  <img src={user} alt="user" />
                </a>
              </li>
              <li>
                <a className="nav-link">
                <Popup  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                {change.first}
                  {/* Modern Interior <span clsas="d-block">Design Studio</span> */}
                </h1>
                <p className="mb-4">
                  {change.second}
                </p>
                {change.buttons ?(<p>
                  <a  className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a  className="btn btn-white-outline">
                    Explore
                  </a>
                </p>):(<></>)}
                
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couch} className="img-fluid" alt="couch" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}
    </div>
  );
};

export default Header;
