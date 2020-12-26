import React, { Component } from "react";
import Header from "../../../../components/Header/RequestDetailHeader";
import BasicInfo from "./BasicInfo";
import BusinessInfo from "./BusinessInfo";
import CreateAnAccount from "./CreateAnAccount";
import EmpolyeeFormCreateButton from "./EmployeeFormCreateButton";
import SingUpModal from "./SignUpModal";
import { inject, observer } from "mobx-react";
import styles from "./RegisterEmployeePage.scss";
import { SERVER_URI } from "../../../../config";
import axios from "axios";

@inject("SearchCompanyStore")
@inject("SignUpEmployeeStore")
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
	goToServer() {
		const {
			userEmail,
			userName,
			userPassword,
			userPosition,
			userNumber,
			userPasswordCheck,
			userId,
		} = this.props.SignUpEmployeeStore.form;
		const { SignUpEmployeeStore, SearchCompanyStore } = this.props;
		const { companyId } = this.props.SearchCompanyStore;

		axios
			.post(`${SERVER_URI}/user/signup/employee`, {
				userid: userId.value,
				userpassword: userPassword.value,
				username: userName.value,
				usernumber: userNumber.value,
				userposition: userPosition.value,
				useremail: userEmail.value,
				company_id: companyId,
			})
			.then((res) => {
				if (res.status === 200) {
					this.setState({
						isModal: !this.state.isModal,
					});
					userEmail.value = "";
					userName.value = "";
					userPassword.value = "";
					userPosition.value = "";
					userNumber.value = "";
					userId.value = "";
					userPasswordCheck.value = "";
					SignUpEmployeeStore.setValid(true);
					SearchCompanyStore.setSearchResult("");
					SearchCompanyStore.setCompanyId("");
				}
			})
			.catch((error) => {
				alert("다시 확인해주세요.");
				console.log(error);
			});
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
			isRegisterValid,
		} = this.props.SignUpEmployeeStore.form;
		const { isModal } = this.state;

		return (
			<div className={styles.register_container}>
				<Header />
				<div className={styles.form_wrap}>
					<CreateAnAccount />
					<BasicInfo />
					<BusinessInfo isRegisterValid={isRegisterValid} />
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
