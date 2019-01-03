import React from "react";
import "./Navbaritems.css";

const Navbaritems = props => (
  <div>
    <ul className="nav nav-pills nav-justified">
      <li>
        <a href="/">Clicky Game</a>
      </li>
      <li>{props.gamemessage}</li>
      <li>
        Score: <span style={{ color: "aqua" }}>{props.gameScore}</span> | Top
        Score: {props.gameTop}
      </li>
    </ul>
  </div>
);

export default Navbaritems;
