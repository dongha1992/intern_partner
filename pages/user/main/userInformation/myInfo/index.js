import React from 'react';
import styles from '../userInformation.scss';
import { RequestDetailHeader } from '../../../../../components/Header';
import TwoButton from '../../../../../components/RequestDetail/TwoButton';
import UserInformationInput from '../../../../../components/RequestDetail/UserInformationInput';
import DetailList from '../../../../../components/RequestDetail/DetailList';
import { MY_INFORMATION_TITLE } from '../../../../../constants/main/MyInformationTitle';
import { useObserver } from 'mobx-react';
import useStore from '../../../../../stores';

const { MyInformationUpdateStore } = useStore();

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
  COMPANY_DOMESTIC_CAR_NUMBER,
  COMPANY_IMPORT_CAR_NUMBER,
} from '../../../../../constants/main/BusinessInfo';

import {
  CANCEL,
  SAVE,
} from '../../../../../constants/main/SaveAndCancelButton';

import {
  USER_ID_NAME,
  PASSWORD_NAME,
  PASSWORD_CHECK_NAME,
  USER_NAME_NAME,
  USER_NUMBER_NAME,
  USER_POSITION_NAME,
  USER_EMAIL_NAME,
  COMPANY_NAME_NAME,
  COMPANY_ADDRESS_NAME,
  COMPANY_INTRO_NAME,
  COMPANY_DOMESTIC_CAR_NUMBER_NAME,
  COMPANY_IMPORT_CAR_NUMBER_NAME,
} from '../../../../../constants/main/MyInformationNameForInput';

const handleInfoChange = (e) => {
  MyInformationUpdateStore.setValue(e);
};

const MyInfo = () => {
  console.log(MyInformationUpdateStore);
  return useObserver(() => (
    <div className={styles.container}>
      <RequestDetailHeader title={MY_INFORMATION_TITLE} />
      <div className={styles.wrap}>
        <div className={styles.subject}>{ACCOUNT}</div>
        <DetailList requestList={USER_ID} value={value} />
        <UserInformationInput
          requestList={PASSWORD}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={PASSWORD_NAME}
        />
        <UserInformationInput
          requestList={PASSWORD_CHECK}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={PASSWORD_CHECK_NAME}
          padding='30px'
        />
      </div>
      <div className={styles.dividerBottom} />
      <div className={styles.wrap}>
        <div className={styles.subject}>{BASIC_INFO}</div>
        <UserInformationInput
          requestList={USER_NAME}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={USER_NAME_NAME}
        />
        <UserInformationInput
          requestList={USER_NUMBER}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={USER_NUMBER_NAME}
        />
        <UserInformationInput
          requestList={USER_POSITION}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={USER_POSITION_NAME}
        />
        <UserInformationInput
          requestList={USER_EMAIL}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          padding='30px'
          name={USER_EMAIL_NAME}
        />
      </div>
      <div className={styles.dividerBottom} />
      <div className={styles.wrap}>
        <div className={styles.subject}>{BUSINESS_INFO}</div>
        <UserInformationInput
          requestList={COMPANY_NAME}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={COMPANY_NAME_NAME}
        />
        <UserInformationInput
          requestList={COMPANY_ADDRESS}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={COMPANY_ADDRESS_NAME}
        />
        <UserInformationInput
          requestList={COMPANY_INTRO}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          name={COMPANY_INTRO_NAME}
        />
        <UserInformationInput
          requestList={COMPANY_DOMESTIC_CAR_NUMBER}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          value={MyInformationUpdateStore.name}
          name={COMPANY_DOMESTIC_CAR_NUMBER_NAME}
        />
        <UserInformationInput
          requestList={COMPANY_IMPORT_CAR_NUMBER}
          value={MyInformationUpdateStore.name}
          onChange={(e) => {
            handleInfoChange(e);
          }}
          padding='30px'
          name={COMPANY_IMPORT_CAR_NUMBER_NAME}
        />
      </div>
      <TwoButton
        style={{ padding: '30px 0px' }}
        leftButtonValue={CANCEL}
        rightButtonValue={SAVE}
      />
    </div>
  ));
};

export default MyInfo;
