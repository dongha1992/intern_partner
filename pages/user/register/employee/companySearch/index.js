import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'next/router';
import Header from '../../../../../components/Header/RequestDetailHeader';
import CompanySearchList from './CompanySearchList';
import Button from '../../../../../components/Button';
import styles from './CompanySearch.scss';
import { COMPANY_SEARCH } from '../../../../../constants/employee/FormTitle';
import { CONFIRM_BUTTON } from '../../../../../constants/employee/CompanySearchButton';

@withRouter
@inject('SearchCompanyStore')
@observer
class CompanySearch extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }
  goToForm = () => {
    this.props.router.push('/user/register/employee');
  };
  render() {
    const { SearchCompanyStore } = this.props;

    return (
      <div className={styles.company_search_container}>
        <Header title={COMPANY_SEARCH} />
        <div
          className={styles.form_wrap}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'space-around',
            height: '694px',
          }}>
          <CompanySearchList />
          <Button
            value={CONFIRM_BUTTON}
            margin={0}
            searchInput={SearchCompanyStore.searchInput}
            goToForm={() => {
              this.props.router.push('/user/register/employee');
            }}
          />
        </div>
      </div>
    );
  }
}

export default CompanySearch;
