import { useEffect, useState } from "react";
import SevenSegmentDisplay from "./SevenSegmentDisplay";

const clock = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const time = `${hour}${minutes}${seconds}`;

  return time;
};

function Reloj() {
  const [time, setTime] = useState<number>(Number(clock()));

  useEffect(() => {
    setInterval(() => {
      setTime(Number(clock()));
    }, 1000);
  }, []);

  // clock();

  return (
    <div className="App">
      <SevenSegmentDisplay digit={time} />
    </div>
  );
}

export default Reloj;
