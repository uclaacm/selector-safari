import React from "react";
import "./LevelNav.css";
import { minLevel, maxLevel } from "../../constants/constants";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";

function LevelNav(props) {
  const levelNum = parseInt(props.levelNum ?? minLevel);

  const prevLevelNum = Math.max(levelNum - 1, minLevel);
  const nextLevelNum = Math.min(levelNum + 1, maxLevel);

  if (levelNum === 1)
  {
    return (
      <div className={"LevelNav" + (props.show ? " open" : "")} >
         <Link style={{opacity: 0.5}}> {" "}
          <FaAngleLeft />{" "}
          </Link>
        <p className="Level-sidebar" onClick={props.toggle}>
          {`Level ${levelNum}`}
        </p>
        <Link to={`/level/${nextLevelNum}`}>
          {" "}
          <FaAngleRight />{" "}
        </Link>
      </div>
    );
  }
  else if (levelNum === 5)
  {
    return (
      <div className={"LevelNav" + (props.show ? " open" : "")}>
        <Link to={`/level/${prevLevelNum}`}>
          {" "}
          <FaAngleLeft />{" "}
        </Link>
        <p className="Level-sidebar" onClick={props.toggle}>
          {`Level ${levelNum}`}
        </p>
        <Link style={{opacity: 0.5}}> {" "}
          <FaAngleRight />{" "}
        </Link>
      </div>
    );
  }
  else {
    return (
      <div className={"LevelNav" + (props.show ? " open" : "")}>
        <Link to={`/level/${prevLevelNum}`}>
          {" "}
          <FaAngleLeft />{" "}
        </Link>
        <p className="Level-sidebar" onClick={props.toggle}>
          {`Level ${levelNum}`}
        </p>
        <Link to={`/level/${nextLevelNum}`}>
          {" "}
          <FaAngleRight />{" "}
        </Link>
      </div>
    );
  }

}

export default LevelNav;
