import react, { Component, useState, useEffect } from 'react';
import styles from '../chat/ChatContainer.scss';
import ChatList from '../chat/ChatList';
import ChatInput from '../chat/ChatInput';
import Link from 'next/link';
import { useObserver } from 'mobx-react';
import { SERVER_URL } from '../../../../../../config';
import RequestDetailHeader from '../../../../../../components/Header/RequestDetailHeader';
import io from 'socket.io-client';

const socket = io.connect(`${SERVER_URL}`);

const ChatContainerClient = () => {
  const [room, setRoom] = useState(2);
  const [userId, setUserId] = useState(2);
  const [user, setuser] = useState('민영');
  const [isJoin, setIsJoin] = useState(false);
  const [message, setMessage] = useState({
    request_id: room,
    name: user,
    text: '',
  });

  const [joinUser, setJoinUser] = useState({
    request_id: room,
    name: user,
  });

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (isJoin) {
      return;
    }
    socket.on('connect', function () {
      console.log('socket connected');

      socket.emit('join', joinUser, (error) => {
        console.log(joinUser, 'join');
        setIsJoin(true);
        if (error) {
          alert(error);
        }
      });
    });
  }, []);

  useEffect(() => {
    socket.on('message', (messages) => {
      console.log('message from server', messages);
      const newMessage = messages.slice();
      setMessageList(newMessage);
    });

    // socket.on('message', (messages) => {
    //   console.log('message from server', messages);
    //   const newMessage = {
    //     request_id: messages.request_id,
    //     name: messages.name,
    //     text: messages.text,
    //   };
    //   console.log(newMessage, 'Asd');
    //   setMessageList([...messageList, newMessage]);
    // });
  }, [messageList]);

  console.log(messageList);

  const onClickHandler = () => {
    if (message) {
      socket.emit('send_message', message);
      setMessage({
        request_id: room,
        name: user,
        text: '',
      });
      console.log(message, 'from client');
    }
  };

  return useObserver(() => (
    <>
      <RequestDetailHeader />
      <div className={styles.menuTab}>
        <Link href='/user/main/reservation/detail'>
          <a>요청상세</a>
        </Link>
        <Link href='/user/main/reservation/detail/chat'>
          <a className={styles.active}>채팅</a>
        </Link>
      </div>
      <div className={styles.chatContainer}>
        <ChatList messageList={messageList} user={user} />
        <ChatInput
          value={message.text}
          onChange={(e) => {
            setMessage({
              request_id: userId,
              name: user,
              text: e.target.value,
            });
          }}
          onClick={(e) => {
            e.preventDefault();
            onClickHandler();
          }}
        />
      </div>
    </>
  ));
};

export default ChatContainerClient;
