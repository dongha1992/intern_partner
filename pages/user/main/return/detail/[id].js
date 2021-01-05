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

const ReturnDetail = ({ list }) => {
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
      <RequestInfo list={list} />
      <ProposalInfo
        isReturn={true}
        leftButtonValue={DISPATCH_CANCEL}
        rightButtonValue={DISPATCH_COMPLETE}
        list={list}
      />
      <div style={{ marginTop: '80px' }} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios('http://localhost:5700/api/getRequestInfo');
  const list = await res.data;
  console.log(list, 'difjsdoifjwoj');
  return {
    props: { list },
  };
}

export default ReturnDetail;
