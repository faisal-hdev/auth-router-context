import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("context", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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
            to="/orders"
          >
            Orders
          </Link>
          <Link
            className=" btn btn-ghost text-xl mr-4 font-semibold"
            to="/about"
          >
            About
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
          {user?.email && <span>Welcome, {user.email}</span>}
          {user?.email ? (
            <button onClick={handleSignOut} className="btn btn-sm">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
