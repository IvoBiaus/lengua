import React from 'react';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
    <button className='button primary'>PRIMARIO</button>
    <button className='button secondary'>SECUNDARIO</button>
    <button className='button terciary'>TERCIARIO</button>
    <button className='button' disabled>DESHABILITADO</button>
    <h1 className='title' >Titulo</h1>
    <h1 className='title-medium' >Titulo medio</h1>
    <h1 className='title-medium-b' >Titulo medio b</h1>
    <h1 className='title-small' >Titulo chico</h1>
    <h1 className='title-small-b' >Titulo chico b</h1>
    </div>
  );
}

export default App;
