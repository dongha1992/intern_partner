import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'next/router';
import Header from '../../../../../components/Header';
import CompanySearchList from './CompanySearchList';
// import Button from '../../../../../components/Button';
import CompanyAddressButton from './CompanyAddressButton';
import { THEME_COLOR } from '../../../../../constants/Color';
import styles from './CompanySearch.scss';
import { COMPANY_ADDRESS } from '../../../../../constants/company/FormTitle';
import { CONFIRM_BUTTON } from '../../../../../constants/employee/CompanySearchButton';

@withRouter
@inject('SearchAddressStore')
@observer
class CompanySearch extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }
  goToForm = () => {
    console.log(this.props.router);
    this.props.router.push('/user/register/company');
  };

  render() {
    const { SearchAddressStore } = this.props;
    console.log('<><><><><',this.props.SearchAddressStore.searchAddressInput);

    return (
      <div className={styles.company_search_container}>
        <Header title={COMPANY_ADDRESS} />
        <div
          className={styles.form_wrap}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'space-around',
            height: '694px',
          }}>
          <CompanySearchList />
          <CompanyAddressButton
            value={CONFIRM_BUTTON}
            margin={0}
            searchAddressInput={SearchAddressStore.searchAddressInput}
            searchAddress2Input={SearchAddressStore.searchAddress2Input}
            searchCityInput={SearchAddressStore.searchCityInput}
            searchStateInput={SearchAddressStore.searchStateInput}
            searchZipCodeInput={SearchAddressStore.searchZipCodeInput}
            goToForm={() => {
              this.props.router.push('/user/register/company');
            }}
          />
        </div>
      </div>
    );
  }
}

export default CompanySearch;
