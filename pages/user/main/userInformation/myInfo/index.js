import React from 'react';
import styles from '../UserInformation.scss';
import { RequestDetailHeader } from '../../../../../components/Header';
import TwoButton from '../../../../../components/RequestDetail/TwoButton';
import DetailList from '../../../../../components/RequestDetail/DetailList';
import { MY_INFORMATION_TITLE } from '../../../../../constants/main/MyInformationTitle';
import {
  USER_ID,
  PASSWORD,
  PASSWORD_CHECK,
} from '../../../../../constants/main/AccountLabel';

import {
  USER_NAME,
  USER_NUMBER,
  USER_POSITION,
  USER_EMAIL,
} from '../../../../../constants/main/BasicInfoLabel';

import {
  ACCOUNT,
  BASIC_INFO,
  BUSINESS_INFO,
} from '../../../../../constants/main/MyInformationSubject';

import {
  COMPANY_NAME,
  COMPANY_ADDRESS,
  COMPANY_INTRO,
  COMPANY_DOMESITIC_CAR_NUMBER,
  COMPANY_IMPORT_CAR_NUMBER,
} from '../../../../../constants/main/BusinessInfo';
import {
  CANCEL,
  SAVE,
} from '../../../../../constants/main/SaveAndCancelButton';

const MyInfo = () => {
  return (
    <div className={styles.container}>
      <RequestDetailHeader title={MY_INFORMATION_TITLE} />
      <div className={styles.wrap}>
        <div className={styles.subject}>{ACCOUNT}</div>
        <DetailList requestList={USER_ID} response={''} />
        <DetailList requestList={PASSWORD} response={''} />
        <DetailList requestList={PASSWORD_CHECK} response={''} padding='30px' />
      </div>
      <div className={styles.dividerBottom} />
      <div className={styles.wrap}>
        <div className={styles.subject}>{BASIC_INFO}</div>
        <DetailList requestList={USER_NAME} response={''} />
        <DetailList requestList={USER_NUMBER} response={''} />
        <DetailList requestList={USER_POSITION} response={''} />
        <DetailList requestList={USER_EMAIL} response={''} padding='30px' />
      </div>
      <div className={styles.dividerBottom} />
      <div className={styles.wrap}>
        <div className={styles.subject}>{BUSINESS_INFO}</div>
        <DetailList requestList={COMPANY_NAME} response={''} />
        <DetailList requestList={COMPANY_ADDRESS} response={''} />
        <DetailList requestList={COMPANY_INTRO} response={''} />
        <DetailList requestList={COMPANY_DOMESITIC_CAR_NUMBER} response={''} />
        <DetailList
          requestList={COMPANY_IMPORT_CAR_NUMBER}
          response={''}
          padding='30px'
        />
      </div>
      <TwoButton
        style={{ padding: '30px 0px' }}
        leftButtonValue={CANCEL}
        rightButtonValue={SAVE}
      />
    </div>
  );
};

export default MyInfo;
