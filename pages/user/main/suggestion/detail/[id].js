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
import axios from 'axios';
import useStore from '../../../../../stores';
import { useObserver } from 'mobx-react';
import { SERVER_URL } from '../../../../../config';

const isSuggestion = true;
const { ProposalStore } = useStore();

const SuggestionDetail = ({ proposal, request }) => {
  const router = useRouter();
  const { id } = router.query;

  const goToCancel = () => {
    console.log('D');
  };

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
        />
      }
    </div>
  ));
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);
  const res = await axios.get(`${SERVER_URL}/suggestion/${id}`);
  const list = await res.data;
  const proposal = { ...list.suggestion };
  const request = { ...list.suggestion.request };

  return {
    props: { proposal, request },
  };
}

export default SuggestionDetail;
