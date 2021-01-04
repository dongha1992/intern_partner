import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RequestDetailHeader from "../../../../components/Header/RequestDetailHeader";
import RequestInfoHeader from "../../../../components/Header/RequestInfoHeader";
import RequestInfo from "../../../../components/RequestDetail/RequestInfo";
import Agreement from "../../../../components/Agreement";
import ProposalText from "../../../../components/RequestDetail/ProposalText";
import SuggestionAndReturnButton from "../../../../components/RequestDetail/SuggestionAndReturnButton";
import styles from "./Detail.scss";
import { REQUEST_NUMBER_TEXT } from "../../../../constants/requestDetail/RequestInfo";
import {
	PROPOSAL_INFO,
	SUGGESTION,
} from "../../../../constants/requestDetail/ProposalInfo";
import { PROPOSAL } from "../../../../constants/requestDetail/Proposal";
import axios from "axios";

const Detail = ({ list }) => {
	const isProposal = true;
	const router = useRouter();
	console.log(list, "ddddddd");

	const goToSuggestion = () => {
		router.push("/user/main/suggestion");
	};

	// if (router.isFallback) {
	return (
		<div className={styles.container}>
			<RequestDetailHeader requestDetail={"요청상세"} />
			<RequestInfo list={list} />
			<div style={{ paddingTop: "15px" }} />
			<RequestInfoHeader
				proposal={PROPOSAL}
				isProposal={isProposal}
				requestNumber={REQUEST_NUMBER_TEXT}
				proposalInfo={PROPOSAL_INFO}
				style={{ display: "none" }}
			/>
			<ProposalText />
			<Agreement />
			<SuggestionAndReturnButton
				style={{ marginTop: "60px" }}
				buttonValue={SUGGESTION}
				goToSuggestion={goToSuggestion}
			/>
		</div>
	);
};

export async function getServerSideProps() {
	const res = await axios("http://localhost:5700/api/getRequestInfo");
	const list = await res.data;

	return {
		props: { list },
	};
}

export default Detail;
