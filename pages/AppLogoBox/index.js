import React from 'react';
import styles from './AppLogoBox.scss';
import { useRouter } from 'next/router';
import { GOOGLE_PLAY, APP_STORE } from '../../constants/landingPage/FourthPage';

export default function AppLogoBox(props) {
  const appData = [
    {
      id: 1,
      src: '/ic-googleplay.png',
      srcSet: '/ic-googleplay@2x.png, /ic-googleplay@3x.png',
      textLogo: GOOGLE_PLAY,
    },
    {
      id: 2,
      src: '/ic-appstore.png',
      srcSet: '/ic-appstore@2x.png, /ic-appstore@3x.png',
      textLogo: APP_STORE,
    },
  ];

  const router = useRouter();
  const handleGoToApp = (props) => {
    props.target.id === 1
      ? router.push('/user/register/employee')
      : router.push('/');
  };

  return (
    <div className={styles.flex}>
      {appData.map((data) => (
        <div
          className={styles.go_to_app_rectangle}
          id={data.id}
          key={data.id}
          onClick={handleGoToApp}>
          <img src={data.src} srcSet={data.srcSet} />
          <span id={data.id} key={data.id} className={styles.app_text_logo}>
            {data.textLogo}
          </span>
        </div>
      ))}
    </div>
  );
}
