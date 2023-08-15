import ReactDOM from "react-dom/client";
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout';
import PageOne from './Pages/page1'
import PageTwo from './Pages/page2'
import PageThree from './Pages/page3'
import Home from "./Pages/Home";
const App = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="1" element={<PageOne />} />
            <Route path="2" element={<PageTwo />} />
            <Route path="3" element={<PageThree />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );

}

export default App