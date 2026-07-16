import React from "react";
import Contact from "./contacts";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";

const body = () => {
  return (
    <div class="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Counter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default body;
