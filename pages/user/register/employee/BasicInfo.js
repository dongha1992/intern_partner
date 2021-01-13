import React, { Component } from 'react';

import { SignUpInput } from '../../../../components/Input';
import ErrorMessage from '../../../../components/Error';
import { inject, observer } from 'mobx-react';
import styles from './BasicInfo.scss';

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
} from '../../../../constants/employee/FormNameForEvent';

const isButton = true;
const userInputValidation = true;

@inject('SignUpEmployeeStore')
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
    const { form } = this.props.SignUpEmployeeStore;

    const mapper = {
      userEmail: () => {
        let checkEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!checkEmail.test(form.userEmail.value)) {
          this.setState({
            emailValid: {
              valid: form.userEmail.status.error.valid,
              message: form.userEmail.status.error.message,
            },
          });
        } else {
          this.setState({
            emailValid: {
              valid: form.userEmail.status.success.valid,
              message: form.userEmail.status.success.message,
            },
          });
        }
      },
    };
    mapper[name]();
  }

  getInputLength(e) {
    const inputValue = this.props.SignUpEmployeeStore.form[e].value.length;
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
    const { SignUpEmployeeStore } = this.props;
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
            onChange={SignUpEmployeeStore.setValue}
            label={USER_NAME}
            padding={USER_NAME_PADDING}
            name={USER_NAME_NAME}
            value={SignUpEmployeeStore.form.userName.value}
          />

          <SignUpInput
            label={USER_NUMBER}
            isButton={isButton}
            padding={USER_ID_PADDING_TOP}
            padding={USER_NUMBER_PADDING}
            onChange={SignUpEmployeeStore.setValue}
            name={USER_NUMBER_NAME}
            value={SignUpEmployeeStore.form.userNumber.value}
          />

          <SignUpInput
            label={USER_POSITION}
            padding={USER_POSITION_PADDING}
            onChange={SignUpEmployeeStore.setValue}
            name={USER_POSITION_NAME}
            value={SignUpEmployeeStore.form.userPosition.value}
          />

          <SignUpInput
            label={USER_EMAIL}
            padding={USER_EMAIL_PADDING}
            onChange={(e) => {
              SignUpEmployeeStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            name={USER_EMAIL_NAME}
            value={SignUpEmployeeStore.form.userEmail.value}
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
