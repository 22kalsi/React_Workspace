import React from "react";
import Calculator from "../src/Components/Calculator";
import Header from "../src/Initials/Header";

const App = () => {
  return (
    <div>
      <div id="wrapper">
        <div id="headerwrap">
          <div id="header">
            <Header />
          </div>
        </div>
        <div id="navigationwrap">
          <div id="navigation">
            <p>This is the Menu</p>
          </div>
        </div>
        <div id="contentliquid">
          <div id="contentwrap">
            <div id="content">
              <Calculator />
            </div>
          </div>
        </div>
        <div id="leftcolumnwrap">
          <div id="leftcolumn">
            <p>
              Sed non quam. In vel mi sit amet augue congue elementum. Morbi in
              ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra
              nec, blandit vel, egestas et, augue. Vestibulum tincidunt
              malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
              mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
              facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
              aliquet risus a tortor. Integer id quam.{" "}
            </p>
          </div>
        </div>
        <div id="footerwrap">
          <div id="footer">
            <p>This is the Footer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
