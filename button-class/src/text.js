import React from "react";
import { useEffect, useState } from "react";

const Text = ({change}) => {

const [text, setText] = useState("Hello Sir")
const run = (  ) => {

    change(text)

}

// useEffect( run, 10 )

return(

    <button onClick = { run } >Change</button>

)
}

export default Text