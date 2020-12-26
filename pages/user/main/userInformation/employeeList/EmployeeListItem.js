import React from 'react';
import styles from '../UserInformation.scss';
import ToggleButton from './ToggleButton';

const item = ({ name, id }) => {
  return (
    <div className={styles.item} id={id}>
      <div className={styles.name}>{name}</div>
      <div className={styles.statusWrap}>
        <div className={styles.statusButton}>
          <ToggleButton onClick={() => console.log('d')} />
        </div>
        <div className={styles.deleteButton}>삭제</div>
      </div>
    </div>
  );
};

export default item;
