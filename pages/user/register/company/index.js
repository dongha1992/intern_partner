import React, { Component } from 'react';
import Header from '../../../../components/Header';
import BasicInfo from './BasicInfo';
import BusinessInfo from './BusinessInfo';
import CreateAnAccount from './CreateAnAccount';
import CompanyFormCreateButton from './CompanyFormCreateButton';
import SingUpModal from './SignUpModal';
import { inject, observer } from 'mobx-react';
import styles from './RegisterEmployeePage.scss';
import axios from 'axios';
import { SERVER_URI } from '../../../../config';

@inject('SearchAddressStore')
@inject('SignUpCompanyStore')
@observer
class RegisterCompanyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
    };
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }

  modalHandler() {
    this.setState({
      isModal: !this.state.isModal,
    });
  }

  goToServer() {
    const {
      companyUserEmail,
      companyUserName,
      companyUserPassword,
      companyUserPasswordCheck,
      companyUserPosition,
      companyUserNumber,
      companyUserId,
    } = this.props.SignUpCompanyStore.form;
    const {
      companyName,
      searchAddressInput,
      searchAddress2Input,
      searchCityInput,
      searchStateInput,
      searchZipCodeInput,
      companyIntro,
    } = this.props.SearchAddressStore;

    axios
      .post(`${SERVER_URI}/user/signup/company`, {
        userid: companyUserId.value,
        userpassword: companyUserPassword.value,
        username: companyUserName.value,
        usernumber: companyUserNumber.value,
        userposition: companyUserPosition.value,
        useremail: companyUserEmail.value,
        companyname: companyName,
        companyaddress1: searchAddressInput,
        companyaddress2: searchAddress2Input,
        companycity: searchCityInput,
        companystate: searchStateInput,
        companyzipcode: searchZipCodeInput,
        companyintro: companyIntro,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            isModal: !this.state.isModal,
          });
          companyUserId.value = '';
          companyUserPassword.value = '';
          companyUserPasswordCheck.value = '';
          companyUserName.value = '';
          companyUserNumber.value = '';
          companyUserPosition.value = '';
          companyUserEmail.value = '';
          companyName = '';
          searchAddressInput = '';
          searchAddress2Input = '';
          searchCityInput = '';
          searchStateInput = '';
          searchZipCodeInput = '';
          companyIntro = '';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      companyName,
      searchAddressInput,
      companyIntro,
    } = this.props.SearchAddressStore;

    const {
      companyUserEmail,
      companyUserName,
      companyUserPassword,
      companyUserPasswordCheck,
      companyUserPosition,
      companyUserNumber,
      companyUserId,
    } = this.props.SignUpCompanyStore.form;
    const { isModal } = this.state;

    return (
      <div className={styles.register_container}>
        <Header />
        <div className={styles.form_wrap}>
          <CreateAnAccount />
          <BasicInfo />
          <BusinessInfo />
          <CompanyFormCreateButton
            companyName={companyName}
            searchAddressInput={searchAddressInput}
            companyIntro={companyIntro}
            companyUserEmail={companyUserEmail.value}
            companyUserName={companyUserName.value}
            companyUserPassword={companyUserPassword.value}
            companyUserPasswordCheck={companyUserPasswordCheck.value}
            companyUserPosition={companyUserPosition.value}
            companyUserNumber={companyUserNumber.value}
            companyUserId={companyUserId.value}
            onClick={() => {
              this.modalHandler();
              this.goToServer();
            }}
          />
        </div>
        <SingUpModal isModal={isModal} />
      </div>
    );
  }
}

export default RegisterCompanyPage;
