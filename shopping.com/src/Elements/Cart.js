import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Nav } from "react-bootstrap";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import html2canvas from "html2canvas";
// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
import { jsPDF } from "jspdf";
// import Barcode from "./barcode.png";
function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
  } = useCart();

  const list = [
    {
      coupon: "hello20",
      disc: 20,
    },
    {
      coupon: "happy30",
      disc: 30,
    },
  ];
  // const [coupon, setCoupon] = useState(list);
  const [input, setInput] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalBill = cartTotal + discount;
  const gst = totalBill * 0.18;
  const finalBill = totalBill + gst;
  //   const handleSubmission = (e) => {
  //     e.preventDefault();
  //     setCoupon(e.target.value)
  // alert(coupon)
  //     if (e.target.value == "hello20") {
  //       alert("coupon applied");
  //       setInput(e.target.value);
  //     } else {
  //       alert("Invalid Coupon");
  //     }
  //   };
  console.log(input);
  const handleChange = (e) => {
    e.preventDefault();
    list.map((k) => {
      if (k.coupon === input) {
        setDiscount((-cartTotal * k.disc) / 100);
        document.getElementById("disc").style.color = "red";
        return alert("coupon applied");
      }
    });
    // if (input == "hello20") {

    //       } else {
    //         if(input.length < 5){

    //         } else {
    //         alert("Invalid Coupon");
    //         setDiscount(0)
    //         }
    //       }
  };

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      {/* <div className="untree_co-section before-footer-section"> */}
      <div className="container" id="pdf">
      <nav className="navbar-brand">
            shopping.com<span>.</span>
          </nav>
        <div className="row mb-5" >

          <form className="col-md-12">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="product-thumbnail">
                        <img
                          src={item.image}
                          alt="Image"
                          className="img-fluid"
                        />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">{item.name}</h2>
                      </td>
                      <td>
                        <h6>$ {item.price}</h6>
                      </td>
                      <td>
                        <div
                          className="input-group mb-3 d-flex align-items-center quantity-container"
                          style={{ maxWidth: "120px" }}
                        >
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-black decrease"
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <h6>-</h6>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control text-center quantity-amount"
                            value={item.quantity}
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                          >
                            {}
                          </input>
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-black increase"
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <h6>+</h6>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6>$ {item.price * item.quantity}</h6>
                      </td>
                      <td>
                        <button
                          className="btn btn-black btn-sm"
                          onClick={() => removeItem(item.id)}
                        >
                          <h6>X</h6>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">

              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block">
                  Continue Shopping
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" for="coupon">
                  Coupon
                </label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <form onSubmit={handleChange}>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control py-3"
                    id="coupons"
                    name="coupons"
                    placeholder="Try hello20 or happy30"
                    value={input}
                    onChange={(data) => setInput(data.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-black"
                    type="submit"
                    value="Submit"
                  >
                    Apply Coupon
                  </button>
                  <a
                    onClick={() => {
                      setDiscount(0);
                    }}
                  >
                    Remove Coupon
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Cart Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">
                      $ {cartTotal}
                    </strong>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Discount</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black" id="disc">
                      $ {discount}
                    </strong>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">G.S.T 18%</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">$ {gst}</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">
                      $ {finalBill}
                    </strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-black btn-lg py-3 btn-block">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-black btn-sm btn-block" onClick={() => {createPDF()}}>
                  Downlod PDF
                </button>
              </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Cart;

const createPDF = async () => {   
  const pdf = new jsPDF("portrait", "pt", "a4"); 
  const data = await html2canvas(document.querySelector("#pdf"));
  const img = data.toDataURL("image/png");  
  const imgProperties = pdf.getImageProperties(img);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("estimate.pdf");
};