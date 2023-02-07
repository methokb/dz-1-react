import React from "react";
import Links from "./Links";
import Love from "./Love";
import SerachBox from "./SerachBox";

const Navbar = () => {
  return (
    <div className="container">
      <div className="Navbar">
        <Links />
        <SerachBox />
        <Love />
      </div>
    </div>
  )
};

export default Navbar;
