import React, { Fragment } from 'react';
import styles from './UserInformationInput.scss';

const UserInformationInput = ({ requestList, padding, value, onChange }) => {
  return (
    <Fragment>
      <div style={{ marginTop: '35px' }} />
      <div
        className={styles.detail_list_container}
        style={{ marginBottom: padding }}>
        <div className={styles.list_request}>{requestList}</div>
        <input
          type='text'
          className={styles.userInput}
          value={value}
          onChange={onChange}
        />
      </div>
    </Fragment>
  );
};
export default UserInformationInput;
