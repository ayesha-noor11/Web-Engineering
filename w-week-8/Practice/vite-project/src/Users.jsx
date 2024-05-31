import { useState } from "react";
import "./users.css";
import "./posts.css";

import { faker } from "@faker-js/faker";

const Users = () => {
  const [users, setUsers] = useState([
    "Zack",
    "Phill",
    "Tony",
    "Loki",
    "Sylvie",
    "Nat",
    "Thor",
  ]);
  return (
    <>
      <h1> users</h1>
      {/* {JSON.stringify(faker.person.firstName())} */}
      <input placeholder="friend name" />
      <button
        onClick={() => {
          // setUsers([faker.animal.bear()]);
          // good
          setUsers((prev) => [...prev, faker.animal.bear()]);
          // bad
          // setUsers([...users, faker.animal.bear()]);
        }}
      >
        {" "}
        Add{" "}
      </button>
      {users.map((user) => (
        <h3> {user}</h3>
      ))}
    </>
  );
};
export default Users;
export const UsersWithImages = () => {
  const [users, setUsersData] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((apiResult) => apiResult.json())
      .then((data) => setUsersData([...users, ...data]));
  };
  return (
    <>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        {" "}
        Fetch Data
      </button>
      <h2>Users with images{users.length} </h2>
      <div className="container">
        {users
          // .filter(
          //   (user) =>
          //     user.username.startsWith("z") || user.username.startsWith("Z")
          // )
          ?.map((user) => (
            // way to pass the data
            <User username={user.username} email={user.email} />
          ))}
      </div>
    </>
  );
};

// Props : used to pass data from parent to child component
export const User = ({ username, email }) => {
  return (
    <div className="user" style={{ backgroundColor: "ButtonFace" }}>
      <img
        src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${username}`}
        alt=""
      />
      <div>
        <span style={{ fontWeight: "bold" }}> {username}</span>
        <span> {email}</span>
      </div>
    </div>
  );
};
