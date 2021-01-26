import React, { Component, useState, useEffect } from 'react'
import LevelOne from './LevelOne';
import './LevelOne.css';
import broncos from "./assets/broncos.png";
import falcons from "./assets/falcons.png";
import ravens from "./assets/ravens.png";
import packers from "./assets/greenbay.png";
import panther from "./assets/panther.png";
import saint from "./assets/saint.png";
import lion from "./assets/lions.png";
import jag from "./assets/jags.png";
import cowboy from "./assets/cowboy.png";
import patriot from "./assets/patriot.png";
import eagle  from "./assets/eagle.png";
import charger from "./assets/charger.png";


function LevelThree(props) {
  let [orderArr, setOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let [broncoCounter, setBronco] = useState(0);
  let [falconCounter, setFalcon] = useState(20);
  let [ravenCounter, setRaven] = useState(30);
  let [packerCounter, setPacker] = useState(40);

  let [jagCounter, setJag] = useState(50);
  let [pantherCounter, setPanther] = useState(60);
  let [saintCounter, setSaint] = useState(70);
  let [lionCounter, setLion] = useState(80);

  let [cowboyCounter, setCowboy] = useState(90);
  let [patriotCounter, setPatriot] = useState(100);
  let [eagleCounter, setEagle] = useState(110);
  let [chargerCounter, setCharger] = useState(120);
  let [gameCounter, setGame] = useState(0);
  function nextLevel() {
    props.nextLevel(props.level + 1);
  }
  function youLose() {
    props.nextLevel(props.level - 1);
  }

  const shuffleOrder = (counter) => {
    if (gameCounter === 11) {
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
    }else if (counter >= 40 && counter < 50) {
      if (counter === 41) {
        youLose();
      }
      setGame(gameCounter + 1);
      setPacker(packerCounter + 1);
    }else if (counter >= 50 && counter < 60) {
      if (counter === 51) {
        youLose();
      }
      setGame(gameCounter + 1);
      setJag(jagCounter + 1);
    } else if (counter >= 60 && counter < 70) {
      if (counter === 61) {
        youLose();
      }
      setGame(gameCounter + 1);
      setPanther(pantherCounter + 1);
    } else if (counter >= 70 && counter < 80) {
      if (counter === 71) {
        youLose();
      }
      setGame(gameCounter + 1);
      setSaint(saintCounter + 1);
    }else if (counter >=80 && counter < 90 ) {
      if (counter === 81) {
        youLose();
      }
      setGame(gameCounter + 1);
      setLion(lionCounter + 1);
    }else if (counter >= 90 && counter < 100) {
      if (counter === 91) {
        youLose();
      }
      setGame(gameCounter + 1);
      setCowboy(cowboyCounter + 1);
    } else if (counter >= 100 && counter < 110) {
      if (counter === 101) {
        youLose();
      }
      setGame(gameCounter + 1);
      setPatriot(patriotCounter + 1);
    } else if (counter >= 110 && counter < 120) {
      if (counter === 111) {
        youLose();
      }
      setGame(gameCounter + 1);
      setEagle(eagleCounter + 1);
    }else {
      if (counter === 121) {
        youLose();
      }
      setGame(gameCounter + 1);
      setCharger(chargerCounter + 1);
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
        <div 
        onClick={ () => setOrder(shuffleOrder(jagCounter))}
        style={{order: orderArr[0]}} 
        className="card-wrapper">
          <img src={ jag } />
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(pantherCounter))}
        style={{order: orderArr[1]}} 
        className="card-wrapper">
         <img src={ panther }/>
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(saintCounter))}
        style={{order: orderArr[2]}} 
        className="card-wrapper">
          <img src={ saint }/>
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(lionCounter))}
        style={{order: orderArr[3]}} 
        className="card-wrapper">
          <img src={ lion }/>
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(cowboyCounter))}
        style={{order: orderArr[0]}} 
        className="card-wrapper">
          <img src={ cowboy } />
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(patriotCounter))}
        style={{order: orderArr[1]}} 
        className="card-wrapper">
         <img src={ patriot }/>
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(eagleCounter))}
        style={{order: orderArr[2]}} 
        className="card-wrapper">
          <img src={ eagle }/>
        </div>
        <div 
        onClick={ () => setOrder(shuffleOrder(chargerCounter))}
        style={{order: orderArr[3]}} 
        className="card-wrapper">
          <img src={ charger }/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LevelThree;
