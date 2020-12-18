import React from 'react';
import styles from './GoToLoginButton.scss';

export default function Button({onClick}) {
    return (
        <div 
            className={styles.go_to_login_button}
            onClick={() => onClick()}
            >
            <input
                type='button'
                value='START'
                alt=''
            >
            </input>
        </div>
    )
}