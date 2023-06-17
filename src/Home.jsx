import React from "react";
import useFetch from "./useFetch";
import UserCard from "./assets/UserCard";

const Home = () => {
  // fetching theh data
  const {
    data: users,
    loading,
    error,
  } = useFetch("http://localhost:4000/api/rapid/users/");

  // rendering the data
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="flex flex-col gap-3 user__row">
        {users && users.map((user) => <UserCard key={user._id} user={user} />)}
      </div>
    </>
  );
};

export default Home;
