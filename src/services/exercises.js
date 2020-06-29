import api from '../config/api';

export const getWordsExercises = (lvl) => api.get(`/wordsExercises/${lvl}`);

export const getSyllablesExercises = (lvl) => api.get(`/syllablesExercises/${lvl}`);
