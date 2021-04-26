import React, {useState, useRef} from 'react';
import './App.css';
import Board from './components/Board/Board.js';
import Editor from './components/Editor/Editor.js';

// import Build from './components/Build.js'
// import {levels} from './components/levels.js';

const solution = {selectedAnimals: ['animal2', 'animal3'], style: 'color', defaultStyleValue: 'rgb(0, 0, 0)'};
const sticker_names = ['animal'];

const applyStyles = (() => {
  const style = document.createElement('style');
  document.head.append(style);
  return cssString => style.textContent = cssString;
})();

function App() {
  const [animalColors, setAnimalColors] = useState(null); // used to get applied color style and apply it to SVG as fill, though we may just have user use fill instead of color
  const [solved, setSolved] = useState(false);
  const boardEl = useRef(null); // this is a "ref" and it gives us access to the DOM (in short, a JavaScript representation of our HTML), which you usually don't directly work with in React. You can use refs with class-based components too

  const setRef = (ref) => {
    boardEl.current = ref;
  }

  const check = () => {
    let res = true;
    let stickerStyles = {};
    // start with an array of child elements/nodes to process. we start with the children of the Board div
    let stickerNodes = Array.from(boardEl.current.children);
    while (stickerNodes.length > 0) {
      let curNode = stickerNodes.shift(); // start with the element at the front of the array

      let stickerStyle = window.getComputedStyle(curNode).getPropertyValue(solution.style);
      if (solution.style === 'color') {
        stickerStyles[curNode.id] = stickerStyle;
      }

      if (solution.selectedAnimals.includes(curNode.id)) {
        if (stickerStyle === solution.defaultStyleValue) {
          // element that should be selected isn't
          res = false;
        }
      }
      else {
        if (stickerStyle !== solution.defaultStyleValue) {
          // element that shouldn't be selected is
          res = false;
        }
      }

      // add child elements of the current element to the array of nodes to process
      // we wanna keep going until we process all the children
      // this method of traversing (i.e. going through all the elements/nodes of) a "tree" (aka a thing where there's nodes that have parents and/or children) is called a "breadth first search", something you can learn in CS32 :)
      // also, we ignore the child elements that aren't <animal> or other stickers (e.g. <svg>)
      for (let child of curNode.children) {
        if (sticker_names.includes(child.tagName.toLowerCase())) {
          stickerNodes.push(child);
        }
      }
    }

    setAnimalColors(stickerStyles);
    return res;
  }

  const handleInputChange = (value) => {
    applyStyles(value);
    let res = check(boardEl);
    setSolved(res);
  }

  return (
    <div>
      <Board animalColors={animalColors} setRef={setRef}/>
      <Editor onInputChange={handleInputChange}/>
      <div>{solved ? 'yay' : 'no'}</div>
      {/* <div className="App">
          <Build level={levels[0]} top={"0px"} left = {"500px"}/>
      </div> */}
    </div>
  );
}
//I'm making a change
export default App;