import { gameActionTypes } from "./game.types";
import { colorPicked } from "./game.utils";
  
const initialState = {
    tilesState: {
      squares: [],
      currentCount: 0,
      maxMoves: 25,
  },
}
  
export const tilesReducer = (state = initialState, action) => {
    switch (action.type) {
      case gameActionTypes.PICK_COLOR:
        return colorPicked(state, action.tile_position);
      case gameActionTypes.TILES_BOARD:
        const {squares} = action
        return {
          tilesState: {
            ...state.tilesState,
            squares: squares,
          }
        }
      default:
        return state;
    }
}
  
  