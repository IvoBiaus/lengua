import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './styles.module.scss';
import Dog from './assets/dog-standing.gif'
import UserScore from './components/UserScore';
import {MOCKED_USERS} from './constants/constants';
import Spacer from '@/app/components/Spacer';

function Scores() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return (
    <div className='item-1 full-height row p-left-10 p-right-10'>
      <div className='item-1 column center bottom'>
        <img className={`half-width ${styles.image}`} src={Dog} alt="Scores" />
      </div>
      <div className='item-1 column space-around center p-top-5 p-bottom-5'>
        <h1 className='title'>¡ PUNTAJES !</h1>
        <Spacer height={20}/>
        <div className={`item-1 full-width p-right-4 column space-between ${styles.usersContainer}`}>
          {MOCKED_USERS.map((item, index) => <UserScore position={index+1} user={item.user} score={item.score}/>)}
        </div>
        <Spacer height={20}/>
        <button className={`button secondary ${styles.button}`} onClick={handleClick}>VOLVER</button>
      </div>
    </div>
  );
}

export default Scores;
