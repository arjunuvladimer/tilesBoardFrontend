import React from 'react';
import PropTypes from 'prop-types';
import { gameHeight, gameWidth } from "../../gameConfig/boardConfig";
import Tiles from "../Tiles/tiles";
import Frame from "../Frame/frame";

const Box = (props) => {
  const viewBox = [0, 0, gameWidth, gameHeight];

  return (
    <svg
      id="color-flood-canvas"
      preserveAspectRatio="xMidYMid meet"
      height="100%"
      width="100%"
      viewBox={ viewBox }
    >
      <Tiles tilesState={ props.tilesState } squareClicked={ props.squareClicked }/>
      <Frame/>
    </svg>
  );
};

Tiles.propTypes = {
  tilesState: PropTypes.shape({
    squares: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  squareClicked: PropTypes.func.isRequired,
};

export default Box;
