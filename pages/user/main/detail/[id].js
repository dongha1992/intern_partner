import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RequestDetailHeader from '../../../../components/Header/RequestDetailHeader';
import RequestInfoHeader from '../../../../components/Header/RequestInfoHeader';
import RequestInfo from '../../../../components/RequestDetail/RequestInfo';
import Agreement from '../../../../components/Agreement';
import ProposalText from '../../../../components/RequestDetail/ProposalText';
import SuggestionAndReturnButton from '../../../../components/RequestDetail/SuggestionAndReturnButton';
import ProposalInput from '../../../../components/Input/ProposalInput';
import styles from './Detail.scss';
import { REQUEST_NUMBER_TEXT } from '../../../../constants/requestDetail/RequestInfo';
import {
  PROPOSAL_INFO,
  SUGGESTION,
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

// const { ProposalStore } = useStore();
// const isProposalInput = true;

const Detail = ({ list }) => {
  const { ProposalStore } = useStore();
  const isProposal = true;
  const router = useRouter();

  const goToSuggestion = () => {
    router.push('/user/main/suggestion');
  };

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
      <div className={styles.proposal_container}>
        {/* // 아래 코드 리펙토링 필요 */}
        <ProposalInput
          placeholder={PLACEHOLDER_CAR_BRAND_E}
          SelectedCarBrand={ProposalStore.carBrand}
          SelectedCarName={ProposalStore.suggestionCarName}
          value={ProposalStore.selectedCarBrand}
          onClick={() => {
            router.push(`/user/main/detail/proposal`);
            console.log('+_+');
          }}
          isProposalInput={true}
          image={true}
        />
        <ProposalInput
          placeholder={PROPOSAL_CAR1}
          SelectedCarBrand={ProposalStore.carBrand}
          SelectedCarName={ProposalStore.suggestionCarName}
          value={ProposalStore.selectedCarName}
          isProposalInput={true}
        />
        <ProposalInput
          placeholder={PLACEHOLDER_CAR_BRAND}
          SelectedCarBrand={ProposalStore.carBrand}
          SelectedCarName={ProposalStore.suggestionCarName}
          value={ProposalStore.selectedCarBrand}
          onClick={() => {
            router.push(`/user/main/detail/proposal`);
          }}
          isProposalInput={true}
          image={true}
        />
        <ProposalInput
          placeholder={PROPOSAL_CAR2}
          SelectedCarBrand={ProposalStore.carBrand}
          SelectedCarName={ProposalStore.suggestionCarName}
          value={ProposalStore.selectedCarName}
          isProposalInput={true}
        />
      </div>
      <ProposalText />
      <Agreement />
      <SuggestionAndReturnButton
        style={{ marginTop: '60px' }}
        buttonValue={SUGGESTION}
        goToSuggestion={goToSuggestion}
      />
      {/* <input type="text" value={ProposalStore.selectedCarName}/> */}
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
