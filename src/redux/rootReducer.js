import {combineReducers} from 'redux'
import { tilesReducer } from './game/game.reducer';

const rootReducer = combineReducers({
    tiles: tilesReducer,
})

export default rootReducer