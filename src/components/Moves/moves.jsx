import React from 'react';
import PropTypes from 'prop-types';

const Moves = (props) => {
  return (
    <div id={ "currentCount" }>
      <div>
        Moves : { props.tilesState.currentCount + "/" + props.tilesState.maxMoves }
      </div>
    </div>
  );
};

Moves.propTypes = {
  tilesState: PropTypes.shape({
    currentCount: PropTypes.number.isRequired,
    maxMoves: PropTypes.number.isRequired,
  }).isRequired,
};

export default Moves;
