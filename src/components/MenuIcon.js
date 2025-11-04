import React from "react";
import "./MenuIcon.css";

const MenuIcon = ({ isOpen }) => {
  return (
    <svg
      className={`menu-icon ${isOpen ? "open" : ""}`}
      viewBox="0 0 24 24"
      width="32"
      height="32"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export default MenuIcon;