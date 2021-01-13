import React, { useState, useEffect } from 'react';
import styles from './Proposal.scss';
import { useRouter } from 'next/router';
import { useObserver } from 'mobx-react';
import { SERVER_URL } from '../../../../../config';
import { withRouter } from 'next/router';

import {
  PROPOSAL_HEADER,
  PROPOSAL_FOOTER,
} from '../../../../../constants/requestDetail/ProposalInfo';
import callApi from '../../../../../utils/callApi';
// import axios from 'axios';
import CompanyItem from './CompanyItem';
import CarItem from './CarItem';

function Proposal(props) {
  const router = useRouter();
  const [initialData, setInitialData] = useState([]);
  const [selectedCompany, setselectedCompany] = useState([]);
  const [selectedCar, setselectedCar] = useState([]);

  const isValid =
    ProposalStore.selectedCarBrand !== '' &&
    ProposalStore.selectedCarName !== '';

  const getData = () => {
    callApi.get(`${SERVER_URL}/car`).then((res) => {
      const data = res.data.data;
      setInitialData(data);
    });
  };

  useEffect(() => {
    if (selectedCompany.length === 0) {
      getData();
    }
  }, [selectedCompany]);

  useEffect(() => {
    if (initialData.length === 0) {
      getData();
    }
  }, [initialData]);

  const CompanyList = initialData.map((list) => {
    return (
      <CompanyItem
        name={list.brand}
        id={list.id}
        onClick={() => {
          getSelectedCar(list.brand);
          setselectedCompany(list.brand);
        }}
        key={list.id}
      />
    );
  });

  const CarList = selectedCar.map((list) => {
    return (
      <CarItem
        name={list.model}
        id={list.id}
        onClick={() => {
          setselectedCompany(list.model);
        }}
        key={list.id}
      />
    );
  });

  return useObserver(() => (
    <div className={styles.proposal_container}>
      <div className={styles.proposal_header}>
        <img
          src='/nav-ico-back.png'
          srcSet='/nav-ico-back@2x.png, /nav-ico-back@3x.png '
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
          router.back();
        }}>
        {PROPOSAL_FOOTER}
      </div>
    </div>
  ));
}

export default withRouter(Proposal);
