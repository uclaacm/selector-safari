import React, { useState, useRef } from 'react';
import LevelNav from '../LevelNav/LevelNav'
import LevelMenu from '../LevelMenu/LevelMenu'
import Build from '../Build/Build'
import Textbox from '../Textbox/Textbox'
import Tutorial from '../Tutorial/Tutorial';
import { levels } from '../../components/levels'
import { maxLevel } from '../../constants/constants';
import './Main.css'
import check from './check';

const applyStyles = (() => {
  const style = document.createElement('style');
  document.head.append(style);
  return cssString => style.textContent = cssString;
})();

function Main(props) {
  const [ open, setOpen ] = useState(false);
  const [ solved, setSolved ] = useState(false);
  const [ stickerStyles, setStickerStyles ] = useState({});
  const [ showTutorial, setShowTutorial ] = useState(false);
  const boardEl = useRef(null);

  const setBoardRef = (el) => {
    boardEl.current = el;
  }

  const getBackgroundColor = () => {
    let backgroundColor = levels[props.match.params.levelNum - 1].backgroundColor;
    if (backgroundColor === "default") {
      backgroundColor = "rgb(234, 216, 122)";
    }
    return backgroundColor;
  }

  const handleInputChange = (input) => {
    applyStyles(input);
    let res = check(boardEl.current, setStickerStyles, getBackgroundColor());
    setSolved(res);
  }

  const handleNextClick = () => {
    let curLevel = props.match.params.levelNum;
    if (curLevel < maxLevel) {
      setSolved(false);
      let nextLevel = parseInt(curLevel) + 1;
      props.history.push(`/level/${nextLevel}`);
    }
  }

  let levelNum = props.match.params.levelNum;
  let curLevel = levels[levelNum - 1];
  return (
    <div>
        <div className="Header">
          <span className="Title"> Selector Safari </span>
          <div className="NavButtons">
            <a
              href="#/"
              className="TutorialButton Header-link"
              onClick={() => {
                setShowTutorial(!showTutorial);
              }}
            >
              Level Tutorial
            </a>
            <LevelNav 
                toggle={() => setOpen(!open)}
                show={open} 
                levelNum={props.match.params.levelNum}
            />
          </div>
        </div>
        <LevelMenu show={open}/>
        {showTutorial && <Tutorial level={curLevel}/>}
        <div className="columns">
            <div className="col">
                <div className="Description">
                    <p className="instructions">{curLevel.instructions}</p>
                </div>
                <Textbox onValueChange={handleInputChange}/>
                {solved &&
                    <div className='next'>
                      <p className='next-message'>Great job!</p>
                      <button 
                        className="next-button"
                        onClick={handleNextClick}>
                          Next level
                      </button>
                    </div>
                }
            </div>
            <Build 
                level={levels[levelNum-1]} 
                setRef={setBoardRef}
                stickerStyles={stickerStyles}
            />
        </div>
    </div>
  );
}

export default Main;
