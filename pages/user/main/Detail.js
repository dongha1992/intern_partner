import React from 'react';
import { useRouter } from 'next/router';
import RequestDetailHeader from '../../../components/Header/RequestDetailHeader';
import RequestInfoHeader from '../../../components/Header/RequestInfoHeader';
import RequestInfo from '../../../components/RequestDetail/RequestInfo';
import styles from './Detail.scss';

import { REQUEST_NUMBER_TEXT } from '../../../constants/requestDetail/RequestInfo';
import { PROPOSAL_INFO } from '../../../constants/requestDetail/ProposalInfo';
import { PROPOSAL } from '../../../constants/requestDetail/Proposal';

const Detail = () => {
  const router = useRouter();
  const isProposal = true;

  return (
    <div className={styles.container}>
      <RequestDetailHeader requestDetail={'요청상세'} />
      <RequestInfo />
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

export default Detail;
