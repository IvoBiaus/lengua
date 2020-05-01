import React from 'react';

import styles from './styles.module.scss';

function Spacer({width = 0, height = 0, responsive = true}) {
  const mWidth = responsive ? `responsive-width-${width}` : `width-${width}`;
  const mHeight = responsive ? `responsive-height-${height}` : `height-${height}`;
  
  return <div className={`${styles[mHeight]} ${styles[mWidth]}`}/>;
}

export default Spacer;
