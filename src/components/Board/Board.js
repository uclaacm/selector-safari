import React from 'react';

/*
  if you apply styles to a parent element, the child element inherits them.
  so then it seems like the child elements were selected when they weren't.
  how to distinguish?
*/

const animalz = ['animal1', 'animal2', 'animal3'];

function Animal(props) {
    return (
      <animal id={props.id} className = "plant">
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4" fill={props.color ? props.color : ""} />
        </svg>
      </animal>
    );
  }
  
function Board(props) {
    return (
      <div className='board' ref={props.setRef}>
        {animalz.map((el) => <Animal id={el} color={props.animalColors ? props.animalColors[el] : ""} key={el}/>)}
      </div>
      );
}

export default Board;