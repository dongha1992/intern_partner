import React from 'react';
import ChatItem from './ChatItem';
import styles from './ChatContainer.scss';

const ChatList = ({ messageList }) => {
  const chatLists =
    messageList &&
    messageList.map((chat) => {
      return (
        <>
          <ChatItem name={chat.name} message={chat.message} />
        </>
      );
    });
  return <div className={styles.chatList}>{chatLists}</div>;
};

export default ChatList;
