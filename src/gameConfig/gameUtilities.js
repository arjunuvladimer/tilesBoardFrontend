import { numColumns, numRows } from "./boardConfig";

export const updateSquares = (squares, pos, oldColor, newColor) => {
  let r = [0, 1, 0, -1];
  let c = [-1, 0, 1, 0];

  function doUpdate(pos) {
    let currentPos = posToXY(pos);
    if (oldColor === newColor || squares[pos].color !== oldColor) {
      return;
    }

    squares[pos].color = newColor;

    let i;
    for (i = 0; i < 4; i++) {
      let newPos = xyToPos(currentPos.x + r[i], currentPos.y + c[i]);
      if (newPos >= 0 && newPos < numColumns * numRows) {
        doUpdate(newPos);
      }
    }
  }

  doUpdate(pos);

  return squares;
};

export const posToXY = (position) => {
  if (position < 0 || position > numRows * numColumns) {
    return {
      x: -1,
      y: -1,
    }
  }

  return {
    x: position % numColumns,
    y: Math.floor(position / numColumns),
  }
};

export const xyToPos = (x, y) => {
  if (x < 0 || y < 0) {
    return -1
  }

  return x + (numRows * y)
};
