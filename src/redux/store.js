import {applyMiddleware, combineReducers as CR, compose, createStore} from 'redux';
import { fetchMiddleware, wrapCombineReducers } from 'redux-recompose';import thunk from 'redux-thunk';

import auth from './Auth/reducer';
import exercises from './Exercises/reducer';

const combineReducers = wrapCombineReducers(CR);

const reducers = combineReducers({
  auth,
  exercises
});

const middlewares = [thunk, fetchMiddleware];
const enhancers = [];

enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => reducers(state, action);

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
