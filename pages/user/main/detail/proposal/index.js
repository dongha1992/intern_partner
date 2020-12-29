import React, { Component, useState } from 'react';
import styles from './Proposal.scss';
import useStore from '../../../../../stores';
import { useRouter } from 'next/router';
import { useObserver } from 'mobx-react';
import {
  PROPOSAL_HEADER,
  PROPOSAL_FOOTER,
} from '../../../../../constants/requestDetail/ProposalInfo';
const { ProposalStore } = useStore();
import axios from 'axios';
import CompanyItem from './CompanyItem';
import CarItem from './CarItem';

const Proposal = ({ data1 }) => {
  const router = useRouter();
  const [selectedCompany, setselectedCompany] = useState(data1);
  // const [selectedCar, setselectedCar] = useState(data2);
  console.log(data1);

  const CompanyList = selectedCompany.map((list) => {
    return (
      <CompanyItem
        name={list.name}
        id={list.id}
        onClick={() => {
          console.log(list.id);
        }}
        key={list.id}
      />
    );
  });

  // const CarList = selectedCar.map((list) => {
  //   return (
  //     <CarItem
  //       name={list.name}
  //       id={list.id}
  //       onClick={() => {
  //         console.log('');
  //       }}
  //       key={list.id}
  //     />
  //   );
  // });

  return useObserver(() => (
    <div className={styles.proposal_container}>
      <div className={styles.proposal_header}>
        <img
          src='/nav-ico-back.png'
          srcSet='/nav-ico-back@2x.png 2x, /nav-ico-back@3x.png 3x'
        />
        {PROPOSAL_HEADER}
      </div>
      <div className={styles.main_proposal_wrap}>
        <div className={styles.companies_list}>{CompanyList}</div>
        <div className={styles.cars_list}>{/* {CarList} */}</div>
      </div>
      <div className={styles.proposal_footer}>{PROPOSAL_FOOTER}</div>
    </div>
  ));
};

//이거를 useEffect

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:5700/api/getCompanyList');
  const data1 = res.data;
  console.log(data1);
  return {
    props: {
      data1,
    },
  };
}
// export async function getServerSideProps() {
//   const res = await axios.get('http://localhost:5700/api/getCarList');
//   const data2 = res.data;
//   return {
//     props: {
//       data2,
//     },
//   };
// }

export default Proposal;
