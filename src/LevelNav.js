import React from "react"
import './LevelNav.css';

import { Link } from "react-router-dom"
import {BiChevronLeft, BiChevronRight} from "react-icons/bi"

class LevelNav extends React.Component {
  render(){
    let navClass = "LevelNav"

    if(this.props.show) {
       navClass = 'LevelNav open'
    }

    let levelNum = this.props.levelNum;
    if (levelNum === undefined){
      levelNum = 1;
    }

    let maxLevel = 4;
    let leftButton;
    let rightButton;

    // make sure level number doesn't go out of bounds
    if(levelNum === 1){
      leftButton = <a href="#/"> <Link to={`/level/${levelNum}`}> <BiChevronLeft/> </Link> </a>;
      rightButton = <a href="#/"> <Link to={`/level/${1*levelNum+1}`}> <BiChevronRight/> </Link> </a>;
    }
    else if(levelNum === maxLevel){
      leftButton = <a href="#/"> <Link to={`/level/${levelNum-1}`}> <BiChevronLeft/> </Link> </a>;
      rightButton = <a href="#/"> <Link to={`/level/${1*levelNum}`}> <BiChevronRight/> </Link> </a>;
    }
    else {
      leftButton = <a href="#/"> <Link to={`/level/${levelNum - 1}`}> <BiChevronLeft/> </Link> </a>;
      rightButton = <a href="#/"> <Link to={`/level/${1*levelNum + 1}`}> <BiChevronRight/> </Link> </a>;
    }

    return (
        <div className="everything">
          <div className={navClass}>
            {leftButton}
            <p onClick={this.props.toggle}>
              {`Level ${levelNum}`}
            </p>
            {rightButton}
          </div>

        </div>
    )
  }
}


export default LevelNav;

