import React, { Fragment } from 'react';
import styles from '../userInformation/userInformation.scss';
import NoticeItem from './NoticeItem';
import { MainHeader } from '../../../../components/Header';
import { MainFooter } from '../../../../components/Footer';
import { useObserver } from 'mobx-react';
import useStore from '../../../../stores';

const Notice = () => {
  const { NoticeStackStore } = useStore();

  return (
    <div className={styles.container}>
      <MainHeader />
      <div className={styles.dividerBottom}></div>
      <div className={styles.noticeWrap}>
        <div className={styles.noticeList}>
          <div className={styles.noticeItem}></div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Notice;
