import React, { useState } from 'react';

import styles from './styles.module.scss';
import Spacer from '@/app/components/Spacer';

function Exercise({data}) {
  const [unused, setUnused] = useState(data.syllables);
  const [userAnswer, setUserAnswer] = useState([]);

  const addToAnswer = (syllable) => {
    const index = unused.indexOf(syllable);
    if (index > -1) {
      //TODO disable handle once the option is selected. Create a sub-component for the Syllable
      //unused.splice(index, 1)
      //setUnused([...unused]);
    }

    userAnswer.push(syllable)
    setUserAnswer([...userAnswer]);
  }

  const removeFromAnswer = (syllable) => {
    const index = userAnswer.indexOf(syllable);
    if (index > -1) {
      userAnswer.splice(index, 1)
      setUserAnswer([...userAnswer]);
    }
    //TODO enable handle once the option is selected. Create a sub-component for the Syllable
    //unused.push(syllable)
    //setUnused([...unused]);
  }

  return (
    <div className={`full-width ${styles.mainContainer}`}>
      <div className='row center'>
        {
          unused.map((item) => <span className={`title-medium m-right-5 ${styles.syllable}`} onClick={() => addToAnswer(item)} >{item}</span>)
        }
      </div>
      <Spacer width={25} height={30}/>
      <div className={`full-height column center ${styles.answer}`}>
        <span class="row middle center">Tu respuesta: </span>
        <Spacer width={25} height={25}/>
        <div className={`row ${styles.box}`}>
          {
            userAnswer.map((item) => (
              <>
                <span className={`title-medium  ${styles.syllable}`} onClick={() => removeFromAnswer(item)} >{item}</span>
                <Spacer width={5}/>
              </>
            )
          )
          }
        </div>
      </div>
    <Spacer height={40}/>
    </div>
  );
}

export default Exercise;
