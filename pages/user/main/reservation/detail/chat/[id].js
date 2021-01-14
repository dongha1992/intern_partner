import React, { useState, useEffect } from 'react';
import RequestDetailHeader from '../../../../../../components/Header/RequestDetailHeader';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Chatting.scss';
import { SERVER_URL } from '../../../../../../config';
import cookie from 'js-cookie';
import axios from 'axios';

const Chatting = () => {
  const router = useRouter();
  const { id } = router.query;
  const [requestId, setRequestId] = useState('');
 

  const getData = () => {
    axios.get(`${SERVER_URL}/suggestion/${id}`).then((res) => {
      const { request } = res.data.suggestion;
      setRequestId(request.id);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <RequestDetailHeader />
      <div className={styles.menuTab}>
        <a onClick={() => router.back()}>요청상세</a>
        <a
          className={styles.active}
          onClick={() => {
            router.push(`/user/main/reservation/detail/chat/${id}`);
          }}>
          채팅
        </a>
      </div>
      <div className={styles.chattingRoom}>
        <ChatContainer request_id={requestId} />
      </div>
    </div>
  );
};

export default Chatting;
