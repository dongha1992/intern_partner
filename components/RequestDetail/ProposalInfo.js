import React, { Fragment } from 'react';
import RequestInfoHeader from '../Header/RequestInfoHeader';
import DetailList from './DetailList';
import TwoButton from './TwoButton';
import {
  PROPOSAL_INFO,
  PROPOSAL_CAR1,
  PROPOSAL_CAR2,
  PROPOSAL_REQUESTS,
} from '../../constants/requestDetail/ProposalInfo';
import SuggestionAndReturnButton from '../RequestDetail/SuggestionAndReturnButton';
export default function ProposalInfo({
  leftButtonValue,
  rightButtonValue,
  buttonValue,
  isSuggestion,
  isReservation,
  isDispatcher,
  isReturn,
  isButton,
  list,
  goToDispatching,
  goToReturn,
  goToCancel,
  goToEdit,
}) {
  return (
    <Fragment>
      <RequestInfoHeader
        proposalInfo={PROPOSAL_INFO}
        style={{ display: 'none' }}
      />
      <DetailList
        requestList={PROPOSAL_CAR1}
        responseBrand={list.first_car?.brand}
        response={list.first_car?.model}
      />
      <DetailList
        requestList={PROPOSAL_CAR2}
        responseBrand={list.second_car?.brand}
        response={list.second_car?.model ? list.second_car?.model : ''}
      />
      <DetailList
        requestList={PROPOSAL_REQUESTS}
        response={list?.additional_info ? list?.additional_info : ''}
      />
      {isReturn ? (
        ''
      ) : isButton ? (
        <SuggestionAndReturnButton
          style={{ marginTop: '60px' }}
          buttonValue={buttonValue}
          goToReturn={goToReturn}
          isDispatcher={isDispatcher}
          goToEdit={goToEdit}
        />
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
