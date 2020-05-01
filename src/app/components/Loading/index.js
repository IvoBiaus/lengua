import React from 'react';

import LoadingFish from './assets/fish-loading.gif';
import styles from './styles.module.scss';

function Loading() {
  return (
  <div className={`item-1 full-height column center middle ${styles.mainContainer}`}>
    <h1>Cargando ...</h1>
    <img className={`full-width ${styles.image}`} src={LoadingFish} alt="Loading..." />
  </div>
  );
}

export default Loading;
