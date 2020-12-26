import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import RequestInfoHeader from "../Header/RequestInfoHeader";
import DetailList from "./DetailList";
import styles from "./RequestInfo.scss";
import axios from "axios";
import { baseUrl } from "../../config";
import apiUser from "../../api/User";
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
const API = "http://localhost:5700/api/getRequestInfo";

export default function RequestInfo({ list }) {
	const router = useRouter();
	const { id } = router?.query;

	// useEffect(() => {
	// 	axios.get(API).then((res) => {
	// 		setList(res.data);
	// 	});
	// }, []);

	const info = list?.find((el) => {
		return el.id == id;
	});
	return (
		<Fragment>
			<RequestInfoHeader
				requestNumber={info?.id}
				requestInfo={REQUEST_INFO}
				requestNumberText={REQUEST_NUMBER_TEXT}
			/>
			<DetailList
				requestList={USER_CAR_TYPE}
				responseBrand={info?.car_brand}
				response={info?.car_type}
			/>
			<DetailList requestList={USER_CAR_NUMBER} response={info?.car_number} />
			<DetailList
				requestList={USER_PHONE_NUMBER}
				response={info?.phone_number}
			/>
			<DetailList requestList={USER_LOCATION} response={info?.location} />
			<DetailList requestList={REQUEST_DATE} response={info?.date} />
			<DetailList
				requestList={ADDITIONAL_REQUESTS}
				response={info?.description}
			/>
			<div style={{ marginBottom: "35px" }} />
			<div className={styles.rectangle} />
		</Fragment>
	);
}
