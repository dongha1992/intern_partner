import React from 'react';
import styles from './ChatInput.scss';

const ChatInput = () => {
  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Text Message'
        className={styles.userInput}
      />
      <input type='button' value='SEND' className={styles.sendButton} />
    </div>
  );
};

export default ChatInput;
