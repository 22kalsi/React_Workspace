import React from 'react'
import resume from '../../src/Resume_1yr_Engr.pdf'
import profile from '../assets/img/profile.jpg'
import "../css/styles.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect } from 'react';

const Header = () => {

     // Function will execute on click of button
     const onButtonClick = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // file inside public folder
  link.download = "Gursewak_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};




return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Gursewak Singh</span>
                <span className="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" onClick={onButtonClick}>Download file</a></li>
                </ul>
            </div>
        </nav>

)

}

export default Header