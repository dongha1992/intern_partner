import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import RequestInfoHeader from "../Header/RequestInfoHeader";
import DetailList from "./DetailList";
import styles from "./RequestInfo.scss";
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

export default function RequestInfo({ list, isSuggestion }) {
	console.log("request", list);

	const router = useRouter();
	const { id } = router.query;

	// const info = list.find((el) => {
	// 	return el.id == id;
	// });

	return (
		<Fragment>
			<RequestInfoHeader
				requestNumber={list.id}
				requestInfo={REQUEST_INFO}
				requestNumberText={REQUEST_NUMBER_TEXT}
			/>
			<DetailList
				requestList={USER_CAR_TYPE}
				responseBrand={list.car.brand}
				response={list.car.model}
			/>
			<DetailList requestList={USER_CAR_NUMBER} response={list.car_number} />
			<DetailList
				requestList={USER_PHONE_NUMBER}
				response={list.phone_number}
			/>
			<DetailList
				requestList={USER_LOCATION}
				response={list.city + " " + list.state}
			/>
			<DetailList requestList={REQUEST_DATE} response={list.created_at} />
			<DetailList
				requestList={ADDITIONAL_REQUESTS}
				response={list.additional_info ? list.additional_info : "-"}
			/>
			<div style={{ marginBottom: "35px" }} />
			<div className={styles.rectangle} />
		</Fragment>
	);
}
