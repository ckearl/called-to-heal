import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ onPageChange }) => {
    return (
      <div style={{ position: 'fixed', bottom: 0, left: 0, padding: '10px', backgroundColor: '#f0f0f0' }}>
        <FontAwesomeIcon icon="fa-solid fa-check-square" />
        <button onClick={() => onPageChange("Home")}>Home</button>
        <button onClick={() => onPageChange("Grid")}>Grid</button>
        <button onClick={() => onPageChange("Toolbox")}>Toolbox</button>
        <button onClick={() => onPageChange("Settings")}>Settings</button>
      </div>
    );
  };

  export default Navbar;