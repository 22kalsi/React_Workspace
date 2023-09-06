import { tns } from "tiny-slider";
import person1 from "../images/person-1.png";
import { useEffect } from "react";


const Testimonial = () => 
{
  

    useEffect(() => {   

      tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: false,
        speed: 700,
        nav: true,
        // animateIn: "jello",
        // animateOut: "rollOut",
        controls: true,
        autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,     
      });

        var sitePlusMinus = function () {
            var value,
              quantity = document.getElementsByClassName("quantity-container");
    
            function createBindings(quantityContainer) {
              var quantityAmount =
                quantityContainer.getElementsByClassName("quantity-amount")[0];
              var increase =
                quantityContainer.getElementsByClassName("increase")[0];
              var decrease =
                quantityContainer.getElementsByClassName("decrease")[0];
              increase.addEventListener("click", function (e) {
                increaseValue(e, quantityAmount);
              });
              decrease.addEventListener("click", function (e) {
                decreaseValue(e, quantityAmount);
              });
            }
    
            function init() {
              for (var i = 0; i < quantity.length; i++) {
                createBindings(quantity[i]);
              }
            }
    
            function increaseValue(event, quantityAmount) {
              value = parseInt(quantityAmount.value, 10);
    
              console.log(quantityAmount, quantityAmount.value);
    
              value = isNaN(value) ? 0 : value;
              value++;
              quantityAmount.value = value;
            }
    
            function decreaseValue(event, quantityAmount) {
              value = parseInt(quantityAmount.value, 10);
    
              value = isNaN(value) ? 0 : value;
              if (value > 0) value--;
    
              quantityAmount.value = value;
            }
    
            init();
          };
          
        // tinyslider();
        sitePlusMinus();
      }, []);
      
return(


      <div class="testimonial-section" >
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto text-center">
              <h2 class="section-title">Testimonials</h2>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span class="prev" data-controls="prev">
                    <span class="fa fa-chevron-left"></span>
                  </span>
                  <span class="next" data-controls="next">
                    <span class="fa fa-chevron-right"></span>
                  </span>
                </div>

                <div class="testimonial-slider">
                  <div class="item">
                    <div class="row justify-content-center">
                      <div class="col-lg-8 mx-auto">
                        <div class="testimonial-block text-center">
                          <blockquote class="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div class="author-info">
                            <div class="author-pic">
                              <img
                                src={person1}
                                alt="Maria Jones"
                                class="img-fluid"
                              />
                            </div>
                            <h3 class="font-weight-bold">Maria Jones</h3>
                            <span class="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END item --> */}

                  <div class="item">
                    <div class="row justify-content-center">
                      <div class="col-lg-8 mx-auto">
                        <div class="testimonial-block text-center">
                          <blockquote class="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div class="author-info">
                            <div class="author-pic">
                              <img
                                src={person1}
                                alt="Maria Jones"
                                class="img-fluid"
                              />
                            </div>
                            <h3 class="font-weight-bold">Maria Jones</h3>
                            <span class="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END item --> */}

                  <div class="item">
                    <div class="row justify-content-center">
                      <div class="col-lg-8 mx-auto">
                        <div class="testimonial-block text-center">
                          <blockquote class="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div class="author-info">
                            <div class="author-pic">
                              <img
                                src={person1}
                                alt="Maria Jones"
                                class="img-fluid"
                              />
                            </div>
                            <h3 class="font-weight-bold">Maria Jones</h3>
                            <span class="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END item --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


)

}

export default Testimonial