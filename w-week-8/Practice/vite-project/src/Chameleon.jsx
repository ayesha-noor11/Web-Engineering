import { useState } from "react";
import "./chameleon.css";
import Circle from "./Circle";
const colors = {
  green: "green",
  blue: "blue",
  aqua: "aqua",
  red: "red",
};
const Chameleon = () => {
  const [color, setColor] = useState(colors.red);
  return (
    <div>
      <div className="buttonArea">
        <button
          style={{ backgroundColor: colors.aqua }}
          onClick={() => {
            setColor(colors.aqua);
          }}
        >
          Aqua
        </button>
        <button
          onClick={() => {
            setColor(colors.red);
          }}
          style={{ backgroundColor: colors.red }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor(colors.green);
          }}
          style={{ backgroundColor: colors.green }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor(colors.blue);
          }}
          style={{ backgroundColor: colors.blue }}
        >
          Blue
        </button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <Circle color={color} />
      </div>
    </div>
  );
};
export default Chameleon;
