import React, { useRef } from "react";

const UserCard = ({ user }) => {
  // references
  const delete__toggle = useRef();

  // handle toggleBtns function
  const toggleBtns = () => {
    delete__toggle.current.classList.toggle("toggle__btns");
  };

  // handle delete user
  const handleDeleteUser = async () => {
    try {
      await fetch(`http://localhost:4000/api/rapid/delete-user/${user._id}`, {
        method: "DELETE",
      });
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // rendering the data
  return (
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
            <i className="bx bxs-edit-alt text-lg"></i>
            <i
              className="bx bxs-trash text-red-500 text-lg"
              onClick={() => handleDeleteUser(user._id)}
            ></i>
          </div>
          <i
            className="bx bx-dots-vertical-rounded text-slate-500 text-xl"
            onClick={toggleBtns}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
