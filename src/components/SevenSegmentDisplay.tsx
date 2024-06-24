import Display from "./Display";

function SevenSegmentDisplay({ digit }: { digit: number }) {
  const number = digit.toString().split("");

  return (
    <div className="App">
      {/* This is for scalability  */}
      {number.map((number, i) => (
        <Display digit={number} key={i} />
      ))}
    </div>
  );
}

export default SevenSegmentDisplay;
