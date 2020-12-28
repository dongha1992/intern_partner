import React, { Component } from 'react';
import { MainHeader } from '../../../components/Header';
import MainTab from '../../../components/MainTab';
import { MainCard } from '../../../components/Card';
import { MainFooter } from '../../../components/Footer';
import styles from './MainPage.scss';
import useStore from '../../../stores';
import { inject, observer } from 'mobx-react';
import { useObserver } from 'mobx-react';

// @withRouter
// @inject('MainFooterActive')
// @observer

const { MainFooterActiveStore } = useStore();
const MyCall = () => {
  // console.log(MainFooterActiveStore);
  return useObserver(() => (
    <div className={styles.main_container}>
      <MainHeader />
      <MainTab />
      <div className={styles.main_background}>
        <MainCard />
      </div>
      <MainFooter />
    </div>
  ));
};

export default MyCall;
