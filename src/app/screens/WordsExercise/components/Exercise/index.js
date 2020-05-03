import React, { useState } from 'react';

import styles from './styles.module.scss';
import Spacer from '@/app/components/Spacer';

function Exercise({data}) {
  const [userAnswer, setUserAnswer] = useState('');

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  }

  return (
    <div className={`full-width m-bottom-1 ${styles.mainContainer}`}>
      <span className='title-medium-b'>
        {data.sentence}
      </span>
      <Spacer width={25} height={30}/>
      <div className={`full-height column center ${styles.answer}`}>
        <span className="row middle center title-small">Tu respuesta: </span>
        <Spacer width={25} height={25}/>
        <input className={`title-medium-b ${styles.input}`} onChange={handleChange} type="text" />
      </div>
      <Spacer height={40}/>
    </div>
  );
}

export default Exercise;
