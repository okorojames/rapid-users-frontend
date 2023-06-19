import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UpdateUser = () => {
  // id
  const { id } = useParams();

  // states
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [data, setData] = useState();

  // new user data
  const new_user_data = { title, desc };

  // navigate
  const navigate = useNavigate();

  // fetch single user with the id
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`http://localhost:4000/api/rapid/user/${id}`);
      const data = await res.json();
      setData(data);
      setTitle(data.title);
      setDesc(data.desc);
    };
    getUser();
  }, []);

  // handle post user upadte details
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:4000/api/rapid/update-user/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_user_data),
        }
      );
      if (res.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // dislaying the update user form
  return (
    <div className="new_user_section px-5">
      {data && (
        <div className="container mx-auto">
          <div className="text-center my-5 font-bold text-lg text-slate-600">
            UPDATE USER
          </div>
          <form className="flex flex-col gap-4">
            <input
              className="form__input"
              type="text"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              className="form__input resize-none"
              placeholder="description here..."
              rows="8"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>
            <button
              className="rounded-md self-center py-2 px-4 text-slate-50"
              style={{ backgroundColor: "#0ca678" }}
              onClick={handleUpdateUser}
            >
              Update User
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
