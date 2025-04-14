import React from 'react'
import Gamestate from './Gamestate'
function Gameover({gameState}) {
  switch (gameState) {
    case Gamestate.inProgress:
      return <></>;
    case Gamestate.playerOWins:
      return <div className='game-over'>O Wins</div>;
    case Gamestate.playerXWins:
      return <div className='game-over'>X Wins</div>;
      case Gamestate.draw:
        return <div className='game-over'>Draw</div>;
    default:
      return <></>
  }
}

export default Gameover
