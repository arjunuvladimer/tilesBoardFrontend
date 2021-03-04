import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from './components/Box/box';
import ChangeGame from "./components/ChangeGame/changeGame";
import Moves from "./components/Moves/moves";

class App extends Component {
  componentDidMount() {
    // window.onresize = () => {
    //   const gridContainer = document.getElementsByClassName("gridContainer").item(0);
    //   const canvas = document.getElementById("color-flood-canvas");
    //   gridContainer.style.width = `${ canvas.style.width }px`;
    // };
    // window.onresize();

    const canvas = document.getElementById("color-flood-canvas");
    canvas.style.width = `${ canvas.style.height }px`;

    const axios = require('axios');
    const {tilesBoard} = this.props
    // Make a request for a user with a given ID
    axios.get('http://localhost:8080/api/game')
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
  }

  render() {
    return (
      <Fragment>
        <div id={ "content" }>
        
          <div className={ "gridContainer" }>
            
            <div className={ "title" }>
              Tiles Board Game
            </div>
            
            <div className={ "game" }>
              <Box
              tilesState={ this.props.tilesState }
                squareClicked={ this.props.pickColor }
                createBoard={ this.props.tilesBoard }
              />
              
            </div>

            <div className={ "informationContainer" }>
           
              <div className={ "informationRight" }>
                <Moves tilesState={ this.props.tilesState }/>
              </div>
             
             
            </div>
            
          </div>
          <div className={ "informationLeft" }>
          <ChangeGame tilesBoard={ this.props.tilesBoard }/>
        </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  tilesState: PropTypes.shape({
    squares: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
    })).isRequired,
    currentCount: PropTypes.number.isRequired,
    maxMoves: PropTypes.number.isRequired,
  }).isRequired,
  createBoard: PropTypes.func.isRequired,
  squareClicked: PropTypes.func.isRequired,
};

export default App;
