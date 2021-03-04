import React from 'react';
import PropTypes from 'prop-types';

const ChangeGame = (props) => {
    const axios = require('axios');
    const {tilesBoard} = props
    // Make a request for a user with a given ID
    const newBoard = () =>  axios.get('http://localhost:8080/api/game')
      .then(function (response) {
        // handle success
        tilesBoard(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  return (
    <div  id={ "newGame" }>
      <button className={ "button button2" }
        onMouseUp={ () => {
          newBoard();
        } }
      >
        CHANGE GAME
      </button>
    </div>
  );
};

ChangeGame.propTypes = {
  createBoard: PropTypes.func.isRequired,
};

export default ChangeGame;
