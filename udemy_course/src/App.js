import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import List from "./Logic/List";
import { recipes } from "./Data";
import UseState from "./Topics/UseState";
import Axios from "./Topics/Axios";
import ReduxToolkit from './Redux/ReduxToolkit'
import { incremented, decremented } from './Redux/ReduxToolkit'
function App() {
// Can still subscribe to the store
switch (List) {
  case "list":
    
    break;

  default:
    return(<div><button onClick={incremented}>Increment</button><br/><button onClick={decremented}>Decrement</button></div>)
    break;
}

}

export default App;
