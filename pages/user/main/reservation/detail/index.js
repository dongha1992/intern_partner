import React, { useState } from 'react';
import { SignUpHeader } from '../../../../../components/Header';
import Link from 'next/link';
import styles from './ConfirmationDetail.scss';

const ConfirmationDetail = () => {
  return (
    <div className={styles.container}>
      <SignUpHeader />
      <div className={styles.menuTab}>
        <Link href='/user/main/reservation/detail'>
          <a className={styles.active}>요청상세</a>
        </Link>
        <Link href='/user/main/reservation/detail/chat'>
          <a>채팅</a>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationDetail;
