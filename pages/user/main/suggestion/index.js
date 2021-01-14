import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MainHeader } from '../../../../components/Header';
import MainTab from '../../../../components/MainTab';
import { MainCard } from '../../../../components/Card';
import { MainFooter } from '../../../../components/Footer';
import useStore from '../../../../stores';
import { useObserver } from 'mobx-react';
import styles from '../MainPage.scss';
// import axios from 'axios';
import callApi from '../../../../utils/callApi';
import { SERVER_URL } from '../../../../config';
import { parseCookies } from '../../../../lib/parseCookies';
import cookie from 'js-cookie';

const { ProposalStore } = useStore();

const Suggestion = ({ data }) => {
  const router = useRouter();
  const goToDetail = (id) => {
    router.push(`/user/main/suggestion/detail/${id}`);
  };
  console.log(data);

  const CardLists = data.map((list) => {
    return (
      <MainCard
        name={list.name}
        id={list.id}
        suggestions_count={list.suggestions_count}
        onClick={() => {
          goToDetail(list.suggestion_id);
        }}
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

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const res = await callApi.get(`${SERVER_URL}/suggestion`, {
    headers: { Authorization: cookies.token },
  });
  const data = await res.data.data;

  return {
    props: { data },
  };
}

export default Suggestion;
