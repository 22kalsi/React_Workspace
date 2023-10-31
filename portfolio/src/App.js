import Header from "../src/Component/Header"
import Content from "../src/Component/Content"
// import '../src/js/bootstrap-4.0.0-dist/css/bootstrap.css'
import "../src/css/styles.css"
import './App.css';
import { ScrollSpy } from "bootstrap";

function App() {
  return (
<div id="page-top">
<Header/>
<Content/>
</div>
  );
}

export default App;

window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
      new ScrollSpy(document.body, {
          target: '#sideNav',
          rootMargin: '0px 0px -40%',
      });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});