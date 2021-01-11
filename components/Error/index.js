import React from 'react';
import Link from 'next/link';
import styles from './ErrorMessage.scss';

const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorWrap}>
        <div className={styles.errorMessage}>페이지를 찾을 수 없습니다.</div>
        <Link href='./'>
          <a>
            뒤로 가기
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
