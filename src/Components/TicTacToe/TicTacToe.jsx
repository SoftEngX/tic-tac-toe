import React from 'react'
import './TicTacToe.css'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'

export default function TicTacToe() {
  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>

      <div className="board">

      </div>
      <button className="reset">Reset</button>
    </div>
  )
}
