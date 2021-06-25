import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <div id="container">
      <img id="image" src={props.img} alt={props.img} />
      <p id="text">{props.heading}</p>
    </div>
  );
};

export default Header;
