import React from "react";
import { useRouter } from "next/router";
import RequestDetailHeader from "../../../../../components/Header/RequestDetailHeader";
import RequestInfo from "../../../../../components/RequestDetail/RequestInfo";
import ProposalInfo from "../../../../../components/RequestDetail/ProposalInfo";
import styles from "./SuggestionDetail.scss";
import {
	SUGGESTION_CANCEL,
	SUGGESTION_EDIT,
} from "../../../../../constants/requestDetail/ProposalInfo";

const isSuggestion = true;
const SuggestionDetail = () => {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<RequestDetailHeader requestDetail={"요청상세"} />
			<RequestInfo />
			<ProposalInfo
				isSuggestion={isSuggestion}
				leftButtonValue={SUGGESTION_CANCEL}
				rightButtonValue={SUGGESTION_EDIT}
			/>
		</div>
	);
};

export default SuggestionDetail;
