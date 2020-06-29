import {createReducer, completeReducer, completeState} from 'redux-recompose';

import {actions} from './actions';

const stateDescription = {
  user: {}
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.LOGIN_USER, actions.REGISTER_USER],
  override: {
    [actions.LOGOUT_USER]: () => initialState
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
