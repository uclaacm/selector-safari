import React from "react";
import { Link } from "react-router-dom";
import "./LevelMenu.css";
import { maxLevel } from "../../constants/constants";

function LevelMenu(props) {
  return (
    <div className={"side-drawer" + (props.show ? " open" : "")}>
      {[...Array(maxLevel)].map((_, index) => (
        <p>
          <Link to={`/level/${index + 1}`} key={index}>
            {" "}
            {`Level ${index + 1}`}{" "}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default LevelMenu;
