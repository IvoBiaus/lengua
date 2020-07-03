import React, { useState } from 'react';

import styles from './styles.module.scss';
import Spacer from '@/app/components/Spacer';

function Exercise({data, addScore, removeScore, points}) {
  const [wasCorrect, setWasCorrect] = useState(false);

  const handleChange = (event) => {
  if(data.correctAnswers.includes(event.target.value) && !wasCorrect ){
    setWasCorrect(true);
    addScore(points);
  }
  if(!data.correctAnswers.includes(event.target.value) && wasCorrect ){
    setWasCorrect(false);
    removeScore(points);
  }
}

  return (
    <div className={`full-width m-bottom-1 m-top-6 ${styles.mainContainer}`}>
      <span className='title-medium-b'>
        {data.sentence}
      </span>
      <Spacer width={25} height={30}/>
      <div className={`full-height column center ${styles.answer}`}>
        <span className="row middle center title-small">Tu respuesta: </span>
        <Spacer width={25} height={25}/>
        <input className={`title-medium-b ${styles.input}`} onChange={handleChange} type="text" />
      </div>
    </div>
  );
}

export default Exercise;
