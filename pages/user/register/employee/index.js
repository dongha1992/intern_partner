import React from 'react';
import Header from '../../../../components/Header';
import { SignUpInput } from '../../../../components/Input';
import Link from 'next/link';
import { withRouter, useRouter } from 'next/router';
import styles from './RegisterEmployeePage.scss';

import {
  CREATE_ACCOUNT,
  BASIC_INFO,
  BUSINESS_INFO,
} from '../../../../constants/employee/FormTitle';

import {
  BASIC_INFO_PADDING_TOP,
  BUSINESS_INFO_PADDING_TOP,
} from '../../../../constants/employee/FormTitlePadding';

import {
  USER_ID,
  PASSWORD,
  PASSWORD_CHECK,
} from '../../../../constants/employee/CreateAccountLabel';

import {
  USER_ID_PADDING_TOP,
  PASSWORD_PADDING_TOP,
  PASSWORD_CHECK_PADDING_TOP,
} from '../../../../constants/employee/CreatAccountInputPadding';

import {
  USER_NAME,
  USER_NUMBER,
  USER_POSITION,
  USER_EMAIL,
} from '../../../../constants/employee/BasicInfo';

import {
  USER_NAME_PADDING,
  USER_NUMBER_PADDING,
  USER_POSITION_PADDING,
  USER_EMAIL_PADDING,
} from '../../../../constants/employee/BasicInfoInputPadding';

import { COMPANY_NAME } from '../../../../constants/employee/BusinessInfo';
import { COMPANY_NAME_PADDING_TOP } from '../../../../constants/employee/BusinessInfoPadding';

import {
  USER_ID_BUTTON,
  USER_NUMBER_BUTTON,
} from '../../../../constants/employee/ButtonValue';
import { CREATE_BUTTON } from '../../../../constants/employee/CreateButton';
import { CREATE_BUTTON_MARGIN_TOP } from '../../../../constants/employee/CreateButtonMargin';

import {
  USER_ID_NAME,
  USER_COMPANY_NAME,
  USER_EMAIL_NAME,
  USER_NAME_NAME,
  USER_NUMBER_NAME,
  USER_PASSWORD_CHECK_NAME,
  USER_PASSWORD_NAME,
  USER_POSITION_NAME,
} from '../../../../constants/employee/FormNameForEvent';
const isButton = true;
const isSearchInput = true;

const RegisterEmployeePage = () => {
  const router = useRouter();
  const handleOnKeyPress = () => {};

  const goToSearchCompany = () => {
    router.push('/user/register/employee/companySearch');
  };
  const changeHandler = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.register_container}>
      <Header />
      <div className={styles.form_wrap}>
        <div className={styles.form_container}>
          <h2 className={styles.title}>{CREATE_ACCOUNT}</h2>
          <form action='post' className={styles.input_form}>
            <SignUpInput
              label={USER_ID}
              isButton={isButton}
              padding={USER_ID_PADDING_TOP}
              buttonValue={USER_ID_BUTTON}
              onChange={(e) => {
                changeHandler(e);
              }}
              name={USER_ID_NAME}
            />
            <SignUpInput
              label={PASSWORD}
              onChange={(e) => {
                changeHandler(e);
              }}
              padding={PASSWORD_PADDING_TOP}
              name={USER_PASSWORD_NAME}
            />
            <SignUpInput
              label={PASSWORD_CHECK}
              onChange={(e) => {
                changeHandler(e);
              }}
              padding={PASSWORD_CHECK_PADDING_TOP}
              name={USER_PASSWORD_CHECK_NAME}
            />
          </form>
        </div>
        <div className={styles.form_container}>
          <h2
            className={styles.title}
            style={{ paddingTop: `${BASIC_INFO_PADDING_TOP}px` }}>
            {BASIC_INFO}
          </h2>
          <form action='post' className={styles.input_form}>
            <SignUpInput
              onChange={(e) => {
                changeHandler(e);
              }}
              label={USER_NAME}
              padding={USER_NAME_PADDING}
              name={USER_NAME_NAME}
            />
            <SignUpInput
              label={USER_NUMBER}
              isButton={isButton}
              padding={USER_ID_PADDING_TOP}
              buttonValue={USER_NUMBER_BUTTON}
              padding={USER_NUMBER_PADDING}
              onChange={(e) => {
                changeHandler(e);
              }}
              name={USER_NUMBER_NAME}
            />
            <SignUpInput
              onChange={(e) => {
                changeHandler(e);
              }}
              label={USER_POSITION}
              padding={USER_POSITION_PADDING}
              name={USER_POSITION_NAME}
            />
            <SignUpInput
              onChange={(e) => {
                changeHandler(e);
              }}
              label={USER_EMAIL}
              padding={USER_EMAIL_PADDING}
              name={USER_EMAIL_NAME}
            />
          </form>
        </div>
        <div className={styles.form_container}>
          <h2
            className={styles.title}
            style={{ paddingTop: `${BUSINESS_INFO_PADDING_TOP}px` }}>
            {BUSINESS_INFO}
          </h2>
          <form action='post' className={styles.input_form}>
            <SignUpInput
              label={COMPANY_NAME}
              padding={COMPANY_NAME_PADDING_TOP}
              onKeyPress={() => handleOnKeyPress()}
              onClick={(e) => {
                goToSearchCompany(e);
              }}
              isSearchInput={isSearchInput}
              name={USER_COMPANY_NAME}
            />
          </form>
        </div>

        <Link href='/user/register/employee'>
          <div
            className={styles.button_Container}
            style={{ marginTop: `${CREATE_BUTTON_MARGIN_TOP}px` }}>
            <input
              type='button'
              value={CREATE_BUTTON}
              className={styles.button}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RegisterEmployeePage;
