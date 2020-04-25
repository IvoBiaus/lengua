import React from 'react';

import styles from './styles.module.scss';

function Spacer({width = 0, height = 0}) {
  const mWidth = `width-${width}`;
  const mHeight = `height-${height}`;
  return <div className={`${styles[mHeight]} ${styles[mWidth]}`}/>;
}

export default Spacer;
