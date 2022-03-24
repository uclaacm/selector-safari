import React from "react";
import "./LevelNav.css";
import { minLevel, maxLevel } from "../../constants/constants";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function LevelNav(props) {
  const levelNum = parseInt(props.levelNum ?? minLevel);

  const prevLevelNum = Math.max(levelNum - 1, minLevel);
  const nextLevelNum = Math.min(levelNum + 1, maxLevel);

  let incrLevel;

  if (!props.skippedWarning)
  {
      incrLevel = <FaAngleRight className="LevelNavArrow" onClick={props.showWarning}/>
  }
  else
  {
      incrLevel = <Link to={`/level/${nextLevelNum}`} onClick={props.levelChange}>
                      {" "}
                      <FaAngleRight/>{" "}
                  </Link>
  }

  function toggle() {
    props.toggle();
    props.showWarning();
  }

  if (levelNum === 1)
  {
    return (
      <div className={"LevelNav" + (props.show ? " open" : "")}>
        <p className="Level-sidebar" onClick={toggle}>
          {`Level ${levelNum}`}
        </p>
       {incrLevel}
      </div>
    );
  }
  else if (levelNum === 5)
  {
    return (
      <div className={"LevelNav" + (props.show ? " open" : "")}>
        <Link to={`/level/${prevLevelNum}`} onClick={props.levelChange}>
          {" "}
          <FaAngleLeft />{" "}
        </Link>
        <p className="Level-sidebar" onClick={props.toggle}>
          {`Level ${levelNum}`}
        </p>
      </div>
    );
  }
  else {
    return (
      <div className={"LevelNav" + (props.show ? " open" : "")}>
        <Link to={`/level/${prevLevelNum}`} onClick={props.levelChange}>
          {" "}
          <FaAngleLeft />{" "}
        </Link>
        <p className="Level-sidebar" onClick={props.toggle}>
          {`Level ${levelNum}`}
        </p>
        {incrLevel}
      </div>
    );
  }

}

export default LevelNav;
