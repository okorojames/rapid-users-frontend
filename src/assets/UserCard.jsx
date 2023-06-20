import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DeletedContext } from "../DeletedContext";

const UserCard = ({ user }) => {
  // references
  const delete__toggle = useRef();

  // handle toggleBtns function
  const toggleBtns = () => {
    delete__toggle.current.classList.toggle("toggle__btns");
  };

  // states
  const { deleted, setDeleted } = useContext(DeletedContext);

  // handle delete user
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(
        `https://rapid-user.onrender.com/api/rapid/delete-user/${user._id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setDeleted(!deleted);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // date options
  const date_options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // rendering the data
  return (
    <div className="user_card_section px-4">
      <div className="bg-slate-100 rounded-lg py-5 px-6">
        <div className="user__header flex justify-between items-center">
          <h3 className="user__title font-bold capitalize text-slate-700">
            <span className="text-slate-400 font-semibold me-2">Title:</span>
            {user.title}
          </h3>
          <div className="flex items-center justify-between gap-3 bg-slate-200 rounded-full overflow-hidden toggles">
            <div
              className="flex items-center gap-3 rounded-full py-1 px-2 ease-in duration-300 delete__and__edit"
              ref={delete__toggle}
            >
              <Link to={`/update-user/${user._id}`}>
                <i className="bx bxs-edit-alt text-lg"></i>
              </Link>
              <i
                className="bx bxs-trash text-red-500 text-lg cursor-pointer"
                onClick={() => handleDeleteUser(user._id)}
              ></i>
            </div>
            <i
              className="bx bx-dots-vertical-rounded text-slate-500 text-xl cursor-pointer"
              onClick={toggleBtns}
            ></i>
          </div>
        </div>

        {/*  */}
        <p className="text-slate-700 break-words" style={{ fontWeight: "500" }}>
          <span className="text-slate-400 font-semibold me-2">
            Description:
          </span>
          {user.desc}
        </p>
        <p className="mt-2 text-slate-400 opacity-70">
          {new Date(user.createdAt).toLocaleTimeString("en-us", date_options)}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
