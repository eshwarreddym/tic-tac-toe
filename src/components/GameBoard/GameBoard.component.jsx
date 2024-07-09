import { useState, useEffect } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    useEffect(() => {
        const newGameBoard = initialGameBoard.map(row => [...row]);
        for (const turn of turns) {
            const { square, player } = turn;
            const { row, col } = square;
            newGameBoard[row][col] = player;
        }
        setGameBoard(newGameBoard);
    }, [turns]);

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;
