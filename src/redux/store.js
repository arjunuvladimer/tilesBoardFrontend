import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger'
import rootReducer from './rootReducer';

// Middlewares that the store is expecting from redux is generally an array
const middlewares =[] 


if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}


const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store

