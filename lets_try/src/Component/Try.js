import react, { useState } from "react";

const Try = () => {
  const c = 0;
  const cList = [ "Gursewak Singh", "Amandeep Kaur"]
                
  const [count, setCount] = useState(0);

  const countIncrement = () => {
    
    if ((cList[count] === "END OF LIST")) {
        setCount(0);
    } else {
        setCount(count + 1);
    }

  };

  const countReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>
        <h2>{count}</h2>
      </p>
      <button type="button" onClick={countIncrement}>
        Increment
      </button>
      <button type="button" onClick={countReset}>
        Reset
      </button>

      <p>

        <h2>{cList[count]}</h2>
      </p>
    </div>
  );
};

export default Try;
