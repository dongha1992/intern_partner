import React, { useState } from 'react';
import { SignUpHeader } from '../../../../../../components/Header';
import ChatInput from '../../../../../../components/ChatInput';
import ChatContainer from '../../../../../../components/Chat';
import Link from 'next/link';
import styles from './Chatting.scss';

const Chatting = () => {
  return (
    <div className={styles.container}>
      <SignUpHeader />
      <div className={styles.menuTab}>
        <Link href='/user/main/reservation/detail'>
          <a>요청상세</a>
        </Link>
        <Link href='/user/main/reservation/detail/chat'>
          <a className={styles.active}>채팅</a>
        </Link>
      </div>
      <div className={styles.chattingRoom}>
        <ChatContainer />
        <ChatInput />
      </div>
    </div>
  );
};

export default Chatting;
