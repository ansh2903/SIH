import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Alu-Stud</h3>
      <div className="menu">
      <img src="./src/assets/user.png" alt="user_pfp" />
      <img src="./src/assets/down-arrow.png" className="dropMenu" alt="drop_menu" />
      </div>
    </div>
  );
};

export default Navbar;
