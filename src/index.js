import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducers below this
const feelingReducer = (state = {}, action) => {
    if (action.type === 'SET_FEELING') { 
        return action.payload //this creates a new state
    }
    return state;
}

const understandingReducer = (state = {}, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    return state
}

//always need a store!
const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
