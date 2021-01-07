import React, { useState } from 'react';
import { RequestDetailHeader } from '../../../../../components/Header';
import EmployeeListItem from './EmployeeListItem';

import {
  EMPLOYEE_LIST,
  EMPLOYEE_NAME,
  EMPLOYEE_STATUS,
} from '../../../../../constants/main/EmployeeList';
import styles from '../userInformation.scss';
import axios from 'axios';

const EmployeeList = ({ data }) => {
  const [lists, setList] = useState(data);

  const onDeleteHandeler = (id) => {
    const filtered = lists.filter((list) => list.id !== id);
    setList(filtered);
  };

  const onChangeStatusHandler = (id) => {
    const targeted = lists.map((list) =>
      list.id === id
        ? {
            ...list,
            checked: !list.checked,
          }
        : list
    );

    setList(targeted);
  };

  const employeeLists = lists.map((list) => {
    return (
      <EmployeeListItem
        name={list.name}
        id={list.id}
        onClick={() => {
          onDeleteHandeler(list.id);
        }}
        onChange={() => {
          onChangeStatusHandler(list.id);
        }}
        key={list.id}
        status={list.checked}
      />
    );
  });

  return (
    <div className={styles.container}>
      <RequestDetailHeader title={EMPLOYEE_LIST} />
      <div className={styles.listTitle}>
        <div>{EMPLOYEE_NAME}</div>
        <div className={styles.status}>{EMPLOYEE_STATUS}</div>
      </div>
      <div className={styles.listWrap}>{employeeLists}</div>
    </div>
  );
};

export default EmployeeList;

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:5700/api/getEmployeeList');
  const data = res.data;
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
