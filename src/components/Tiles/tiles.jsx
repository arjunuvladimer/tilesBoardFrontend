import React from 'react';
import PropTypes from "prop-types"

const Squares = (props) => {
  return (
    <React.Fragment>
      {
        props.tilesState.squares.map((square, index) => {
          return <rect
            x={ square.x }
            y={ square.y }
            width={ square.width }
            height={ square.height }
            fill={ square.color }
            stroke={ square.color }
            onClick={ () => props.squareClicked(index) }
            id={ "square-" + index }
            key={ "square-" + index }
          />;
        })
      }
    </React.Fragment>
  );
};

Squares.propTypes = {
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

export default Squares;
