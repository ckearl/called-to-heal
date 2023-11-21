import React from "react";
import ProfileIcon from "../lib/img/profile.png";

export default function Header({ currentPage, onPageChange }) {
  const pageChangeHandler = () => {
    onPageChange("Settings");
  };

  return (
    <div className="bg-primary py-3 ps-3 text-light position-sticky top-0 w-100">
      <div className="d-flex align-items-center">
        <img src={ProfileIcon} alt="" className="me-2" onClick={pageChangeHandler} />
        <h1>{currentPage}</h1>
      </div>
    </div>
  );
}
