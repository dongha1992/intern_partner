import React, { Component, useState } from 'react';
import styles from './MainTab.scss';
import Link from 'next/link';
import { withRouter, useRouter } from 'next/router';
import { TabName_Data } from '../../constants/main/tabName';
import { route } from 'next/dist/next-server/server/router';

const MainTab = () => {
  const router = useRouter();
  const [selected, setSeleted] = useState(1);

  return (
    <div className={styles.mainTab_wrap}>
      <ul className={styles.tabNames_wrap}>
        {/* tabName mapping */}
        {TabName_Data.map((item) => {
          const active = selected == item.id;

          return (
            <li
              className={active ? styles.activetabName : styles.tabName}
              key={item.id}
              onClick={() => {
                console.log(item.id);
                setSeleted(item.id);
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
