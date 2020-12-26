import React, { Fragment, useEffect } from 'react';
import RequestInfoHeader from '../Header/RequestInfoHeader';
import DetailList from './DetailList';
import TwoButton from './TwoButton';
import styles from './RequestInfo.scss';
import { useRouter } from 'next/router';
import {
  PROPOSAL_INFO,
  PROPOSAL_CAR1,
  PROPOSAL_CAR2,
  PROPOSAL_REQUESTS,
  NONE,
} from '../../constants/requestDetail/ProposalInfo';

export default function ProposalInfo({
  leftButtonValue,
  rightButtonValue,
  isSuggestion,
  isReservation,
  isReturn,
}) {
  const requestNumber = '12345';
  const router = useRouter();

  const goToCancel = () => {
    router.push('/user/main');
  };
  const goToEdit = () => {
    router.push('/user/main/detail');
  };
  const goToDispatching = () => {
    router.push('/user/main/dispatcher');
  };

  return (
    <Fragment>
      <RequestInfoHeader
        requestNumber={requestNumber}
        proposalInfo={PROPOSAL_INFO}
        style={{ display: 'none' }}
      />
      <DetailList
        requestList={PROPOSAL_CAR1}
        responseBrand={'현대'}
        response={'아반떼'}
      />
      <DetailList requestList={PROPOSAL_CAR2} response={NONE} />
      <DetailList requestList={PROPOSAL_REQUESTS} response={NONE} />
      {isReturn ? (
        ''
      ) : (
        <TwoButton
          style={{ marginTop: '60px', paddingBottom: '30px' }}
          leftButtonValue={leftButtonValue}
          rightButtonValue={rightButtonValue}
          goToCancel={goToCancel}
          goToEdit={goToEdit}
          goToDispatching={goToDispatching}
          isSuggestion={isSuggestion}
          isReservation={isReservation}
        />
      )}
    </Fragment>
  );
}
