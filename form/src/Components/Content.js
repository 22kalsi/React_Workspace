import React from "react";
import "./content.css";
import RegForm from "./Form";
import SideNav from "./SideNav";

const Content = () => {
    return(
<div>
  <div class="content">
  <div class="row">
  <div class="side">
  <div class="sidenav">
    <SideNav />
    </div>
  </div>
  <div class="main">
   <RegForm />
  </div>
</div>
</div>
</div>
    );
};


export default Content;