import React, { useState } from 'react';

import styles from './styles.module.scss';
import Spacer from '@/app/components/Spacer';

function Exercise({data}) {
  const [unused, setUnused] = useState(data.syllables);
  const [userAnswer, setUserAnswer] = useState([]);

  const addToAnswer = (syllable) => {
    const index = unused.indexOf(syllable);
    if (index > -1) {
      unused.splice(index, 1)
      setUnused([...unused]);
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

    unused.push(syllable)
    setUnused([...unused]);
  }

  return (
    <div className='row space-around middle'>
      <div className='row'>
        {
          unused.map((item) => <span className={`title-medium m-right-5 ${styles.syllable}`} onClick={() => addToAnswer(item)} >{item}</span>)
        }
      </div>
      <Spacer width={25}/>
      <span>Tu respuesta: </span>
      <Spacer width={25}/>
      <div className={`row full-height ${styles.box}`}>
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
  );
}

export default Exercise;
