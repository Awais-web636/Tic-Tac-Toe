import React from 'react'
import Gamestate from './Gamestate'
function Rest({gameState,onReset}) {
  if(Gamestate === gameState.inProgress) {
   return;
  }
  return (
    <>
    <button onClick={onReset} className='reset-button'>Rest</button>
    </>
  )
}

export default Rest
