import { useEffect } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function Winner({ turns, setWinner }) {
    useEffect(() => {
        const gameBoard = initialGameBoard.map(row => [...row]);
        for (const turn of turns) {
            const { square, player } = turn;
            const { row, col } = square;
            gameBoard[row][col] = player;
        }

        const winningPatterns = [
            // Rows
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Columns
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonals
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];

        for (const pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a[0]][a[1]] && gameBoard[a[0]][a[1]] === gameBoard[b[0]][b[1]] && gameBoard[a[0]][a[1]] === gameBoard[c[0]][c[1]]) {
                setWinner(gameBoard[a[0]][a[1]]);
                return;
            }
        }

        // Check for draw
        const isDraw = gameBoard.every(row => row.every(cell => cell !== null));
        if (isDraw) {
            setWinner('Draw');
        }

    }, [turns, setWinner]);

    return null;
}

export default Winner;
