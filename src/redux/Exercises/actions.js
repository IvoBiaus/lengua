import { createTypes } from 'redux-recompose';

import { getWordsExercises, getSyllablesExercises, getReadingExercises } from '../../services/exercises';

export const actions = createTypes(['GET_WORDS', 'GET_SYLLABLES', 'GET_READINGS'], '@@EXERCISES');

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
  }),
  getReadingExercises: (lvl) => ({
    type: actions.GET_READINGS,
    target: 'readings',
    service: getReadingExercises,
    payload: lvl,
    successSelector: response => response.data.data,
    failureSelector: response => response.data?.message
  })
};

export default actionCreators;
