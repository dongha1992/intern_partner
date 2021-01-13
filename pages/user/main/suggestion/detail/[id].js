import React, { useEffect, useState } from 'react';
import RequestDetailHeader from '../../../../../components/Header/RequestDetailHeader';
import RequestInfo from '../../../../../components/RequestDetail/RequestInfo';
import ProposalInfo from '../../../../../components/RequestDetail/ProposalInfo';
import styles from './SuggestionDetail.scss';
import { useRouter } from 'next/router';
import {
  SUGGESTION_CANCEL,
  SUGGESTION_EDIT,
} from '../../../../../constants/requestDetail/ProposalInfo';
// import axios from 'axios';
import callApi from '../../../../../utils/callApi';
import useStore from '../../../../../stores';
import { useObserver } from 'mobx-react';
import { SERVER_URL } from '../../../../../config';

const isSuggestion = true;
const { MainTabActiveStore, ProposalStore } = useStore();

const SuggestionDetail = ({ proposal, request }) => {
  const router = useRouter();
  const { id } = router.query;

  const goToCancel = () => {
    // 페이지가 메인으로 돌아가고
    router.push(`/user/main/`);

    // 제안중 내 클릭했던 카드가 사라지고
    callApi
      .delete(`${SERVER_URL}/suggestion/${id}`)
      .then((res) => {
        if (res.status === 200) {
          router.push(`/user/main/`);
        }
      })
      .catch((err) => console.log(err));

    // tab 활성화도 메인으로 돌아간다.
    MainTabActiveStore.setId(1);

    // console.log(id);
  };

  const goToEdit = () => {
    router.push(`/user/main/detail/${request.id}`);
    ProposalStore.setSuggestionId(proposal.id);
    ProposalStore.setIsEdit(true);
    ProposalStore.setInitalProposal(proposal);
  };

  console.log(proposal);
  return useObserver(() => (
    <div className={styles.container}>
      <RequestDetailHeader requestDetail={'요청상세'} />
      {<RequestInfo list={request && request} isSuggestion={isSuggestion} />}
      {
        <ProposalInfo
          isSuggestion={isSuggestion}
          leftButtonValue={SUGGESTION_CANCEL}
          rightButtonValue={SUGGESTION_EDIT}
          list={proposal && proposal}
          goToCancel={goToCancel}
          goToEdit={goToEdit}
        />
      }
    </div>
  ));
};

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

export default SuggestionDetail;
