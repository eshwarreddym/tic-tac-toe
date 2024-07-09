import React, { useState } from "react";
import Players from "./components/players/Players.component.jsx";
import GameBoard from "./components/GameBoard/GameBoard.component.jsx";
import Winner from "./components/winner/Winner.component.jsx";
import Modal from "./components/modal/modal.component.jsx";
import Log from "./components/log/log.jsx";


function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [activePlayer, setActivePlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    function handleSelectSquare(rowIndex, colIndex) {
        if (winner) return;  // Prevent further moves if there's a winner or draw

        setGameTurns(prevTurns => {
            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: activePlayer },
                ...prevTurns,
            ];
            return updatedTurns;
        });
        setActivePlayer(currActivePlayer => (currActivePlayer === 'X' ? 'O' : 'X'));
    }

    function handleRetry() {
        setGameTurns([]);
        setActivePlayer('X');
        setWinner(null);
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                    <Players initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
                    <Players initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
                <Winner turns={gameTurns} setWinner={setWinner} />
                {winner && (
                    <Modal isOpen={!!winner} onClose={handleRetry}>
                        <div className='winner-message'>
                            {winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`}
                        </div>
                        <button onClick={handleRetry}>Retry</button>
                    </Modal>
                )}
            </div>
            <Log />
        </main>
    );
}

export default App;
