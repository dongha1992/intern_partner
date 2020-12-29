import React, { useState } from 'react';
import styles from './CompanyItem.scss';
import { withRouter, useRouter } from 'next/router';
import useStore from '../../../../../stores';
import { useObserver } from 'mobx-react';
const { ProposalStore } = useStore();
import axios from 'axios';

const CompanyItem = ({ data, name, id, onClick }) => {
  const router = useRouter();
  // const [selectedCarItem, setSelectedCarItem] = useState(data);
  console.log(data, 'props');

  return (
    <div
      id={id}
      name={name}
      onClick={() => {
        //  if(e.target.id === )
      }}
      className={styles.companyItem_container}>
      {name}
    </div>
  );
};
// 이거를 getServerSideProps
export async function getServerSideProps() {
  const res = await axios.get('http://localhost:5700/api/getCarList');
  const data = res.data;
  console.log(res, data);
  return {
    props: {
      data,
    },
  };
}

export default CompanyItem;
