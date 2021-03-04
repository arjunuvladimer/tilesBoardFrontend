import { gameHeight, numColumns, numRows } from "../../gameConfig/boardConfig";
import { xyToPos,updateSquares } from "../../gameConfig/gameUtilities";

export const createTiles = (initialGameState) => {
  let squares = [];
  let squareSize = (gameHeight) / numRows;
  let colors = ["blue", "red", "green", "yellow", "orange", "pink", "purple"];

  let x, y;
  for (x = 0; x < numColumns; x++) {
    for (y = 0; y < numRows; y++) {
      let color = colors[Math.floor(Math.random() * colors.length)];
      squares.push({
        x: y * squareSize,
        y: x * squareSize,
        width: squareSize,
        height: squareSize,
        color: color,
        position: xyToPos(y, x),
      })
    }
  }

  return {
    tilesState: {
      ...initialGameState,
      squares: squares,
    }
  }
}


export const colorPicked = (state, position) => {
  if (state.tilesState.currentCount === state.tilesState.maxMoves) {
    return { ...state }
  }

  let squares = state.tilesState.squares;
  let currentCount = state.tilesState.currentCount;

  let oldColor = squares[0].color;
  let newColor = squares[position].color;

  if (oldColor !== newColor) {
    squares = updateSquares(squares, 0, oldColor, newColor);
    currentCount = currentCount + 1;
  }

  return {
    ...state,
    tilesState: {
      ...state.tilesState,
      squares: squares,
      currentCount: currentCount,
    }
  }
}