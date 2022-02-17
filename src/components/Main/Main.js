import React from "react";
import LevelNav from "../LevelNav/LevelNav";
import LevelMenu from "../LevelMenu/LevelMenu";
import Build from "../Build/Build";
import Tabs from "../Tabs/Tabs";
import Tutorial from "../Tutorial/Tutorial";
import Joyride, { STATUS } from 'react-joyride';
import { levels } from "../../components/levels";
import { maxLevel, sticker_names } from "../../constants/constants";
import "./Main.css";
import Joyride from 'react-joyride';

class Main extends React.Component {
  state = {
    open: false,
    stickerStyles: {},
    solved: false,
    showTutorial: false,
    tooltipsteps: [
      {
        target: ".hex-code",
        event: "hover",
        spotlightPadding: 5,
        content: "Click to copy!"
      },
    ],
    showTooltip: true,
    run: true,
    steps: [
      {
        target: ".level-tutorial-button",
        content: "Feeling stuck? Here are some tips!",
        disableBeacon: "true",
      },
      {
        target: ".Level-sidebar",
        content: "Click here to navigate to a different level!",
        disableBeacon: "true",
      },
      {
        target: "path",
        content: "Click here to move on to the next level!",
        disableBeacon: "true",
      },
      {
        target: ".instructions",
        content: "Here is a description of what this level wants you to accomplish!",
        disableBeacon: "true",
      },
      {
        target: ".sc-bdvvaa",
        content: "Write your code in this editor!",
        disableBeacon: "true",
      },
    ],
  };

  handleTooltip = () => {
    localStorage.setItem("showTooltip", "hex-code");
  }

  // Set up hexcode tooltip only when it's the first time the page loads
  componentDidMount() {
    window.addEventListener('load', this.handleTooltip);
  }

  handleHexJoyrideCallback = data => {
    const { status } = data;

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      localStorage.setItem("showTooltip", "false")
    }
  }

  setRef = (el) => {
    this.boardEl = el;
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleValueChange = (value) => {
    this.applyStyles(value);
    let res = this.check();
    this.setState({
      solved: res,
    });
  };

  handleNextClick = () => {
    let curLevel = this.props.match.params.levelNum;
    if (curLevel < maxLevel) {
      this.setState({
        solved: false,
      });
      let nextLevel = parseInt(curLevel) + 1;
      this.props.history.push(`/level/${nextLevel}`);
    }
  };

  applyStyles = (() => {
    const style = document.createElement("style");
    document.head.append(style);
    return (cssString) => (style.textContent = cssString);
  })();

  check = () => {
    let res = true;
    let stickerStyles = {};
    // start with an array of child elements/nodes to process. we start with the children of the Build div
    let stickerNodes = Array.from(this.boardEl.children);
    let zebraColors = []; //for plant colors test to work an element will need to be added to this array
    let leopardColors = [];
    let plantColors = [];

    while (stickerNodes.length > 0) {
      let curNode = stickerNodes.shift(); // start with the element at the front of the array

      // add child elements of the current element to the array of nodes to process
      // we wanna keep going until we process all the children
      // this method of traversing (i.e. going through all the elements/nodes of) a "tree" (aka a thing where
      // there's nodes that have parents and/or children) is called a "breadth first search", something you can
      // learn in CS32 :)
      // also, we ignore the child elements that aren't <animal> or other stickers (e.g. <svg>)
      for (let child of curNode.children) {
        if (sticker_names.includes(child.tagName.toLowerCase())) {
          stickerNodes.push(child);
        }
      }

      let stickerColor = window
        .getComputedStyle(curNode)
        .getPropertyValue("color"); //Set the color css property to stickercolor
      stickerStyles[curNode.id] = stickerColor;
      //Add sticker colors to seperate arrays for analysis later
      if (curNode.tagName === "ZEBRA" /*This will be replaced by ZEBRA*/) {
        zebraColors.push(stickerColor);
      } else if (
        curNode.tagName === "LEOPARD" /*This will be replaced by LEOPARD*/
      ) {
        leopardColors.push(stickerColor);
      } else if (curNode.className === "plant") {
        plantColors.push(stickerColor);
      }
    }

    //Check that all leopard colors are the same as the background
    //test css: animal{color:rgb(234, 216, 122)}
    let backgroundColor =
      levels[this.props.match.params.levelNum - 1].backgroundColor;
    if (backgroundColor === "default") {
      backgroundColor = "rgb(234, 216, 122)";
    }
    for (let s = 0; s < leopardColors.length; s++) {
      if (leopardColors[s] !== backgroundColor) {
        res = false;
      }
    }

    //Check that all zebra colors are different
    //test css: #animal1{color:rgb(200, 0, 0);} #animal2{color:rgb(0, 200, 0);}
    for (let s = 0; s < zebraColors.length; s++) {
      for (let i = s + 1; i < zebraColors.length; i++) {
        if (zebraColors[s] === zebraColors[i]) {
          res = false;
        }
      }
    }

    //Check that if there are zebras that all the plants are rgb(48, 98, 48)
    //To test just add an element to the zebraColors array in the beggining of the function
    //test css: .plant{color:rgb(48, 98, 48)
    if (zebraColors.length > 0) {
      for (let s = 0; s < plantColors.length; s++) {
        if (plantColors[s] !== "rgb(48, 98, 48)") {
          res = false;
        }
      }
    }

    this.setState({
      stickerStyles: stickerStyles,
    });

    return res;
  };

  render() {
    let levelNum = this.props.match.params.levelNum;
    let curLevel = levels[levelNum - 1];
    const {steps} = this.state;

    if (this.state.run && Number(levelNum)>=2)
    {
      this.setState({
        run: false
      });
    }

    return (
      <div>
        <Joyride
          key={levelNum}
          steps={this.state.tooltipsteps}
          styles={{
            tooltipContainer: {
              margin: "0",
              position: "absolute",
              top: "10%",
              left: "35%",
            }
          }}
          callback={this.handleHexJoyrideCallback} // After user hovers on hexcode tooltip, don't show again 
        />
            
            <Joyride
          key={levelNum}
          steps={this.state.steps}
          styles={{
            tooltipContainer: {
              margin: "0",
              position: "absolute",
              top: "10%",
              left: "35%",
            }
          }}
        />

        <div className="Header">
          <span className="Title"> Selector Safari </span>
          <div className="NavButtons">
            <a
              href="#/"
              className="TutorialButton Header-link"
              onClick={() => {
                this.setState({ showTutorial: !this.state.showTutorial });
              }}
            >
              <button class="level-tutorial-button">Level Tutorial</button>
            </a>
            <LevelNav
              toggle={this.toggleOpen}
              show={this.state.open}
              levelNum={this.props.match.params.levelNum}
            />
          </div>
        </div>
        <LevelMenu show={this.state.open} />
        {this.state.showTutorial && <Tutorial level={curLevel} />}
        <div className="columns">
          <div className="col">
            <div className="Description">
              <p className="instructions">{curLevel.instructions}</p>
            </div>
            <Tabs 
              level={levelNum}
              onValueChange={this.handleValueChange}
              key={levelNum}
            />            
            {this.state.solved && (
              <div className="next">
                <p className="next-message">Great job!</p>
                <button className="next-button" onClick={this.handleNextClick}>
                  Next level
                </button>
              </div>
            )}
          </div>
          {Number(levelNum)===1 && this.state.run &&
            <Joyride
            steps={steps}
            continuous={true}
            showSkipButton={true}
            showProgress={true}
            disableOverlay={true}
            styles={{
              options: {
                arrowColor: '#FFFFFF',
                backgroundColor: '#FFFFFF',
                overlayColor: '#ffffff00',
                primaryColor: '#8EB9DB',
                textColor: '#8EB9DB',
                width: undefined,
                zIndex: 100,
              }
            }}
            />
          }
          <Build
            level={levels[levelNum - 1]}
            setRef={this.setRef}
            stickerStyles={this.state.stickerStyles}
          />
        </div>
      </div>
    );
  }
}

export default Main;
