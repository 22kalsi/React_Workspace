import Header from "../src/Component/Header"
import Content from "../src/Component/Content"
// import '../src/js/bootstrap-4.0.0-dist/css/bootstrap.css'
import "../src/css/styles.css"
import './App.css';
// import { ScrollSpy } from "bootstrap";
import * as bootstrap from "bootstrap";

function App() {

window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
  target: "#sideNav",
  rootMargin: "0px 0px -40%",
});
  }



});

  return (
<div id="page-top">
<Header/>
<Content/>
</div>
  );
}

export default App;

