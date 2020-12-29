import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RequestDetailHeader from '../../../../components/Header/RequestDetailHeader';
import RequestInfoHeader from '../../../../components/Header/RequestInfoHeader';
import RequestInfo from '../../../../components/RequestDetail/RequestInfo';
import styles from './Detail.scss';
import { REQUEST_NUMBER_TEXT } from '../../../../constants/requestDetail/RequestInfo';
import { PROPOSAL_INFO } from '../../../../constants/requestDetail/ProposalInfo';
import { PROPOSAL } from '../../../../constants/requestDetail/Proposal';

import axios from 'axios';

const Detail = ({ list }) => {
  const isProposal = true;
  const router = useRouter();
  // console.log(shows, "ddddddd");

  // if (router.isFallback) {
  return (
    <div className={styles.container}>
      <RequestDetailHeader requestDetail={'요청상세'} />
      <RequestInfo list={list} />
      <div style={{ paddingTop: '15px' }} />
      <RequestInfoHeader
        proposal={PROPOSAL}
        isProposal={isProposal}
        requestNumber={REQUEST_NUMBER_TEXT}
        proposalInfo={PROPOSAL_INFO}
        style={{ display: 'none' }}
      />
    </div>
  );
};
// };

// backend data를 동적으로 불러왔을 때 사용

// export async function getStaticPaths({ params }) {
// 	const res = await fetch("http://localhost:5700/api/getRequestInfo");
// 	const list = await res.json();
// 	const paths = list.map((list) => ({
// 		params: { id: list.id.toString() },
// 	}));
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// export async function getStaticProps({params}) {
// 	const res = await fetch(`http://localhost:5700/api/getRequestInfo${params.id}`);
// 	const list = await res.json();
// 	return {
// 		props: { shows: list },
// 	};
// }

export async function getServerSideProps() {
  const res = await axios('http://localhost:5700/api/getRequestInfo');
  const list = await res.data;
  console.log(list, 'difjsdoifjwoj');
  return {
    props: { list },
  };
}

export default Detail;
