import React from "react";
import ElderProfileIcon from "../lib/img/elder-profile.png";
import SisterProfileIcon from "../lib/img/sister-profile.png";

export default function Header({ user, setUser, currentPage, onPageChange }) {
  const pageChangeHandler = () => {
    onPageChange("Settings");
  };

  return (
    <div className="bg-primary py-3 ps-3 text-light position-sticky top-0 w-100">
      <div className="d-flex align-items-center">
        <img
          src={user.sex === "m" ? ElderProfileIcon : SisterProfileIcon}
          alt=""
          className="me-2"
          onClick={pageChangeHandler}
        />
        <h1>{currentPage}</h1>
      </div>
    </div>
  );
}
