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
} from '../../../../constants/employee/FormNameForEvent';
import { USER_ID_BUTTON } from '../../../../constants/employee/ButtonValue';
import { TYPE_PASSWORD } from '../../../../constants/employee/InputType';
import { SERVER_URI } from '../../../../config';
import axios from 'axios';

const isButton = true;
const isPassword = true;
const userInputValidation = true;

@inject('SignUpEmployeeStore')
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
    const { form } = this.props.SignUpEmployeeStore;
    const { isIdDuplicate } = this.state;

    const mapper = {
      userId: () => {
        if (isIdDuplicate) {
          this.setState({
            idValid: {
              valid: form.userId.status.error.valid,
              message: form.userId.status.error.message,
            },
          });
        } else {
          this.setState({
            idValid: {
              valid: form.userId.status.success.valid,
              message: form.userId.status.success.message,
            },
          });
        }
      },

      userPassword: () => {
        let checkPasswordNumber = form.userPassword.value.search(/[0-9]/g);
        let checkPasswordLetter = form.userPassword.value.search(/[a-z]/gi);
        let checkPasswordLength = form.userPassword.value.length;

        if (checkPasswordNumber > 0 || checkPasswordLetter > 0) {
          if (checkPasswordLength < 9) {
            this.setState({
              passwordValid: {
                valid: form.userPassword.status.error.valid,
                message: form.userPassword.status.error.message,
              },
            });
          } else {
            this.setState({
              passwordValid: {
                valid: form.userPassword.status.success.valid,
                message: form.userPassword.status.success.message,
              },
            });
          }
        } else {
          this.setState({
            passwordValid: {
              valid: form.userPassword.status.error.valid,
              message: form.userPassword.status.error.message,
            },
          });
        }
      },

      userPasswordCheck: () => {
        if (form.userPasswordCheck.value !== form.userPassword.value) {
          this.setState({
            passwordCheckValid: {
              valid: form.userPasswordCheck.status.error.valid,
              message: form.userPasswordCheck.status.error.message,
            },
          });
        } else {
          this.setState({
            passwordCheckValid: {
              valid: form.userPasswordCheck.status.success.valid,
              message: form.userPasswordCheck.status.success.message,
            },
          });
        }
      },
    };
    mapper[name]();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isIdDuplicate !== this.state.isIdDuplicate) {
      const userId = 'userId';
      this.handlerMapper(userId);
    }
  }

  checkIdDuplicate() {
    const userId = this.props.SignUpEmployeeStore.form.userId.value;
    axios
      .get(`${SERVER_URI}/user/check/id/${userId}`)
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

  render() {
    const { SignUpEmployeeStore } = this.props;
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
              SignUpEmployeeStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            onClick={() => {
              this.checkIdDuplicate();
            }}
            name={USER_ID_NAME}
            value={SignUpEmployeeStore.form.userId.value}
            userInputValidation={userInputValidation}
            formValidation={idValid}
            isTyping={isTyping}
          />

          <SignUpInput
            label={PASSWORD}
            onChange={(e) => {
              SignUpEmployeeStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            padding={PASSWORD_PADDING_TOP}
            name={USER_PASSWORD_NAME}
            value={SignUpEmployeeStore.form.userPassword.value}
            type={TYPE_PASSWORD}
            userInputValidation={userInputValidation}
            formValidation={passwordValid}
            isTyping={isTyping}
          />

          <SignUpInput
            label={PASSWORD_CHECK}
            onChange={(e) => {
              SignUpEmployeeStore.setValue(e);
              this.handlerMapper(e.target.name);
              this.getInputLength(e.target.name);
            }}
            padding={PASSWORD_CHECK_PADDING_TOP}
            name={USER_PASSWORD_CHECK_NAME}
            isPassword={isPassword}
            value={SignUpEmployeeStore.form.userPasswordCheck.value}
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
