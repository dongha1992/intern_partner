import React, { useState, useEffect } from 'react';
import styles from './Notice.scss';
import NoticeItem from './NoticeItem';
import { MainHeader } from '../../../../components/Header';
import { MainFooter } from '../../../../components/Footer';
import { useObserver } from 'mobx-react';
import useStore from '../../../../stores';
import io from 'socket.io-client';

// const socket = io.connect('http://18.188.0.125:8000/main');

const Notice = () => {
  const [notification, setNotification] = useState([]);
  const { NoticeStackStore } = useStore();

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     console.log('message from server', message);
  //     setNotification([...notification, message]);
  //   });
  // }, [notification]);

  return (
    <div className={styles.container}>
      <MainHeader />
      <div className={styles.dividerBottom}></div>
      <div className={styles.noticeWrap}>
        <div className={styles.noticeList}>
          <div className={styles.noticeItem}>
            <img
              src='/1373.png'
              srcSet='/1373@2x.png 2x, /1373@3x.png 3x '
              className={styles.header_left_arrow}
              onClick={() => {
                MainFooterActiveStore.setId(1);
                MainTabActiveStore.setId(1);
                router.push('/user/main');
              }}
            />
          </div>
          <div className={styles.text}>
            {notification.length > 0 ? notification : 'No Notifications '}
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Notice;
