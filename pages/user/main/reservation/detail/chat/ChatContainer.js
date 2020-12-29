import react, { Component, useState, useEffect } from 'react';
import styles from './ChatContainer.scss';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import { useObserver } from 'mobx-react';
import io from 'socket.io-client';

// const socket = io.connect('http://localhost:3001');

const ChatContainer = () => {
  const [room, setRoom] = useState(2);
  const [name, setName] = useState('dongha');
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [users, setUsers] = useState('');
  const [time, setTime] = useState('');

  // useEffect(() => {
  //   socket.emit('join', { name, room }, (error) => {
  //     if (error) {
  //       alert(error);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     console.log('message from server', message);
  //     const newMessage = { name: message.user, message: message.text };
  //     setMessageList([...messageList, newMessage]);
  //   });

  //   socket.on('roomData', ({ users }) => {
  //     console.log({ users }, 'roomData');
  //     setUsers(users);
  //   });
  // }, [messageList]);

  console.log(messageList);

  const onClickHandler = () => {
    if (message) {
      socket.emit('send_message', message, setMessage(''));
    }
  };

  return useObserver(() => (
    <div className={styles.chatContainer}>
      <ChatList messageList={messageList} />
      <ChatInput
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
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
