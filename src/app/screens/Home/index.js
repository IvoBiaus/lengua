import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import actions from '../../../redux/Auth/actions';
import styles from './styles.module.scss';
import Cat from './assets/cat-looking.gif'
import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector( state => state.auth.user);

  const navigateToLibrary = async () => {
    const token = await localStorage.getItem('token');
    if (token) {
      history.push(Routes.ONBOARDING);
    }
  };

  useEffect(() => {
    navigateToLibrary();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleNameInput = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handlePasswordInput = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleLogin = () => {
    const user = {name, password};
    dispatch(actions.loginUser(user));
  }

  const handleRegister = () => {
    const newUser = {name, password};
    dispatch(actions.registerUser(newUser));
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
        <h1 className='title'>Hola ! ¿Cómo te llamás?</h1>
        <Spacer height={70} responsive={false}/>
        <form className={`column ${styles.form}`} id='login-form' onSubmit={handleLogin}>
          <input className={`title full-width ${styles.input}`} type="text" placeholder='Usuario' onInput={handleNameInput} />
          <Spacer height={20} responsive={false}/>
          <input className={`title full-width ${styles.input}`} type="password" placeholder='Contraseña' onInput={handlePasswordInput} />
          <Spacer height={70} responsive={false}/>
        </form>
        <div>
          <div className={`row ${styles.auth}`}>
            <button className={`button primary ${styles.button}`} type="submit" form="login-form">INGRESAR</button>
            <Spacer height={20} width={20} responsive={false}/>
            <button className={`button primary ${styles.button}`} onClick={handleRegister}>REGISTRARME</button>
          </div>
          <Spacer height={20} responsive={false}/>
          <button className={`button secondary ${styles.button}`} onClick={handleViewScore}>VER PUNTAJES</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
