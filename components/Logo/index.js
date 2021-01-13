import React from 'react';
import styles from './Logo.scss';

export default function Logo() {
  return (
    <div className={styles.logo_wrap}>
      <img
        src='/main-logo.png'
        srcSet='/main-logo@2x.png,
                        /main-logo@3x.png'></img>
    </div>
  );
}
