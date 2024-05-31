import UsersDynamic from "./components/UsersDynamic";

const User = () => {
  return (
    <>
      <div>Users</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <UsersDynamic  />
      </div>
    </>
  );
};

export default Home;
