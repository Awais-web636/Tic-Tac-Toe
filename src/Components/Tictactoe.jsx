import React from 'react'
import { useState, useEffect } from 'react'
import Board from './Board'
import Gameover from './Gameover';
import Gamestate from './Gamestate';
import Rest from './Rest';

const PLAYER_X = "X";
const PLAYER_O = "O";

const winnerCombinations = [
  //Row
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  //Column
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  //Diagonal
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" }
];

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for (const { combo, strikeClass } of winnerCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
      setStrikeClass(strikeClass);
      if (tileValue1 === PLAYER_X) {
        setGameState(Gamestate.playerXWins);
      } else {
        setGameState(Gamestate.playerOWins);
      }
      return;
    }
  }

  // Check for draw
  const allTilesFilled = tiles.every(tile => tile !== null);
  if (allTilesFilled) {
    setGameState(Gamestate.draw);
  }
}

function Tictactoe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(Gamestate.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== Gamestate.inProgress || tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  }



  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
    setGameState(Gamestate.inProgress);
  }

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <Gameover gameState={gameState} />
      <Rest gameState={gameState} onReset={handleReset}/>
    </>
  )
}

export default Tictactoe;