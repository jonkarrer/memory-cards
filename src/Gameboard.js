import React, {useState} from 'react'
import './Gameboard.css';
import Intro from './Intro';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import LevelThree from './LevelThree';



export default function Gameboard(props) {
  const levelIndicator = document.getElementById('Header');
  const underLine = document.getElementById("underLine");
  const levelText = document.getElementById("level");
  const [level, setLevel] = useState(0);
  function changeLevel(newLevel) {
    setLevel(newLevel)
  };

  if (level === 0) {
    return (
      <React.Fragment>
      <div id = "gameBoard">
        <Intro level = {level} nextLevel = {changeLevel}/>
      </div>
      </React.Fragment>
    )
  }
  if (level === 1) {
    levelText.innerText = "Level 1";
    underLine.style.justifyContent = "center";
    levelIndicator.style.justifyContent = "center";
    return (
      <React.Fragment>
      <div id = "gameBoard">
        <LevelOne level = {level} nextLevel = {changeLevel}/>
      </div>
      </React.Fragment>
    )
  }else if (level === 2){
    levelText.style.color = "yellow";
    underLine.style.background = "yellow";
    levelIndicator.style.background = "darkslateblue";
    levelText.innerText = "Level 2";
    underLine.style.justifyContent = "flex-start";
    levelIndicator.style.justifyContent = "flex-start";
    return (
      <React.Fragment>
      <div id = "gameBoard">
        <LevelTwo level = {level} nextLevel = {changeLevel}/>
      </div>
      </React.Fragment>
    )
  }else if (level === 3){
    levelText.style.color = "green";
    underLine.style.background = "green";
    levelIndicator.style.background = "grey";
    levelText.innerText = "Level 3";
    underLine.style.justifyContent = "flex-end";
    levelIndicator.style.justifyContent = "flex-end";
    return (
      <React.Fragment>
      <div id = "gameBoard">
       <LevelThree level = {level} nextLevel = {changeLevel}/>
      </div>
      </React.Fragment>
    )
  }else{
    return (
      <React.Fragment>
      <div id = "gameBoard">
       Winner!
      </div>
      </React.Fragment>
    )
  }
}
