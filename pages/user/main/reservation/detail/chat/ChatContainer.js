import react, { Component, useState, useEffect } from 'react';
import styles from './ChatContainer.scss';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import cookie from 'js-cookie';
import { useObserver } from 'mobx-react';
import useStore from '../../../../../../stores';
import io from 'socket.io-client';
import { SERVER_URL } from '../../../../../../config';

const socket = io.connect(`${SERVER_URL}`);

const ChatContainer = () => {
  const userName = JSON.parse(cookie.get('user'));
  const { ChatStore } = useStore();
  const [room, setRoom] = useState(2);
  const [userId, setUserId] = useState(1);
  const [user, setuser] = useState(userName.name);
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

  const test = {
    1: 'dongha',
  };

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
  ));
};

export default ChatContainer;
