import React, { useState, useEffect } from 'react'

// const UseState = () => {

//   const [count, setCount] = useState(0)
//   // useEffect(() => localStorage.setItem("count", JSON.stringify(...count)), [count])
//     const increment = (times) => {
//       setCount(count + times)
//     }
//     {console.log(count)}
//   return (
//     <div>
//     <button onClick={() => increment(1)}>add + 1</button>
//     <button onClick={() => increment(3)}>add + 3</button>
//     {count}
//     </div>
//   )

// }

const UseState = () => {

  const [count, setCount] = useState(0)
  // useEffect(() => localStorage.setItem("count", JSON.stringify(...count)), [count])
    console.log(count)
  return (
    <div>
    <button onClick={() => setCount(count + 1)}>add + 1</button>
    <button onClick={() => setCount(count + 3)}>add + 3</button>
    {count}
    </div>
  )

}

export default UseState