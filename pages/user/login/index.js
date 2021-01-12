import React, { Component } from 'react';
import { LoginInput } from '../../../components/Input';
import Link from 'next/link';
import { withRouter, useRouter } from 'next/router';
import styles from './LoginPage.scss';
import { USER_ID, USER_PASSWORD } from '../../../constants/login/LoginLabel';
import { inject, observer } from 'mobx-react';
import { SERVER_URL } from '../../../config';
import cookie from 'js-cookie';
import axios from 'axios';

@withRouter
@inject('LoginStore')
@inject('ChatStore')
@observer
class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }

  checkValidation = (e) => {
    // 1. event default
    e.preventDefault();

    // 2. 구조분해 할당
    // const { id, password } = this.state;

    const { idValue, passwordValue } = this.props.LoginStore;

    if (idValue === null || passwordValue === null) {
      return;
    }

    axios
      .post(`${SERVER_URL}/user/login`, {
        login_id: idValue,
        password: passwordValue,
      })
      .then((result) => {
        console.log(result);
        if (result.data.token) {
          cookie.set('token', result.data.token);
          alert('로그인에 성공하셨습니다.');
          this.props.router.push('/user/main');
        }
        if (result.error === 403) {
          alert(result.message);
          alert(result.message);
        } else if (result.error === 405) {
          alert(result.message);
        } else if (result.error === 406) {
          alert(result.message);
        }
      });
  };

  render() {
    const { LoginStore, ChatStore } = this.props;

    return (
      <div className={styles.login_container}>
        <div className={styles.text_wrap}>
          <img
            src='/welcome.png'
            srcSet='/welcome-to@2x.png 2x,
        /welcome-to@3x.png 3x'
            className={styles.welcome_to}
          />

          <img
            src='/1338.png'
            srcSet='/1338@2x.png 2x,
            /1338@3x.png 3x'
            className={styles.logo_IMS}
          />
        </div>

        <div className={styles.login_input}>
          <div className={styles.id_input}>
            <LoginInput
              name={'idValue'}
              onChange={(e) => {
                LoginStore.setValue(e);
                ChatStore.setValue(e.target.value);
              }}
              placeholder={USER_ID}
              value={LoginStore.idValue}
            />
            <img
              src='img/1641.png'
              srcSet='img/1641@2x.png 2x,
            img/1641@3x.png 3x'
              className={styles.inputBottomLine}
            />
          </div>

          <div className={styles.password_input}>
            <LoginInput
              name={'passwordValue'}
              type='password'
              onChange={(e) => {
                LoginStore.setValue(e);
              }}
              placeholder={USER_PASSWORD}
              value={LoginStore.passwordValue}
            />
            <img
              src='img/1641.png'
              srcSet='img/1641@2x.png 2x,
            img/1641@3x.png 3x'
              className={styles.inputBottomLine}
            />
          </div>
        </div>

        <div className={styles.loginBottom_wrap}>
          <div
            className={styles.loginButton_wrap}
            onClick={this.checkValidation}>
            <img
              src='/rectangle.png'
              srcSet='/rectangle@2x.png 2x,
            /rectangle@3x.png 3x'
              className={styles.login_Button}
            />
            <img
              src='/log-in.png'
              srcSet='/log-in@2x.png 2x,
            /log-in@3x.png 3x'
              className={styles.login_Button_text}
            />
          </div>

          <div className={styles.signupButton_wrap}>
            <img
              src='/rectangle.png'
              srcSet='/rectangle@2x.png 2x,
            /rectangle@3x.png 3x'
              className={styles.signup_Button}
            />
            <img
              src='/creat-an-account.png'
              srcSet='/creat-an-account@2x.png 2x,
            /creat-an-account@3x.png 3x'
              className={styles.signup_Button_text}
              onClick={() => {
                this.props.router.push('/user/login/select_status');
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
