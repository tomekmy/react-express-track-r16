import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {reducer as expensesReducer} from './expenses/index';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { keyBy } from 'lodash';

// import { expenses as data } from './data';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const app = combineReducers(
  {
    expenses: expensesReducer
  }
);

// const initialState = {
//   expenses: keyBy(data, 'id')
// }

const store = createStore(app, {}, composeEnhancers(applyMiddleware(thunk, promiseMiddleware())));

ReactDOM.render(<Provider store={store}><Router><Route render={() => <App />} path="/" /></Router></Provider>, document.getElementById('root'))
    registerServiceWorker()