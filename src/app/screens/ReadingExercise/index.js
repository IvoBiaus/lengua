import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';
import Exercise from './components/Exercise';
import styles from './styles.module.scss';
import {LEVELS} from './constants/constants';
import ReadingImg from './assets/img1.PNG';
import ReadingImg2 from './assets/img2.JPG';
import ReadingImg3 from './assets/img3.JPG';

function ReadingExercise() {
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
  
  const handleExit = () => {
    history.push(Routes.EXERCISE_SELECT);
  }

  return (
    <div className={`item-1 full-height column space-around p-left-10 p-right-10 ${styles.mainContainer}`}>
      <div className={`row space-between full-width middle ${styles.scoreBar}`}>
        <span className='title-medium-b'>Puntaje record: 150</span>
        <button className={`button secondary title-medium-b ${styles.goBack}`} onClick={handleExit}>Salir</button>
        <span className='title-medium-b'>Tu puntaje: 200</span>
      </div>
      <Spacer height={20}/>
      <h1 className='title row center full-width'>Contesta - NIVEL {currentLvl}</h1>
      <h2 className='title-medium-b row center full-width'>Pon a prueba tu compresión lectora. Contesta las siguientes preguntas.</h2>
      <Spacer height={20}/>
      <div className={`item-1 full-width column space-around center ${styles.exercisesContainer}`}>
        {currentLvl===1 &&
          <img className={`full-width column space-around ${styles.image}`} src={ReadingImg} alt="Reading" />
        }
        {currentLvl===2 &&
          <img className={`full-width column space-around ${styles.image}`} src={ReadingImg2} alt="Reading" />
        }
        {currentLvl===3 &&
          <img className={`full-width column space-around ${styles.image}`} src={ReadingImg3} alt="Reading" />
        }
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

export default ReadingExercise;



