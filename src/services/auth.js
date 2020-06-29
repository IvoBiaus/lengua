import api from '../config/api';

export const login = (user) => api.post('/users/login', user);

export const register = (newUser) => api.post('/users/registration', newUser);