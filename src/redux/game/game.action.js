import { gameActionTypes } from "./game.types";


export const pickColor = (tile_position) => ({
  type: gameActionTypes.PICK_COLOR,
  tile_position,
});

export const tilesBoard = (squares) => ({
  type: gameActionTypes.TILES_BOARD,
  squares,
});

export const getSquare = () => ({
  type: gameActionTypes.GET_SQUARE
})
