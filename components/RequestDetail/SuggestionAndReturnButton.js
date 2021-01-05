import React from 'react';
import { useRouter } from 'next/router';
import styles from './SuggestionAndReturnButton.scss';

export default function SuggestionAndReturnButton({
  style,
  buttonValue,
  goToReturn,
  isDispatcher,
}) {
  const router = useRouter();
  return (
    <div className={styles.button_wrap} style={style}>
      <input
        type='button'
        value={buttonValue}
        className={styles.button}
        onClick={() => {
          isDispatcher ? goToReturn() : goToSuggestion();
        }}
      />
    </div>
  );
}
