import React from 'react';
import { gameWidth, gameHeight } from '../../gameConfig/boardConfig';

const Frame = () => {
  return (
    <React.Fragment>
      <line x1={ 0 } x2={ gameWidth } y1={ 2 } y2={ 2 } stroke={ "black" } strokeWidth={ 5 } id={ "top" }/>
      <line x1={ 0 } x2={ gameWidth } y1={ gameHeight - 2 } y2={ gameHeight - 2 } stroke={ "black" } strokeWidth={ 5 }
            id={ "bottom" }/>
      <line x1={ 2 } x2={ 2 } y1={ 0 } y2={ gameHeight } stroke={ "black" } strokeWidth={ 5 } id={ "left" }/>
      <line x1={ gameWidth - 2 } x2={ gameWidth - 2 } y1={ 0 } y2={ gameHeight } stroke={ "black" } strokeWidth={ 5 }
            id={ "right" }/>
    </React.Fragment>
  );
};

export default Frame;
