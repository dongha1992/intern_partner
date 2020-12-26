import React from 'react';
import styles from './SignUpHeader.scss';

const SignUpHeader = ({ title }) => {
  return (
    <div className={styles.header_wrap}>
      <div className={styles.header_top}></div>
      <div className={styles.header_bottom}>
        <div className={styles.header_arrow_wrap}>
          <img
            src='/781.png'
            srcSet='/781@2x.png 2x, /781@3x.png 3x'
            className={styles.header_left_arrow}
          />
        </div>
        <div className={styles.header_title}>{title}</div>
      </div>
    </div>
  );
};

export default SignUpHeader;
