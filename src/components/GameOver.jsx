function GameOver({ winnerSymbol, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winnerSymbol ? `${winnerSymbol} has won!` : 'It\'s a draw!'}</p>
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  )
}

export default GameOver;