import React from "react";

const Navbar = ({ onPageChange }) => {
    return (
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <button onClick={() => onPageChange("Home")}>Home</button>
        <button onClick={() => onPageChange("Grid")}>Grid</button>
        <button onClick={() => onPageChange("Toolbox")}>Toolbox</button>
        <button onClick={() => onPageChange("Settings")}>Settings</button>
      </div>
    );
  };
  
  export default Navbar;