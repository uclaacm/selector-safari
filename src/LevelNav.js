import React from "react"
import './LevelNav.css';

import { Link } from "react-router-dom"
import {BiChevronLeft, BiChevronRight} from "react-icons/bi"

class LevelNav extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    let levelNum = this.props.match.params.levelNum;
    let maxLevel = 5;
    let leftButton;
    let rightButton;

    // make sure level number doesn't go out of bounds
    if(levelNum == 1){
      leftButton = <a> <Link to={`/level/${levelNum}`}> <BiChevronLeft/> </Link> </a>;
      rightButton = <a> <Link to={`/level/${1*levelNum+1}`}> <BiChevronRight/> </Link> </a>;
    }
    else if(levelNum == maxLevel){
      leftButton = <a> <Link to={`/level/${levelNum-1}`}> <BiChevronLeft/> </Link> </a>;
      rightButton = <a> <Link to={`/level/${1*levelNum}`}> <BiChevronRight/> </Link> </a>;
    }
    else {
      leftButton = <a> <Link to={`/level/${levelNum - 1}`}> <BiChevronLeft/> </Link> </a>;
      rightButton = <a> <Link to={`/level/${1*levelNum + 1}`}> <BiChevronRight/> </Link> </a>;
    }

    return (
      <div className="LevelNav">
        {leftButton}
        <p>
          {`Level ${levelNum}`}
        </p>
        {rightButton}
      </div>
    )
  }
}


export default LevelNav;

