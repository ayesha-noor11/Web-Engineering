import React, { useState } from "react";
//import { UsersWithImages } from "../Users";
//import Posts from "../posts";
//import Home from "../Home";

const states = {
  state1: "state1",
  state2: "state2",
  state3: "state3",
};
export default function Game() {
  const [currentState, setCurrentState] = useState(states.state1);
  return (
    <div>
      <div>{JSON.stringify(currentState)}</div>
      <div>
        {Object.keys(states).map((item) => (
          <button
            onClick={() => {
              setCurrentState(states[item]);
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div>
        {currentPage === states.state1 && <state1 />}
        {currentPage === states.state2 && <state2 />}
        {currentPage === states.state3 && <state3 />}
      </div>
    </div>
  );
}
