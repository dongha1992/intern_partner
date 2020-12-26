import React, { Component, useState } from 'react';
import styles from './MainFooter.scss';
import { Footer_Data } from '../../constants/main/footerButton';
import { withRouter, useRouter } from 'next/router';

const MainFooter = ({}) => {
  const router = useRouter();
  const [selected, setSeleted] = useState(1);

  return (
    <div className={styles.footer_container}>
      <ul className={styles.footer_wrap}>
        {/* 각 아이콘을 클릭하면 이미지 변경 & 경로 이동  */}
        {Footer_Data.map((icon) => {
          const change = selected == icon.id;
          return (
            <li
              className={styles.footer_button}
              key={icon.id}
              onClick={() => {
                console.log(icon.id);
                setSeleted(icon.id);
                router.push(`/user/main/${icon.url}`);
              }}>
              {change ? (
                <img
                  src={`/${icon.ClickImage}.png`}
                  srcSet={`/${icon.clickImage}@2x.png 2x,
/${icon.clickImage}@3x.png 3x`}
                />
              ) : (
                <img
                  src={`/${icon.image}.png`}
                  srcSet={`/${icon.image}@2x.png 2x,
/${icon.image}@3x.png 3x`}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainFooter;
