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
  }
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_WORDS, actions.GET_SYLLABLES]
}

export default createReducer(initialState, completeReducer(reducerDescription));
