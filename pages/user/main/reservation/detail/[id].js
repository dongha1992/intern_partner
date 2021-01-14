import React from 'react';
import RequestDetailHeader from '../../../../../components/Header/RequestDetailHeader';
import RequestInfo from '../../../../../components/RequestDetail/RequestInfo';
import ProposalInfo from '../../../../../components/RequestDetail/ProposalInfo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ConfirmationDetail.scss';
import {
  DISPATCH_CANCEL,
  DISPATCH_COMPLETE,
} from '../../../../../constants/requestDetail/ProposalInfo';
import { SERVER_URL } from '../../../../../config';
import useStore from '../../../../../stores';
import { useObserver } from 'mobx-react';
import axios from 'axios';
import cookieCutter from 'cookie-cutter';
import callApi from '../../../../../utils/callApi';

const isReservation = true;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await callApi.get(`${SERVER_URL}/suggestion/${id}`);
  const list = await res.data;
  const proposal = { ...list.suggestion };
  const request = { ...list.suggestion.request };

  return {
    props: { proposal, request },
  };
}

const ConfirmationDetail = ({ proposal, request }) => {
  const router = useRouter();
  const { MainTabActiveStore } = useStore();
  const { id } = router.query;
  const request_id = request.id;
  
  const goToDispatching = () => {
    //배차 완료는 request id를 사용해야 한다.
    const id = request.id;
    const token = cookieCutter.get('token');
    const data = {
      status: 2,
    };
    axios
      .patch(`${SERVER_URL}/request/${id}`, data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res, 'res');
        if (res.status === 200) {
          router.push(`/user/main/dispatcher`);
          MainTabActiveStore.setId(4);
        }
      })
      .catch((err) => console.log(err));
  };

  const goToCancel = () => {
    //배차 완료는 request id를 사용해야 한다.
    const id = proposal.id;
    const token = cookieCutter.get('token');

    axios
      .delete(`${SERVER_URL}/suggestion/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res, 'res');
        if (res.status === 200) {
          router.push(`/user/main`);
          MainTabActiveStore.setId(1);
        }
      })
      .catch((err) => console.log(err));
  };

  return useObserver(() => (
    <div className={styles.container}>
      <RequestDetailHeader />
      <div className={styles.menuTab}>
        <a
          className={styles.active}
          onClick={() => {
            router.push(`/user/main/reservation/detail/${id}`);
          }}>
          요청상세
        </a>

        <a
          onClick={() => {
            router.push(`/user/main/reservation/detail/chat/${id}`);
          }}>
          채팅
        </a>
      </div>
      <RequestInfo list={request && request} />
      <ProposalInfo
        isReservation={isReservation}
        leftButtonValue={DISPATCH_CANCEL}
        rightButtonValue={DISPATCH_COMPLETE}
        goToDispatching={goToDispatching}
        list={proposal && proposal}
        goToCancel={goToCancel}
      />
    </div>
  ));
};

export default ConfirmationDetail;
