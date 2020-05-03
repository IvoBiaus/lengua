import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './styles.module.scss';
import Cat from './assets/cat-looking.gif'
import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';

function Home() {
  const history = useHistory();

  const hanldeSubmit = () => {
    history.push(Routes.ONBOARDING);
  }

  const handleViewScore = () => {
    history.push(Routes.SCORES);
  }

  return (
    <div className={`item-1 full-height row p-left-10 p-right-10 ${styles.mainContainer}`}>
      <div className={`item-1 column bottom ${styles.image}`}>
        <img className='full-width' src={Cat} alt="Home" />
      </div>
      <div className={`item-1 column middle ${styles.formContainer}`}>
      <Spacer height={40} responsive={false}/>
        <h1 className='title'>Hola ! Como te llamas?</h1>
        <Spacer height={70} responsive={false}/>
        <form className={`column ${styles.form}`} id='login-form' onSubmit={hanldeSubmit}>
          <input className={`title full-width ${styles.input}`} type="text" name="name" placeholder='Nombre'/>
          <Spacer height={20} responsive={false}/>
          <input className={`title full-width ${styles.input}`} type="text" name="lastname" placeholder='Apellido'/>
          <Spacer height={70} responsive={false}/>
        </form>
        <div>
          <button className={`button primary ${styles.button}`} type="submit" form="login-form">INGRESAR</button>
          <Spacer height={20} responsive={false}/>
          <button className={`button secondary ${styles.button}`} onClick={handleViewScore}>VER PUNTAJES</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
