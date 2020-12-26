import React, { Component } from 'react';
import { MainHeader } from '../../../components/Header';
import MainTab from '../../../components/MainTab';
import { MainCard } from '../../../components/Card';
import styles from './MainPage.scss';
import { inject, observer } from 'mobx-react';

class MyCall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // static async getInitialProps({ mobxStore }) {
  //   return { mobxStore };
  // }
  render() {
    return (
      <div className={styles.main_container}>
        <MainHeader />
        <MainTab />
        <div className={styles.main_background}>
          <MainCard />
        </div>
      </div>
    );
  }
}

export default MyCall;
