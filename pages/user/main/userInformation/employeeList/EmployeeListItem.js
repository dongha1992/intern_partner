import React from 'react';
import styles from '../UserInformation.scss';
import ToggleButton from './ToggleButton';

const item = ({ name, id, onClick }) => {
  return (
    <div className={styles.item} id={id}>
      <div className={styles.name}>{name}</div>
      <div className={styles.statusWrap}>
        <div className={styles.statusButton}>
          <ToggleButton onClick={() => console.log('d')} />
        </div>
        <div className={styles.deleteButton} onClick={onClick}>
          삭제
        </div>
      </div>
    </div>
  );
};

export default item;
