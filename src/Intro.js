import React from 'react'
import './Intro.css';

function Loser(props) {
  function nextLevel() {
    props.nextLevel(props.level + 1);
  };
  return (
    <div id="intro">
      <div id="instructions">Instructions</div>
    <ul>
      <li><strong>Goal: </strong> Use your memory not to select the same logo twice.</li>
      <li><strong>Play: </strong>
        Select an NFL icon to start. 
      The cards are then shuffled, and you have to pick again. 
      </li>
      <li><strong>Level-Up: </strong>There will be more cards displayed as you pass each level. Good Luck!</li>
    </ul>
    <button onClick={nextLevel}>Start</button>
    </div>
    
    
  )
}

export default Loser
