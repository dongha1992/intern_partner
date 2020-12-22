import React from 'react';
import styles from './CompanySearchItem.scss';

const CompanySearchItem = ({
  name,
  address,
  setSearchResult,
  setModalClose,
  setCompanyId,
  id,
}) => {
  return (
    <div
      className={styles.item_card}
      onClick={() => {
        setSearchResult(name);
        setModalClose(true);
        setCompanyId(id);
      }}>
      <div className={styles.name}>{name}</div>
      <div className={styles.address}>{address}</div>
    </div>
  );
};

export default CompanySearchItem;
