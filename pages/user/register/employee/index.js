import React, { Component } from 'react';
import Header from '../../../../components/Header';
import BasicInfo from './BasicInfo';
import BusinessInfo from './BusinessInfo';
import CreateAnAccount from './CreateAnAccount';
import EmpolyeeFormCreateButton from './EmployeeFormCreateButton';
import SingUpModal from './SignUpModal';
import { inject, observer } from 'mobx-react';
import styles from './RegisterEmployeePage.scss';

@inject('SearchCompanyStore')
@inject('SignUpEmployeeStore')
@observer
class RegisterEmployeePage extends Component {
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
    
  }

  render() {
    const { searchResult } = this.props.SearchCompanyStore;
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
            searchResult={searchResult}
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

export default RegisterEmployeePage;
