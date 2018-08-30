import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NAVBAR - RENDERED");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Items In Cart{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

//in functional components you have to pass in props as a parameter - thus you dont need to use the word 'this' example - {props.totalCounters}

//using destructuring you can pass the props of totalCounters like this -  const NavBar = ({ totalCounters }) => { so you dont have to keep writing this.props.totalCounters
