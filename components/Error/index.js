import React from 'react';
import styles from './ErrorMessage.scss';

const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorWrap}>
        <div className={styles.errorMessage}>페이지를 찾을 수 없습니다.</div>
      </div>
    </div>
  );
};

export default ErrorMessage;
