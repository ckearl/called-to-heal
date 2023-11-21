import React from "react";

export default function Header({ currentPage }) {
  return (
    <div className="bg-primary py-2 ps-3 text-light position-sticky top-0 w-100">
      <h1>{currentPage}</h1>
    </div>
  );
}
