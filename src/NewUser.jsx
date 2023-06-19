import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const navigate = useNavigate();
  // states
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  //user data
  const user_data = { title, desc };

  // handle post user
  const handlePostUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/rapid/post-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_data),
      });
      if (res.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // displayign the form
  return (
    <div className="new_user_section px-5">
      <div className="container mx-auto">
        <div className="text-center my-5 font-bold text-lg text-slate-600">
          CREATE USER
        </div>
        <form className="flex flex-col gap-4">
          <input
            className="form__input"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form__input resize-none"
            placeholder="description here..."
            rows="8"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            className="rounded-md self-center py-2 px-4 text-slate-50"
            style={{ backgroundColor: "#0ca678" }}
            onClick={handlePostUser}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
