import React from 'react'

function Tile({className, value, onClick, playerTurn}) {
  // let hoverClass = null;
  // if(value == null && playerTurn != null) {
  //   hoverClass = `${playerTurn.toLowerClass()} - hover`;
  // }
  return (
   <>
    <div onClick={onClick} className={`tile ${className} `}>{value}</div>
   </>
  )
}

export default Tile
