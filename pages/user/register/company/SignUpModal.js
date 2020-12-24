import React from 'react';
import { useRouter } from 'next/router';
import styles from './SignUpModal.scss';

const SignUpModal = ({ isModal }) => {
  const router = useRouter();

  return (
    <div className={isModal ? styles.modalWrap_active : styles.modalWrap_hide}>
      <div className={styles.modalMain}>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>회원가입을 축하드립니다</div>
          <input
            type='button'
            className={styles.modalButton}
            onClick={() => router.push('/user/register')}
            value={'로그인'}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
