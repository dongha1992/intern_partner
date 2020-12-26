import React from 'react';
import { RequestDetailHeader } from '../../../../../components/Header';
import EmployeeListItem from './EmployeeListItem';

import {
  EMPLOYEE_LIST,
  EMPLOYEE_NAME,
  EMPLOYEE_STATUS,
} from '../../../../../constants/main/EmployeeList';
import styles from '../UserInformation.scss';

const employeeLists = [
  {
    id: 1,
    name: '김동하',
  },
  { id: 2, name: '김동하' },
  { id: 3, name: '김동하' },
  { id: 4, name: '김동하' },
];

const lists = employeeLists.map((list) => {
  return <EmployeeListItem name={list.name} id={list.id} />;
});

const EmployeeList = () => {
  return (
    <div className={styles.container}>
      <RequestDetailHeader title={EMPLOYEE_LIST} />
      <div className={styles.listTitle}>
        <div>{EMPLOYEE_NAME}</div>
        <div className={styles.status}>{EMPLOYEE_STATUS}</div>
      </div>
      <div className={styles.listWrap}>{lists}</div>
    </div>
  );
};

export default EmployeeList;
