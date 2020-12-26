import React from 'react';
import { useRouter } from 'next/router';
import styles from './LogoutModal.scss';

const SignUpModal = ({ isModal, onModalHandler }) => {
  const router = useRouter();

  return (
    <div className={isModal ? styles.modalWrap_active : styles.modalWrap_hide}>
      <div className={styles.modalMain}>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>정말 로그아웃 하시겠습니까?</div>
          <input
            type='button'
            className={styles.modalButton}
            onClick={() => onModalHandler()}
            value='취소'
          />
          <input
            type='button'
            className={styles.modalButton}
            onClick={() => router.push('/user/login')}
            value='확인'
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
