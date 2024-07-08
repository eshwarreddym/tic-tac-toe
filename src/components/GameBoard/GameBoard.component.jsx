import {useState} from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
function GameBoard({onSelectSquare , activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function selectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard) => {
                const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
                updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
                return updatedBoard;
            }
        );
        onSelectSquare();
    }
    return(
        <ol id='game-board'>
            {gameBoard.map((row,rowIndex)=> <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => <li key={colIndex}><button onClick={()=>selectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    );
}

export default GameBoard;