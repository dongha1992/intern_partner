import React, { Component } from 'react';
import { SignUpInput } from '../../../../components/SignUpCompanyInput';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'next/router';
import styles from './BusinessInfo.scss';

import { BUSINESS_INFO } from '../../../../constants/company/FormTitle';
import { BUSINESS_INFO_PADDING_TOP } from '../../../../constants/company/FormTitlePadding';
import {
  COMPANY_NAME,
  COMPANY_ADDRESS,
  COMPANY_INTRO,
} from '../../../../constants/company/BusinessInfo';
import { COMPANY_NAME_PADDING_TOP } from '../../../../constants/company/BusinessInfoPadding';
import { USER_COMPANY_NAME } from '../../../../constants/company/FormNameForEvent';

const isSearchInput = true;

@withRouter
@inject('SignUpCompanyStore')
@inject('SearchAddressStore')
@observer
class BusinessInfo extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }
  render() {
    const { SearchAddressStore, SignUpCompanyStore } = this.props;

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
            style={{ color: 'black' }}
            name={USER_COMPANY_NAME}
            value={SearchAddressStore.companyName}
            onChange={(e) => SearchAddressStore.setCompanyName(e.target.value)}
          />
          <SignUpInput
            className={USER_COMPANY_NAME}
            label={COMPANY_ADDRESS}
            padding={COMPANY_NAME_PADDING_TOP}
            onClick={() => {
              this.props.router.push('/user/register/company/companyAddress');
            }}
            isSearchInput={isSearchInput}
            name={USER_COMPANY_NAME}
            userSelectedAddress={SearchAddressStore.searchAddressInput}
            value={SearchAddressStore.searchAddressInput}
            isSubmit={SignUpCompanyStore.isRegisterValid}
          />
          <SignUpInput
            className={USER_COMPANY_NAME}
            label={COMPANY_INTRO}
            padding={COMPANY_NAME_PADDING_TOP}
            value={SearchAddressStore.companyIntro}
            name={USER_COMPANY_NAME}
            onChange={(e) => SearchAddressStore.setCompanyIntro(e.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default BusinessInfo;
