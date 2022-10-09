import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mouseloc, setMouseLoc] = useState({ y: null, x: null });
  useEffect(() => {
    document.title = `Click this many tmes ${counter}`;
    window.addEventListener("mousemove", handlemousemove);
    return () => {
      window.removeEventListener("mousemove", handlemousemove);
    };
  });
  function handlemousemove(e) {
    setMouseLoc({ y: e.clientY, x: e.clientX });
  }
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
      <div>X:{mouseloc.x}</div>
      <div>y:{mouseloc.y}</div>
    </>
  );
}

export default App;
