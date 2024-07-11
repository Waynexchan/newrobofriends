import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { searchRobots,  requestRobots} from './reducers';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';

const logger = createLogger()
const rootReducer = combineReducers({ searchRobots, requestRobots}) //Combine Roots
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
