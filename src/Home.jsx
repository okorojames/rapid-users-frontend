import React, { useContext } from "react";
import useFetch from "./useFetch";
import UserCard from "./assets/UserCard";
import { DeletedContext } from "./DeletedContext";

const Home = () => {
  // states
  const { deleted, setDeleted } = useContext(DeletedContext);

  // fetching theh data
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://rapid-user.onrender.com/api/rapid/users/");

  // handle re-fetch data again
  const handleReFetch = async () => {
    try {
      setDeleted(!deleted);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // rendering the data
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {deleted === true ? (
        <div className="overlay_wrapper">
          <div className="overlay fixed top-0 left-0 right-0 bottom-0 z-30 opacity-80"></div>
          <div className="overlay_text flex flex-col gap-4 fixed z-50 bg-slate-50 py-5 px-5 rounded-md">
            <p className=" text-xl font-bold capitalize">
              User has been sucessfully deleted
            </p>
            <button
              className=" text-slate-100 bg-slate-600 self-center py-2 px-4 rounded-md"
              onClick={handleReFetch}
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col gap-3 user__row mb-6">
        {users && users.length === 0 ? <div>No user</div> : <></>}
        {users && users.map((user) => <UserCard key={user._id} user={user} />)}
      </div>
    </>
  );
};

export default Home;
