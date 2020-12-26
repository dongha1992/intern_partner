import React, { Component } from 'react';
import styles from './MainTab.scss';
import Link from 'next/link';
import { withRouter, useRouter } from 'next/router';
import { TabName_Data } from '../../constants/main/tabName';
import { route } from 'next/dist/next-server/server/router';

const MainTab = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.mainTab_wrap}>
      <ul className={styles.tabNames_wrap}>
        {/* tabName mapping */}
        {TabName_Data.map((item, idx) => {
          return (
            <li
              className={styles.tabName}
              key={idx}
              onClick={() => {
                router.push(`/user/main/${item.url}`);
              }}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainTab;
