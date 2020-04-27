import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './styles.module.scss';
//import logo from './assets/cat-looking.gif'
import Spacer from '@/app/components/Spacer';

function Scores() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return (
    <div className={`item-1 full-height row p-left-10 p-right-10 ${styles.mainContainer}`}>
      <div className='item-1 column bottom'>
        {/* <img className='full-width' src={logo} alt="loading..." /> */}
      </div>
      <div className='item-1 column middle center'>
        <h1 className='title'>¡ PUNTAJES !</h1>
        <Spacer height={35}/>
        <button className={`button secondary ${styles.button}`} onClick={handleClick}>VOLVER</button>
      </div>
    </div>
  );
}

export default Scores;
