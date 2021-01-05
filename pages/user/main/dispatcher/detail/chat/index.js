import React, { useState } from 'react';
import RequestDetailHeader from '../../../../../../components/Header/RequestDetailHeader';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Chatting.scss';

const Chatting = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <RequestDetailHeader />
      <div className={styles.menuTab}>
        <a onClick={() => router.back()}>요청상세</a>
        <Link href='/user/main/dispatcher/detail/chat'>
          <a className={styles.active}>채팅</a>
        </Link>
      </div>
      <div className={styles.chattingRoom}>
        <ChatContainer />
      </div>
    </div>
  );
};

export default Chatting;
