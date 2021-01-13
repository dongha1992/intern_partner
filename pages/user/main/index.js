import React, { Component, useState } from 'react';
import { MainHeader } from '../../../components/Header';
import MainTab from '../../../components/MainTab';
import { MainCard } from '../../../components/Card';
import { MainFooter } from '../../../components/Footer';
import styles from './MainPage.scss';
import useStore from '../../../stores';
import { withRouter, useRouter } from 'next/router';
import { inject, observer } from 'mobx-react';
import { useObserver } from 'mobx-react';
// import axios from 'axios';
import callApi from '../../../utils/callApi';
import { SERVER_URL } from '../../../config';
import { parseCookies } from '../../../lib/parseCookies';

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const res = await callApi.get(`${SERVER_URL}/request`, {
    headers: { Authorization: cookies.token },
  });
  const data = await res.data.requests;

  return {
    props: { data },
  };
}

const { MainFooterActiveStore, ProposalStore } = useStore();
const message = '알람알람';

const MyCall = ({ data }) => {
  const [lists, setList] = useState(data);
  const router = useRouter();

  const toNotificationServer = () => {};

  const goToDetail = (id) => {
    router?.push(`/user/main/detail/${id}`);
  };

  const CardLists = lists.map((list) => {
    return (
      <MainCard
        // request id
        onClick={() => goToDetail(list.id)}
        name={list.name}
        id={list.id}
        suggestions_count={list.suggestions_count}
        toNotificationServer={toNotificationServer}
        key={list.id}
        carType={list.cars_model}
        carNumber={list.car_number}
        date={list.created_at}
      />
    );
  });

  return useObserver(() => (
    <div className={styles.main_container}>
      <div className={styles.main_headerWrap}>
        <MainHeader />
        <MainTab />
      </div>
      <div className={styles.main_background}>{CardLists}</div>
      <MainFooter />
    </div>
  ));
};

export default MyCall;
