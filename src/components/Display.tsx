type key = number;
type SegmentMap = Record<key, boolean[]>;

const segmentMap: SegmentMap = {
  0: [true, true, true, true, true, true, false],
  1: [false, true, true, false, false, false, false],
  2: [true, true, false, true, true, false, true],
  3: [true, true, true, true, false, false, true],
  4: [false, true, true, false, false, true, true],
  5: [true, false, true, true, false, true, true],
  6: [true, false, true, true, true, true, true],
  7: [true, true, true, false, false, false, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, true],
};

function Display({ digit }: { digit: string }) {
  const segments = segmentMap[Number(digit)] ?? [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  return (
    <div className="seven-segment-display">
      <div className={`segment a ${segments[0] ? "on" : "off"}`}></div>
      <div className={`segment b ${segments[1] ? "on" : "off"}`}></div>
      <div className={`segment c ${segments[2] ? "on" : "off"}`}></div>
      <div className={`segment d ${segments[3] ? "on" : "off"}`}></div>
      <div className={`segment e ${segments[4] ? "on" : "off"}`}></div>
      <div className={`segment f ${segments[5] ? "on" : "off"}`}></div>
      <div className={`segment g ${segments[6] ? "on" : "off"}`}></div>
    </div>
  );
}

export default Display;
