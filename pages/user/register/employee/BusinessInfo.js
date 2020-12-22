import React, { Component } from 'react';
import { SignUpInput } from '../../../../components/Input';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'next/router';
import styles from './BusinessInfo.scss';

import { BUSINESS_INFO } from '../../../../constants/employee/FormTitle';
import { BUSINESS_INFO_PADDING_TOP } from '../../../../constants/employee/FormTitlePadding';
import { COMPANY_NAME } from '../../../../constants/employee/BusinessInfo';
import { COMPANY_NAME_PADDING_TOP } from '../../../../constants/employee/BusinessInfoPadding';
import { USER_COMPANY_NAME } from '../../../../constants/employee/FormNameForEvent';

const isSearchInput = true;

@withRouter
@inject('SignUpEmployeeStore')
@inject('SearchCompanyStore')
@observer
class BusinessInfo extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }
  render() {
    const { SignUpEmployeeStore, SearchCompanyStore } = this.props;

    return (
      <div className={styles.businessInfo_form_container}>
        <h2
          className={styles.title}
          style={{ paddingTop: `${BUSINESS_INFO_PADDING_TOP}px` }}>
          {BUSINESS_INFO}
        </h2>
        <form action='post' className={styles.input_business_form}>
          <SignUpInput
            className={USER_COMPANY_NAME}
            label={COMPANY_NAME}
            padding={COMPANY_NAME_PADDING_TOP}
            onClick={() => {
              this.props.router.push('/user/register/employee/companySearch');
            }}
            isSearchInput={isSearchInput}
            name={USER_COMPANY_NAME}
            userSelectedCompany={SearchCompanyStore.searchResult}
          />
        </form>
      </div>
    );
  }
}

export default BusinessInfo;
