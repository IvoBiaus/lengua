import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import styles from './styles.module.scss';
import Dog from './assets/dog-standing.gif'
import UserScore from './components/UserScore';
import Spacer from '@/app/components/Spacer';
import { getScores } from '@/services/score';

function Scores() {
  const history = useHistory();
  const [scores, setScores] = useState([]);

  const handleClick = () => {
    history.goBack();
  }

  const getAllScores = async () => {
    const scores = await getScores().then((result) => {
      return result.data.data;
    }).catch((err) => {
      return [];
    });
    setScores(scores);
  };

  useEffect(() => {
    getAllScores();
  }, []);

  return (
    <div className={`item-1 full-height row p-left-10 p-right-10 ${styles.mainContainer}`}>
      <div className={`item-1 column center bottom ${styles.imageContainer}`}>
        <img className={`half-width ${styles.image}`} src={Dog} alt="Scores" />
      </div>
      <div className='item-1 column space-around center p-top-5 p-bottom-5'>
        <h1 className='title'>¡ PUNTAJES !</h1>
        <Spacer height={20}/>
        <div className={`item-1 full-width p-right-4 column ${styles.usersContainer}`}>
          {scores.map((item, index) => <UserScore position={index+1} user={item._id} score={item.score}/>)}
        </div>
        <Spacer height={20}/>
        <button className={`button secondary ${styles.button}`} onClick={handleClick}>VOLVER</button>
      </div>
    </div>
  );
}

export default Scores;
