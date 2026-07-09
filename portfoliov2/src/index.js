import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/resume.css'
import "../src/resume.min.css"
import "devicon/devicon.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../src/vendor/bootstrap-4.0.0-dist/css/bootstrap.min.css'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as bootstrap from "bootstrap";
// import { Navbar, Nav, Container } from 'react-bootstrap';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
