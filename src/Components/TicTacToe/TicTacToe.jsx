import React from "react";
import "./TicTacToe.css";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

let data = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

export default function TicTacToe() {
  let [count, setCount] = React.useState(0);
  let [lock, setLock] = React.useState(false);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    const row = Math.floor(num / 3);
    const col = num % 3;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}' />`;
      data[row][col] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${circle}' />`;
      data[row][col] = "o";
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}
