import React, { Component, useState } from 'react';
import styles from './MainTab.scss';
import Link from 'next/link';
import { withRouter, useRouter } from 'next/router';
import { TabName_Data } from '../../constants/main/tabName';
import useStore from '../../stores';
import { useObserver } from 'mobx-react';

const MainTab = () => {
  const router = useRouter();
  const { MainTabActiveStore } = useStore();

  return (
    <div className={styles.mainTab_wrap}>
      <ul className={styles.tabNames_wrap}>
        {/* tabName mapping */}
        {TabName_Data.map((item) => {
          const active = MainTabActiveStore.selectedId == item.id;
          return (
            <li
              className={active ? styles.activetabName : styles.tabName}
              key={item.id}
              onClick={() => {
                MainTabActiveStore.setId(item.id);
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
