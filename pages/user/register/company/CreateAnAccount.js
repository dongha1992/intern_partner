import React, { Component } from 'react';
import { SignUpInput } from '../../../../components/Input';
import { inject, observer } from 'mobx-react';
import styles from './CreateAnAccount.scss';

import { CREATE_ACCOUNT } from '../../../../constants/employee/FormTitle';
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
  USER_ID_NAME,
  USER_PASSWORD_CHECK_NAME,
  USER_PASSWORD_NAME,
} from '../../../../constants/company/FormNameForEvent';
import { USER_ID_BUTTON } from '../../../../constants/employee/ButtonValue';
import { TYPE_PASSWORD } from '../../../../constants/employee/InputType';
import { SERVER_URI } from '../../../../config';
import axios from 'axios';

const isButton = true;
const isPassword = true;
const userInputValidation = true;

@inject('SignUpCompanyStore')
@observer
class CreateAnAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValid: {
        valid: '',
        message: '',
      },
      passwordValid: {
        valid: '',
        message: '',
      },
      passwordCheckValid: {
        valid: '',
        message: '',
      },
      isTyping: '',

      isIdDuplicate: true,
    };
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }

  handlerMapper(name) {
    const { form } = this.props.SignUpCompanyStore;
    const { isIdDuplicate } = this.state;

    const mapper = {
      companyUserId: () => {
        if (isIdDuplicate) {
          this.setState({
            idValid: {
              valid: form.companyUserId.status.error.valid,
              message: form.companyUserId.status.error.message,
            },
          });
        } else {
          this.setState({
            idValid: {
              valid: form.companyUserId.status.success.valid,
              message: form.companyUserId.status.success.message,
            },
          });
        }
      },

      companyUserPassword: () => {
        let checkPasswordNumber = form.companyUserPassword.value.search(/[0-9]/g);
        let checkPasswordLetter = form.companyUserPassword.value.search(/[a-z]/gi);
        let checkPasswordLength = form.companyUserPassword.value.length;

        if (checkPasswordNumber > 0 || checkPasswordLetter > 0) {
          if (checkPasswordLength < 9) {
            this.setState({
              passwordValid: {
                valid: form.companyUserPassword.status.error.valid,
                message: form.companyUserPassword.status.error.message,
              },
            });
          } else {
            this.setState({
              passwordValid: {
                valid: form.companyUserPassword.status.success.valid,
                message: form.companyUserPassword.status.success.message,
              },
            });
          }
        } else {
          this.setState({
            passwordValid: {
              valid: form.companyUserPassword.status.error.valid,
              message: form.companyUserPassword.status.error.message,
            },
          });
        }
      },

      companyUserPasswordCheck: () => {
        if (form.companyUserPasswordCheck.value !== form.companyUserPassword.value) {
          this.setState({
            passwordCheckValid: {
              valid: form.companyUserPasswordCheck.status.error.valid,
              message: form.companyUserPasswordCheck.status.error.message,
            },
          });
        } else {
          this.setState({
            passwordCheckValid: {
              valid: form.companyUserPasswordCheck.status.success.valid,
              message: form.companyUserPasswordCheck.status.success.message,
            },
          });
        }
      },
    };
    mapper[name]();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isIdDuplicate !== this.state.isIdDuplicate) {
      const companyUserId = 'companyUserId';
      this.handlerMapper(companyUserId);
    }
  }

  checkIdDuplicate() {
    const companyUserId = this.props.SignUpCompanyStore.form.companyUserId.value;
    axios
      .get(`${SERVER_URI}/user/check/id/${companyUserId}`)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            isIdDuplicate: false,
          });
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response, 'error response');
        } else if (error.request) {
          console.log(error.request, 'error request');
        } else {
          console.log('Error');
        }
      });
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

  render() {
    const { SignUpCompanyStore } = this.props;
    const { idValid, passwordValid, passwordCheckValid, isTyping } = this.state;

    return (
      <div className={styles.createAnAccount_form_container}>
        <h2 className={styles.title}>{CREATE_ACCOUNT}</h2>
        <form action='post' className={styles.input_form}>
          <SignUpInput
            label={USER_ID}
            isButton={isButton}
            padding={USER_ID_PADDING_TOP}
            buttonValue={USER_ID_BUTTON}
            onChange={(e) => {
              SignUpCompanyStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            onClick={() => {
              this.checkIdDuplicate();
            }}
            name={USER_ID_NAME}
            value={SignUpCompanyStore.form.companyUserId.value}
            userInputValidation={userInputValidation}
            formValidation={idValid}
            isTyping={isTyping}
          />

          <SignUpInput
            label={PASSWORD}
            onChange={(e) => {
              SignUpCompanyStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            padding={PASSWORD_PADDING_TOP}
            name={USER_PASSWORD_NAME}
            value={SignUpCompanyStore.form.companyUserPassword.value}
            type={TYPE_PASSWORD}
            userInputValidation={userInputValidation}
            formValidation={passwordValid}
            isTyping={isTyping}
          />

          <SignUpInput
            label={PASSWORD_CHECK}
            onChange={(e) => {
              SignUpCompanyStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            padding={PASSWORD_CHECK_PADDING_TOP}
            name={USER_PASSWORD_CHECK_NAME}
            isPassword={isPassword}
            value={SignUpCompanyStore.form.companyUserPasswordCheck.value}
            type={TYPE_PASSWORD}
            userInputValidation={userInputValidation}
            formValidation={passwordCheckValid}
            isTyping={isTyping}
          />
        </form>
      </div>
    );
  }
}

export default CreateAnAccount;
