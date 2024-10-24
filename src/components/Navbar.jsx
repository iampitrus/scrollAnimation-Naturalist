import React from "react";
import searchIcon from "../assets/search.svg";

function Navbar() {
  return (
    <nav className="fixed w-full max-w-[95%] px-24 py-6 z-50 backdrop-blur-sm">
      <div className="flex justify-between uppercase">
        <a href="#">Naturalist</a>
        <div className="space-x-4">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">product</a>
          <a href="#">contact</a>
        </div>
        <img src={searchIcon} width={30} />
      </div>
    </nav>
  );
}

export default Navbar;
