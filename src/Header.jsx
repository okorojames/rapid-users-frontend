import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-slate-50 sticky top-0 z-10">
      <nav className="flex justify-between items-center mb-10 py-5 px-4 container mx-auto ">
        <Link to="/">
          <h3 className="uppercase font-bold text-gray-500">Rapid User</h3>
        </Link>
        <button
          className="nav__btn flex items-center text-slate-50 py-2 px-4 rounded-full"
          onClick={() => navigate("/new-user")}
        >
          <i className="bx bx-plus"></i>
          <p>New Crud</p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
