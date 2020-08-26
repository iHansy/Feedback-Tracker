import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducers below this
//I could have combined most of these reducers into 1 bigger reducer, but I feel like this is good practice
const feelingReducer = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload //this creates a new state
    } else if (action.type === 'RESET') {
        return action.payload
    }
    return state;
}

const understandingReducer = (state = {}, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    } else if (action.type === 'RESET') {
        return action.payload
    }
    return state;
}

const supportedReducer = (state = {}, action) => {
    if (action.type === 'SET_SUPPORTED') {
        return action.payload
    } else if (action.type === 'RESET') {
        return action.payload
    }
    return state;
}

const commentsReducer = (state = {}, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    } else if (action.type === 'RESET') {
        return action.payload
    }
    return state;
}

const feedbackHistoryReducer = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return action.payload
    }
    return state;
}

//always need a store!
const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer,
        feedbackHistoryReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
