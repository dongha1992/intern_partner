import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './CompanyFormCreateButton.scss';

import { CREATE_BUTTON } from '../../../../constants/employee/CreateButton';
import { CREATE_BUTTON_MARGIN_TOP } from '../../../../constants/employee/CreateButtonMargin';

const CompanyFormCreateButton = ({
  companyUserEmail,
  companyUserName,
  companyUserPassword,
  companyUserPasswordCheck,
  companyUserPosition,
  companyUserNumber,
  companyUserId,
  companyName,
  searchAddressInput,
  companyIntro,
  onClick,
}) => {
  const condition =
    companyUserEmail &&
    companyUserName &&
    companyUserPassword &&
    companyUserPasswordCheck &&
    companyUserPosition &&
    companyUserNumber &&
    companyUserId &&
    companyName &&
    searchAddressInput &&
    companyIntro;

  return (
    <Fragment>
      <div
        className={
          condition ? styles.button_Container_active : styles.button_Container
        }
        style={{ marginTop: `${CREATE_BUTTON_MARGIN_TOP}px` }}>
        <input
          type='button'
          value={CREATE_BUTTON}
          disabled={condition ? false : true}
          className={styles.button}
          onClick={onClick}
        />
      </div>
    </Fragment>
  );
};

export default CompanyFormCreateButton;
