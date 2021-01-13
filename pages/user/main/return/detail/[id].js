import React from 'react';
import RequestDetailHeader from '../../../../../components/Header/RequestDetailHeader';
import RequestInfo from '../../../../../components/RequestDetail/RequestInfo';
import ProposalInfo from '../../../../../components/RequestDetail/ProposalInfo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ReturnDetail.scss';
import {
  DISPATCH_CANCEL,
  DISPATCH_COMPLETE,
} from '../../../../../constants/requestDetail/ProposalInfo';
import axios from 'axios';
import { SERVER_URL } from '../../../../../config';
import callApi from '../../../../../utils/callApi';

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

const ReturnDetail = ({ proposal, request }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <RequestDetailHeader />
      <div className={styles.menuTab}>
        <a
          className={styles.active}
          onClick={() => {
            router.push(`/user/main/return/detail/${id}`);
          }}>
          요청상세
        </a>
        <Link href='/user/main/return/detail/chat'>
          <a>채팅</a>
        </Link>
      </div>
      <RequestInfo list={request} />
      <ProposalInfo
        isReturn={true}
        leftButtonValue={DISPATCH_CANCEL}
        rightButtonValue={DISPATCH_COMPLETE}
        list={proposal}
      />
      <div style={{ marginTop: '80px' }} />
    </div>
  );
};

export default ReturnDetail;
