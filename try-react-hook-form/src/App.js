import React from "react";
import "./App.css";
import Form from "./Component/Form";
import Header from "./Component/Header";
import Fetch from "./Component/fetch";
import Remove from './Component/Remove'
import Clear from '../src/Component/ClearAll'
function App() {
  return (
    <div>
      <Header />
      <div className="grid-container main">
      <div style={{overflow:"scroll"}}><Form/></div>
  <div style={{overflow:"scroll"}}><Fetch /></div>
  <div><Remove /></div>  
  <div><Clear /></div>
      </div>
    </div>
  );
}

export default App;
