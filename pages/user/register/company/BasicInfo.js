import React, { Component } from 'react';
import { SignUpInput } from '../../../../components/SignUpCompanyInput';
import ErrorMessage from '../../../../components/Error';
import { inject, observer } from 'mobx-react';
import styles from './BusinessInfo.scss';

import { BASIC_INFO } from '../../../../constants/employee/FormTitle';
import { BASIC_INFO_PADDING_TOP } from '../../../../constants/employee/FormTitlePadding';

import {
  USER_NAME_PADDING,
  USER_NUMBER_PADDING,
  USER_POSITION_PADDING,
  USER_EMAIL_PADDING,
} from '../../../../constants/employee/BasicInfoInputPadding';

import { USER_ID_PADDING_TOP } from '../../../../constants/employee/CreatAccountInputPadding';

import {
  USER_NAME,
  USER_NUMBER,
  USER_POSITION,
  USER_EMAIL,
} from '../../../../constants/employee/BasicInfo';

import {
  USER_EMAIL_NAME,
  USER_NAME_NAME,
  USER_NUMBER_NAME,
  USER_POSITION_NAME,
} from '../../../../constants/company/FormNameForEvent';

import { USER_NUMBER_BUTTON } from '../../../../constants/employee/ButtonValue';
import { throws } from 'assert';

const isButton = true;
const userInputValidation = true;

@inject('SignUpCompanyStore')
@observer
class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValid: {
        valid: '',
        message: '',
      },
      isTyping: '',
    };
  }

  handlerMapper(name) {
    const { form } = this.props.SignUpCompanyStore;
    const mapper = {
      companyUserEmail: () => {
        let checkEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!checkEmail.test(form.companyUserEmail.value)) {
          this.setState({
            emailValid: {
              valid: form.companyUserEmail.status.error.valid,
              message: form.companyUserEmail.status.error.message,
            },
          });
        } else {
          this.setState({
            emailValid: {
              valid: form.companyUserEmail.status.success.valid,
              message: form.companyUserEmail.status.success.message,
            },
          });
        }
      },
    };
    mapper[name]();
  }
  getInputLength(e) {
    const inputValue = this.props.SignUpCompanyStore.form[e].value.length;
    if (inputValue > 0) {
      this.setState({
        isTyping: e,
      });
    }
    if (inputValue <= 0) {
      this.setState({
        isTyping: e,
      });
    }
  }
  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }

  render() {
    const { SignUpCompanyStore } = this.props;
    const { emailValid, isTyping } = this.state;
    return (
      <div className={styles.basicInfo_form_container}>
        <h2
          className={styles.title}
          style={{ paddingTop: `${BASIC_INFO_PADDING_TOP}px` }}>
          {BASIC_INFO}
        </h2>
        <form action='post' className={styles.input_form}>
          <SignUpInput
            onChange={SignUpCompanyStore.setValue}
            label={USER_NAME}
            padding={USER_NAME_PADDING}
            name={USER_NAME_NAME}
            value={SignUpCompanyStore.form.companyUserName.value}
          />

          <SignUpInput
            label={USER_NUMBER}
            padding={USER_ID_PADDING_TOP}
            buttonValue={USER_NUMBER_BUTTON}
            padding={USER_NUMBER_PADDING}
            onChange={SignUpCompanyStore.setValue}
            name={USER_NUMBER_NAME}
            value={SignUpCompanyStore.form.companyUserNumber.value}
          />

          <SignUpInput
            label={USER_POSITION}
            padding={USER_POSITION_PADDING}
            onChange={SignUpCompanyStore.setValue}
            name={USER_POSITION_NAME}
            value={SignUpCompanyStore.form.companyUserPosition.value}
          />

          <SignUpInput
            label={USER_EMAIL}
            padding={USER_EMAIL_PADDING}
            onChange={(e) => {
              SignUpCompanyStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            name={USER_EMAIL_NAME}
            value={SignUpCompanyStore.form.companyUserEmail.value}
            userInputValidation={userInputValidation}
            formValidation={emailValid}
            isTyping={isTyping}
          />
        </form>
      </div>
    );
  }
}

export default BasicInfo;
