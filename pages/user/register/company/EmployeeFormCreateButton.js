import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './EmployeeFormCreateButton.scss';

import { CREATE_BUTTON } from '../../../../constants/employee/CreateButton';
import { CREATE_BUTTON_MARGIN_TOP } from '../../../../constants/employee/CreateButtonMargin';

const EmployeeFormCreateButton = ({
  userEmail,
  userName,
  userPassword,
  userPasswordCheck,
  userPosition,
  userNumber,
  userId,
  companyName,
  searchAddressInput,
  companyIntro,
  onClick,
}) => {
  const condition =
    userEmail &&
    userName &&
    userPassword &&
    userPasswordCheck &&
    userPosition &&
    userNumber &&
    userId &&
    companyName &&
    searchAddressInput &&
    companyIntro;
    console.log(condition, "Asdas")
  return (
    <Fragment>
      <div
        className={
          condition
            ? styles.button_Container_active
            : styles.button_Container
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

export default EmployeeFormCreateButton;
