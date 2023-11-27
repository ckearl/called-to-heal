import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function determineIconColor(currentPage, assignedPage) {
  if (currentPage === assignedPage) {
    return "#fdfcfd";
  }
  return "#9aa0b3";

}

function iconBuilder(currentPage, onPageChange, assignedPage, icon) {
  return (
    <div className="navbar-btn">
      <FontAwesomeIcon
        icon={icon}
        style={{ height: 45, width: 45, color: determineIconColor(currentPage, assignedPage) }}
        onClick={() => onPageChange(assignedPage)}
      />
    </div>
  );
}

const Navbar = ({ currentPage, onPageChange }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "end", justifyContent: "space-around", width: "100%", position: "fixed", bottom: 0, left: 0, paddingBottom: "1%", paddingTop: "2%", backgroundColor: "#4d506a"}}
    >

      {iconBuilder(currentPage, onPageChange, "Home", ["fas", "home"])}
      {iconBuilder(currentPage, onPageChange, "Grid", ["fas", "th-large"])}
      {iconBuilder(currentPage, onPageChange, "Toolbox", ["fas", "toolbox"])}
      {iconBuilder(currentPage, onPageChange, "Settings", ["fas", "cog"])}

    </div>
  );
};

export default Navbar;
