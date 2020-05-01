import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';
import Exercise from './components/Exercise';
import styles from './styles.module.scss';
import {LEVELS} from './constants/constants';

function SyllablesExercise() {
  const history = useHistory();

  const [currentLvl, setCurrentLvl] = useState(1);
  const [lvlData, setlvlData] = useState([...LEVELS[0]]);

  const handleNext = () => {
    if(currentLvl < 3){
      setCurrentLvl(currentLvl+1);
      setlvlData([...LEVELS[currentLvl]]);
    }
    else {
      history.push(Routes.HOME);
    }
  }

  return (
    <div className={`item-1 full-height column space-around p-left-10 p-right-10 ${styles.mainContainer}`}>
      <Spacer height={30}/>
      <h1 className='title row center full-width'>Sílabas - NIVEL {currentLvl}</h1>
      <Spacer height={10}/>
      <h1 className='title-medium-b row center full-width'>Ordena las sílabas correctamente, haciendo click en cada una, para formar la palabra.</h1>
      <Spacer height={20}/>
      <div className={`item-1 full-width column space-around center ${styles.exercisesContainer}`}>
        {
          lvlData.map((item) => <Exercise key={`${currentLvl}-${item.result}`} data={item}/>)
        }
      </div>
      <Spacer height={25}/>
      <button className='button primary' onClick={handleNext}>CONTINUAR</button>
      <Spacer height={40}/>
    </div>
  );
}

export default SyllablesExercise;
