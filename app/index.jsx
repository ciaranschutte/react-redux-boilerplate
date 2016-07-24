import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();
let store = createStore(
  combineReducers({
  }),
  applyMiddleware(logger)
);

const App = ({}) => {
    return(
      
    )
  
}

ReactDOM.render(<App/>, document.getElementById('app'));