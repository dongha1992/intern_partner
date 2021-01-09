import React, { useEffect, useState } from "react";
import RequestDetailHeader from "../../../../../components/Header/RequestDetailHeader";
import RequestInfo from "../../../../../components/RequestDetail/RequestInfo";
import ProposalInfo from "../../../../../components/RequestDetail/ProposalInfo";
import styles from "./SuggestionDetail.scss";
import { useRouter } from "next/router";
import {
	SUGGESTION_CANCEL,
	SUGGESTION_EDIT,
} from "../../../../../constants/requestDetail/ProposalInfo";
import axios from "axios";
import { SERVER_URI } from "../../../../../config";

const isSuggestion = true;

const SuggestionDetail = () => {
	const router = useRouter();
	const { id } = router.query;
	const [list, setlist] = useState([]);
	const [request, setrequest] = useState([]);
	const [proposal, setproposal] = useState([]);

	console.log(router);
	useEffect(() => {
		axios.get(`${SERVER_URI}/suggestion/${id}`).then((res) => {
			setproposal({ ...res.data.suggestion });
			setrequest({ ...res.data.suggestion.request });
		});
	}, []);

	// console.log(request, "request");
	// console.log(proposal, "proposal");

	return (
		<div className={styles.container}>
			<RequestDetailHeader requestDetail={"요청상세"} />
			{<RequestInfo list={request && request} isSuggestion={isSuggestion} />}
			{
				<ProposalInfo
					isSuggestion={isSuggestion}
					leftButtonValue={SUGGESTION_CANCEL}
					rightButtonValue={SUGGESTION_EDIT}
					list={proposal && proposal}
				/>
			}
		</div>
	);
};

// export async function getServerSideProps() {
// 	console.log(list.id);
// 	const res = await axios(`${SERVER_URI}/suggestion/7`);
// 	const list = await res.data.suggestion;

// 	return {
// 		props: { list },
// 	};
// }

export default SuggestionDetail;
