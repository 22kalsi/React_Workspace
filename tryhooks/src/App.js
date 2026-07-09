import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

const add1 =()=>
  setCount(count+1)

  return (
    <div>
      <button type="button"
        onClick={add1}>Add 1</button>
        <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
