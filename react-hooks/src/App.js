import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        This button has been clicked {counter} times
      </button>
      <div
        onClick={() => setIsOn(!isOn)}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: isOn ? "yellow" : "black",
        }}
      ></div>
    </>
  );
}

export default App;
