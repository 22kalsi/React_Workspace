import logo from './logo.svg';
import './App.css';
import Try from "./Component/Try"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"

        >
          <p>useState, Counter, First Lesson</p>
          <p>Click To Increment</p>
        </a>

        <Try />

      </header>
    </div>
  );
}

export default App;
