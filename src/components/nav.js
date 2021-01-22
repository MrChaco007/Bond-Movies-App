import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <img src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611271666/stacked-papers_1_agx9jp.png" />
      </Link>
      <div>
        <img
          id="logo"
          src="https://www.007.com/wp-content/uploads/2017/07/rgb_logo_650-1.jpg"
        />
      </div>
      <Link to="/favorites">
        <img src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611271720/heart_scsxc4.png" />
      </Link>
    </div>
  );
};

export default Nav;
