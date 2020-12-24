import React, { Component } from 'react';
import Header from '../../../../components/Header';
import BasicInfo from './BasicInfo';
import BusinessInfo from './BusinessInfo';
import CreateAnAccount from './CreateAnAccount';
import EmpolyeeFormCreateButton from './EmployeeFormCreateButton';
import SingUpModal from './SignUpModal';
import { inject, observer } from 'mobx-react';
import styles from './RegisterEmployeePage.scss';
import axios from 'axios';
import { SERVER_URI } from '../../../../config';

@inject('SearchAddressStore')
@inject('SignUpEmployeeStore')
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
      userEmail,
      userName,
      userPassword,
      userPosition,
      userNumber,
      userId,
    } = this.props.SignUpEmployeeStore.form;
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
        userid: userId.value,
        userpassword: userPassword.value,
        username: userName.value,
        usernumber: userNumber.value,
        userposition: userPosition.value,
        useremail: userEmail.value,
        companyname: companyName,
        companyaddress1: searchAddressInput,
        companyaddress2: searchAddress2Input,
        companycity: searchCityInput,
        companystate: searchStateInput,
        companyzipcode: searchZipCodeInput,
        companyintro: companyIntro,
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            isModal: !this.state.isModal,
          });
          userId.value = '';
          userPassword.value = '';
          userName.value = '';
          userNumber.value = '';
          userPosition.value = '';
          userEmail.value = '';
          companyName = '';
          comsearchAddressInput = '';
          comsearchAddress2Input = '';
          searchCityInput = '';
          searchStateInput = '';
          cosearchZipCodeInput = '';
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
      userEmail,
      userName,
      userPassword,
      userPasswordCheck,
      userPosition,
      userNumber,
      userId,
    } = this.props.SignUpEmployeeStore.form;
    const { isModal } = this.state;

    return (
      <div className={styles.register_container}>
        <Header />
        <div className={styles.form_wrap}>
          <CreateAnAccount />
          <BasicInfo />
          <BusinessInfo />
          <EmpolyeeFormCreateButton
            companyName={companyName}
            searchAddressInput={searchAddressInput}
            companyIntro={companyIntro}
            userEmail={userEmail.value}
            userName={userName.value}
            userPassword={userPassword.value}
            userPasswordCheck={userPasswordCheck.value}
            userPosition={userPosition.value}
            userNumber={userNumber.value}
            userId={userId.value}
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
