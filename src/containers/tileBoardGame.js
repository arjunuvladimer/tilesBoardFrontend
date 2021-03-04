import { connect } from 'react-redux';
import App from '../App';
import {pickColor, tilesBoard } from '../redux/game/game.action';

const mapStateToProps = state => ({
  tilesState: state.tiles.tilesState,
});

const mapDispatchToProps = dispatch => ({
  pickColor: (tile_position) => {
    dispatch(pickColor(tile_position));
  },
  
  tilesBoard: (squares) => {
    dispatch(tilesBoard(squares));
  },
});

const TileBoardGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default TileBoardGame;
