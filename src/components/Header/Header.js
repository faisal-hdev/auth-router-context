import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary">
      <div className="text-white navbar bg-primary mx-auto justify-between container">
        <Link className="btn btn-ghost text-2xl" to="/">
          Awesome Auth
        </Link>
        <div className="">
          <Link className=" btn btn-ghost text-xl mr-4 font-semibold" to="/">
            Home
          </Link>
          <Link
            className=" btn btn-ghost text-xl mr-4 font-semibold"
            to="/login"
          >
            Log in
          </Link>
          <Link className=" btn btn-ghost text-xl font-semibold" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
