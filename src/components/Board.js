import React, { useEffect, useState } from 'react'
import { style } from "../style.css"
import { Square } from './Square';
import x from '../img/x.png'
import o from '../img/circulo.png'
import swal from 'sweetalert2';

export const Board = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState()

    const initialMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const [matrix, setMatrix] = useState(initialMatrix)

    const players = ["Jugador 1", "Jugador 2"]
    const [player, setPlayer] = useState(0);
    const handlePlayer = () => {
        if (player == 0) setPlayer(1)
        else setPlayer(0)
    }
    const handleImg = () => {
        if (player == 0) return (x)
        else return (o)
    }

    const handleMatrix = (row, col) => {
        let newMatrix = matrix
        newMatrix[row][col] = players[player]

        const isWin = handleWin(newMatrix)
        if (!isWin) {
            setMatrix(newMatrix)
            handlePlayer()
        }

    }

    const handleWin = (matrix) => {
        const isFirstLineWin = (matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2])
        const isSecondLineWin = (matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2])
        const isThirdLineWin = (matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2])
        const isFirstColWin = (matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0])
        const isSecondColWin = (matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1])
        const isThirdColWin = (matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2])
        const isDiag1Win = (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2])
        const isDiag2Win = (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0])
        const isWin = isFirstLineWin || isSecondLineWin || isThirdLineWin || isFirstColWin || isSecondColWin || isThirdColWin || isDiag1Win || isDiag2Win
        setIsGameOver(isWin)
        return isWin
    }

    const alert = () => {
        if (isGameOver) {
            swal.fire({
                html: `<h1>Ganaste ${players[player]}</h1>`,
                text: '¡Ganaste!',
                button: 'Aceptar'
            }).then(() => {
                setMatrix(initialMatrix)
                setPlayer(0)
                setIsGameOver(false)
            });
        }
    }

    useEffect(() => {
        alert()
    }, [isGameOver])

    return (
        <div className='container1'>
            <h2>{players[player]}</h2>
            <div className='container2'>

                <div className='row'>
                    <Square row={0} col={0} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix} isGameOver = {isGameOver}/>

                    <hr />
                    <Square row={0} col={1} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>

                    <hr />
                    <Square row={0} col={2} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>

                </div>
                <hr />
                <div className='row'>
                    <Square row={1} col={0} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>

                    <hr />
                    <Square row={1} col={1} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>

                    <hr />
                    <Square row={1} col={2} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>

                </div>
                <hr />
                <div className='row'>
                    <Square row={2} col={0} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>

                    <hr />
                    <Square row={2} col={1} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>
                    <hr />
                    <Square row={2} col={2} handlePlayer={handlePlayer} handleImg={handleImg} handleMatrix={handleMatrix}  isGameOver = {isGameOver}/>
                </div>F
            </div>
        </div>


    )
}
