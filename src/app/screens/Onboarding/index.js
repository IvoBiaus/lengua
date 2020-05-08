import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";

import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';
import STEPS from './constants/constants';
import styles from './styles.module.scss';

function Onboarding() {
  const history = useHistory();

  const [step, setStep] = useState(0);

  const handleNext = () => {
    if(step < 1){
      setStep(step+1);
    }
    else {
      history.push(Routes.EXERCISE_SELECT);
    }
  }

  return (
    <div className={`item-1 full-height column p-left-10 p-right-10 ${styles.mainContainer}`}>
      <Spacer height={30}/>
      <div className='column middle center'>
        <h1 className='title-medium'>{STEPS[step].title}</h1>
        <Spacer height={10}/>
        <h1 className='title-medium'>{STEPS[step].subtitle}</h1>
      </div>
      <Spacer height={35}/>
      <div className='row bottom end'>
        <div className='row center full-width'>
          <img className={`full-width ${styles.image} row start top`} src={STEPS[step].image} alt="Onboarding" />
        </div>
        <Spacer height={25}/>
        <button className='button primary' onClick={handleNext}>CONTINUAR</button>
      </div>
      <Spacer height={40}/>
    </div>
  );
}

export default Onboarding;
