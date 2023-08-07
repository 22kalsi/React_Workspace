import React from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Modal from "./Component/Modal";

function App() {
  return (
    <div>
      <Modal />
      <div class="row">
        <NavBar />
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div>Left_Tab</div>
          </div>
          <div class="col-6">
            <div>Body</div>
          </div>
          <div class="col">
            <div>Right_Tab</div>
          </div>
        </div>
      </div>
      <div class="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
