import React, { Component, useState } from 'react';
import styles from './MainFooter.scss';
import { Footer_Data } from '../../constants/main/footerButton';
import { withRouter, useRouter } from 'next/router';
import useStore from '../../stores';
import { useObserver } from 'mobx-react';

const { MainFooterActiveStore } = useStore();
const MainFooter = ({}) => {
  const router = useRouter();

  return useObserver(() => (
    <div className={styles.footer_container}>
      <ul className={styles.footer_wrap}>
        {Footer_Data.map((icon) => {
          const change = MainFooterActiveStore.selectedId == icon.id;
          return (
            <li
              className={styles.footer_button}
              key={icon.id}
              onClick={() => {
                console.log(icon.id);
                MainFooterActiveStore.setId(icon.id);
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
  ));
};

export default MainFooter;
