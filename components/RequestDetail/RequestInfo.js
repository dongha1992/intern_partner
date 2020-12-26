import React, { Fragment, useEffect } from "react";
import RequestInfoHeader from "../Header/RequestInfoHeader";
import DetailList from "./DetailList";
import styles from "./RequestInfo.scss";
// import axios from "axios";
// import apiUser from "../../api/User";
import {
	REQUEST_INFO,
	REQUEST_NUMBER_TEXT,
	REQUEST_DETAIL,
	USER_CAR_TYPE,
	USER_CAR_NUMBER,
	USER_PHONE_NUMBER,
	USER_LOCATION,
	REQUEST_DATE,
	ADDITIONAL_REQUESTS,
} from "../../constants/requestDetail/RequestInfo";
export default function RequestInfo() {
	const requestNumber = "54321";
	// useEffect = async () => {
	//   const id = { id: this.state.id };
	//   const response = await apiUser.getRequestInfo(id);
	//   const responseData = response.data;

	//   this.setState({ info: responseData.userInfo })
	// }
	// useEffect(() => {
	//   axios
	//     .get(`${baseUrl}/api`)
	//     .then((response) => {
	//       if (response.status === 200) {
	//         this.setState({
	//           isIdDuplicate: false,
	//         });
	//       }
	//     })
	//     .catch(function (error) {
	//       if (error.response) {
	//         console.log(error.response, 'error response');
	//       } else if (error.request) {
	//         console.log(error.request, 'error request');
	//       } else {
	//         console.log('Error');
	//       }
	//     });
	// }, [])
	function requestDate() {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		return (
			`${year}.` +
			`${month < 10 ? 0 + "" + month : month}.` +
			`${day < 10 ? 0 + "" + day : day} ` +
			`${hours < 10 ? 0 + "" + hours : hours}:` +
			`${minutes < 10 ? 0 + "" + minutes : minutes}`
		);
	}
	return (
		<Fragment>
			<RequestInfoHeader
				requestNumber={requestNumber}
				requestInfo={REQUEST_INFO}
				requestNumberText={REQUEST_NUMBER_TEXT}
			/>
			<DetailList
				requestList={USER_CAR_TYPE}
				responseBrand={"현대"}
				response={"아반떼"}
			/>
			<DetailList requestList={USER_CAR_NUMBER} response={"01가 1234"} />
			<DetailList
				requestList={USER_PHONE_NUMBER}
				response={"+82 10 1234 4321"}
			/>
			<DetailList requestList={USER_LOCATION} response={"서울특별시 강동구"} />
			<DetailList requestList={REQUEST_DATE} response={requestDate()} />
			<DetailList
				requestList={ADDITIONAL_REQUESTS}
				response={"안전하게 와주세요."}
			/>
			<div style={{ marginBottom: "35px" }} />
			<div className={styles.rectangle} />
		</Fragment>
	);
}
