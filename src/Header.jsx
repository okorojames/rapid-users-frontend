import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center mb-10 py-5 px-4 bg-slate-50">
      <h3 className="uppercase font-bold text-gray-500">Rapid User</h3>
      <button className="nav__btn flex items-center text-slate-50 py-2 px-4 rounded-full">
        <i className="bx bx-plus"></i>
        <p>New Crud</p>
      </button>
    </nav>
  );
};

export default Header;
