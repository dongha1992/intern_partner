import React from 'react';
import styles from '../Detail.scss';

const CompanyItem = ({
  name,
  id,
  onClick,
  selectedCompany1,
  selectedCompany2,
  cnt,
}) => {
  return (
    <div
      id={id}
      name={name}
      onClick={onClick}
      className={
        (cnt < 3 && selectedCompany1 === name) ||
        (cnt > 2 && selectedCompany2 === name)
          ? styles.selected_companyItem_container
          : styles.companyItem_container
      }>
      {name}
    </div>
  );
};

export default CompanyItem;
