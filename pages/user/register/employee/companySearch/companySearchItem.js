import React from 'react';
import styles from './companySearchItem.scss';

const companySearchItem = ({ name, address }) => {
  return (
    <div className={styles.item_card}>
      <div className={styles.name}>{name}</div>
      <div className={styles.address}>{address}</div>
    </div>
  );
};

export default companySearchItem;
