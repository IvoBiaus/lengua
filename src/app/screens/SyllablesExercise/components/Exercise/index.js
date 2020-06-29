import React, { useState } from 'react';

import styles from './styles.module.scss';
import Spacer from '@/app/components/Spacer';

function Exercise({data, addScore, removeScore, points}) {
  const [unused, setUnused] = useState(data.syllables);
  const [userAnswer, setUserAnswer] = useState([]);
  const [wasCorrect, setWasCorrect] = useState(false);

  const addToAnswer = (syllable) => {
    const index = unused.indexOf(syllable);
    if (index > -1) {
      unused.splice(index, 1)
      setUnused([...unused]);
    }
    userAnswer.push(syllable)
    setUserAnswer([...userAnswer]);

    const answer = userAnswer.join("");
    if(answer === data.result){
      setWasCorrect(true);
      addScore(points);
    }
  }

  const removeFromAnswer = (syllable) => {
    const index = userAnswer.indexOf(syllable);
    if (index > -1) {
      userAnswer.splice(index, 1)
      setUserAnswer([...userAnswer]);
    }
    unused.push(syllable)
    setUnused([...unused]);

    if(wasCorrect) {
      setWasCorrect(false);
      removeScore(points);
    }
  }

  return (
    <div className={`full-width m-bottom-1 m-top-6 ${styles.mainContainer}`}>
      <div className='row center'>
        {
          unused.map((item, index) => <span className={`title-medium m-right-5 ${styles.syllable}`} key={`unused-${item}-${index}`} onClick={() => addToAnswer(item)} >{item}</span>)
        }
      </div>
      <Spacer width={25} height={30}/>
      <div className={`full-height column center ${styles.answer}`}>
        <span className="row middle center">Tu respuesta: </span>
        <Spacer width={25} height={25}/>
        <div className={`row ${styles.box}`}>
          {
            userAnswer.map((item, index) => (
              <>
                <span className={`title-medium  ${styles.syllable}`} key={`answer-${item}-${index}`} onClick={() => removeFromAnswer(item)} >{item}</span>
                <Spacer width={5}/>
              </>
            )
          )
          }
        </div>
      </div>
    </div>
  );
}

export default Exercise;
