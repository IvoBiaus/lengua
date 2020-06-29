import api from '../config/api';

export const getScores = () => api.get("/scores/literature/scores");
export const setScore = (score) => api.post("/scores/score/", score);
export const getScoreByGame = (game) => api.get(`/scores/${game}`);
