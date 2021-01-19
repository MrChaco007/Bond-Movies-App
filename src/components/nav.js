import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>All Movies</div>
      </Link>
      <div>
        <img
          id="logo"
          src="https://www.007.com/wp-content/uploads/2017/07/rgb_logo_650-1.jpg"
        />
      </div>
      <Link to="/favorites">
        <div>Favorites</div>
      </Link>
    </div>
  );
};

export default Nav;
