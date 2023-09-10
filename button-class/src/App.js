import React from "react";
import './App.css'
import { useState, useEffect } from "react";
import Text from './text'
 const App = () =>  {

const [ greet, setGreet ] = useState(["HI"]);

const func = ( x ) => {
  // const text = "Hello Ji!"
  setGreet([...greet, x])

  localStorage.setItem(1, [...greet, JSON.stringify(x)])

}

const Remove = () => {

setGreet(greet.id !== 1)

}

console.log(greet)

    return (
      <div>
        <ol>{greet.map((g) => <li>{g}</li>)}</ol>
        <button onClick={Remove}>remove</button>
        <Text  change = {func} />
      </div>
    );
  
}

export default App