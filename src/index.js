import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { keyBy } from 'lodash';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { expenses as data } from './data';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const store = createStore(
//   combineReducers({
//     expenses: state => state || {}
//   }),
//   baseState,
//   composeEnhancers(applyMiddleware(thunk))
// )

const app = combineReducers(
  {
    expenses: (state={}, action) => {
    const { payload, type } = action;

    switch(type) {
      case 'MARK_AS_PAID':
        return {...state, [payload.id]: {
          ...state[payload.id],
          paid: payload.value
        }
      }
      default:
        return state
    }
  }
});

const initialState = {
  expenses: keyBy(data, 'id')
}
const store = createStore(app, initialState, composeEnhancers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
    registerServiceWorker()