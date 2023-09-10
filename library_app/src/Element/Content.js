import React, { useEffect } from "react";
import "../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import boy from "../../src/anim/boy.json";
import box from "../../src/anim/box.json";
import Lottie from "lottie-web";
import Head from "./Header";
// import Profile from "./Header";
// import confetti from "../../src/anim/Ribbon_Confetti.json"
import AnimationLottie from "./Timeline";
import HorizontalTimeline from "./Timeline";

const Content = () => {
  React.useEffect(() => {
    Lottie.destroy();
    Lottie.loadAnimation({
      container: document.getElementById("boy"),
      animationData: boy,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
      });
    Lottie.loadAnimation({
        container: document.getElementById("5"),
        animationData: box,
        renderer: "svg", // "canvas", "html"
        loop: true, // boolean
        autoplay: true, // boolean
      });
  }, []);

  return (
    <>
      <Container
        fluid
        id="1"
        style={{ height: "100vh", backgroundColor: "#3b3a30" }}
      >
        <Row>
          <Col
            xs={6}
            md={4}
            style={{
              height: "80vh",
              color: "#f1f1f1",
              margin: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 >The Library</h1>
            Bad libraries build collections, good libraries build services,
            great libraries build communities.
            <Button href="#2">Continue</Button>
          </Col>
          <Col xs={12} md={8} id="boy" style={{ height: "80vh" }}>
            sm = 8
          </Col>
        </Row>
      </Container>

      <Container
        id="2"
        className="2"
        fluid
        style={{
          height: "100vh",
          padding: "0",
          backgroundColor: "#a2836e",
        }}
      >
        <Head heading={"Profile"} />
        <Row>
          <Col
            xs={12}
            md={8}
            style={{
              color: "#e1e1e1",
              margin: "auto",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          ></Col>
          <Col
            xs={6}
            md={4}
            style={{ height: "80vh", justifyContent: "space-around" }}
          >
            <h1 className="font-effect-emboss">Profile</h1>
            Bad libraries build collections, good libraries build services,
            great libraries build communities.
          </Col>
        </Row>
      </Container>
      <Head heading={"Projects"} />
      <Container
        fluid
        id="3"
        style={{ height: "100vh", padding: "0", backgroundColor: "#e0e2e4" }}
      ></Container>
      <Head heading={"Education"} href={"#1"} />
      <Container
        fluid
        id="4"
        style={{ height: "100vh", padding: "0", backgroundColor: "#b7d7e8" }}
      >
       <div
       style={{ height: "400px", paddingTop: "100px", position: "relative" }}>
       <HorizontalTimeline/>
        </div> 
      </Container>
      <Head heading={"Contact"} />
      <Container
        fluid
        id="5"
        style={{ height: "100vh", padding: "0", margin: "0", backgroundColor: "#588c7e" }}
      >
        {/* <div id="box" ></div> */}
      </Container>
    </>
  );
};

export default Content;
