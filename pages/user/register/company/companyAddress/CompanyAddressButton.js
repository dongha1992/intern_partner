import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './CompanyAddressButton.scss';

import { CREATE_BUTTON } from '../../../../../constants/company/CreateButton';
import { CREATE_BUTTON_MARGIN_TOP } from '../../../../../constants/company/CreateButtonMargin';

const CompanyAddressButton = ({
  searchAddressInput,
  searchAddress2Input,
  searchCityInput,
  searchStateInput,
  searchZipCodeInput,
  onClick,
  value,
  goToForm,
}) => {
  const condition =
    searchAddressInput &&
    searchAddress2Input &&
    searchCityInput &&
    searchStateInput &&
    searchZipCodeInput;

  return (
    <Fragment>
      <div
        className={
          condition ? styles.button_Container_active : styles.button_Container
        }
        style={{ marginTop: `${CREATE_BUTTON_MARGIN_TOP}px` }}>
        <input
          type='button'
          value={value}
          disabled={condition ? false : true}
          className={styles.button}
          onClick={goToForm}
        />
      </div>
    </Fragment>
  );
};

export default CompanyAddressButton;
