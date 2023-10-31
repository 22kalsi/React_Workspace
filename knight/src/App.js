import './assets/css/style.css';
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import Header from "./Component.js/Header";
import Hero from "./Component.js/Hero";
import AboutUs from "./Component.js/AboutUs";
import AOS from "aos";
import '../src/assets/js/main.js'

function App() {
  AOS.init();
  return (
    <div className="App">
      <Hero />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
