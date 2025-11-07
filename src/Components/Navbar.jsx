import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex py-4 px-8 bg-gray-800 justify-between">
      <h3 className="text-2xl font-bold">Harshit</h3>
      <div className="flex  gap-9">
        <Link className="text-lg font-bold" to="/">
          Home
        </Link>
        <Link className="text-lg font-bold" to="/about">
          About
        </Link>
        <Link className="text-lg font-bold" to="/course">
          Courses
        </Link>
        <Link className="text-lg font-bold" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
