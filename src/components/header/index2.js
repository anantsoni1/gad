import React from "react";
import "./style2.css";

const Header = (props) => {
  return (
    <div id="container2">
      <img id="image2" src={props.img} alt={props.img} />
      <p id="text2">{props.heading}</p>
    </div>
  );
};

export default Header;
