import React from 'react';
import RequestDetailHeader from '../../../../../components/Header/RequestDetailHeader';
import RequestInfo from '../../../../../components/RequestDetail/RequestInfo';
import ProposalInfo from '../../../../../components/RequestDetail/ProposalInfo';
import Link from 'next/link';
import styles from './DispatcherDetail.scss';
import { useRouter } from 'next/router';
import useStore from '../../../../../stores';
import { RETURN_COMPLETE } from '../../../../../constants/requestDetail/ProposalInfo';
import { SERVER_URI } from '../../../../../config';
import cookieCutter from 'cookie-cutter';
import axios from 'axios';
import { useObserver } from 'mobx-react';

const DispatcherDetail = ({ proposal, request }) => {
  const isButton = true;
  const router = useRouter();
  const { id } = router.query;
  const { MainTabActiveStore } = useStore();

  const goToReturn = () => {
    //반납 완료도 request id를 사용해야 한다.
    const id = request.id;
    const token = cookieCutter.get('token');
    const data = {
      status: 3,
    };
    axios
      .patch(`${SERVER_URI}/request/${id}`, data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res, 'res');
        if (res.status === 200) {
          router.push(`/user/main/return`);
          MainTabActiveStore.setId(5);
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
            router.push(`/user/main/dispatcher/detail/${id}`);
          }}>
          요청상세
        </a>
        <Link href='/user/main/dispatcher/detail/chat'>
          <a>채팅</a>
        </Link>
      </div>
      <RequestInfo list={request && request} />
      <ProposalInfo
        isButton={isButton}
        buttonValue={RETURN_COMPLETE}
        isDispatcher={true}
        goToReturn={goToReturn}
        list={proposal && proposal}
      />
    </div>
  ));
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(`${SERVER_URI}/suggestion/${id}`);
  const list = await res.data;
  const proposal = { ...list.suggestion };
  const request = { ...list.suggestion.request };

  return {
    props: { proposal, request },
  };
}

export default DispatcherDetail;
