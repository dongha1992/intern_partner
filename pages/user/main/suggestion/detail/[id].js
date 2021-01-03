import React from "react";
import RequestDetailHeader from "../../../../../components/Header/RequestDetailHeader";
import RequestInfo from "../../../../../components/RequestDetail/RequestInfo";
import ProposalInfo from "../../../../../components/RequestDetail/ProposalInfo";
import styles from "./SuggestionDetail.scss";
import {
	SUGGESTION_CANCEL,
	SUGGESTION_EDIT,
} from "../../../../../constants/requestDetail/ProposalInfo";
import axios from "axios";

const isSuggestion = true;
const SuggestionDetail = ({ list }) => {
	return (
		<div className={styles.container}>
			<RequestDetailHeader requestDetail={"요청상세"} />
			<RequestInfo list={list} />
			<ProposalInfo
				isSuggestion={isSuggestion}
				leftButtonValue={SUGGESTION_CANCEL}
				rightButtonValue={SUGGESTION_EDIT}
				list={list}
			/>
		</div>
	);
};

export async function getServerSideProps() {
	const res = await axios("http://localhost:5700/api/getRequestInfo");
	const list = await res.data;
	console.log(list, "difjsdoifjwoj");
	return {
		props: { list },
	};
}

export default SuggestionDetail;
