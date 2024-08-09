export default function GameBoard({ onSelectSqaure, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSqaure(rowIndex, colIndex)}
                  disabled={playSymbol !== null}
                >
                  {playSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
