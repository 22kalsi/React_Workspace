import img from '../src/img/profile.jpg'
import '../src/resume.css'
import "../src/resume.min.css"
import "devicon/devicon.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
function App() {
     // Function will execute on click of button
     const onButtonClick = () => {
  const link = document.createElement("a");
  link.href = "Resume_1yr_Engr.pdf"; // file inside public folder
  link.download = "Gursewak_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Portfolio</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={img} alt=""></img>
        </span>
      </a>
      <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" onClick={onButtonClick}>Download Resume</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">Gursewak
            <span class="text-primary">Singh</span>
          </h1>
          <div class="subheading mb-5">WZ216, shivnagar, New Delhi (110058) ·
            <a href="mailto:22kalsi@gmail.com">22kalsi@gmail.com</a>
          </div>
          <p class="mb-5">I am a motivated and dedicated Engineer with 2 years of professional experience in technical support, troubleshooting, and customer service. Along with my industry experience, I have a strong interest in software development and enjoy building modern, user-friendly applications.

My technical skill set includes C++, Java, React.js, and PostgreSQL. I have experience developing responsive web applications, working with databases, and writing clean, efficient code. I am passionate about learning new technologies, solving complex problems, and continuously improving my technical expertise.

I am a quick learner, a team player, and committed to delivering high-quality solutions. I am always eager to take on new challenges and contribute to innovative projects while expanding my knowledge and skills.</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li class="list-inline-item">
              <a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="list-inline-item">
              <a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="list-inline-item">
              <a class="social-icon" href="https://github.com/22kalsi"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Service Engineer</h3>
              <div class="subheading mb-3">Boshion Service pvt. ltd., Ludhiana</div>
              <p>
                <ul>
                                <li>Handled daily customer interactions, resolving queries and improving customer satisfaction</li>
                                <li>Explained product features, repairs, and solutions clearly to customers, building trust</li>
                                <li>Converted dissatisfied customers into satisfied users through effective communication</li>
                                <li>Assisted in recommending product upgrades and accessories, supporting sales</li>
                                <li>Maintained service quality standards and ensured timely issue resolution</li>
                                <li>Worked closely with team members to manage high customer flow efficiently</li>
                                <li>Delivered exceptional performance by achieving ₹1 lakh+ revenue in a single day through display replacements and service solutions</li>
                            </ul>
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">April 2025 - june 2026</span>
            </div>
          </div>

<div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">District Rollout Manager </h3>
              <div class="subheading mb-3">Stepforadder Technologies Pvt Ltd, Noida</div>
              <p>
                <ul>
                                <li>My role was to help stakeholders provide information related to the project. </li>
                                </ul>
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">April 2025 - june 2026</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Senior Devops Intern</h3>
              <div class="subheading mb-3">Keen And Able Computers Pvt. Ltd., Noida</div>
              <p>
                 <ul>
                                <li>Had worked on Quarkus Framework made a basic CRUD performing APIs.</li>
                                <li>Had worked on React Framework and designed a form for the National scholarship web portal which was a part of an internal project.</li>
                                <li>Had gained knowledge on basic working of Docker.</li>
                            </ul>
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">July 2022 - Nov 2022</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">BRL, Gaya, Bihar, India</h3>
              <div class="subheading mb-3">Assistant Manager</div>
              <p>
                <ul>
                                <li>Brand Acquisition: Contributed to expanding the customer base through a positive service experience.</li>
                                <li>Revenue Generation: Assisted in achieving monthly revenue targets through customer engagement</li>
                                <li>Pipeline Management: Maintained records of customer interactions to ensure timely follow-ups and closures.</li>
                                <li>Market Expansion: Helped attract new customer segments through effective communication and service experience.</li>
                                <li>Lead Management: Maintained service quality standards and ensured timely issue resolution. Worked closely with team members to manage high customer flow efficiently.</li>
                                <li>Closing deals worth INR 3.2 crore while optimising partner ROI</li>
                            </ul>
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">December 2017 - March 2022</span>
            </div>
          </div>

       

        </div>

      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Rayat And Bahara College, Mohali </h3>
              <div class="subheading mb-3">B.Tech (P.T.U)</div>
              <div>Electronic and Computer Science</div>
              {/* <p>GPA: 3.23</p> */}
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">D.P.S Secondary Public School, Gaya</h3>
              <div class="subheading mb-3">12th (B.S.E.B)</div>
              <div>Higher secondary</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2011</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">D.A.V Public School, Gaya</h3>
              <div class="subheading mb-3">10th (C.B.S.E)</div>
              <div>High school</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2008</span>
            </div>
          </div>

        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i className="devicon-html5-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-css-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-javascript-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-jquery-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-github-original"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-java-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-bootstrap-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-wordpress-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-cplusplus-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-docker-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-npm-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-mongodb-plain"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-mysql-original"></i>
            </li>
            <li class="list-inline-item">
              <i className="devicon-react-original"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-ubuntu-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-vscode-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-windows11-original"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-postgresql-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-photoshop-plain"></i>
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design</li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging</li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>
            <ul><li>Technology and mobile innovation</li>
<li>Technical troubleshooting</li>
<li>Continuous learning and skill development</li>
<li>Teamwork and collaboration</li>
<li>Cricket and music</li></ul>
          </p>
        </div>
      </section>

  

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <div class="my-auto">
          <h2 class="mb-5">Projects &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <a href="https://shoppingdotcomm.netlify.app/"><i class="fa-solid fa-diagram-project"></i>
              shoppingdotccom</a>
            </li>
             <li>
              <a href="https://github.com/22kalsi/Arduino_Workspace/tree/main/LDR_%20Controller/LDR_Controller_0.1"><i class="fa-solid fa-diagram-project"></i>
               LDR Based Switch </a>
            </li>
            <li>
              <a href="https://github.com/22kalsi/Arduino_Workspace/tree/main/Final_esp32_waterTank_Gaya-20230109T022603Z-001"><i class="fa-solid fa-diagram-project"></i>
               Water Level Indicator </a>
            </li>
          </ul>
        </div>
      </section>
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Got the Rising Star Award at Boshion Services Pvt Ltd. 
            </li>
             
          </ul>
        </div>
      </section>
    </div>

 {/* <!-- Bootstrap core JavaScript --> */}
    <script src="src\vendor\bootstrap-4.0.0-dist\js\bootstrap.bundle.min.js"></script>
    <script src="src\vendor\jquery\jquery.min.js"></script>

    {/* <!-- Plugin JavaScript --> */}
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
 

    </div>
  );
}

export default App;
