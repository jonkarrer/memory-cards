import React, { useState } from 'react'
import './LevelOne.css';
import broncos from "./assets/broncos.png";
import falcons from "./assets/falcons.png";
import ravens from "./assets/ravens.png";
import packers from "./assets/greenbay.png";



function LevelOne(props) {
  let [orderArr, setOrder] = useState([1, 2, 3, 4]);
  let [broncoCounter, setBronco] = useState(0);
  let [falconCounter, setFalcon] = useState(20);
  let [ravenCounter, setRaven] = useState(30);
  let [packerCounter, setPacker] = useState(40);
  let [gameCounter, setGame] = useState(0);
  function nextLevel() {
    props.nextLevel(props.level + 1);
  }
  function youLose() {
    props.nextLevel(props.level - 1);
  }

  const shuffleOrder = (counter) => {
    if (gameCounter === 3) {
      nextLevel()
    }else {
    if (counter < 10) {
      if (counter === 1) {
        youLose();
      }
      setGame(gameCounter + 1);
      setBronco(broncoCounter + 1);
    } else if (counter >= 20 && counter < 30) {
      if (counter === 21) {
        youLose();
      }
      setGame(gameCounter + 1);
      setFalcon(falconCounter + 1);
    } else if (counter >= 30 && counter < 40) {
      if (counter === 31) {
        youLose();
      }
      setGame(gameCounter + 1);
      setRaven(ravenCounter + 1);
    }else {
      if (counter === 41) {
        youLose();
      }
      setGame(gameCounter + 1);
      setPacker(packerCounter + 1);
    }
    }
    orderArr = [];
    for (var i = 4; i > 0; i--) {
      var j = Math.floor(Math.random() * 100);
      orderArr.push(j);
    }
    return orderArr;
  }
  
  return (
    <React.Fragment>
      <div id="LevelOne">
        <div 
        onClick={ () => setOrder(shuffleOrder(broncoCounter))}
        style={{order: orderArr[0]}} 
        className="card-wrapper">
          <img src={ broncos } />
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(falconCounter))}
        style={{order: orderArr[1]}} 
        className="card-wrapper">
         <img src={ falcons }/>
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(ravenCounter))}
        style={{order: orderArr[2]}} 
        className="card-wrapper">
          <img src={ ravens }/>
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(packerCounter))}
        style={{order: orderArr[3]}} 
        className="card-wrapper">
          <img src={ packers }/>
        </div>
      </div>
    </React.Fragment>
  )
}
export default LevelOne;