import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/intake">Intake</Link> <Link to="/est">Establishment</Link>{" "}
      <Link to="/enf">Enforcement</Link> <Link to="/mod">Modification</Link>{" "}
    </div>
  );
};

export default Nav;
