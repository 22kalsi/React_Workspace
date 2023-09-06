import Home from "./Pages/Home";
import { CartProvider, useCart } from "react-use-cart";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About"
import Services from "./Pages/Services"
import Blogs from "./Pages/Blogs"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css"
import "../src/css/tiny-slider.css"

function App() {
  return (
    <CartProvider>
      <Router >
        <Routes >
          <Route activeClassName="active" exact path="/" element={<Home />}></Route>
          <Route activeClassName="active" exact path="/shop" element={<Shop />}></Route>
          <Route activeClassName="active" exact path='/about' element={< About />}></Route>
          <Route activeClassName="active" exact path='/services' element={< Services />}></Route>
          <Route activeClassName="active" exact path='/blogs' element={< Blogs />}></Route>
          <Route activeClassName="active" exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
