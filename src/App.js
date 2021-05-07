import React, {useState, useRef} from 'react';
import './App.css';
import Board from './components/Board/Board.js';
import Editor from './components/Editor/Editor.js';

// import Build from './components/Build.js'
// import {levels} from './components/levels.js';

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
    var res = true; 
    let stickerStyles = {};
    let sticker_names = ["zebra", "leopard", "acacia", "boabab", "elephantgrass", "animal"]
    // start with an array of child elements/nodes to process. we start with the children of the Board div
    let stickerNodes = Array.from(boardEl.current.children);
    let zebraColors = []; //for plant colors test to work an element will need to be added to this array
    let leopardColors = [];
    let plantColors = [];

    while (stickerNodes.length > 0) {
      let curNode = stickerNodes.shift(); // start with the element at the front of the array

      // add child elements of the current element to the array of nodes to process
      // we wanna keep going until we process all the children
      // this method of traversing (i.e. going through all the elements/nodes of) a "tree" (aka a thing where there's nodes that have parents and/or children) is called a "breadth first search", something you can learn in CS32 :)
      // also, we ignore the child elements that aren't <animal> or other stickers (e.g. <svg>)
      for (let child of curNode.children) {
        if (sticker_names.includes(child.tagName.toLowerCase())) {
          stickerNodes.push(child);
        }
      }

      let stickerColor = window.getComputedStyle(curNode).getPropertyValue('color');  //Set the color css property to stickercolor
      stickerStyles[curNode.id] = stickerColor;
      //Add sticker colors to seperate arrays for analysis later
      if (curNode.tagName === "ZEBRA"/*This will be replaced by ZEBRA*/) {
        zebraColors.push(stickerColor);
      }
      else if (curNode.tagName === "LEOPARD" /*This will be replaced by LEOPARD*/) {
        leopardColors.push(stickerColor);
      }
      else if (curNode.className === "plant"){
        plantColors.push(stickerColor);
      }
    }
    
    //Check that all leopard colors are the same as the background
    //test css: animal{color:rgb(234, 216, 122)}
    for (let s = 0; s<leopardColors.length; s++) {
      if (leopardColors[s] !== "rgb(234, 216, 122)") {
        res = false;
      }
    }

    //Check that all zebra colors are different 
    //test css: #animal1{color:rgb(200, 0, 0);} #animal2{color:rgb(0, 200, 0);}
    for (let s = 0; s<zebraColors.length; s++ ) {
      for (let i = s + 1; i<zebraColors.length; i++){
        if (zebraColors[s] === zebraColors[i]) {
          res = false;
        }
      }
   }

   //Check that if there are zebras that all the plants are rgb(48, 98, 48)  
   //To test just add an element to the zebraColors array in the beggining of the function
   //test css: .plant{color:rgb(48, 98, 48)
   if (zebraColors.length > 0) {
     for (let s = 0; s<plantColors.length; s++) {
       if (plantColors[s] !== "rgb(48, 98, 48)") {
         res = false
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
export default App;