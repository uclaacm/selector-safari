import React, {useState, useRef} from 'react';
import './App.css';
import Board from './components/Board/Board.js';
import Editor from './components/Editor/Editor.js';

const solution = {selectedAnimals: ['animal2', 'animal3'], style: 'color', defaultStyleValue: 'rgb(0, 0, 0)'};
const sticker_names = ['animal'];

function applyStyles(cssString) {
  const style = document.getElementsByTagName('style')[0];
  style.textContent = cssString;
}

function App() {
  const [animalColors, setAnimalColors] = useState(null); // used to get applied color style and apply it to SVG as fill, though we may just have user use fill instead of color
  const [solved, setSolved] = useState(false);
  const boardEl = useRef(null);

  const setRef = (ref) => {
    boardEl.current = ref;
  }

  const check = () => {
    let res = true;
    let stickerStyles = {};
    let stickerNodes = Array.from(boardEl.current.children);
    while (stickerNodes.length > 0) {
      let curNode = stickerNodes.shift();

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
    </div>
  );
}

export default App;
