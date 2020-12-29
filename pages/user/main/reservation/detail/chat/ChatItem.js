import React from 'react';
import styles from './ChatContainer.scss';

const ChatItem = ({ message, name }) => {
  return (
    <div
      className={name === 'dongha' ? styles.chatItem_dongha : styles.chatItem}>
      <div>{name}</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatItem;
