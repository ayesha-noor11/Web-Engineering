import React from "react";
import Rectangle from "./Reactangle";
import Square from "./Square";
import Circle from "./Circle";

export default function ShapeContainer() {
  return (
    <React.Fragment>
      <div>
        this one too ShapeContainer
        <div className="container">
          <Rectangle />
          <Square size={200} />
          <Square color="blue" />

          <Circle />
          <Circle color="violet" size={50} />
        </div>
      </div>
      <div> this one </div>
    </React.Fragment>
  );
}
