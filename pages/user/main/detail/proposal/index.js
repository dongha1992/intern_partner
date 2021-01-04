import React, { Component, useState, useEffect } from 'react';
import styles from './Proposal.scss';
import useStore from '../../../../../stores';
import { useRouter } from 'next/router';
import { useObserver } from 'mobx-react';
import { SERVER_URI } from '../../../../../config';

import {
  PROPOSAL_HEADER,
  PROPOSAL_FOOTER,
} from '../../../../../constants/requestDetail/ProposalInfo';
import axios from 'axios';
import CompanyItem from './CompanyItem';
import CarItem from './CarItem';

const Proposal = ({}) => {
  const router = useRouter();
  const { ProposalStore } = useStore();
  const [selectedCompany, setselectedCompany] = useState([]);
  const [selectedCar, setselectedCar] = useState([]);
  const [isActive, setIsActive] = useState(false); //의미없음

  const isValid =
    // 수정필요
    ProposalStore.selectedCarBrand !== '' &&
    ProposalStore.selectedCarName !== '';
  // isActive == true;

  const getData = () => {
    axios.get(`${SERVER_URI}/car`).then((res) => {
      const data = res.data.data;
      console.log(data);
      setselectedCompany(data);
    });
  };

  const getSelectedCar = (brand) => {
    axios.get(`${SERVER_URI}/car?brand=${brand}`).then((res) => {
      const { data } = res.data;
      console.log(data);
      setselectedCar(data);
    });
  };

  useEffect(() => {
    if (selectedCompany.length === 0) {
      getData();
    }
  }, [selectedCompany]);

  const CompanyList = selectedCompany.map((list) => {
    const active = ProposalStore.selectedCarBrand == list.brand;
    return (
      <CompanyItem
        name={list.brand}
        id={list.id}
        onClick={() => {
          getSelectedCar(list.brand);
          ProposalStore.setSelectedCarBrand(list.brand);
        }}
        key={list.id}
        active={active && active}
      />
    );
  });

  const CarList = selectedCar.map((list) => {
    const active = ProposalStore.selectedCarName == list.model;
    return (
      <CarItem
        name={list.model}
        id={list.id}
        onClick={() => {
          console.log(list);
          ProposalStore.setSelectedCarName(list.model);
          // 위 코드 이후 렌더가 되지않는 이유 분석하기
          setIsActive(!isActive);
          console.log(isActive);
        }}
        key={list.id}
        active={active}
      />
    );
  });

  return useObserver(() => (
    <div className={styles.proposal_container}>
      <div className={styles.proposal_header}>
        <img
          src='/nav-ico-back.png'
          srcSet='/nav-ico-back@2x.png 2x, /nav-ico-back@3x.png 3x'
          onClick={() => {
            router.back();
          }}
        />
        {PROPOSAL_HEADER}
      </div>
      <div className={styles.main_proposal_wrap}>
        <div className={styles.companies_list}>{CompanyList}</div>
        <div className={styles.cars_list}>{CarList}</div>
      </div>

      <div
        className={
          isValid ? styles.active_proposal_footer : styles.proposal_footer
        }
        onClick={() => {
          // 클릭되어있는 회사명과 해당 차명이 proposal input에 담겨야 한다.
          // router.push(`/user/main/detail/${router.query.id}`);
          router.back();
        }}>
        {PROPOSAL_FOOTER}
      </div>
    </div>
  ));
};

export default Proposal;
