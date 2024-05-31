import React, { useState } from "react";
import { User } from "../Users";

export default function UsersDynamic() {
  const [users, setUsersData] = useState([]);
  
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((apiResult) => apiResult.json())
      .then((data) => {
        const fewUsers = data.slice(0, 4);
        setUsersData((prev) => [...prev, ...fewUsers]);
        // setUsersData([...users, ...data]);
      });
  };
  return (
    <div style={{ width: "50%" }}>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        {" "}
        show more
      </button>
      <h2>Users {users.length} </h2>
      <div className="container">
        {users?.map((user) => (
          // way to pass the data
          <User username={user.username} email={user.email} />
        ))}
      </div>
    </div>
  );
}
