import React, { useEffect, useState } from 'react'


export const Square = ({ handlePlayer, handleImg, handleMatrix, row, col, isGameOver }) => {
  const [img, setImg] = useState()

  useEffect(() => {
    if(isGameOver){
      setImg()
    }
  }, [isGameOver])

  const handleAddFigure = () => {
    if (!img) {
      setImg(handleImg())
      handleMatrix(row, col)
    }
  }
  return (
    <button onClick={handleAddFigure}>
      {img && <img className='image' src={img} />}
    </button>


  )
}