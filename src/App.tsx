import { useState } from "react";
import "./App.css";
import SevenSegmentDisplay from "./components/SevenSegmentDisplay";
import Reloj from "./components/Reloj";

function App() {
  const [count, setCount] = useState(0);

  function onAddQuantity() {
    setCount(count + 1);
  }

  return (
    <>
      <section>
        <SevenSegmentDisplay digit={count} />
        <button onClick={onAddQuantity}>+1</button>
      </section>
      {/* This is the reloj */}
      {/* <Reloj /> */}
    </>
  );
}

export default App;
