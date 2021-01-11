import React from 'react';
import { MainHeader } from '../../../../components/Header';
import MainTab from '../../../../components/MainTab';
import { MainCard } from '../../../../components/Card';
import { MainFooter } from '../../../../components/Footer';
import { useRouter } from 'next/router';
import { useObserver } from 'mobx-react';
import styles from '../MainPage.scss';
import { parseCookies } from '../../../../lib/parseCookies';
import callApi from '../../../../utils/callApi';

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const res = await callApi.get('/suggestion?status=2', {
    headers: { Authorization: cookies.token },
  });
  const data = res.data.data;

  return {
    props: {
      data,
    },
  };
}

const Dispatcher = ({ data }) => {
  const router = useRouter();

  const CardLists = data.map((list) => {
    return (
      <MainCard
        name={list.name}
        id={list.id}
        onClick={() => {
          router.push(`/user/main/dispatcher/detail/${list.suggestion_id}`);
        }}
        key={list.id}
        carType={list.cars_model}
        carNumber={list.car_number}
        date={list.created_at}
        dispatch_date={list.drive_date}
        return_date={list.checkout_date}
        suggestion_id={list.suggestion_id}
        isDispatchCard={true}
        isReservationCard={true}
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

export default Dispatcher;
