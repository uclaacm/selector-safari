import React from "react";
import "./LevelNav.css";
import { minLevel, maxLevel } from "../../constants/constants";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";

function LevelNav(props) {
  const levelNum = parseInt(props.levelNum ?? minLevel);

  const prevLevelNum = Math.max(levelNum - 1, minLevel);
  const nextLevelNum = Math.min(levelNum + 1, maxLevel);

  let incrLevel;

  if (!props.skippedWarning)
  {
      incrLevel = <FaAngleRight className="LevelNavArrow" onClick={prepShowWarning}/>
  }
  else
  {
      incrLevel = <Link to={`/level/${nextLevelNum}`} onClick={prepLevelChange}>
                      {" "}
                      <FaAngleRight/>{" "}
                  </Link>
  }

  function toggle() {
    props.toggle();
    props.showWarning();
    props.prepareLevel();
  }

  function prepLevelChange() {
    props.prepareLevel();
    props.levelChange();
  }

  function prepShowWarning()
  {
    props.showWarning();
    props.prepareLevel();
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
        <Link to={`/level/${prevLevelNum}`} onClick={prepLevelChange}>
          {" "}
          <FaAngleLeft />{" "}
        </Link>
        <p className="Level-sidebar" onClick={props.toggle}>
          {`Level ${levelNum}`}
        </p>
        <Link onClick={props.prepareLevel} style={{opacity: 0.5}}> {" "}
          <FaAngleRight />{" "}
        </Link>
      </div>
    );
  }
  else {
    return (
      <div className={"LevelNav" + (props.show ? " open" : "")}>
        <Link to={`/level/${prevLevelNum}`} onClick={prepLevelChange}>
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
