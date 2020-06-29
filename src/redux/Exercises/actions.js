import { createTypes } from 'redux-recompose';

import { getWordsExercises, getSyllablesExercises } from '../../services/exercises';

export const actions = createTypes(['GET_WORDS', 'GET_SYLLABLES'], '@@EXERCISES');

const actionCreators = {
  getWordsExercises: (lvl) => ({
    type: actions.GET_WORDS,
    target: 'words',
    service: getWordsExercises,
    payload: lvl,
    successSelector: response => response.data.data,
    failureSelector: response => response.data?.message
  }),
  getSyllablesExercises: (lvl) => ({
    type: actions.GET_SYLLABLES,
    target: 'syllables',
    service: getSyllablesExercises,
    payload: lvl,
    successSelector: response => response.data.data,
    failureSelector: response => response.data?.message
  })
};

export default actionCreators;
