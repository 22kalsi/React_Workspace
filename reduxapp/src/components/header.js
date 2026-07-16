import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div class="sidenav">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Counter</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default header;
