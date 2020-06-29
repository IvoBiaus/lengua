import {createTypes, completeTypes} from 'redux-recompose';
import {login, register} from '../../services/auth';

export const actions = createTypes(completeTypes(['LOGIN_USER', 'REGISTER_USER'], ['LOGOUT_USER']), '@@USER');

const actionCreators = {
  loginUser: (user) => ({
    type: actions.LOGIN_USER,
    target: 'user',
    service: login,
    payload: user,
    successSelector: (response) => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', user.name);
    },
    failureSelector: (response) => response.problem
  }),
  registerUser: (newUser) => ({
    type: actions.REGISTER_USER,
    service: register,
    payload: newUser,
    successSelector: (response) => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', newUser.name);
    },
    failureSelector: (response) => response.problem
  }),
  logoutUser: () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    dispatch({
      type: actions.LOGOUT_USER
    });
  }
};

export default actionCreators;
