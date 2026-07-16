import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counterSlice";
import React, { useState } from "react";

const Counter = () => {
  const [amount, setAmount] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <button onClick={() => dispatch(increment())} className="mr-2">
        +
      </button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
    </div>
  );
};

export default Counter;
