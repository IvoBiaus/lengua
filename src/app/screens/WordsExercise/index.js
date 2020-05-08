import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';
import Exercise from './components/Exercise';
import styles from './styles.module.scss';
import {LEVELS} from './constants/constants';

function WordsExercise() {
  const history = useHistory();

  const [currentLvl, setCurrentLvl] = useState(1);
  const [lvlData, setlvlData] = useState([...LEVELS[0]]);

  const handleNext = () => {
    if(currentLvl < 3){
      setCurrentLvl(currentLvl+1);
      setlvlData([...LEVELS[currentLvl]]);
    }
    else {
      history.push(Routes.EXERCISE_SELECT);
    }
  }

  return (
    <div className={`item-1 full-height column space-around p-left-10 p-right-10 ${styles.mainContainer}`}>
      <div className='row space-between full-width bottom'>
        <span className='title-medium-b'>Puntaje record: 45451</span>
        <Spacer height={45}/>
        <span className='title-medium-b'>Tu puntaje: 32895</span>
      </div>
      <h1 className={`title row center full-width ${styles.title}`}>Palabras incorrectas - NIVEL {currentLvl}</h1>
      <Spacer height={10}/>
      <h2 className='title-medium-b row center full-width'>Encontra en cada frase la palabra incorrecta. Luego escribila correctamente.</h2>
      <Spacer height={20}/>
      <div className={`item-1 full-width column space-around center ${styles.exercisesContainer}`}>
        {
          lvlData.map((item, index) => <Exercise key={`${currentLvl}-${index}`} data={item}/>)
        }
      </div>
      <Spacer height={25}/>
      <button className='button primary' onClick={handleNext}>CONTINUAR</button>
      <Spacer height={40}/>
    </div>
  );
}

export default WordsExercise;
