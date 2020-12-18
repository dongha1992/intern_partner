import React from 'react';
import styles from './Logo.scss';

export default function Logo() {
    return (
        <div className={styles.logo_wrap}>
            <img
                src="/main-logo.png"
                srcSet="/main-logo@2x.png 2x,
                        /main-logo@3x.png 3x">
            </img>
        </div>
    )
}
