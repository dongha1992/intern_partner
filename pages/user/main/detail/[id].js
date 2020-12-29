import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RequestDetailHeader from '../../../../components/Header/RequestDetailHeader';
import RequestInfoHeader from '../../../../components/Header/RequestInfoHeader';
import ProposalInput from '../../../../components/Input/ProposalInput';
import RequestInfo from '../../../../components/RequestDetail/RequestInfo';
import styles from './Detail.scss';
import { REQUEST_NUMBER_TEXT } from '../../../../constants/requestDetail/RequestInfo';
import {
  PROPOSAL_INFO,
  PROPOSAL_CAR1,
  PROPOSAL_CAR2,
  PLACEHOLDER_CAR_BRAND_E,
  PLACEHOLDER_CAR_BRAND,
} from '../../../../constants/requestDetail/ProposalInfo';
import { PROPOSAL_CAR } from '../../../../constants/requestDetail/Proposal';
import { PROPOSAL } from '../../../../constants/requestDetail/Proposal';
import fetch from 'isomorphic-unfetch';
import useStore from '../../../../stores';
import { useObserver } from 'mobx-react';
import axios from 'axios';

const { ProposalStore } = useStore();
const isProposalInput = true;

const Detail = ({ list }) => {
  const isProposal = true;
  const router = useRouter();

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
      <div className={styles.proposal_subject}>{PROPOSAL_CAR}</div>
      <ProposalInput
        placeholder={PLACEHOLDER_CAR_BRAND_E}
        SelectedCarBrand={ProposalStore.carBrand}
        SelectedCarName={ProposalStore.suggestionCarName}
        value={ProposalStore.carBrand}
        onClick={() => {
          // this.props.router.push(`/user/main/detail/${id}/proposal`);
          console.log('+_+');
        }}
        isProposalInput={true}
      />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios('http://localhost:5700/api/getRequestInfo');
  const list = await res.data;

  return {
    props: { list },
  };
}

export default Detail;
