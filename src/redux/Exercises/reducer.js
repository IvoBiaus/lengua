import {createReducer, completeState, completeReducer} from 'redux-recompose';

import {actions} from './actions';

const stateDescription = {
  words: {
    level: '',
    exercises: []
  },
  syllables: {
    level: '',
    exercises: []
  },
  readings: {
    level: '',
    imageURL: "",
    exercises: []
  }
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_WORDS, actions.GET_SYLLABLES, actions.GET_READINGS]
}

export default createReducer(initialState, completeReducer(reducerDescription));
