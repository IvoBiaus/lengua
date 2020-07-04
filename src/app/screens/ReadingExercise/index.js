import React, { useEffect, useState  } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../../redux/Exercises/actions';
import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';
import Exercise from './components/Exercise';
import styles from './styles.module.scss';
import { setScore, getScoreByGame,  } from '@/services/score';

function ReadingExercise() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [currentLvl, setCurrentLvl] = useState(1);
  const [lvlScore, setLvlScore] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [topPlayerScore, setTopPlayerScore] = useState(0);
  const exercises = useSelector( state => state.exercises.readings.exercises);
  const exerciseImage = useSelector( state => state.exercises.readings.imageURL);

  const addScore = (newScore) => setLvlScore(lvlScore + newScore);
  const removeScore = (newScore) => setLvlScore(lvlScore - newScore);
  

  const getTopPlayer = async () => {
    const score = await getScoreByGame("Readings").then((result) => { // TODO CHECK GAME NAME !!!
      return result.data.data[0].score;
    }).catch((err) => {
      return 0;
    });
    setTopPlayerScore(score);
  };

  const saveGame = () => {
    const savedGame = {lvl: currentLvl+1, score: gameScore + lvlScore };
    localStorage.setItem("readings", JSON.stringify(savedGame));
  }

  const loadGame = () => {
    const savedGame = JSON.parse(localStorage.getItem("readings"));
    if(savedGame) {
      setCurrentLvl(savedGame.lvl);
      setGameScore(savedGame.score);
    }
  }
  
  const deleteSavedGame = () => {
    localStorage.removeItem("readings");
  }

  useEffect(() => {
    if(currentLvl === 1){
      loadGame();
    }
    dispatch(actions.getReadingExercises(currentLvl));
    getTopPlayer();
  }, [currentLvl, dispatch]);

  const handleNext = () => {
    if(currentLvl < 3){
      saveGame();
      setGameScore(gameScore + lvlScore);
      setLvlScore(0);
      setCurrentLvl(currentLvl+1);
    }
    else {
      const userScore = {
        name: localStorage.getItem("username"),
        game: "Readings",
        score: gameScore + lvlScore
      };
      setScore(userScore);
      deleteSavedGame();
      history.push(Routes.EXERCISE_SELECT);
    }
  }


  const handleExit = () => {
    deleteSavedGame();
    history.push(Routes.EXERCISE_SELECT);
  }

  return (
    <div className={`item-1 full-height column space-around p-left-10 p-right-10 ${styles.mainContainer}`}>
      <div className={`row space-between full-width middle ${styles.scoreBar}`}>
        <span className='title-medium-b'>Puntaje record: {topPlayerScore}</span>
        <button className={`button secondary title-medium-b ${styles.goBack}`} onClick={handleExit}>Salir</button>
        <span className='title-medium-b'>Tu puntaje: {gameScore}</span>
      </div>
      <Spacer height={20}/>
      <h1 className='title row center full-width'>Contesta - NIVEL {currentLvl}</h1>
      <h2 className='title-medium-b row center full-width'>Pon a prueba tu compresión lectora. Contesta las siguientes preguntas.</h2>
      <Spacer height={20}/>
      <div className={`item-1 full-width column space-around center ${styles.exercisesContainer}`}>
      <img className={`full-width column space-around ${styles.image}`} src={exerciseImage} alt="Readings" />
      {
        exercises.map((item, index) => <Exercise key={`${currentLvl}-${index}`} data={item} points={10*currentLvl} addScore={addScore} removeScore={removeScore} />)
      }
     </div>
      <Spacer height={25}/>
      <button className='button primary' onClick={handleNext}>CONTINUAR</button>
      <Spacer height={40}/>
    </div>
  );
}

export default ReadingExercise;



