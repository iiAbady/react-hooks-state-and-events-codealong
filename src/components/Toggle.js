import React, {useState} from "react";

function Toggle() {
  const [IsOn,setIsOn] = useState(false)
function handleClick () {
  setIsOn ((IsOn) => !IsOn)
}
const color = IsOn ? "red" : "white";
  return <button style={{ background: color }} onClick={handleClick}>{IsOn ? "ON" : "OFF"}</button>;
}

export default Toggle;