import React, { useState } from 'react';
import { RequestDetailHeader } from '../../../../../components/Header';
import EmployeeListItem from './EmployeeListItem';

import {
  EMPLOYEE_LIST,
  EMPLOYEE_NAME,
  EMPLOYEE_STATUS,
} from '../../../../../constants/main/EmployeeList';
import styles from '../UserInformation.scss';
import axios from 'axios';

const EmployeeList = ({ data }) => {
  const [lists, setList] = useState(data);

  const onDeleteHandeler = (id) => {
    const filtered = lists.filter((list) => list.id !== id);
    setList(filtered);
  };

  const employeeLists = lists.map((list) => {
    return (
      <EmployeeListItem
        name={list.name}
        id={list.id}
        onClick={() => {
          onDeleteHandeler(list.id);
        }}
        key={list.id}
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

export async function getInitialProps() {
  const res = await axios.get('http://localhost:5700/api/getEmployeeList');
  const data = res.data;
  return {
    props: {
      data,
    },
  };
}

export default EmployeeList;
