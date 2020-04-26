import React from 'react';
import { useHistory } from "react-router-dom";

import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';
import Exercise from './components/Exercise';
import {LEVELS} from './constants/constants';

function SyllablesExercise({level = 1}) {
  const history = useHistory();

  const hanldeSubmit = () => {
    history.push(Routes.HOME);
  }

  const current_lvl = LEVELS[level-1];

  return (
    <div className='item-1 full-height column end space-around p-left-10 p-right-10'>
      <Spacer height={40}/>
      <div className='item-1 full-width column space-around center'>
        {
          current_lvl.map((item) => <Exercise data={item}/>)
        }
      </div>
      <Spacer height={25}/>
      <button className='button primary' onClick={hanldeSubmit}>CONTINUAR</button>
      <Spacer height={40}/>
    </div>
  );
}

export default SyllablesExercise;
