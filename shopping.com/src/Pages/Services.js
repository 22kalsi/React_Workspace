import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import truck from "../images/truck.svg";
import bag from "../images/bag.svg";
import cross from "../images/cross.svg";
import support from "../images/support.svg";
import Return from "../images/return.svg";
import choose from "../images/why-choose-us-img.jpg";

const Services = () => {
    const Head = 
    {
      "first" : "Services",
      "second": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius",
      "buttons" : false
    }
    return(

<div>

<Header change={Head}/>

{/* <!-- Start Why Choose Us Section --> */}
		<div class="why-choose-section">
			<div class="container">
				
				<div class="row my-5">
					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={truck} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={bag} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={support} alt="Image" class="imf-fluid"/>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={Return} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={truck} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={bag} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={support} alt="Image" class="imf-fluid"/>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={Return} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

				</div>
			
			</div>
		</div>
		{/* <!-- End Why Choose Us Section --> */}

<Footer/>

</div>

    )

}

export default Services