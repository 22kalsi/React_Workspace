import React from 'react'
// import resume from '../../public/Gursewak_Fresher_FullStack.pdf'
import profile from '../assets/img/profile.jpg'
import "../css/styles.css"
const Header = () => {

     // Function will execute on click of button
     const onButtonClick = () => {
// alert("clicked");
    <a
        href= "/Gursewak_Fresher_FullStack.pdf"
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
    >

    </a>
      
    }

return(

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Gursewak Singh</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" onClick={onButtonClick}>Download file</a></li>
                </ul>
            </div>
        </nav>

)

}

export default Header