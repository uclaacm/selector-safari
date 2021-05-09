import React from "react"
import './LevelNav.css';
import {minLevel, maxLevel} from './constants/constants'

import { Link } from "react-router-dom"
import {BiChevronLeft, BiChevronRight} from "react-icons/bi"

class LevelNav extends React.Component {
  render(){
    let navClass = "LevelNav"

    if(this.props.show) {
       navClass = 'LevelNav open'
    }

    let levelNum = this.props.match.params.levelNum;

    if (levelNum === undefined){
      levelNum = minLevel;
    }

    let prevLevelNum;
    let nextLevelNum;

    // const { setLevel } = this.props


    // make sure level number doesn't go out of bounds
    if(parseInt(levelNum) === minLevel){
        prevLevelNum = levelNum;
        nextLevelNum = 1*levelNum+1;
    }
    else if(parseInt(levelNum) === maxLevel){
        prevLevelNum = levelNum-1;
        nextLevelNum = 1*levelNum;
    }
    else {
        prevLevelNum = levelNum-1;
        nextLevelNum = 1*levelNum+1;
    }

    return (
        <div className={navClass}>
            <Link to={`/level/${prevLevelNum}`}> <BiChevronLeft/> </Link>
                <p onClick={this.props.toggle}>
                    {`Level ${levelNum}`}
                </p>
            <Link to={`/level/${nextLevelNum}`}> <BiChevronRight/> </Link>
        </div>
    )
  }
}


export default LevelNav;

