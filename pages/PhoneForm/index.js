import React from 'react';
import styles from './PhoneForm.scss';
import {
  MY_LOCATION_CALL,
  SUGGESTING,
  RESERVATION_CONFIRMATION,
  DISPATCHING,
  RETURNED,
} from '../../constants/landingPage/ThirdPage';

export default function PhoneForm() {
  const rentalProcessList = [
    { id: 1, list: MY_LOCATION_CALL },
    { id: 2, list: SUGGESTING },
    { id: 3, list: RESERVATION_CONFIRMATION },
    { id: 4, list: DISPATCHING },
    { id: 5, list: RETURNED },
  ];
  const callData = [
    { id: 1, count: 8, type: 'BMW 520D', date: '2020.11.16 16:40' },
    { id: 2, count: 2, type: '벤츠 glc300/2.0/2019', date: '2020.12.25 12:05' },
    { id: 3, count: 10, type: '제네시스 G90', date: '2021.01.01 10:00' },
  ];
  return (
    <div className={styles.shadow_phone_form}>
      <img
        src='/2.png'
        srcSet='/2@2x.png 2x, /2@3x.png 3x'
        className={styles.inner_logo}
      />
      <img
        src='/1.png'
        srcSet='/1@2x.png 2x, /1@3x.png 3x'
        className={styles.inner_logo_dot}
      />
      <div>
        {rentalProcessList.map((el) => (
          <span
            style={
              el.id === 1
                ? { color: 'black', borderBottom: '1px solid #1877f2' }
                : { color: '#bdbdbd' }
            }
            key={el.id}
            className={styles.rental_process_list}>
            {el.list}
          </span>
        ))}
      </div>
      {callData.map((el) => (
        <div key={el.id} className={styles.call_container}>
          <div className={styles.suggestion_container}>
            <div className={styles.suggestion}>제안</div>
            <div className={styles.count}>{el.count}</div>
          </div>
          <div>
            <div className={styles.company_suggestion}>공업사 요청</div>
            <div>
              <span className={styles.customer_car_type_text}>고객차종</span>
              <span className={styles.customer_car_type}>{el.type}</span>
            </div>
            <div>
              <span className={styles.customer_car_number_text}>차량번호</span>
              <span className={styles.customer_car_number}>-</span>
            </div>
            <div>
              <span className={styles.customer_call_date_text}>요청일</span>
              <span className={styles.customer_call_date}>{el.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
