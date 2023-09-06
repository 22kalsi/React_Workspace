import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import Testimonial from "../Elements/Testimonial";

const About = () => {
    const Head = 
    {
      "first" : "About Us",
      "second": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius",
      "buttons" : true,
      "img" : 1
    }

    return(

<div>

<Header change={Head}/>
<Testimonial/>
<Footer/>

</div>

    )

}

export default About