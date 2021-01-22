import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <img
          className="nav-logo"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611281432/stacked-papers_2_rvibxe.png"
        />
      </Link>
      <div>
        <img
          id="logo"
          src="https://www.007.com/wp-content/uploads/2017/07/rgb_logo_650-1.jpg"
        />
      </div>
      <Link to="/favorites">
        <img
          className="nav-logo"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611281428/heart_1_pmmu7l.png"
        />
      </Link>
    </div>
  );
};

export default Nav;
