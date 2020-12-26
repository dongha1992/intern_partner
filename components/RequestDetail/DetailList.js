import React, { Fragment } from 'react';
import styles from './DetailList.scss';

export default function DetailList({
  requestList,
  response,
  responseBrand,
  padding,
}) {
  return (
    <Fragment>
      <div style={{ marginTop: '35px' }} />
      <div
        className={styles.detail_list_container}
        style={{ marginBottom: padding }}>
        <div className={styles.list_request}>{requestList}</div>
        <div className={styles.list_response}>
          {responseBrand ? responseBrand : ''}
          {' ' + response}
        </div>
      </div>
    </Fragment>
  );
}
