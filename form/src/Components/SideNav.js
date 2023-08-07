import React from "react";
import "./sideNav.css";

let SideNav = () => {
<div>
<div class="sidenav">
<div class="tab">
  <button class="tablinks" onmouseover="openCity(event, 'London')">London</button>
  <button class="tablinks" onmouseover="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onmouseover="openCity(event, 'Tokyo')">Tokyo</button>
</div>
</div>
</div>
}

export default SideNav; 