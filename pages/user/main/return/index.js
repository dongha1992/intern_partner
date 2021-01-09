import React, { useState } from 'react';
import { MainHeader } from '../../../../components/Header';
import MainTab from '../../../../components/MainTab';
import { MainCard } from '../../../../components/Card';
import { MainFooter } from '../../../../components/Footer';
import useStore from '../../../../stores';
import { useRouter } from 'next/router';
import { useObserver } from 'mobx-react';
import styles from '../MainPage.scss';
import axios from 'axios';
import { SERVER_URI } from '../../../../config';
import { parseCookies } from '../../../../lib/parseCookies';

const Return = ({ data }) => {
  const router = useRouter();
  console.log(data);
  const CardLists = data.map((list) => {
    return (
      <MainCard
        name={list.name}
        id={list.id}
        onClick={() => {
          router.push(`/user/main/return/detail/${list.suggestion_id}`);
        }}
        key={list.id}
        carType={list.cars_model}
        suggestion_id={list.suggestion_id}
        carNumber={list.car_number}
        date={list.created_at}
        dispatch_date={list.drive_date}
        return_date={list.checkout_date}
        isReturnCard={true}
        isReservationCard={true}
        isDispatchCard={true}
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
  const res = await axios.get(`${SERVER_URI}/suggestion?status=3`, {
    headers: { Authorization: cookies.token },
  });
  const data = res.data.data;

  return {
    props: {
      data,
    },
  };
}

export default Return;
