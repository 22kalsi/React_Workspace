import React from 'react'
import '../assets/css/style.css'
import logo from '../assets/img/hero-logo.png'

const Hero = () => {
    
  return (
    // <!-- ======= Hero Section ======= -->
    <section id="hero">
      <div class="hero-container">
        <a href="index.html" class="hero-logo" data-aos="zoom-in"><img src={logo} alt=""/></a>
        <h1 data-aos="zoom-in">Welcome To Knight Studios</h1>
        <h2 data-aos="fade-up">We are team of talented designers making websites with Bootstrap</h2>
        <a data-aos="fade-up" data-aos-delay="200" href="#about" class="btn-get-started scrollto">Get Started</a>
      </div>
    </section>
    /* <!-- End Hero --> */
  )
}

export default Hero