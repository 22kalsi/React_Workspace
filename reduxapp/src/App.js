import "./App.css";
import Body from "./components/body";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Body/>
      </BrowserRouter>
    </div>
  );
}

export default App;
