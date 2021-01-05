import React from 'react';
import RequestDetailHeader from '../../../../../components/Header/RequestDetailHeader';
import RequestInfo from '../../../../../components/RequestDetail/RequestInfo';
import ProposalInfo from '../../../../../components/RequestDetail/ProposalInfo';
import Link from 'next/link';
import styles from './DispatcherDetail.scss';
import { useRouter } from 'next/router';
import { RETURN_COMPLETE } from '../../../../../constants/requestDetail/ProposalInfo';
import axios from 'axios';

const DispatcherDetail = ({ list }) => {
  const isButton = true;
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <RequestDetailHeader />
      <div className={styles.menuTab}>
        <a
          className={styles.active}
          onClick={() => {
            router.push(`/user/main/dispatcher/detail/${id}`);
          }}>
          요청상세
        </a>
        <Link href='/user/main/dispatcher/detail/chat'>
          <a>채팅</a>
        </Link>
      </div>
      <RequestInfo list={list} />
      <ProposalInfo
        // isReturn={true}
        isButton={isButton}
        buttonValue={RETURN_COMPLETE}
        list={list}
        goToReturn={true}
        isDispatcher={true}
      />
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

export default DispatcherDetail;
