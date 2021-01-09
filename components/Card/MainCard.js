import React from 'react';
import styles from './MainCard.scss';
import { withRouter, useRouter } from 'next/router';
import useStore from '../../stores';
import { useObserver } from 'mobx-react';

const MainCard = ({
  name,
  id,
  onClick,
  suggestions_count,
  carType,
  carNumber,
  date,
  suggestion_id,
  isReservationCard,
  isReturnCard,
  dispatch_date,
  return_date,
  isDispatchCard,
}) => {
  const router = useRouter();
  const { ProposalStore } = useStore();

  return useObserver(() => (
    <div
      className={styles.call_container}
      id={id}
      onClick={(id) => {
        onClick(id);
      }}>
      {suggestion_id ? (
        ''
      ) : (
        <div className={styles.suggestion_container}>
          <div className={styles.suggestion}>제안</div>
          <div className={styles.count}>
            {}
            {suggestions_count}
          </div>
        </div>
      )}
      <div style={{ width: '100%', marginTop: '2px' }}>
        <div className={styles.wrap}>
          <div className={styles.company_suggestion}>공업사 요청</div>
          {isReservationCard ? (
            <div className={styles.number}>요청번호 {id}</div>
          ) : (
            ''
          )}
        </div>
        <div className={styles.main_card_row}>
          <span className={styles.customer_car_type_text}>고객차종</span>
          <span className={styles.customer_car_type}>{carType}</span>
        </div>
        <div className={styles.main_card_row}>
          <span className={styles.customer_car_number_text}>차량번호</span>
          <span className={styles.customer_car_number}>{carNumber}</span>
        </div>
        <div className={styles.main_card_row}>
          <span className={styles.customer_call_date_text}>요청일</span>
          <span className={styles.customer_call_date}>{date}</span>
        </div>
        {isReservationCard && isDispatchCard ? (
          <div className={styles.main_card_row}>
            <span className={styles.customer_call_date_text}>배차일</span>
            <span className={styles.customer_call_date}>{dispatch_date}</span>
          </div>
        ) : (
          ''
        )}
        {isReservationCard && isDispatchCard && isReturnCard ? (
          <div className={styles.main_card_row}>
            <span className={styles.customer_call_date_text}>반납일</span>
            <span className={styles.customer_call_date}>{return_date}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  ));
};

export default MainCard;
