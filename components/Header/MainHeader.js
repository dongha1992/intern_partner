import React from 'react';
import styles from './MainHeader.scss';
import { useRouter } from 'next/router';

const MainHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div className={styles.header_wrap}>
      <div className={styles.header_top}></div>
      <div className={styles.header_bottom}>
        <div className={styles.header_arrow_wrap}>
          <img
            src='/logo-blue.png'
            srcSet='/logo-blue@2x.png 2x, /logo-blue@3x.png 3x'
            className={styles.header_left_arrow}
            onClick={() => {
              router.back();
            }}
          />
        </div>
        <div className={styles.header_title}>{title}</div>
      </div>
    </div>
  );
};

export default MainHeader;
